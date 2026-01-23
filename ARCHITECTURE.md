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

### Core Tables
```
profiles (users)
├── id (UUID, PK)
├── email (TEXT)
├── subscription_tier (TEXT)
└── created_at (TIMESTAMP)

templates (master templates)
├── id (UUID, PK)
├── name (TEXT)
├── slug (TEXT, UNIQUE)
├── layout (JSONB) ← Component structure
├── theme (JSONB) ← Colors, fonts
├── embedding (VECTOR) ← AI search
├── category_id (UUID, FK)
├── tags (TEXT[])
└── usage_count (INTEGER)

user_sites (user websites)
├── id (UUID, PK)
├── user_id (UUID, FK)
├── template_id (UUID, FK)
├── name (TEXT)
├── slug (TEXT)
├── layout (JSONB) ← Editable copy
├── theme (JSONB) ← Editable copy
├── is_published (BOOLEAN)
├── subdomain (TEXT, UNIQUE)
└── custom_domain (TEXT, UNIQUE)

site_versions (version history)
├── id (UUID, PK)
├── site_id (UUID, FK)
├── version_number (INTEGER)
├── layout (JSONB)
├── theme (JSONB)
└── created_at (TIMESTAMP)

assets (uploaded files)
├── id (UUID, PK)
├── user_id (UUID, FK)
├── site_id (UUID, FK)
├── file_path (TEXT)
├── file_url (TEXT)
├── file_type (TEXT)
├── file_size (BIGINT)
└── folder (TEXT)
```

### Relationships
```
profiles (1) ──→ (N) user_sites
profiles (1) ──→ (N) assets
templates (1) ──→ (N) user_sites
user_sites (1) ──→ (N) site_versions
user_sites (1) ──→ (N) assets
template_categories (1) ──→ (N) templates
```

## 🔒 Security Model

### Row Level Security (RLS)

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
-- Everyone can view templates
SELECT: true

-- Only admins can modify templates
INSERT/UPDATE/DELETE: admin role check
```

## 📦 Component Architecture

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
