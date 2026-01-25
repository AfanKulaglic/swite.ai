# Multi-Page Support Guide

This guide explains how to create and manage multi-page templates and sites in SWITE.AI.

---

## Overview

SWITE.AI now supports both:
- **Single-page layouts** (legacy): All sections on one page
- **Multi-page layouts** (new): Multiple pages with their own sections

The system is backward compatible - existing single-page templates continue to work.

---

## Database Schema

The `pages` column has been added to both `templates` and `user_sites` tables:

```sql
ALTER TABLE templates ADD COLUMN pages JSONB DEFAULT '[]'::jsonb;
ALTER TABLE user_sites ADD COLUMN pages JSONB DEFAULT '[]'::jsonb;
```

---

## Multi-Page Layout Structure

### JSON Format

```json
{
  "sections": [],  // Legacy field (kept for backward compatibility)
  "pages": [
    {
      "id": "home",
      "path": "/",
      "name": "Home",
      "sections": [
        {
          "id": "navbar_1",
          "type": "Navbar",
          "order": 0,
          "props": { ... }
        },
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 1,
          "props": { ... }
        }
      ],
      "meta": {
        "title": "Home - My Site",
        "description": "Welcome to my site",
        "keywords": ["home", "welcome"]
      }
    },
    {
      "id": "about",
      "path": "/about",
      "name": "About",
      "sections": [
        {
          "id": "navbar_1",
          "type": "Navbar",
          "order": 0,
          "props": { ... }
        },
        {
          "id": "about_1",
          "type": "About",
          "order": 1,
          "props": { ... }
        }
      ]
    }
  ]
}
```

### Page Object Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique page identifier |
| `path` | string | Yes | URL path (e.g., `/`, `/about`, `/contact`) |
| `name` | string | Yes | Display name for the page |
| `sections` | array | Yes | Array of section components |
| `meta` | object | No | SEO metadata (title, description, keywords) |

---

## Creating Multi-Page Templates

### Example: Multi-Page Agency Template

```sql
INSERT INTO templates (
  id,
  name,
  slug,
  description,
  layout,
  theme,
  pages,
  tags,
  is_active
) VALUES (
  gen_random_uuid(),
  'Multi-Page Agency',
  'multi-page-agency',
  'Complete agency website with multiple pages',
  '{"sections": []}'::jsonb,  -- Legacy field (empty)
  '{"colors": {"primary": "#4169E1", "secondary": "#6B46C1", "background": "#000000", "text": "#FFFFFF"}, "fonts": {"heading": "Inter", "body": "Inter"}}'::jsonb,
  '[
    {
      "id": "home",
      "path": "/",
      "name": "Home",
      "sections": [
        {
          "id": "navbar_1",
          "type": "Navbar",
          "order": 0,
          "props": {
            "logo": "/logo.png",
            "logoText": "Agency",
            "links": [
              {"label": "Home", "href": "/"},
              {"label": "About", "href": "/about"},
              {"label": "Services", "href": "/services"},
              {"label": "Contact", "href": "/contact"}
            ],
            "ctaButton": {"text": "Get Started", "href": "/contact"}
          }
        },
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 1,
          "props": {
            "title": "Welcome to Our Agency",
            "subtitle": "We create amazing digital experiences",
            "ctaText": "Learn More",
            "ctaLink": "/about"
          }
        }
      ]
    },
    {
      "id": "about",
      "path": "/about",
      "name": "About",
      "sections": [
        {
          "id": "navbar_1",
          "type": "Navbar",
          "order": 0,
          "props": {
            "logo": "/logo.png",
            "logoText": "Agency",
            "links": [
              {"label": "Home", "href": "/"},
              {"label": "About", "href": "/about"},
              {"label": "Services", "href": "/services"},
              {"label": "Contact", "href": "/contact"}
            ]
          }
        },
        {
          "id": "about_1",
          "type": "About",
          "order": 1,
          "props": {
            "title": "About Us",
            "content": "We are a creative agency...",
            "skills": ["Design", "Development", "Marketing"]
          }
        }
      ]
    }
  ]'::jsonb,
  ARRAY['agency', 'multi-page', 'business'],
  true
);
```

---

## Using the Navbar Component

The Navbar component is now available as a section component.

### Navbar Props

```typescript
{
  logo?: string                    // Logo image URL
  logoText?: string                // Brand text
  links?: Array<{                  // Navigation links
    label: string
    href: string
  }>
  dropdowns?: Array<{              // Dropdown menus
    label: string
    links: Array<{
      label: string
      href: string
    }>
  }>
  ctaButton?: {                    // Primary CTA button
    text: string
    href: string
  }
  secondaryButton?: {              // Secondary button
    text: string
    href: string
  }
  variant?: 'default' | 'minimal' | 'centered'
}
```

### Example Navbar Section

