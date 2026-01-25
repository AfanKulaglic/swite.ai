# Multi-Page Template System - Complete Implementation Guide

**Status:** ✅ FULLY IMPLEMENTED AND TESTED  
**Date:** January 26, 2026  
**Version:** 2.1.0

---

## Overview

The SWITE.AI platform now fully supports multi-page templates with navigation, allowing users to create complex websites with multiple pages, each with independent sections and content.

---

## ✅ What's Implemented

### 1. Database Schema ✅
- `pages` column added to `templates` table (JSONB)
- `pages` column added to `user_sites` table (JSONB)
- Backward compatible with single-page layouts

### 2. Components ✅
- **Navbar Component** - Full navigation with links, dropdowns, CTA buttons
- **MultiPageRenderer** - Renders multi-page layouts with page switching
- **DynamicRenderer** - Updated to work with both formats

### 3. Template System ✅
- Template preview page supports multi-page templates
- Builder supports multi-page templates with page navigation
- Page switching without leaving builder context
- Section editing works across all pages

### 4. Navigation Handling ✅
- Link prefetching disabled to prevent 404 errors
- Internal page navigation intercepted in builder mode
- Page tabs for easy navigation between pages
- Navbar links switch pages instead of navigating away

### 5. Services & Utilities ✅
- `SiteService` methods for page management
- `multiPageUtils.ts` with 20+ helper functions
- Full TypeScript type support

---

## File Structure

```
swite.ai/
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx                    ✅ Navigation component
│   │   └── FooterSection.tsx             ✅ Updated with prefetch={false}
│   └── renderer/
│       ├── DynamicRenderer.tsx           ✅ Single-page renderer
│       └── MultiPageRenderer.tsx         ✅ Multi-page renderer
├── app/
│   ├── templates/[slug]/page.tsx         ✅ Supports multi-page preview
│   ├── studio/builder/page.tsx           ✅ Supports multi-page editing
│   └── layout.tsx                        ✅ Excludes navbar/footer on template pages
├── lib/
│   ├── services/
│   │   └── siteService.ts                ✅ Page management methods
│   ├── utils/
│   │   └── multiPageUtils.ts             ✅ Helper functions
│   └── supabase/
│       └── types.ts                      ✅ Multi-page types
└── supabase/
    └── migrations/
        └── 20260128_websphere_multipage_singleline.sql  ✅ Working migration
```

---

## Multi-Page Layout Format

### JSON Structure

```json
{
  "sections": [],  // Empty for multi-page (backward compatibility)
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
          "props": {
            "logoText": "WEBSPHERE",
            "links": [
              {"label": "Home", "href": "/"},
              {"label": "Hosting", "href": "/hosting"},
              {"label": "Pricing", "href": "/pricing"}
            ],
            "ctaButton": {"text": "Get Started", "href": "/pricing"}
          }
        },
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 1,
          "props": {
            "title": "Welcome",
            "subtitle": "Your journey starts here"
          }
        }
      ],
      "meta": {
        "title": "Home - My Site",
        "description": "Welcome page",
        "keywords": ["home"]
      }
    },
    {
      "id": "hosting",
      "path": "/hosting",
      "name": "Hosting",
      "sections": [...]
    }
  ]
}
```

---

## Creating Multi-Page Templates

### Step 1: Create SQL Migration

File: `supabase/migrations/YYYYMMDD_template_name.sql`

**IMPORTANT:** JSON must be on a single line!

```sql
DELETE FROM templates WHERE slug = 'my-template';

INSERT INTO templates (
  id,
  name,
  slug,
  description,
  layout,
  theme,
  tags,
  is_active,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'My Multi-Page Template',
  'my-template',
  'Description here',
  '{"sections":[],"pages":[{"id":"home","path":"/","name":"Home","sections":[{"id":"navbar_1","type":"Navbar","order":0,"props":{"logoText":"Brand","links":[{"label":"Home","href":"/"}]}}]}]}'::jsonb,
  '{"colors":{"primary":"#6D28D9","secondary":"#4C1D95","background":"#0F0222","text":"#FFFFFF","accent":"#22C55E"},"fonts":{"heading":"Inter","body":"Inter"}}'::jsonb,
  ARRAY['multi-page','business'],
  true,
  NOW(),
  NOW()
);
```

### Step 2: Run Migration

**Option A: Supabase Dashboard**
1. Go to SQL Editor
2. Paste migration content
3. Click "Run"

**Option B: Supabase CLI**
```bash
npx supabase db push
```

---

## Key Features

### Navbar Component Props

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
  ctaButton?: {                    // Primary CTA
    text: string
    href: string
  }
  secondaryButton?: {              // Secondary button
    text: string
    href: string
  }
}
```

### Template Preview

- Automatically detects multi-page vs single-page
- Uses `MultiPageRenderer` for multi-page templates
- Uses `DynamicRenderer` for single-page templates
- No site navbar/footer interference

### Builder Features

- **Page Navigation Tabs** - Switch between pages easily
- **Section Editing** - Click any section to edit properties
- **Page Switching** - Navbar links switch pages without leaving builder
- **Preview Mode** - Toggle between edit and preview
- **Save Functionality** - Save changes to localStorage (database save coming soon)

---

## Important Fixes Applied

### 1. Template Preview Page ✅
**File:** `app/templates/[slug]/page.tsx`

**Fix:** Added multi-page detection and `MultiPageRenderer` support
```typescript
{layout && layout.pages && layout.pages.length > 0 ? (
  <MultiPageRenderer layout={layout} theme={theme} />
) : layout && layout.sections && layout.sections.length > 0 ? (
  <DynamicRenderer layout={layout} theme={theme} editable={false} />
) : (
  // Empty state
)}
```

### 2. Builder Page ✅
**File:** `app/studio/builder/page.tsx`

**Fixes:**
- Added page navigation tabs
- Added `currentPage` state management
- Added `onPageChange` callback
- Fixed section selection for multi-page layouts

```typescript
const [currentPage, setCurrentPage] = useState<string>('/');

