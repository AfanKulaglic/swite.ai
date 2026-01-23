// Asset Service - Handles file uploads and asset management
import { supabase } from '../supabase/client';
import { Database } from '../supabase/types';

type Asset = Database['public']['Tables']['assets']['Row'];
type AssetInsert = Database['public']['Tables']['assets']['Insert'];

export class AssetService {
  // Bucket configuration
  private static readonly BUCKETS = {
    USER_ASSETS: 'user-assets',
    TEMPLATES: 'templates',
    SITE_EXPORTS: 'site-exports'
  } as const;

  // File size limits (in bytes)
  private static readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  
  // Allowed MIME types
  private static readonly ALLOWED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml'
  ];

  /**
   * Validate file before upload
   */
  private static validateFile(file: File): { valid: boolean; error?: string } {
    // Check file size
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size must be less than ${this.MAX_FILE_SIZE / 1024 / 1024}MB`
      };
    }

    // Check MIME type
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: 'Invalid file type. Only images are allowed (JPG, PNG, GIF, WebP, SVG)'
      };
    }

    return { valid: true };
  }

  /**
   * Upload an image to Supabase Storage (user-assets bucket)
   * Files are organized by userId: /user-assets/{userId}/{folder}/{filename}
   */
  static async uploadImage(
    file: File,
    userId: string,
    siteId?: string,
    folder: string = 'root'
  ): Promise<Asset> {
    // Validate file
    const validation = this.validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    // Path structure: {userId}/{folder}/{filename}
    // This matches the RLS policy: (storage.foldername(name))[1] = auth.uid()::text
    const filePath = `${userId}/${folder}/${fileName}`;

    // Upload to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(this.BUCKETS.USER_ASSETS)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type
      });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(this.BUCKETS.USER_ASSETS)
      .getPublicUrl(filePath);

    // Get image dimensions
    const dimensions = await this.getImageDimensions(file);

    // Create asset record in database
    const assetData: AssetInsert = {
      user_id: userId,
      site_id: siteId || null,
      name: file.name,
      file_path: filePath,
      file_url: publicUrl,
      file_type: 'image',
      mime_type: file.type,
      file_size: file.size,
      width: dimensions.width,
      height: dimensions.height,
      folder
    };

    const { data: asset, error: dbError } = await supabase
      .from('assets')
      .insert(assetData as any)
      .select()
      .single();

    if (dbError) throw dbError;

    return asset as Asset;
  }

  /**
   * Upload template asset (admin only)
   * Used for template thumbnails and preview images
   */
  static async uploadTemplateAsset(
    file: File,
    templateId: string,
    assetType: 'thumbnail' | 'preview' = 'thumbnail'
  ): Promise<string> {
    // Validate file
    const validation = this.validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${templateId}-${assetType}.${fileExt}`;
    const filePath = `${templateId}/${fileName}`;

    // Upload to templates bucket
    const { data, error } = await supabase.storage
      .from(this.BUCKETS.TEMPLATES)
      .upload(filePath, file, {
        cacheControl: '31536000', // 1 year cache for templates
        upsert: true, // Allow replacing existing template images
        contentType: file.type
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(this.BUCKETS.TEMPLATES)
      .getPublicUrl(filePath);

    return publicUrl;
  }

  /**
   * Replace an existing image
   * TODO: Fix TypeScript types for Supabase update
   */
  static async replaceImage(
    assetId: string,
    newFile: File,
    userId: string
  ): Promise<Asset> {
    // Temporary implementation - delete and re-upload
    const existingAsset = await this.getAssetById(assetId);
    
    if (existingAsset.user_id !== userId) {
      throw new Error('Unauthorized');
    }

    await this.deleteAsset(assetId, userId);
    return await this.uploadImage(newFile, userId, existingAsset.site_id || undefined, existingAsset.folder);
  }

  /**
   * Get image dimensions from file
   */
  private static getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve({ width: img.width, height: img.height });
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load image'));
      };

      img.src = url;
    });
  }

  /**
   * Get all assets for a user
   */
  static async getUserAssets(userId: string, siteId?: string) {
    let query = supabase
      .from('assets')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (siteId) {
      query = query.eq('site_id', siteId);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  /**
   * Get assets by folder
   */
  static async getAssetsByFolder(userId: string, folder: string) {
    const { data, error } = await supabase
      .from('assets')
      .select('*')
      .eq('user_id', userId)
      .eq('folder', folder)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  /**
   * Update asset metadata
   */
  static async updateAsset(
    assetId: string,
    updates: {
      name?: string;
      alt_text?: string;
      folder?: string;
      tags?: string[];
    }
  ): Promise<Asset> {
    const { data, error } = await supabase
      .from('assets')
      .update(updates as any)
      .eq('id', assetId)
      .select()
      .single();

    if (error) throw error;
    return data as Asset;
  }

  /**
   * Delete asset (removes from storage and database)
   */
  static async deleteAsset(assetId: string, userId: string) {
    // Get asset info
    const { data: asset, error: fetchError } = await supabase
      .from('assets')
      .select('file_path, user_id')
      .eq('id', assetId)
      .single();

    if (fetchError) throw fetchError;

    // Security check: ensure user owns this asset
    if (asset.user_id !== userId) {
      throw new Error('Unauthorized: You can only delete your own assets');
    }

    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from(this.BUCKETS.USER_ASSETS)
      .remove([asset.file_path]);

    if (storageError) {
      console.warn('Failed to delete from storage:', storageError);
      // Continue with database deletion even if storage fails
    }

    // Delete from database
    const { error: dbError } = await supabase
      .from('assets')
      .delete()
      .eq('id', assetId);

    if (dbError) throw dbError;
  }

  /**
   * Delete multiple assets at once
   */
  static async deleteAssets(assetIds: string[], userId: string) {
    // Get all assets
    const { data: assets, error: fetchError } = await supabase
      .from('assets')
      .select('id, file_path, user_id')
      .in('id', assetIds);

    if (fetchError) throw fetchError;

    // Security check: ensure user owns all assets
    const unauthorizedAssets = assets.filter(a => a.user_id !== userId);
    if (unauthorizedAssets.length > 0) {
      throw new Error('Unauthorized: You can only delete your own assets');
    }

    // Delete from storage
    const filePaths = assets.map(a => a.file_path);
    const { error: storageError } = await supabase.storage
      .from(this.BUCKETS.USER_ASSETS)
      .remove(filePaths);

    if (storageError) {
      console.warn('Failed to delete some files from storage:', storageError);
    }

    // Delete from database
    const { error: dbError } = await supabase
      .from('assets')
      .delete()
      .in('id', assetIds);

    if (dbError) throw dbError;
  }

  /**
   * Search assets by tags
   */
  static async searchAssets(userId: string, tags: string[]) {
    const { data, error } = await supabase
      .from('assets')
      .select('*')
      .eq('user_id', userId)
      .contains('tags', tags)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  /**
   * Get asset by ID
   */
  static async getAssetById(assetId: string): Promise<Asset> {
    const { data, error } = await supabase
      .from('assets')
      .select('*')
      .eq('id', assetId)
      .single();

    if (error) throw error;
    return data as Asset;
  }

  /**
   * Get user's folders (virtual - just for organization)
   */
  static async getFolders(userId: string): Promise<string[]> {
    const { data, error } = await supabase
      .from('assets')
      .select('folder')
      .eq('user_id', userId);

    if (error) throw error;

    // Get unique folders
    const folders = [...new Set(data.map(asset => asset.folder))];
    return folders;
  }

  /**
   * Get storage usage for a user
   */
  static async getStorageUsage(userId: string): Promise<{
    totalSize: number;
    fileCount: number;
    sizeByType: Record<string, number>;
  }> {
    const { data, error } = await supabase
      .from('assets')
      .select('file_size, file_type')
      .eq('user_id', userId);

    if (error) throw error;

    const totalSize = data.reduce((sum, asset) => sum + (asset.file_size || 0), 0);
    const fileCount = data.length;

    const sizeByType: Record<string, number> = {};
    data.forEach(asset => {
      const type = asset.file_type || 'unknown';
      sizeByType[type] = (sizeByType[type] || 0) + (asset.file_size || 0);
    });

    return { totalSize, fileCount, sizeByType };
  }

  /**
   * Generate a signed URL for private assets (if needed)
   * Useful if user-assets bucket is set to private
   */
  static async getSignedUrl(filePath: string, expiresIn: number = 3600): Promise<string> {
    const { data, error } = await supabase.storage
      .from(this.BUCKETS.USER_ASSETS)
      .createSignedUrl(filePath, expiresIn);

    if (error) throw error;

    return data.signedUrl;
  }

  /**
   * Export site assets as a zip (for site-exports bucket)
   */
  static async exportSiteAssets(
    userId: string,
    siteId: string,
    zipBlob: Blob
  ): Promise<string> {
    const fileName = `site-${siteId}-${Date.now()}.zip`;
    const filePath = `${userId}/${fileName}`;

    // Upload to site-exports bucket (private)
    const { data, error } = await supabase.storage
      .from(this.BUCKETS.SITE_EXPORTS)
      .upload(filePath, zipBlob, {
        cacheControl: '3600',
        upsert: false,
        contentType: 'application/zip'
      });

    if (error) throw error;

    // Generate signed URL (valid for 1 hour)
    const { data: signedData, error: signedError } = await supabase.storage
      .from(this.BUCKETS.SITE_EXPORTS)
      .createSignedUrl(filePath, 3600);

    if (signedError) throw signedError;

    return signedData.signedUrl;
  }

  /**
   * Get file size in human-readable format
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Check if user has storage quota available
   */
  static async checkStorageQuota(
    userId: string,
    subscriptionTier: 'free' | 'pro' | 'business' | 'enterprise'
  ): Promise<{ available: boolean; used: number; limit: number }> {
    const quotas = {
      free: 100 * 1024 * 1024,        // 100MB
      pro: 1024 * 1024 * 1024,        // 1GB
      business: 10 * 1024 * 1024 * 1024,  // 10GB
      enterprise: 100 * 1024 * 1024 * 1024 // 100GB
    };

    const limit = quotas[subscriptionTier];
    const { totalSize } = await this.getStorageUsage(userId);

    return {
      available: totalSize < limit,
      used: totalSize,
      limit
    };
  }
}