```json
{
  "id": "navbar_1",
  "type": "Navbar",
  "order": 0,
  "props": {
    "logo": "/logo.png",
    "logoText": "My Brand",
    "links": [
      { "label": "Home", "href": "/" },
      { "label": "Features", "href": "/features" },
      { "label": "Pricing", "href": "/pricing" },
      { "label": "Contact", "href": "/contact" }
    ],
    "dropdowns": [
      {
        "label": "Resources",
        "links": [
          { "label": "Blog", "href": "/blog" },
          { "label": "Docs", "href": "/docs" },
          { "label": "Help", "href": "/help" }
        ]
      }
    ],
    "ctaButton": {
      "text": "Get Started",
      "href": "/signup"
    },
    "secondaryButton": {
      "text": "Sign In",
      "href": "/login"
    }
  }
}
```

---

## Service Methods

### SiteService Multi-Page Methods

```typescript
// Add a new page
await SiteService.addPage(siteId, {
  id: 'contact',
  path: '/contact',
  name: 'Contact',
  sections: [...]
});

// Update a page
await SiteService.updatePage(siteId, 'contact', {
  name: 'Contact Us',
  sections: [...]
});

// Delete a page
await SiteService.deletePage(siteId, 'contact');

// Get all pages
const pages = await SiteService.getPages(siteId);

// Get specific page by path
const page = await SiteService.getPageByPath(siteId, '/about');

// Convert legacy site to multi-page
await SiteService.convertToMultiPage(siteId);
```

---

## Utility Functions

### Multi-Page Utils

```typescript
import {
  isMultiPageLayout,
  getAllPages,
  getPageByPath,
  addPage,
  updatePage,
  deletePage,
  convertToMultiPage,
  generatePageId,
  isValidPagePath,
  pathExists
} from '@/lib/utils/multiPageUtils';

// Check if layout is multi-page
const isMulti = isMultiPageLayout(layout);

// Get all pages
const pages = getAllPages(layout);

// Add a new page
const newLayout = addPage(layout, {
  id: generatePageId('Services'),
  path: '/services',
  name: 'Services',
  sections: []
});

// Validate path
if (isValidPagePath('/about')) {
  // Valid path
}

// Check if path exists
if (!pathExists(layout, '/contact')) {
  // Path is available
}
```

---

## Rendering Multi-Page Sites

### Using MultiPageRenderer

```tsx
import { MultiPageRenderer } from '@/components/renderer/MultiPageRenderer';

export default function SitePage({ site }) {
  return (
    <MultiPageRenderer
      layout={site.layout}
      theme={site.theme}
    />
  );
}
```

The `MultiPageRenderer` automatically:
- Detects if the layout is multi-page or legacy single-page
- Renders the correct page based on the current URL path
- Falls back to the home page if the path is not found
- Shows a 404 page if no home page exists

---

## Best Practices

### 1. Always Include Navbar on Every Page

```json
{
  "sections": [
    {
      "id": "navbar_1",
      "type": "Navbar",
      "order": 0,
      "props": { ... }
    },
    // ... other sections
  ]
}
```

### 2. Use Consistent Navigation

Keep the same navigation links across all pages for consistency.

### 3. Page Path Rules

- Must start with `/`
- Must not end with `/` (except root `/`)
- Use lowercase and hyphens: `/about-us`, `/contact`
- Avoid special characters

### 4. Home Page is Required

Every multi-page site must have a page with `path: "/"`.

### 5. Unique Page IDs

Use descriptive, unique IDs for pages:
- Good: `home`, `about`, `contact`, `services`
- Bad: `page1`, `page2`, `page3`

### 6. SEO Metadata

Always include meta information for each page:

```json
{
  "meta": {
    "title": "About Us - My Company",
    "description": "Learn more about our company and team",
    "keywords": ["about", "company", "team"]
  }
}
```

---

## Migration Guide

### Converting Existing Single-Page Sites

```typescript
// Programmatically convert a site
const site = await SiteService.getSiteById(siteId);
await SiteService.convertToMultiPage(siteId);

// Or using utility
import { convertToMultiPage } from '@/lib/utils/multiPageUtils';
const newLayout = convertToMultiPage(site.layout);
```

### Backward Compatibility

The system automatically handles both formats:

```typescript
// Legacy format (still works)
{
  "sections": [...]
}

// New format
{
  "sections": [],  // Empty for compatibility
  "pages": [...]
}
```

---

## Example: Complete Multi-Page Template

See `supabase/migrations/YYYYMMDD_multipage_template_example.sql` for a complete working example.

---

## Troubleshooting

### Page Not Rendering

1. Check that the page path matches the URL
2. Verify the page exists in the `pages` array
3. Ensure the home page (`/`) exists

### Navbar Not Showing

1. Verify `Navbar` is registered in `DynamicRenderer.tsx`
2. Check that the Navbar section has `order: 0`
3. Ensure props are correctly formatted

### 404 Errors

1. Check that the path is valid (starts with `/`)
2. Verify the page exists in the layout
3. Ensure the site is published

---

## Summary

Multi-page support allows you to:
- Create complex, multi-page websites
- Use the Navbar component for consistent navigation
- Maintain SEO metadata per page
- Keep backward compatibility with single-page sites

The system automatically handles both legacy and new formats, making migration seamless.
