# SWITE.AI - Professional AI Website Builder

Enterprise-grade website building platform powered by advanced AI. Create, customize, and deploy professional websites without technical expertise.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Future Backend**: Supabase (prepared, not implemented yet)

## Key Features

### AI-Powered Generation
- Complete website generation in under 30 seconds
- Industry-specific templates and content
- SEO-optimized structure and content
- Responsive design for all devices

### Professional Tools
- Visual drag-and-drop editor
- Real-time preview and editing
- Component library (200+ elements)
- Global style management
- Version control and rollback

### Enterprise Infrastructure
- Global CDN with 200+ edge locations
- Automatic SSL/TLS certificates
- 99.9% uptime SLA
- DDoS protection and WAF security
- Daily automated backups

### Advanced Capabilities
- Built-in analytics and insights
- A/B testing and optimization
- 150+ third-party integrations
- API and webhook support
- Team collaboration tools
- White-label options

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Landing page
│   ├── features/          # Features showcase
│   ├── how-it-works/      # Platform workflow
│   ├── templates/         # Template gallery
│   ├── pricing/           # Pricing plans
│   ├── blog/              # Blog and articles
│   ├── contact/           # Contact form
│   ├── login/             # Authentication UI
│   ├── signup/            # Registration UI
│   └── dashboard/         # Dashboard (placeholder)
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── hero/              # Hero section
│   ├── home/              # Landing page sections
│   ├── features/          # Feature blocks
│   ├── pricing/           # Pricing cards
│   └── ui/                # Reusable UI components
└── public/                # Static assets
```

## Design System

### Colors
- **Brand**: `#E6FF00` (Neon green) - Primary CTAs and highlights
- **Black**: `#0A0A0A` - Background
- **White**: `#FFFFFF` - Text
- **Accent Blue**: `#4D9FFF` - Secondary accents
- **Accent Purple**: `#B56BFF` - Secondary accents
- **Muted**: `#A3A3A3` - Secondary text

### Typography
- **Font**: Satoshi (fallback: Inter, System Sans)
- **Style**: Uppercase headings, bold weights (800-900), tight tracking
- **Approach**: Neo-brutalist with high contrast

### Components
- `<Button>` - Primary/secondary CTAs with hover effects
- `<Badge>` - Category labels (brand/blue/purple variants)
- `<FeatureBlock>` - Feature sections with details
- `<PricingCard>` - Pricing plan cards with features

## Pages

### Marketing Pages
- `/` - Landing page with hero, features, testimonials
- `/features` - Comprehensive feature showcase (10 major features)
- `/how-it-works` - 4-step workflow with timeline
- `/templates` - Template gallery (9 templates, 10 categories)
- `/pricing` - Pricing plans with comparison table
- `/blog` - Blog listing with categories
- `/blog/[slug]` - Individual blog posts
- `/contact` - Contact form with multiple methods

### Application Pages
- `/login` - User authentication
- `/signup` - User registration
- `/dashboard` - Dashboard (placeholder for future development)

## Content Highlights

### Landing Page Sections
1. Hero with value proposition
2. Stats (50K+ websites, 99.9% uptime, <20s generation)
3. Platform features preview
4. Workflow overview
5. Professional testimonials (6 customers)
6. CTA section

### Features Page
- 10 detailed feature blocks with bullet points
- 12 additional capabilities
- 150+ integrations showcase
- Enterprise-grade infrastructure details

### How It Works
- 4-step detailed workflow
- Project timeline breakdown
- 6 comprehensive FAQs
- Video demo section

### Pricing
- 3 plans (Free, Pro, Business)
- Monthly/Yearly toggle
- Feature comparison table
- 6 pricing FAQs
- Enterprise contact section

## Future Development

### Phase 1 (Current)
- ✅ Complete marketing website
- ✅ Professional content and copy
- ✅ Responsive design system
- ✅ SEO-optimized structure

### Phase 2 (Planned)
- Supabase authentication
- User dashboard
- AI generation interface
- Visual website builder
- Template customization

### Phase 3 (Future)
- Live preview editor
- Team collaboration
- API and webhooks
- White-label features
- Advanced analytics

## Performance

- Optimized for Core Web Vitals
- Responsive design (mobile-first)
- Semantic HTML structure
- Accessibility compliant (WCAG 2.1 AA)
- SEO-optimized meta tags

## License

Proprietary - All rights reserved

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**
