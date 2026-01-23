'use client';

import { useState, useEffect } from 'react';
import { AssetService } from '@/lib/services/assetService';
import { Database } from '@/lib/supabase/types';

type Asset = Database['public']['Tables']['assets']['Row'];

interface AssetGalleryProps {
  userId: string;
  siteId?: string;
  onSelectAsset: (asset: Asset) => void;
  selectedAssetId?: string;
  className?: string;
}

export function AssetGallery({
  userId,
  siteId,
  onSelectAsset,
  selectedAssetId,
  className = ''
}: AssetGalleryProps) {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState<string>('all');
  const [folders, setFolders] = useState<string[]>([]);
  const [storageInfo, setStorageInfo] = useState<{
    used: number;
    limit: number;
    available: boolean;
  } | null>(null);

  useEffect(() => {
    loadAssets();
    loadFolders();
    loadStorageInfo();
  }, [userId, siteId]);

  const loadAssets = async () => {
    try {
      setLoading(true);
      const data = await AssetService.getUserAssets(userId, siteId);
      setAssets(data);
    } catch (error) {
      console.error('Error loading assets:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadFolders = async () => {
    try {
      const folderList = await AssetService.getFolders(userId);
      setFolders(folderList);
    } catch (error) {
      console.error('Error loading folders:', error);
    }
  };

  const loadStorageInfo = async () => {
    try {
      // Assuming free tier for now - you'd get this from user profile
      const info = await AssetService.checkStorageQuota(userId, 'free');
      setStorageInfo(info);
    } catch (error) {
      console.error('Error loading storage info:', error);
    }
  };

  const handleDelete = async (assetId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      await AssetService.deleteAsset(assetId, userId);
      setAssets(prev => prev.filter(a => a.id !== assetId));
    } catch (error) {
      console.error('Error deleting asset:', error);
      alert('Failed to delete image');
    }
  };

  const filteredAssets = selectedFolder === 'all'
    ? assets
    : assets.filter(a => a.folder === selectedFolder);

  if (loading) {
    return (
      <div className={`${className} flex items-center justify-center p-12`}>
        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Storage Info */}
      {storageInfo && (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/60">Storage Used</span>
            <span className="text-xs font-medium">
              {AssetService.formatFileSize(storageInfo.used)} / {AssetService.formatFileSize(storageInfo.limit)}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all"
              style={{ width: `${(storageInfo.used / storageInfo.limit) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Folder Filter */}
      {folders.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFolder('all')}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                selectedFolder === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              All ({assets.length})
            </button>
            {folders.map(folder => (
              <button
                key={folder}
                onClick={() => setSelectedFolder(folder)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  selectedFolder === folder
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {folder} ({assets.filter(a => a.folder === folder).length})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Asset Grid */}
      {filteredAssets.length === 0 ? (
        <div className="text-center py-12 text-white/40">
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">No images uploaded yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAssets.map(asset => (
            <div
              key={asset.id}
              className={`group relative aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                selectedAssetId === asset.id
                  ? 'border-blue-500 ring-2 ring-blue-500/50'
                  : 'border-white/10 hover:border-white/30'
              }`}
              onClick={() => onSelectAsset(asset)}
            >
              {/* Image */}
              <img
                src={asset.file_url}
                alt={asset.alt_text || asset.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectAsset(asset);
                  }}
                  className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                >
                  Select
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(asset.id);
                  }}
                  className="px-3 py-1.5 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-white truncate">{asset.name}</p>
                <p className="text-[10px] text-white/60">
                  {AssetService.formatFileSize(asset.file_size || 0)}
                  {asset.width && asset.height && ` • ${asset.width}×${asset.height}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
