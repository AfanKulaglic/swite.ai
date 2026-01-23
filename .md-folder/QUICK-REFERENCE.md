# Quick Reference - SWITE.AI

## 📁 File Structure

```
swite.ai/
├── supabase/
│   ├── migrations/
│   │   ├── 001_initial_schema.sql      # Database schema
│   │   └── 20240115_websphere_template.sql  # Template example
│   └── seed/                           # Sample data
├── lib/
│   ├── supabase/
│   │   ├── client.ts                   # Supabase client
│   │   └── types.ts                    # TypeScript types
│   └── services/
│       ├── templateService.ts          # Template operations
│       ├── siteService.ts              # Site operations
│       └── assetService.ts             # File uploads
├── components/
│   ├── sections/                       # Section components
│   │   ├── Hero.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── Stats.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── DomainSearch.tsx
│   │   ├── FooterSection.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   └── ContactForm.tsx
│   └── renderer/
│       └── DynamicRenderer.tsx         # JSON → React
├── app/
│   ├── templates/
│   │   ├── page.tsx                    # Template browser
│   │   └── [slug]/page.tsx             # Template preview
│   └── studio/
│       └── builder/page.tsx            # Website builder
├── docs/
│   ├── CREATING_TEMPLATES.md           # Template creation guide
│   ├── ARCHITECTURE.md                 # System architecture
│   └── QUICK-REFERENCE.md              # This file
└── public/
    └── templates/                      # Static template assets
```

## 🗄️ Database Tables

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `profiles` | User accounts | id, email, subscription_tier |
| `templates` | Master templates | layout (JSON), theme (JSON), embedding (vector) |
| `user_sites` | User websites | layout (JSON), theme (JSON), is_published |
| `site_versions` | Version history | version_number, layout, theme |
| `assets` | Uploaded files | file_url, file_type, user_id |
| `template_categories` | Categories | name, slug, icon |
| `template_tags` | Style tags | name, slug, category |
| `components` | Component library | type, props_schema, default_props |

## 🔧 Service Methods

### TemplateService
```typescript
// Get templates
await TemplateService.getAllTemplates()
await TemplateService.getTemplateById(id)
await TemplateService.getPopularTemplates(6)

// Search
await TemplateService.searchByTags(['modern', 'professional'])
await TemplateService.searchBySimilarity(embedding)
await TemplateService.hybridSearch(tags, embedding)

// Categories & Tags
await TemplateService.getCategories()
await TemplateService.getTags()
```

### SiteService
```typescript
// Create
await SiteService.createSiteFromTemplate(userId, templateId, name, slug)
await SiteService.createBlankSite(userId, name, slug)

// Read
await SiteService.getUserSites(userId)
await SiteService.getSiteById(siteId)
await SiteService.getSiteBySubdomain(subdomain)

// Update
await SiteService.updateSiteLayout(siteId, layout)
await SiteService.updateSiteTheme(siteId, theme)
await SiteService.updateSiteMetadata(siteId, metadata)

// Publish
await SiteService.publishSite(siteId)
await SiteService.unpublishSite(siteId)

// Versions
await SiteService.getSiteVersions(siteId)
await SiteService.restoreSiteVersion(siteId, versionId)
```

### AssetService
```typescript
// Upload
await AssetService.uploadImage(file, userId, siteId, folder)

// Read
await AssetService.getUserAssets(userId)
await AssetService.getAssetsByFolder(userId, folder)
await AssetService.searchAssets(userId, tags)

// Update
await AssetService.updateAsset(assetId, { alt_text, tags })

// Delete
await AssetService.deleteAsset(assetId)
```

## 🎨 Component Props

### Hero
```typescript
{
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  bgImage?: string
  alignment?: 'left' | 'center' | 'right'
  overlay?: 'dark' | 'light' | 'none'
}
```

### FeatureGrid
```typescript
{
  title?: string
  subtitle?: string
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  columns?: 2 | 3 | 4
}
```

### ContactForm
```typescript
{
  title?: string
  subtitle?: string
  fields?: string[]  // ['name', 'email', 'message', 'company']
}
```

### Testimonials
```typescript
{
  title?: string
  subtitle?: string
  testimonials: Array<{
    name: string
    role: string
    content: string
    avatar?: string
  }>
  columns?: 1 | 2 | 3
}
```

### CTA
```typescript
{
  title: string
  subtitle?: string
  ctaText: string
  ctaLink: string
  showStats?: boolean
  stats?: Array<{
    value: string
    label: string
  }>
  bgGradient?: boolean
}
```

### Portfolio
```typescript
{
  title?: string
  subtitle?: string
  projects: Array<{
    title: string
    category: string
    image: string
    link: string
  }>
  layout?: 'grid' | 'masonry'
  columns?: 2 | 3 | 4
}
```

### About
```typescript
{
  title?: string
  content: string
  image?: string
  skills?: string[]
  layout?: 'left' | 'right'
}
```

