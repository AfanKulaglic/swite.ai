# System Architecture

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Template   │  │    Visual    │  │   Published  │         │
│  │   Browser    │  │    Editor    │  │     Site     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      REACT COMPONENTS                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Master     │  │   Dynamic    │  │    Editor    │         │
│  │  Sections    │  │   Renderer   │  │  Components  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                       SERVICE LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  Template    │  │     Site     │  │    Asset     │         │
│  │   Service    │  │   Service    │  │   Service    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE (Backend)                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  PostgreSQL  │  │   Storage    │  │     Auth     │         │
│  │  + pgvector  │  │   Buckets    │  │              │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Data Flow

### 1. Template Selection Flow
```
User browses templates
        ↓
TemplateService.getAllTemplates()
        ↓
Query: templates table (with filters)
        ↓
Return: Template[] with layout JSON
        ↓
Display in Template Browser
        ↓
User clicks "Use Template"
        ↓
SiteService.createSiteFromTemplate()
        ↓
Clone template → user_sites table
        ↓
Redirect to Editor
```

### 2. Site Editing Flow
```
Load site from database
        ↓
SiteService.getSiteById()
        ↓
Get layout JSON + theme JSON
        ↓
DynamicRenderer converts JSON → React
        ↓
Display editable sections
        ↓
User edits section props
        ↓
Update layout JSON in memory
        ↓
SiteService.updateSiteLayout()
        ↓
Save to database (auto-creates version)
```

### 3. Image Upload Flow
```
User selects/drops image
        ↓
Validate file (type, size)
        ↓
AssetService.uploadImage()
        ↓
Upload to Supabase Storage
  - Path: {userId}/{folder}/{filename}
  - Bucket: user-assets
        ↓
Get public URL
        ↓
Create asset record in database
        ↓
Return asset with URL
        ↓
Update section props with URL
        ↓
Save layout to database
```

### 4. Publishing Flow
```
User clicks "Publish"
        ↓
SiteService.publishSite()
        ↓
Update: is_published = true
        ↓
Set: published_at = NOW()
        ↓
Site accessible at: {subdomain}.swite.ai
        ↓
Public can view via:
  - SiteService.getSiteBySubdomain()
  - RLS policy: is_published = true
```

## 🗄️ Database Schema

> **Status:** ✅ Migration Complete (January 2026)

### Complete SQL Schema

