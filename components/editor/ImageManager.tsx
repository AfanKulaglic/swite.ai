'use client';

import { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { AssetGallery } from './AssetGallery';
import { Database } from '@/lib/supabase/types';

type Asset = Database['public']['Tables']['assets']['Row'];

interface ImageManagerProps {
  userId: string;
  siteId?: string;
  folder?: string;
  onSelectImage: (imageUrl: string, assetId: string) => void;
  onClose?: () => void;
}

export function ImageManager({
  userId,
  siteId,
  folder = 'root',
  onSelectImage,
  onClose
}: ImageManagerProps) {
  const [activeTab, setActiveTab] = useState<'upload' | 'gallery'>('gallery');
  const [selectedAssetId, setSelectedAssetId] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  const handleUploadComplete = (imageUrl: string, assetId: string) => {
    // Switch to gallery to show the uploaded image
    setActiveTab('gallery');
    setSelectedAssetId(assetId);
    
    // Optionally auto-select the uploaded image
    // onSelectImage(imageUrl, assetId);
  };

  const handleSelectAsset = (asset: Asset) => {
    setSelectedAssetId(asset.id);
    onSelectImage(asset.file_url, asset.id);
    onClose?.();
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => setError(null), 5000);
  };

  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Image Manager</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-all ${
              activeTab === 'gallery'
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-all ${
              activeTab === 'upload'
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Upload New
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mx-4 mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'upload' ? (
          <ImageUploader
            userId={userId}
            siteId={siteId}
            folder={folder}
            onUploadComplete={handleUploadComplete}
            onError={handleError}
          />
        ) : (
          <AssetGallery
            userId={userId}
            siteId={siteId}
            onSelectAsset={handleSelectAsset}
            selectedAssetId={selectedAssetId}
          />
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center justify-between text-xs text-white/40">
          <span>💡 Tip: Click an image to select it</span>
          <span>Max 5MB per image</span>
        </div>
      </div>
    </div>
  );
}
