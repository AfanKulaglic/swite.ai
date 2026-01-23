# Storage Integration Guide

## ✅ Storage Setup Complete

You've successfully configured:
- 3 Supabase Storage buckets (templates, user-assets, site-exports)
- Row Level Security policies for secure access
- Folder-based organization matching RLS policies

## 📦 Updated AssetService

The AssetService has been enhanced with:

### Security Features
- File validation (type, size)
- User ownership verification
- Folder-based isolation (matches RLS policy)

### New Methods

#### File Upload
```typescript
// Upload user image
const asset = await AssetService.uploadImage(
  file,           // File object
  userId,         // User ID (for folder structure)
  siteId,         // Optional: associate with site
  'hero-images'   // Optional: folder name
);

// Upload template asset (admin only)
const url = await AssetService.uploadTemplateAsset(
  file,
  templateId,
  'thumbnail'  // or 'preview'
);
```

#### File Management
```typescript
// Replace existing image
const updatedAsset = await AssetService.replaceImage(
  assetId,
  newFile,
  userId
);

// Delete single asset
await AssetService.deleteAsset(assetId, userId);

// Delete multiple assets
await AssetService.deleteAssets([id1, id2, id3], userId);
```

#### Storage Analytics
```typescript
// Get storage usage
const usage = await AssetService.getStorageUsage(userId);
// Returns: { totalSize, fileCount, sizeByType }

// Check quota
const quota = await AssetService.checkStorageQuota(userId, 'free');
// Returns: { available, used, limit }

// Format file size
const readable = AssetService.formatFileSize(1024000);
// Returns: "1000 KB"
```

#### Private Assets
```typescript
// Generate signed URL (for private buckets)
const signedUrl = await AssetService.getSignedUrl(
  filePath,
  3600  // expires in 1 hour
);
```

#### Site Export
```typescript
// Export site as zip
const downloadUrl = await AssetService.exportSiteAssets(
  userId,
  siteId,
  zipBlob
);
```

## 🎨 React Components

### 1. ImageUploader
Drag-and-drop image upload with preview and progress.

```tsx
import { ImageUploader } from '@/components/editor/ImageUploader';

<ImageUploader
  userId={user.id}
  siteId={site.id}
  folder="hero-images"
  onUploadComplete={(imageUrl, assetId) => {
    console.log('Uploaded:', imageUrl);
    // Update your section props
    section.props.bgImage = imageUrl;
  }}
  onError={(error) => {
    alert(error);
  }}
  maxSize={5}  // MB
/>
```

**Features:**
- Drag-and-drop support
- File validation
- Image preview
- Upload progress
- Error handling

### 2. AssetGallery
Browse and manage uploaded images.

```tsx
import { AssetGallery } from '@/components/editor/AssetGallery';

<AssetGallery
  userId={user.id}
  siteId={site.id}
  onSelectAsset={(asset) => {
    console.log('Selected:', asset.file_url);
    // Use the selected image
    section.props.image = asset.file_url;
  }}
  selectedAssetId={currentAssetId}
/>
```

**Features:**
- Grid view of all images
- Folder filtering
- Storage usage display
- Delete functionality
- Image selection

### 3. ImageManager
Complete image management modal (combines uploader + gallery).

```tsx
import { ImageManager } from '@/components/editor/ImageManager';

<ImageManager
  userId={user.id}
  siteId={site.id}
  folder="portfolio"
  onSelectImage={(imageUrl, assetId) => {
    // Use the selected/uploaded image
    updateSectionProp('image', imageUrl);
  }}
  onClose={() => setShowImageManager(false)}
/>
```

**Features:**
- Tabbed interface (Gallery / Upload)
- Complete workflow
- Error handling
- Auto-refresh after upload

## 🔧 Integration Examples

### Example 1: Hero Section Image Upload

```tsx
'use client';

import { useState } from 'react';
import { ImageManager } from '@/components/editor/ImageManager';
import { useAuth } from '@/lib/auth/AuthContext';

export function HeroEditor({ section, onUpdate }) {
  const { user } = useAuth();
  const [showImageManager, setShowImageManager] = useState(false);

  const handleImageSelect = (imageUrl: string) => {
    onUpdate({
      ...section.props,
      bgImage: imageUrl
    });
    setShowImageManager(false);
  };

  return (
    <div>
      <label>Background Image</label>
      
      {section.props.bgImage ? (
        <div className="relative">
          <img src={section.props.bgImage} alt="Background" />
          <button onClick={() => setShowImageManager(true)}>
            Change Image
          </button>
        </div>
      ) : (
        <button onClick={() => setShowImageManager(true)}>
          Add Background Image
        </button>
      )}

      {showImageManager && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-white/10 w-full max-w-4xl h-[80vh]">
            <ImageManager
              userId={user!.id}
              folder="hero-backgrounds"
              onSelectImage={handleImageSelect}
              onClose={() => setShowImageManager(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
```

### Example 2: Portfolio Project Images

```tsx
'use client';

import { useState } from 'react';
import { ImageUploader } from '@/components/editor/ImageUploader';
import { useAuth } from '@/lib/auth/AuthContext';

export function PortfolioEditor({ section, onUpdate }) {
  const { user } = useAuth();

  const handleAddProject = async (imageUrl: string) => {
    const newProject = {
      title: 'New Project',
      category: 'Design',
      image: imageUrl,
      link: '#'
    };

    onUpdate({
      ...section.props,
      projects: [...section.props.projects, newProject]
    });
  };

  return (
    <div>
      <h3>Portfolio Projects</h3>
      
      {/* Existing projects */}
      {section.props.projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <input
            value={project.title}
            onChange={(e) => {
              const updated = [...section.props.projects];
              updated[index].title = e.target.value;
              onUpdate({ ...section.props, projects: updated });
            }}
          />
        </div>
      ))}

      {/* Add new project */}
      <ImageUploader
        userId={user!.id}
        folder="portfolio"
        onUploadComplete={handleAddProject}
      />
    </div>
  );
}
```