```sql
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.profiles (
  id uuid NOT NULL,
  email text NOT NULL UNIQUE,
  full_name text,
  avatar_url text,
  subscription_tier text DEFAULT 'free'::text CHECK (subscription_tier = ANY (ARRAY['free'::text, 'pro'::text, 'business'::text, 'enterprise'::text])),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);

CREATE TABLE public.template_categories (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  icon text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT template_categories_pkey PRIMARY KEY (id)
);

CREATE TABLE public.template_tags (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  category text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT template_tags_pkey PRIMARY KEY (id)
);

CREATE TABLE public.templates (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  thumbnail_url text,
  preview_url text,
  layout jsonb NOT NULL DEFAULT '[]'::jsonb,
  theme jsonb NOT NULL DEFAULT '{}'::jsonb,
  category_id uuid,
  tags ARRAY DEFAULT '{}'::text[],
  embedding USER-DEFINED,  -- pgvector for AI semantic search
  usage_count integer DEFAULT 0,
  is_active boolean DEFAULT true,
  is_premium boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT templates_pkey PRIMARY KEY (id),
  CONSTRAINT templates_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.template_categories(id)
);

CREATE TABLE public.user_sites (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  template_id uuid,
  name text NOT NULL,
  slug text NOT NULL,
  description text,
  favicon_url text,
  layout jsonb NOT NULL DEFAULT '[]'::jsonb,
  theme jsonb NOT NULL DEFAULT '{}'::jsonb,
  meta_title text,
  meta_description text,
  meta_keywords ARRAY,
  is_published boolean DEFAULT false,
  published_at timestamp with time zone,
  custom_domain text UNIQUE,
  subdomain text UNIQUE,
  view_count integer DEFAULT 0,
  last_edited_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT user_sites_pkey PRIMARY KEY (id),
  CONSTRAINT user_sites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id),
  CONSTRAINT user_sites_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id)
);

CREATE TABLE public.site_versions (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  site_id uuid NOT NULL,
  version_number integer NOT NULL,
  layout jsonb NOT NULL,
  theme jsonb NOT NULL,
  change_description text,
  created_by uuid,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT site_versions_pkey PRIMARY KEY (id),
  CONSTRAINT site_versions_site_id_fkey FOREIGN KEY (site_id) REFERENCES public.user_sites(id),
  CONSTRAINT site_versions_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.profiles(id)
);

CREATE TABLE public.assets (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  site_id uuid,
  name text NOT NULL,
  file_path text NOT NULL,
  file_url text NOT NULL,
  file_type text NOT NULL,
  mime_type text,
  file_size bigint,
  width integer,
  height integer,
  alt_text text,
  folder text DEFAULT 'root'::text,
  tags ARRAY,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT assets_pkey PRIMARY KEY (id),
  CONSTRAINT assets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id),
  CONSTRAINT assets_site_id_fkey FOREIGN KEY (site_id) REFERENCES public.user_sites(id)
);

CREATE TABLE public.components (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  type text NOT NULL,
  category text,
  description text,
  thumbnail_url text,
  props_schema jsonb NOT NULL DEFAULT '{}'::jsonb,
  default_props jsonb NOT NULL DEFAULT '{}'::jsonb,
  component_path text NOT NULL,
  tags ARRAY,
  is_premium boolean DEFAULT false,
  usage_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT components_pkey PRIMARY KEY (id)
);

CREATE TABLE public.ai_generations (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  site_id uuid,
  prompt text NOT NULL,
  template_id uuid,
  generated_layout jsonb,
  generated_content jsonb,
  model_used text,
  tokens_used integer,
  generation_time_ms integer,
  status text DEFAULT 'pending'::text CHECK (status = ANY (ARRAY['pending'::text, 'completed'::text, 'failed'::text])),
  error_message text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT ai_generations_pkey PRIMARY KEY (id),
  CONSTRAINT ai_generations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id),
  CONSTRAINT ai_generations_site_id_fkey FOREIGN KEY (site_id) REFERENCES public.user_sites(id),
  CONSTRAINT ai_generations_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id)
);
```

### Table Summary

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `profiles` | User accounts (extends auth.users) | email, subscription_tier |
| `template_categories` | Template organization | name, slug, icon |
| `template_tags` | Style tags for filtering | name, slug, category |
| `templates` | Master templates | layout (JSON), theme (JSON), embedding (vector) |
| `user_sites` | User-created websites | layout (JSON), is_published, subdomain |
| `site_versions` | Version history for undo/redo | version_number, layout, theme |
| `assets` | Uploaded files (images, videos) | file_url, file_type, folder |
| `components` | Master component library | props_schema, default_props |
| `ai_generations` | AI generation history | prompt, generated_layout, status |

### Relationships
```
profiles (1) ──→ (N) user_sites
profiles (1) ──→ (N) assets
profiles (1) ──→ (N) ai_generations
templates (1) ──→ (N) user_sites
user_sites (1) ──→ (N) site_versions
user_sites (1) ──→ (N) assets
template_categories (1) ──→ (N) templates
```

## 🔒 Security Model

### Row Level Security (RLS)

> **Status:** ✅ RLS Policies Applied

#### User Sites
```sql
-- Users can only view their own sites
SELECT: auth.uid() = user_id

-- Anyone can view published sites
SELECT: is_published = true

-- Users can only modify their own sites
INSERT/UPDATE/DELETE: auth.uid() = user_id
```