// Page tabs
{layout.pages.map((page) => (
  <button onClick={() => setCurrentPage(page.path)}>
    {page.name}
  </button>
))}

// Renderer with page switching
<MultiPageRenderer
  layout={layout}
  currentPath={currentPage}
  onPageChange={setCurrentPage}
/>
```

### 3. Root Layout ✅
**File:** `app/layout.tsx`

**Fix:** Exclude site navbar/footer from template pages
```typescript
const isTemplatePage = pathname?.startsWith('/templates/');
{!isStudioPage && !isAuthPage && !isTemplatePage && <Navbar />}
```

### 4. MultiPageRenderer ✅
**File:** `components/renderer/MultiPageRenderer.tsx`

**Fixes:**
- Added `onPageChange` callback prop
- Added click interception for internal links
- Prevents navigation when in builder mode

```typescript
useEffect(() => {
  if (!onPageChange) return;
  
  const handleClick = (e: MouseEvent) => {
    const link = target.closest('a');
    if (link && isInternalPage(link.href)) {
      e.preventDefault();
      onPageChange(path);
    }
  };
  
  document.addEventListener('click', handleClick, true);
  return () => document.removeEventListener('click', handleClick, true);
}, [onPageChange, layout.pages]);
```

### 5. Link Prefetching ✅
**Files:** `components/sections/Navbar.tsx`, `components/sections/FooterSection.tsx`

**Fix:** Added `prefetch={false}` to all Link components
```typescript
<Link href={link.href} prefetch={false}>
  {link.label}
</Link>
```

This prevents 404 errors from Next.js trying to prefetch non-existent pages.

---

## Testing Checklist

- [x] Template appears in templates list
- [x] Template preview renders correctly
- [x] All pages accessible via navbar
- [x] No 404 errors in console
- [x] Builder loads template correctly
- [x] Page navigation tabs work
- [x] Navbar links switch pages in builder
- [x] Section selection works
- [x] Properties panel shows for selected sections
- [x] Preview mode works
- [x] Mobile responsive

---

## Example: WebSphere Template

The WebSphere Hosting template is a complete example with:
- **6 Pages:** Home, Hosting, Domains, Pricing, Blog, Contact
- **Navbar on every page** with consistent navigation
- **Footer on every page** with proper links
- **SEO metadata** for each page
- **No 404 errors**

**Migration File:** `supabase/migrations/20260128_websphere_multipage_singleline.sql`

**Test URLs:**
- Preview: http://localhost:3000/templates/websphere-hosting
- Builder: http://localhost:3000/studio/builder?template=websphere-hosting

---

## Troubleshooting

### Issue: Template shows "Preview Not Available"
**Solution:** Check that `layout.pages` exists and has length > 0

### Issue: 404 errors in console
**Solution:** Add `prefetch={false}` to Link components

### Issue: Navbar links navigate away from builder
**Solution:** Ensure `onPageChange` prop is passed to `MultiPageRenderer`

### Issue: Section editor doesn't show
**Solution:** Check `getSelectedSectionData()` searches in current page

### Issue: Pages don't switch in builder
**Solution:** Verify `currentPath` prop is passed and `currentPage` state updates

---

## API Reference

### SiteService Methods

```typescript
// Add page
await SiteService.addPage(siteId, {
  id: 'contact',
  path: '/contact',
  name: 'Contact',
  sections: [...]
});

// Update page
await SiteService.updatePage(siteId, 'contact', {
  name: 'Contact Us',
  sections: [...]
});

// Delete page
await SiteService.deletePage(siteId, 'contact');

// Get all pages
const pages = await SiteService.getPages(siteId);

// Get page by path
const page = await SiteService.getPageByPath(siteId, '/about');

// Convert to multi-page
await SiteService.convertToMultiPage(siteId);
```

### Utility Functions

```typescript
import {
  isMultiPageLayout,
  getAllPages,
  getPageByPath,
  addPage,
  updatePage,
  deletePage
} from '@/lib/utils/multiPageUtils';

// Check format
const isMulti = isMultiPageLayout(layout);

// Get pages
const pages = getAllPages(layout);

// Find page
const page = getPageByPath(layout, '/about');
```

---

## Best Practices

1. **Always include Navbar** on every page (order: 0)
2. **Use consistent navigation** across all pages
3. **Valid page paths** - start with `/`, lowercase, use hyphens
4. **Home page required** - must have `path: "/"`
5. **Unique page IDs** - descriptive names like `home`, `about`, `contact`
6. **SEO metadata** - include title, description, keywords per page
7. **Single-line JSON** - minify JSON for SQL migrations
8. **Disable prefetch** - add `prefetch={false}` to all Links

---

## Future Enhancements

- [ ] Visual page manager UI
- [ ] Drag-and-drop page reordering
- [ ] Page templates library
- [ ] Dynamic routing support
- [ ] Blog post pages
- [ ] Sitemap generation
- [ ] Advanced SEO tools

---

## Summary

✅ Multi-page support fully implemented  
✅ Template preview works correctly  
✅ Builder supports multi-page editing  
✅ Page navigation works in builder  
✅ No 404 errors  
✅ Section editing works across pages  
✅ Backward compatible with single-page templates  
✅ Production ready  

**The multi-page template system is complete and ready for use!** 🎉

---

**Version:** 2.1.0  
**Last Updated:** January 26, 2026  
**Status:** Production Ready