### Example 3: Testimonial Avatars

```tsx
'use client';

import { AssetGallery } from '@/components/editor/AssetGallery';
import { useAuth } from '@/lib/auth/AuthContext';

export function TestimonialEditor({ testimonial, onUpdate }) {
  const { user } = useAuth();
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div>
      <label>Avatar</label>
      
      {testimonial.avatar ? (
        <img src={testimonial.avatar} alt={testimonial.name} />
      ) : (
        <div>No avatar</div>
      )}

      <button onClick={() => setShowGallery(true)}>
        Select Avatar
      </button>

      {showGallery && (
        <div className="modal">
          <AssetGallery
            userId={user!.id}
            onSelectAsset={(asset) => {
              onUpdate({ ...testimonial, avatar: asset.file_url });
              setShowGallery(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
```

## 📁 File Organization

The AssetService automatically organizes files by user:

```
user-assets/
├── {userId}/
│   ├── root/
│   │   └── image1.png
│   ├── hero-images/
│   │   ├── hero-bg-1.jpg
│   │   └── hero-bg-2.jpg
│   ├── portfolio/
│   │   ├── project-1.png
│   │   └── project-2.png
│   └── avatars/
│       └── avatar.jpg

templates/
├── {templateId}/
│   ├── {templateId}-thumbnail.png
│   └── {templateId}-preview.png

site-exports/
└── {userId}/
    └── site-{siteId}-{timestamp}.zip
```

This structure matches the RLS policy:
```sql
(storage.foldername(name))[1] = auth.uid()::text
```

## 🔒 Security Notes

### User Assets
- Users can only upload to their own folder (`{userId}/...`)
- Users can only delete their own files
- RLS enforces folder-based isolation
- Public bucket = images load on live sites
- Private bucket = requires signed URLs

### Template Assets
- Public read access for everyone
- Upload/delete restricted to admins
- Long cache time (1 year)

### Site Exports
- Private bucket
- Users can only access their own exports
- Signed URLs expire after 1 hour

## 📊 Storage Quotas

Default quotas by subscription tier:

| Tier | Storage Limit |
|------|---------------|
| Free | 100 MB |
| Pro | 1 GB |
| Business | 10 GB |
| Enterprise | 100 GB |

Check quota before upload:
```typescript
const quota = await AssetService.checkStorageQuota(userId, 'free');

if (!quota.available) {
  alert(`Storage full! Used ${formatFileSize(quota.used)} of ${formatFileSize(quota.limit)}`);
  return;
}
```

## 🎯 Best Practices

### 1. Optimize Images Before Upload
```typescript
// Client-side image compression (optional)
import imageCompression from 'browser-image-compression';

const compressedFile = await imageCompression(file, {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true
});

await AssetService.uploadImage(compressedFile, userId);
```

### 2. Use Folders for Organization
```typescript
// Organize by purpose
await AssetService.uploadImage(file, userId, siteId, 'hero-images');
await AssetService.uploadImage(file, userId, siteId, 'portfolio');
await AssetService.uploadImage(file, userId, siteId, 'avatars');
```

### 3. Clean Up Unused Assets
```typescript
// Delete assets not used in any site
const assets = await AssetService.getUserAssets(userId);
const usedUrls = getAllImageUrlsFromSites(userSites);

const unusedAssets = assets.filter(a => !usedUrls.includes(a.file_url));

if (unusedAssets.length > 0) {
  await AssetService.deleteAssets(
    unusedAssets.map(a => a.id),
    userId
  );
}
```

### 4. Handle Upload Errors Gracefully
```typescript
try {
  await AssetService.uploadImage(file, userId);
} catch (error) {
  if (error.message.includes('size')) {
    alert('File too large. Please compress your image.');
  } else if (error.message.includes('type')) {
    alert('Invalid file type. Please upload an image.');
  } else if (error.message.includes('quota')) {
    alert('Storage quota exceeded. Please upgrade your plan.');
  } else {
    alert('Upload failed. Please try again.');
  }
}
```

## 🧪 Testing

Test the storage integration:

```typescript
// Test upload
const testFile = new File(['test'], 'test.png', { type: 'image/png' });
const asset = await AssetService.uploadImage(testFile, userId);
console.log('Uploaded:', asset.file_url);

// Test retrieval
const assets = await AssetService.getUserAssets(userId);
console.log('User assets:', assets);

// Test deletion
await AssetService.deleteAsset(asset.id, userId);
console.log('Deleted successfully');

// Test quota
const quota = await AssetService.checkStorageQuota(userId, 'free');
console.log('Storage:', quota);
```

## 🚀 Next Steps

1. ✅ Storage buckets created
2. ✅ RLS policies configured
3. ✅ AssetService updated
4. ✅ React components created
5. ⏳ Integrate into editor
6. ⏳ Add image optimization
7. ⏳ Implement CDN caching
8. ⏳ Add bulk operations

## 📚 Related Documentation

- `SETUP-GUIDE.md` - Initial setup
- `INTEGRATION-GUIDE.md` - Full integration
- `QUICK-REFERENCE.md` - Quick lookup
- Supabase Storage Docs: https://supabase.com/docs/guides/storage