#### Assets
```sql
-- Users can only view their own assets
SELECT: auth.uid() = user_id

-- Users can only upload to their own folder
INSERT: (storage.foldername(name))[1] = auth.uid()::text

-- Users can only delete their own assets
DELETE: auth.uid() = user_id
```

#### Templates
```sql
-- Everyone can view active templates
SELECT: is_active = true

-- Only admins can modify templates
INSERT/UPDATE/DELETE: admin role check
```

#### Profiles
```sql
-- Users can view their own profile
SELECT: auth.uid() = id

-- Users can update their own profile
UPDATE: auth.uid() = id
```

## 📦 Storage Architecture

> **Status:** ✅ Buckets Created & RLS Applied

### Storage Buckets

| Bucket | Public | Size Limit | Allowed Types | Purpose |
|--------|--------|------------|---------------|---------|
| `templates` | ✅ Yes | 5MB | image/* | Template thumbnails & previews |
| `user-assets` | ✅ Yes | 10MB | image/*, video/* | User uploaded images & videos |
| `site-exports` | ❌ No | 50MB | application/zip, application/json | Site backups & exports |

### Bucket Structure
```
templates/
├── {templateId}/
│   ├── {templateId}-thumbnail.png
│   └── {templateId}-preview.png

user-assets/
├── {userId}/
│   ├── root/
│   │   └── image1.png
│   ├── hero-images/
│   │   ├── hero-bg-1.jpg
│   │   └── hero-bg-2.jpg
│   └── portfolio/
│       └── project-1.png

site-exports/
└── {userId}/
    └── site-{siteId}-{timestamp}.zip
```

### Storage RLS Policies

```sql
-- TEMPLATES BUCKET (public read)
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'templates');

CREATE POLICY "Authenticated users can upload" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'templates' AND auth.role() = 'authenticated');

-- USER-ASSETS BUCKET (public read, user-scoped write)
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'user-assets');

CREATE POLICY "Users can upload own assets" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'user-assets' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete own assets" ON storage.objects
FOR DELETE USING (
  bucket_id = 'user-assets' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- SITE-EXPORTS BUCKET (private, user-scoped)
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

### Component-as-Data Pattern
```
Database (JSON)          React Component
─────────────────        ───────────────
{                        <Hero
  "type": "Hero",          title="Welcome"
  "props": {               subtitle="..."
    "title": "Welcome",    ctaText="Start"
    "subtitle": "...",     ctaLink="/"
    "ctaText": "Start",  />
    "ctaLink": "/"
  }
}
```

### DynamicRenderer Logic
```typescript
// 1. Get sections from layout JSON
const sections = layout.sections;

// 2. Sort by order
const sorted = sections.sort((a, b) => a.order - b.order);

// 3. Map type to component
sorted.map(section => {
  const Component = COMPONENT_MAP[section.type];
  return <Component {...section.props} />;
});
```

### Component Registry
```typescript
const COMPONENT_MAP = {
  Hero: Hero,
  Features: FeatureGrid,
  ContactForm: ContactForm,
  Testimonials: Testimonials,
  CTA: CTA,
  Portfolio: Portfolio,
  About: About
};
```

## 🎨 Theme System

### Theme Structure
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

### Theme Application
```tsx
<div style={{
  '--color-primary': theme.colors.primary,
  '--color-secondary': theme.colors.secondary,
  '--font-heading': theme.fonts.heading,
  '--font-body': theme.fonts.body
}}>
  {/* Components use CSS variables */}
</div>
```

## 📁 Storage Architecture

### Bucket Structure
```
templates/
├── {templateId}/
│   ├── {templateId}-thumbnail.png
│   └── {templateId}-preview.png

user-assets/
├── {userId}/
│   ├── root/
│   │   └── image1.png
│   ├── hero-images/
│   │   ├── hero-bg-1.jpg
│   │   └── hero-bg-2.jpg
│   └── portfolio/
│       └── project-1.png

