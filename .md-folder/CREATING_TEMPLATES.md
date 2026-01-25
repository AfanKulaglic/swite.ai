# Creating Templates for SWITE.AI

This guide explains how to create, structure, and deploy new templates to the SWITE.AI platform.

---

## Table of Contents

1. [Overview](#overview)
2. [Template Structure](#template-structure)
3. [Available Components](#available-components)
4. [Creating a New Template](#creating-a-new-template)
5. [Pushing to Database](#pushing-to-database)
6. [Testing Your Template](#testing-your-template)
7. [Best Practices](#best-practices)

---

## Overview

Templates in SWITE.AI are stored in the Supabase database as JSON. Each template consists of:

- **Layout**: An array of sections with component types and props
- **Theme**: Colors and fonts for the template
- **Metadata**: Name, slug, description, tags, etc.

When a user views a template, the `DynamicRenderer` component reads the JSON and renders the appropriate React components.

---

## Template Structure

### Database Schema

```sql
templates (
  id              UUID PRIMARY KEY,
  name            VARCHAR,           -- Display name: "WebSphere Hosting"
  slug            VARCHAR UNIQUE,    -- URL-friendly: "websphere-hosting"
  description     TEXT,              -- Short description
  thumbnail_url   VARCHAR,           -- Preview image path
  preview_url     VARCHAR,           -- Full preview image path
  category_id     UUID,              -- Reference to template_categories
  layout          JSONB,             -- The sections array
  theme           JSONB,             -- Colors and fonts
  tags            TEXT[],            -- Array of tags for filtering
  is_premium      BOOLEAN,           -- Premium template flag
  is_active       BOOLEAN,           -- Show/hide template
  created_at      TIMESTAMP,
  updated_at      TIMESTAMP
)
```

### Layout JSON Structure

```json
{
  "sections": [
    {
      "id": "hero_1",
      "type": "Hero",
      "order": 0,
      "props": {
        "title": "Your Title Here",
        "subtitle": "Your subtitle here",
        "ctaText": "Get Started",
        "ctaLink": "/signup"
      }
    },
    {
      "id": "features_1",
      "type": "FeatureGrid",
      "order": 1,
      "props": {
        "title": "Features",
        "features": [...]
      }
    }
  ]
}
```

### Theme JSON Structure

```json
{
  "colors": {
    "primary": "#6D28D9",
    "secondary": "#4C1D95",
    "background": "#0F0222",
    "text": "#FFFFFF",
    "accent": "#22C55E"
  },
  "fonts": {
    "heading": "Inter",
    "body": "Inter"
  }
}
```

---

## Available Components

### Hero
Main landing section with title, CTA buttons, and optional image.

```json
{
  "type": "Hero",
  "props": {
    "title": "string",
    "subtitle": "string",
    "ctaText": "string",
    "ctaLink": "string",
    "secondaryCtaText": "string",
    "secondaryCtaLink": "string",
    "backgroundStyle": "gradient | minimal | corporate | bold | nature | websphere",
    "variant": "default | split",
    "badge": "string (optional banner text)",
    "heroImage": "string (URL for split variant)",
    "stats": [
      { "value": "99.9%", "label": "Uptime" }
    ],
    "floatingCards": [
      { "icon": "⚡", "label": "Speed", "value": "0.8s", "position": "top-right | bottom-left" }
    ]
  }
}
```

### FeatureGrid
Grid of feature cards with icons.

```json
{
  "type": "FeatureGrid",
  "props": {
    "badge": "string (optional)",
    "title": "string",
    "subtitle": "string",
    "variant": "default | websphere",
    "columns": 3 | 4 | 6,
    "features": [
      {
        "icon": "⚡",
        "title": "Feature Title",
        "description": "Feature description",
        "bulletPoints": ["Point 1", "Point 2", "Point 3"]
      }
    ]
  }
}
```

### Stats
Statistics/metrics display section.

```json
{
  "type": "Stats",
  "props": {
    "title": "string",
    "subtitle": "string",
    "variant": "gradient | cards",
    "stats": [
      { "value": "50,000+", "label": "Customers", "description": "Worldwide" }
    ]
  }
}
```

### Pricing
Pricing cards with features and CTAs.

```json
{
  "type": "Pricing",
  "props": {
    "badge": "string",
    "title": "string",
    "subtitle": "string",
    "viewAllLink": "string",
    "viewAllText": "string",
    "plans": [
      {
        "name": "Starter",
        "price": "$9.99",
        "period": "/month",
        "description": "Plan description",
        "features": ["Feature 1", "Feature 2"],
        "popular": false,
        "ctaText": "Get Started",
        "ctaLink": "/signup"
      }
    ]
  }
}
```

### Testimonials
Customer testimonials grid.

```json
{
  "type": "Testimonials",
  "props": {
    "badge": "string",
    "title": "string",
    "subtitle": "string",
    "variant": "default | websphere",
    "showStars": true,
    "testimonials": [
      {
        "quote": "Customer quote here",
        "author": "John Doe",
        "role": "CEO, Company",
        "avatar": "https://url-to-avatar.jpg",
        "rating": 5
      }
    ]
  }
}
```

### CTA
Call-to-action section.

```json
{
  "type": "CTA",
  "props": {
    "badge": "string",
    "title": "string",
    "subtitle": "string",
    "ctaText": "string",
    "ctaLink": "string",
    "secondaryCtaText": "string",
    "secondaryCtaLink": "string",
    "variant": "default | websphere"
  }
}
```

### FAQ
Frequently asked questions accordion.

```json
{
  "type": "FAQ",
  "props": {
    "badge": "string",
    "title": "string",
    "subtitle": "string",
    "items": [
      {
        "question": "Question text?",
        "answer": "Answer text."
      }
    ]
  }
}
```

### TrustBadges
Brand/partner logos section.

```json
{
  "type": "TrustBadges",
  "props": {
    "title": "string",
    "brands": ["Brand1", "Brand2", "Brand3"]
  }
}
```

### DomainSearch
Domain search input (for hosting templates).

```json
{
  "type": "DomainSearch",
  "props": {
    "badge": "string",
    "title": "string",
    "subtitle": "string",
    "placeholder": "yourdomain.com",
    "buttonText": "Search",
    "domainPrices": [
      { "extension": ".com", "price": "$12.99/yr" }
    ]
  }
}
```

### FooterSection
Full footer with links and social icons.

```json
{
  "type": "FooterSection",
  "props": {
    "logo": "string",
    "description": "string",
    "columns": [
      {
        "title": "Products",
        "links": [
          { "label": "Feature 1", "href": "/feature-1" }
        ]
      }
    ],
    "socialLinks": [
      { "icon": "twitter", "href": "https://twitter.com", "label": "Twitter" }
    ],
    "bottomLinks": [
      { "label": "Privacy Policy", "href": "/privacy" }
    ]
  }
}
```

### Portfolio
Project showcase grid.

```json
{
  "type": "Portfolio",
  "props": {
    "title": "string",
    "subtitle": "string",
    "projects": [
      {
        "title": "Project Name",
        "category": "Web Design",
        "image": "https://image-url.jpg",
        "link": "/project"
      }
    ]
  }
}
```

### About
About section with skills.

```json
{
  "type": "About",
  "props": {
    "title": "string",
    "description": "string",
    "skills": ["Skill 1", "Skill 2"],
    "image": "https://image-url.jpg"
  }
}
```

### ContactForm
Contact form section.

```json
{
  "type": "ContactForm",
  "props": {
    "title": "string",
    "subtitle": "string",
    "email": "contact@example.com"
  }
}
```

---

## Creating a New Template

### Step 1: Plan Your Template

1. Decide on the template purpose (hosting, portfolio, agency, etc.)
2. Sketch out the sections you need
3. Choose a color scheme and style variant

### Step 2: Create the SQL Migration File

Create a new file in `supabase/migrations/` with the naming convention:
```
YYYYMMDD_template_name.sql
```

Example: `20240120_agency_starter.sql`

### Step 3: Write the SQL

```sql
-- Agency Starter Template
-- Description: Modern agency template with portfolio showcase

-- Optional: Delete specific template if updating
-- DELETE FROM templates WHERE slug = 'agency-starter';

INSERT INTO templates (
  id,
  name,
  slug,
  description,
  thumbnail_url,
  preview_url,
  category_id,
  layout,
  theme,
  tags,
  is_premium,
  is_active,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'Agency Starter',
  'agency-starter',
  'Modern agency template with portfolio and team sections.',
  '/templates/agency-starter/thumbnail.png',
  '/templates/agency-starter/preview.png',
  (SELECT id FROM template_categories WHERE slug = 'agency' LIMIT 1),
  '{"sections": [YOUR_SECTIONS_HERE]}'::jsonb,
  '{"colors": {"primary": "#8B5CF6", "secondary": "#EC4899", "background": "#0C0C0C", "text": "#FFFFFF", "accent": "#F97316"}, "fonts": {"heading": "Inter", "body": "Inter"}}'::jsonb,
  ARRAY['agency', 'creative', 'portfolio'],
  false,
  true,
  NOW(),
  NOW()
);
```

### Step 4: Format the JSON Properly

**IMPORTANT**: The JSON must be on a single line or properly escaped. Use a JSON minifier or format it inline.

❌ **Wrong** (multi-line JSON causes SQL errors):
```sql
layout = '{
  "sections": [
    {
      "id": "hero_1"
    }
  ]
}'::jsonb
```

✅ **Correct** (single-line JSON):
```sql
layout = '{"sections": [{"id": "hero_1", "type": "Hero", "order": 0, "props": {"title": "Hello"}}]}'::jsonb
```

### Step 5: Handle Special Characters

- Escape single quotes by doubling them: `couldn't` → `could not` or `couldn''t`
- Avoid special unicode that might cause issues
- Use standard ASCII where possible

---

## Pushing to Database

### Method 1: Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste your migration SQL
4. Click **Run**
5. Verify success in the results

### Method 2: Supabase CLI

```bash
# Login to Supabase
npx supabase login

# Link your project
npx supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
npx supabase db push
```

### Method 3: Direct Database Connection

```bash
# Using psql
psql -h YOUR_HOST -U postgres -d postgres -f supabase/migrations/20240120_agency_starter.sql
```

---

## Testing Your Template

### 1. Verify in Database

Run this query in Supabase SQL Editor:
```sql
SELECT name, slug, is_active FROM templates;
```

### 2. Check Templates Page

Visit: `http://localhost:3000/templates`

Your template should appear in the grid.

### 3. Preview the Template

Visit: `http://localhost:3000/templates/YOUR-SLUG`

Example: `http://localhost:3000/templates/agency-starter`

### 4. Test the Builder

Click "Use Template" and verify it loads in the builder at:
`http://localhost:3000/studio/builder?template=YOUR-SLUG`

---

## Best Practices

### Naming Conventions

| Field | Convention | Example |
|-------|------------|---------|
| `name` | Title Case | "Agency Starter" |
| `slug` | kebab-case | "agency-starter" |
| `section.id` | type_number | "hero_1", "features_2" |
| `tags` | lowercase | ["agency", "creative"] |

### Section IDs

Always use unique IDs with the pattern: `{type}_{number}`
- `hero_1`
- `features_1`
- `testimonials_1`
- `cta_1`

### Section Order

Use sequential `order` values starting from 0:
```json
{ "id": "hero_1", "order": 0 },
{ "id": "features_1", "order": 1 },
{ "id": "pricing_1", "order": 2 }
```

### Theme Colors

Use hex colors with good contrast:
```json
{
  "primary": "#6D28D9",    // Main brand color
  "secondary": "#4C1D95",  // Darker/lighter variant
  "background": "#0F0222", // Page background
  "text": "#FFFFFF",       // Main text color
  "accent": "#22C55E"      // CTA/highlight color
}
```

### Testing Checklist

- [ ] Template appears in `/templates` page
- [ ] Preview renders correctly at `/templates/[slug]`
- [ ] "Use Template" loads in builder
- [ ] All sections render without errors
- [ ] Theme colors apply correctly
- [ ] Mobile responsive layout works
- [ ] No console errors

---

## Quick Reference

### File Locations

| File | Purpose |
|------|---------|
| `supabase/migrations/*.sql` | Template SQL files |
| `components/sections/*.tsx` | Section components |
| `components/renderer/DynamicRenderer.tsx` | Component registry |
| `app/templates/page.tsx` | Templates listing page |
| `app/templates/[slug]/page.tsx` | Template preview page |
| `lib/services/templateService.ts` | Database operations |

### Common Issues

| Issue | Solution |
|-------|----------|
| SQL syntax error near `{` | Minify JSON to single line |
| Template not showing | Check `is_active = true` |
| Component not rendering | Verify type is registered in DynamicRenderer |
| Props not working | Check prop names match component interface |

---

## Example: Complete Template

See `supabase/migrations/20240115_websphere_template.sql` for a full working example of the WebSphere Hosting template.

---

## Need Help?

1. Check the component source files in `components/sections/`
2. Review existing templates in the database
3. Test props in the builder before writing SQL
