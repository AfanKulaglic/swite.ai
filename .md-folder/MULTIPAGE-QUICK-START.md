# Multi-Page Quick Start

Quick reference for working with multi-page templates and sites.

---

## 🚀 Quick Examples

### Create a Multi-Page Template

```sql
INSERT INTO templates (name, slug, layout, theme, tags, is_active)
VALUES (
  'My Template',
  'my-template',
  '{
    "sections": [],
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
              "logoText": "Brand",
              "links": [
                {"label": "Home", "href": "/"},
                {"label": "About", "href": "/about"}
              ],
              "ctaButton": {"text": "Get Started", "href": "/contact"}
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
        ]
      },
      {
        "id": "about",
        "path": "/about",
        "name": "About",
        "sections": [...]
      }
    ]
  }'::jsonb,
  '{"colors": {"primary": "#4169E1"}, "fonts": {"heading": "Inter"}}'::jsonb,
  ARRAY['multi-page'],
  true
);
```

### Add Navbar to Any Page

```json
{
  "id": "navbar_1",
  "type": "Navbar",
  "order": 0,
  "props": {
    "logo": "/logo.png",
    "logoText": "My Brand",
    "links": [
      {"label": "Home", "href": "/"},
      {"label": "Features", "href": "/features"},
      {"label": "Pricing", "href": "/pricing"},
      {"label": "Contact", "href": "/contact"}
    ],
    "dropdowns": [
      {
        "label": "Resources",
        "links": [
          {"label": "Blog", "href": "/blog"},
          {"label": "Docs", "href": "/docs"}
        ]
      }
    ],
    "ctaButton": {"text": "Get Started", "href": "/signup"},
    "secondaryButton": {"text": "Sign In", "href": "/login"}
  }
}
```

---

## 💻 Code Examples

### Add a Page to a Site

```typescript
import { SiteService } from '@/lib/services/siteService';

await SiteService.addPage(siteId, {
  id: 'contact',
  path: '/contact',
  name: 'Contact',
  sections: [
    {
      id: 'navbar_1',
      type: 'Navbar',
      order: 0,
      props: { /* navbar props */ }
    },
    {
      id: 'contact_1',
      type: 'ContactForm',
      order: 1,
      props: { /* form props */ }
    }
  ],
  meta: {
    title: 'Contact Us',
    description: 'Get in touch',
    keywords: ['contact', 'support']
  }
});
```

### Update a Page

```typescript
await SiteService.updatePage(siteId, 'about', {
  name: 'About Us',
  sections: [/* updated sections */]
});
```

### Delete a Page

```typescript
await SiteService.deletePage(siteId, 'old-page');
// Note: Cannot delete home page (path: "/")
```

### Get All Pages

```typescript
const pages = await SiteService.getPages(siteId);
console.log(pages); // Array of SitePage objects
```

### Convert Legacy Site to Multi-Page

```typescript
await SiteService.convertToMultiPage(siteId);
```

---

## 🛠️ Utility Functions

```typescript
import {
  isMultiPageLayout,
  getAllPages,
  getPageByPath,
  addPage,
  updatePage,
  deletePage,
  generatePageId,
  isValidPagePath,
  pathExists
} from '@/lib/utils/multiPageUtils';

// Check if multi-page
if (isMultiPageLayout(layout)) {
  console.log('Multi-page layout');
}

// Get all pages
const pages = getAllPages(layout);

// Find page by path
const aboutPage = getPageByPath(layout, '/about');

// Add a page
const newLayout = addPage(layout, {
  id: generatePageId('Services'),
  path: '/services',
  name: 'Services',
  sections: []
});

// Validate path
if (isValidPagePath('/my-page')) {
  // Valid
}

// Check if path exists
if (!pathExists(layout, '/new-page')) {
  // Path available
}
```

---

## 🎨 Render Multi-Page Site

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

---

## 📋 Page Structure

```typescript
interface SitePage {
  id: string              // Unique identifier
  path: string            // URL path (e.g., "/about")
  name: string            // Display name
  sections: SectionComponent[]  // Array of sections
  meta?: {                // Optional SEO metadata
    title?: string
    description?: string
    keywords?: string[]
  }
}
```

---

## ✅ Best Practices

1. **Always include Navbar on every page**
   ```json
   {
     "id": "navbar_1",
     "type": "Navbar",
     "order": 0,
     "props": {...}
   }
   ```

2. **Use consistent navigation across pages**
   - Same links on all pages
   - Same logo and branding

3. **Valid page paths**
   - ✅ `/`, `/about`, `/contact`, `/services`
   - ❌ `about`, `/about/`, `/About`

4. **Home page is required**
   - Every site must have `path: "/"`

5. **Unique page IDs**
   - Use descriptive IDs: `home`, `about`, `contact`
   - Generate with: `generatePageId('Page Name')`

6. **Include SEO metadata**
   ```json
   {
     "meta": {
       "title": "About Us - Company Name",
       "description": "Learn about our company",
       "keywords": ["about", "company", "team"]
     }
   }
   ```

---

## 🔧 Common Tasks

### Add Navbar to Existing Page

```typescript
const page = await SiteService.getPageByPath(siteId, '/about');
page.sections.unshift({
  id: 'navbar_1',
  type: 'Navbar',
  order: 0,
  props: {
    logoText: 'Brand',
    links: [...]
  }
});
await SiteService.updatePage(siteId, page.id, page);
```

### Clone a Page

```typescript
const originalPage = await SiteService.getPageByPath(siteId, '/about');
const newPage = {
  ...originalPage,
  id: generatePageId('New Page'),
  path: '/new-page',
  name: 'New Page'
};
await SiteService.addPage(siteId, newPage);
```

### Reorder Pages

```typescript
const pages = await SiteService.getPages(siteId);
const reordered = [pages[2], pages[0], pages[1]]; // New order
const layout = { sections: [], pages: reordered };
await SiteService.updateSiteLayout(siteId, layout);
```

---

## 📚 Full Documentation

- [MULTI-PAGE-GUIDE.md](MULTI-PAGE-GUIDE.md) - Complete guide
- [CREATING_TEMPLATES.md](CREATING_TEMPLATES.md) - Template creation
- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture

---

## 🐛 Troubleshooting

**Page not rendering?**
- Check path matches URL
- Verify page exists in `pages` array
- Ensure home page (`/`) exists

**Navbar not showing?**
- Verify `Navbar` is in `DynamicRenderer.tsx`
- Check `order: 0` for navbar section
- Validate props format

**404 errors?**
- Path must start with `/`
- Path must exist in layout
- Site must be published

---

## 🎯 Component Registry

Available components for sections:
- `Navbar` - Navigation bar
- `Hero` - Hero section
- `FeatureGrid` - Features grid
- `Stats` - Statistics
- `Pricing` - Pricing cards
- `Testimonials` - Customer reviews
- `CTA` - Call to action
- `FAQ` - FAQ accordion
- `ContactForm` - Contact form
- `FooterSection` - Footer
- `Portfolio` - Project showcase
- `About` - About section
- `TrustBadges` - Brand logos
- `DomainSearch` - Domain search

---

## 🚀 Example Template

See: `supabase/migrations/20260125_multipage_example.sql`

A complete multi-page agency template with:
- Home page with hero, stats, features
- About page with team info
- Services page with pricing
- Contact page with form
- Consistent navbar across all pages
