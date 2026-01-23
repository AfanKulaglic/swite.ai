'use client';

import { useState, useRef, DragEvent } from 'react';
import { AssetService } from '@/lib/services/assetService';

interface ImageUploaderProps {
  userId: string;
  siteId?: string;
  folder?: string;
  onUploadComplete: (imageUrl: string, assetId: string) => void;
  onError?: (error: string) => void;
  maxSize?: number; // in MB
  accept?: string;
  className?: string;
}

export function ImageUploader({
  userId,
  siteId,
  folder = 'root',
  onUploadComplete,
  onError,
  maxSize = 5,
  accept = 'image/*',
  className = ''
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      onError?.('Please select an image file');
      return;
    }

    // Validate file size
    const maxBytes = maxSize * 1024 * 1024;
    if (file.size > maxBytes) {
      onError?.(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload
    setUploading(true);
    setProgress(0);

    try {
      // Simulate progress (Supabase doesn't provide real progress)
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const asset = await AssetService.uploadImage(file, userId, siteId, folder);

      clearInterval(progressInterval);
      setProgress(100);

      // Call success callback
      onUploadComplete(asset.file_url, asset.id);

      // Reset after a delay
      setTimeout(() => {
        setPreview(null);
        setProgress(0);
        setUploading(false);
      }, 1000);
    } catch (error) {
      console.error('Upload error:', error);
      onError?.(error instanceof Error ? error.message : 'Upload failed');
      setUploading(false);
      setPreview(null);
      setProgress(0);
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
        disabled={uploading}
      />

      <div
        onClick={handleClick}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-200
          ${dragActive 
            ? 'border-blue-500 bg-blue-500/10' 
            : 'border-white/20 hover:border-white/40 hover:bg-white/5'
          }
          ${uploading ? 'pointer-events-none opacity-50' : ''}
        `}
      >
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="max-h-40 mx-auto rounded-lg"
            />
            {uploading && (
              <div className="space-y-2">
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-white/60">
                  Uploading... {progress}%
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/5">
              <svg
                className="w-8 h-8 text-white/40"
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
            </div>

            <div>
              <p className="text-sm font-medium mb-1">
                {dragActive ? 'Drop image here' : 'Click to upload or drag and drop'}
              </p>
              <p className="text-xs text-white/40">
                PNG, JPG, GIF, WebP, SVG • Max {maxSize}MB
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