site-exports/
└── {userId}/
    └── site-{siteId}-{timestamp}.zip
```

### Storage Policies
```sql
-- User Assets: Folder-based isolation
(storage.foldername(name))[1] = auth.uid()::text

-- Templates: Public read, admin write
bucket_id = 'templates' AND (
  operation = 'SELECT' OR
  auth.role() = 'admin'
)

-- Site Exports: Private, user-only
bucket_id = 'site-exports' AND
(storage.foldername(name))[1] = auth.uid()::text
```

## 🔍 Search Architecture

### Hybrid Search Strategy
```
User Query: "modern professional website"
        ↓
┌───────────────────────────────────────┐
│  Step 1: Extract Tags                 │
│  Tags: ['modern', 'professional']     │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│  Step 2: Traditional Filter (SQL)     │
│  WHERE tags && ['modern', 'professional'] │
│  Result: 10 templates                 │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│  Step 3: Generate Embedding (AI)      │
│  Embedding: [0.123, 0.456, ...]       │
│  (1536 dimensions)                    │
└───────────────────────────────────────┘
        ↓
┌───────────────────────────────────────┐
│  Step 4: Vector Similarity (pgvector) │
│  ORDER BY embedding <=> query_embedding │
│  Result: Ranked by relevance          │
└───────────────────────────────────────┘
        ↓
Return: Best matching template
```

### Vector Search Function
```sql
CREATE FUNCTION search_templates_by_embedding(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  name text,
  similarity float
)
```

## 🔄 Version Control System

### Automatic Versioning
```sql
-- Trigger on site update
CREATE TRIGGER create_site_version_trigger
AFTER UPDATE ON user_sites
FOR EACH ROW
WHEN (OLD.layout IS DISTINCT FROM NEW.layout)
EXECUTE FUNCTION create_site_version();
```

### Version History
```
Site Edit Timeline:
─────────────────────
v1: Initial from template
v2: Changed hero title
v3: Added new section
v4: Updated colors
v5: Changed images
     ↑ Current version

User can restore to any version
```

## 🚀 Performance Optimizations

### Database
- Indexes on frequently queried columns
- Vector index (HNSW) for fast similarity search
- Materialized views for analytics
- Connection pooling

### Storage
- CDN for static assets
- Image optimization
- Lazy loading
- Cache headers

### Frontend
- Code splitting
- Dynamic imports
- React.memo for components
- Virtual scrolling for lists

## 📊 Monitoring & Analytics

### Metrics to Track
```
User Metrics:
- New signups
- Active users
- Subscription conversions

Site Metrics:
- Sites created
- Sites published
- Template usage

Performance:
- Page load time
- API response time
- Storage usage
- Database queries
```

## 🔐 Authentication Flow

```
User Sign Up
     ↓
Supabase Auth creates user
     ↓
Trigger creates profile record
     ↓
User logged in
     ↓
JWT token stored in cookie
     ↓
All requests include token
     ↓
RLS policies check auth.uid()
     ↓
Access granted/denied
```

## 🌐 Deployment Architecture

```
┌─────────────────────────────────────┐
│         Vercel (Frontend)           │
│  - Next.js App                      │
│  - Edge Functions                   │
│  - CDN                              │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       Supabase (Backend)            │
│  - PostgreSQL + pgvector            │
│  - Storage Buckets                  │
│  - Authentication                   │
│  - Edge Functions                   │
└─────────────────────────────────────┘
```

## 📝 Summary

**Architecture Type:** Serverless, Component-as-Data
**Database:** PostgreSQL with pgvector (Hybrid Search)
**Storage:** Supabase Storage with RLS
**Frontend:** Next.js 14 with React Server Components
**Styling:** Tailwind CSS
**Type Safety:** Full TypeScript coverage
**Security:** Row Level Security + Folder-based isolation
**Scalability:** Serverless, auto-scaling