## 📝 JSON Structure Examples

### Site Layout
```json
{
  "sections": [
    {
      "id": "hero_1",
      "type": "Hero",
      "order": 0,
      "props": {
        "title": "Welcome",
        "subtitle": "Your journey starts here",
        "ctaText": "Get Started",
        "ctaLink": "/"
      }
    },
    {
      "id": "features_1",
      "type": "Features",
      "order": 1,
      "props": {
        "title": "Our Features",
        "features": [
          {
            "icon": "zap",
            "title": "Fast",
            "description": "Lightning speed"
          }
        ]
      }
    }
  ]
}
```

### Site Theme
```json
{
  "colors": {
    "primary": "#4169E1",
    "secondary": "#6B46C1",
    "background": "#000000",
    "text": "#FFFFFF",
    "accent": "#E6FF00"
  },
  "fonts": {
    "heading": "Inter",
    "body": "Inter"
  },
  "spacing": {
    "section": "96px",
    "container": "1280px"
  },
  "borderRadius": {
    "small": "8px",
    "medium": "16px",
    "large": "24px"
  }
}
```

## 🚀 Common Tasks

### Create a New Site from Template
```typescript
const site = await SiteService.createSiteFromTemplate(
  user.id,
  'template-id',
  'My Awesome Site',
  'my-awesome-site'
);
```

### Update Site Content
```typescript
// Get current layout
const site = await SiteService.getSiteById(siteId);
const layout = site.layout;

// Modify a section
layout.sections[0].props.title = 'New Title';

// Save
await SiteService.updateSiteLayout(siteId, layout);
```

### Add a New Section
```typescript
const newSection = {
  id: `section_${Date.now()}`,
  type: 'Features',
  order: layout.sections.length,
  props: {
    title: 'New Features',
    features: []
  }
};

layout.sections.push(newSection);
await SiteService.updateSiteLayout(siteId, layout);
```

### Upload and Use Image
```typescript
// Upload
const asset = await AssetService.uploadImage(
  file,
  user.id,
  siteId,
  'hero-images'
);

// Use in section
section.props.bgImage = asset.file_url;
```

### Search Templates
```typescript
// By tags
const templates = await TemplateService.searchByTags(
  ['modern', 'professional'],
  categoryId
);

// By similarity (requires embeddings)
const similar = await TemplateService.searchBySimilarity(
  embedding,
  0.7,  // threshold
  5     // limit
);
```

## 🔐 Environment Variables

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 📊 Database Functions

### Search by Embedding
```sql
SELECT * FROM search_templates_by_embedding(
  query_embedding := ARRAY[...],  -- 1536 dimensions
  match_threshold := 0.7,
  match_count := 5
);
```

### Search by Filters
```sql
SELECT * FROM search_templates_by_filters(
  search_tags := ARRAY['modern', 'professional'],
  search_category := 'category-uuid',
  limit_count := 10
);
```

## 🎯 Component Icons

Available icons for FeatureGrid:
- `chart` 📊
- `shield` 🛡️
- `users` 👥
- `zap` ⚡
- `lock` 🔒
- `heart` ❤️
- `leaf` 🍃
- `check` ✓

## 🔄 Version Control

Every site update automatically creates a version:
```typescript
// Get versions
const versions = await SiteService.getSiteVersions(siteId, 10);

// Restore version
await SiteService.restoreSiteVersion(siteId, versionId);
```

## 📱 Storage Buckets

| Bucket | Public | Purpose |
|--------|--------|---------|
| `templates` | ✅ Yes | Template thumbnails |
| `user-assets` | ✅ Yes | User uploaded images |
| `site-exports` | ❌ No | Exported site files |

## 🎨 Available Tags

**Style:** modern, minimalist, bold, elegant, playful

**Mood:** professional, creative, calm, energetic

**Industry:** tech, nature, fashion, finance, health, office

## 📋 Checklist for New Features

- [ ] Create React component in `components/sections/`
- [ ] Add to COMPONENT_MAP in `DynamicRenderer.tsx`
- [ ] Define TypeScript props interface
- [ ] Add default props in `getDefaultProps()`
- [ ] Insert into `components` table
- [ ] Update documentation
- [ ] Test with DynamicRenderer

## 🐛 Common Issues

**Templates not loading:**
- Check Supabase connection
- Verify migration ran
- Check RLS policies

**Images not uploading:**
- Verify storage buckets exist
- Check storage policies
- Verify file size < 5MB

**Renderer not working:**
- Check JSON structure
- Verify component type exists
- Check browser console

## 📚 Documentation Files

- `SETUP-GUIDE.md` - Initial setup steps
- `IMPLEMENTATION-STATUS.md` - What's completed
- `INTEGRATION-GUIDE.md` - How to integrate
- `QUICK-REFERENCE.md` - This file
- `PROJECT-DOCUMENTATION.md` - Full project docs
