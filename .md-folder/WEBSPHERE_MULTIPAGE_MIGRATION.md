# WebSphere Multi-Page Migration

## Overview

This migration converts the WebSphere Hosting template from a single-page layout to a complete multi-page website that matches the original HTML template structure.

---

## What's Included

### 6 Complete Pages

1. **Home** (`/`) - Landing page with hero, features, domain search, and CTA
2. **Hosting** (`/hosting`) - Hosting plans and features overview
3. **Domains** (`/domains`) - Domain search and registration
4. **Pricing** (`/pricing`) - Pricing plans with FAQ
5. **Blog** (`/blog`) - Blog listing page
6. **Contact** (`/contact`) - Contact form with stats

### Consistent Navigation

Every page includes:
- **Navbar** component with logo and navigation links
- **Footer** component with links and social media
- Consistent branding and styling

---

## Migration File

**File:** `supabase/migrations/20260125_websphere_multipage.sql`

This migration:
1. Deletes the existing single-page WebSphere template
2. Inserts the new multi-page version with all 6 pages
3. Includes proper navbar on every page
4. Maintains the same theme and styling

---

## How to Run

### Option 1: Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase/migrations/20260125_websphere_multipage.sql`
4. Paste and click **Run**
5. Verify success

### Option 2: Supabase CLI

```bash
# Make sure you're in the project directory
cd swite.ai-main

# Run the migration
npx supabase db push
```

---

## Page Structure

### Home Page (`/`)
- Navbar
- Hero with stats and floating cards
- Trust badges
- Features grid (6 features)
- Domain search
- CTA section
- Footer

### Hosting Page (`/hosting`)
- Navbar
- Hero
- Features grid (6 hosting types)
- Stats section
- CTA
- Footer

### Domains Page (`/domains`)
- Navbar
- Hero
- Domain search with 8 extensions
- Features grid (6 domain features)
- CTA
- Footer

### Pricing Page (`/pricing`)
- Navbar
- Hero
- Pricing cards (3 plans)
- FAQ section (6 questions)
- CTA with special offer
- Footer

### Blog Page (`/blog`)
- Navbar
- Hero
- Portfolio grid (6 blog posts)
- CTA
- Footer

### Contact Page (`/contact`)
- Navbar
- Hero
- Contact form
- Stats section
- Footer

---

## Navbar Configuration

Each page uses the same navbar configuration:

```json
{
  "logo": "/logo.png",
  "logoText": "WEBSPHERE",
  "links": [
    {"label": "Home", "href": "/"},
    {"label": "Hosting", "href": "/hosting"},
    {"label": "Domains", "href": "/domains"},
    {"label": "Pricing", "href": "/pricing"},
    {"label": "Blog", "href": "/blog"},
    {"label": "Contact", "href": "/contact"}
  ],
  "ctaButton": {
    "text": "Get Started",
    "href": "/pricing"
  },
  "secondaryButton": {
    "text": "Sign In",
    "href": "/login"
  }
}
```

---

## Theme

The template uses the WebSphere color scheme:

```json
{
  "colors": {
    "primary": "#6D28D9",      // Purple
    "secondary": "#4C1D95",    // Dark Purple
    "background": "#0F0222",   // Dark Background
    "text": "#FFFFFF",         // White
    "accent": "#22C55E"        // Green
  },
  "fonts": {
    "heading": "Inter",
    "body": "Inter"
  }
}
```

---

## Testing

### 1. Verify Template Exists

```sql
SELECT name, slug, is_active 
FROM templates 
WHERE slug = 'websphere-hosting';
```

Should return:
- name: "WebSphere Hosting"
- slug: "websphere-hosting"
- is_active: true

### 2. Check Pages

```sql
SELECT 
  name,
  jsonb_array_length(layout->'pages') as page_count
FROM templates 
WHERE slug = 'websphere-hosting';
```

Should return:
- page_count: 6

### 3. View in Browser

Navigate to:
```
http://localhost:3000/templates/websphere-hosting
```

Test navigation between pages:
- Click navbar links
- Verify each page loads correctly
- Check that navbar is consistent across pages

---

## Comparison: Before vs After

### Before (Single Page)
```json
{
  "sections": [
    {"type": "Hero", ...},
    {"type": "TrustBadges", ...},
    {"type": "FeatureGrid", ...},
    // ... all sections on one page
  ]
}
```

### After (Multi-Page)
```json
{
  "sections": [],
  "pages": [
    {
      "id": "home",
      "path": "/",
      "name": "Home",
      "sections": [
        {"type": "Navbar", ...},
        {"type": "Hero", ...},
        // ... home page sections
      ]
    },
    {
      "id": "hosting",
      "path": "/hosting",
      "name": "Hosting",
      "sections": [
        {"type": "Navbar", ...},
        // ... hosting page sections
      ]
    },
    // ... other pages
  ]
}
```

---

## Features Preserved

✅ All original sections maintained
✅ Same color scheme and branding
✅ Same content and copy
✅ Same features and functionality
✅ Responsive design
✅ SEO metadata per page

## New Features Added

✅ Multi-page navigation
✅ Navbar component on every page
✅ Consistent footer across pages
✅ Per-page SEO metadata
✅ Proper page routing
✅ Blog page with portfolio grid
✅ Contact page with form

---

## Rollback

If you need to revert to the single-page version:

```sql
-- Run the original migration
-- File: supabase/migrations/20240115_websphere_template.sql
```

---

## Next Steps

1. **Run the migration** using one of the methods above
2. **Test the template** in your browser
3. **Create a site** from the template
4. **Customize** the content for your needs

---

## Support

For questions or issues:
- Check [MULTI-PAGE-GUIDE.md](.md-folder/MULTI-PAGE-GUIDE.md)
- Review [MULTIPAGE-QUICK-START.md](.md-folder/MULTIPAGE-QUICK-START.md)
- See the example in `supabase/migrations/20260125_multipage_example.sql`

---

## Summary

✅ 6 complete pages matching HTML template
✅ Navbar on every page
✅ Consistent branding and navigation
✅ All original content preserved
✅ SEO metadata per page
✅ Production ready

The WebSphere template is now a complete multi-page website that matches the original HTML template structure!
