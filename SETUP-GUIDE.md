# Setup Guide - AI Website Builder

## ✅ What's Already Done

1. **Database Migration** - Complete hybrid architecture (traditional + vector)
2. **TypeScript Types** - All database types defined
3. **Service Layer** - TemplateService and SiteService ready
4. **Sample Data** - 4 templates with component-as-data structure
5. **Supabase Client** - Connection configured

## 🚀 Next Steps (Do These Now)

### Step 1: Run Database Migration

1. Open your Supabase Dashboard: https://supabase.com/dashboard
2. Go to your project: `jlfhnxrwurkljiiaqwms`
3. Navigate to **SQL Editor**
4. Copy the entire content from `swite.ai-main/supabase/migrations/001_initial_schema.sql`
5. Paste and click **Run**
6. Wait for success message

### Step 2: Run Sample Data Seed

1. In the same SQL Editor
2. Copy content from `swite.ai-main/supabase/seed/sample-templates.sql`
3. Paste and click **Run**
4. You should now have 4 sample templates

### Step 3: Create Storage Buckets

1. In Supabase Dashboard, go to **Storage**
2. Create these 3 buckets:

**Bucket 1: templates**
- Name: `templates`
- Public: ✅ Yes
- File size limit: 5MB
- Allowed MIME types: `image/*`

**Bucket 2: user-assets**
- Name: `user-assets`
- Public: ✅ Yes
- File size limit: 10MB
- Allowed MIME types: `image/*,video/*`

**Bucket 3: site-exports**
- Name: `site-exports`
- Public: ❌ No (Private)
- File size limit: 50MB
- Allowed MIME types: `application/zip,application/json`

### Step 4: Set Storage Policies

For each bucket, add these policies in **Storage > Policies**:

**templates bucket:**
```sql
-- Allow public read
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'templates');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'templates' AND auth.role() = 'authenticated');
```

**user-assets bucket:**
```sql
-- Allow public read
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'user-assets');

-- Users can upload their own assets
CREATE POLICY "Users can upload own assets" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'user-assets' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Users can delete their own assets
CREATE POLICY "Users can delete own assets" ON storage.objects
FOR DELETE USING (
  bucket_id = 'user-assets' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);
```

**site-exports bucket:**
```sql
-- Users can only access their own exports
CREATE POLICY "Users can access own exports" ON storage.objects
FOR SELECT USING (
  bucket_id = 'site-exports' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can create own exports" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'site-exports' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);
```

## 📋 What's Coming Next

After you complete the steps above, we'll build:

1. **Dynamic Component Renderer** - Maps JSON to React components
2. **Master Components Library** - Hero, Features, ContactForm, etc.
3. **Visual Editor** - Drag-and-drop interface
4. **Image Upload** - Integration with Supabase Storage
5. **Template Browser** - Filter and search templates
6. **Site Preview** - Real-time preview of changes

## 🔧 Testing the Setup

After running migrations, test with this code:

```typescript
import { TemplateService } from '@/lib/services/templateService';

// Get all templates
const templates = await TemplateService.getAllTemplates();
console.log('Templates:', templates);

// Search by tags
const modernTemplates = await TemplateService.searchByTags(['modern', 'professional']);
console.log('Modern templates:', modernTemplates);
```

## 📝 Notes

- The database uses **pgvector** for AI semantic search (embeddings will be added later)
- All templates are stored as **JSON** (component-as-data architecture)
- **Row Level Security** is enabled - users can only access their own sites
- **Automatic versioning** - every site edit creates a version for undo/redo
- **Hybrid search** - combine tag filtering with semantic similarity

## ❓ Need Help?

If you encounter any errors during migration:
1. Check the Supabase logs in Dashboard > Logs
2. Ensure pgvector extension is enabled
3. Verify your database is on a plan that supports extensions
