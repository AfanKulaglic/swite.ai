# SWITE.AI - AI Website Builder

Professional AI-powered website builder platform. Create, customize, and deploy websites with a component-based architecture.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Database**: Supabase (PostgreSQL + pgvector)
- **Storage**: Supabase Storage

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
swite.ai/
├── app/                        # Next.js App Router pages
│   ├── templates/              # Template browsing & preview
│   ├── studio/                 # Website builder
│   └── ...                     # Other pages
├── components/
│   ├── sections/               # Reusable page sections
│   ├── renderer/               # DynamicRenderer for JSON→React
│   ├── ui/                     # UI components
│   └── layout/                 # Navbar, Footer
├── lib/
│   ├── services/               # Database services
│   └── supabase/               # Supabase client & types
├── supabase/
│   ├── migrations/             # SQL migrations
│   └── seed/                   # Sample data
├── public/
│   └── templates/              # Static template assets
└── docs/                       # Documentation
```

## Key Features

### Template System
- Database-driven templates with JSON layout
- Dynamic rendering with React components
- Theme customization (colors, fonts)
- Category and tag filtering

### Builder
- Visual website editor
- Component library
- Real-time preview
- Section management (add, delete, reorder)

### Authentication
- Supabase Auth integration
- Email/password authentication
- Protected routes and dashboard

## Documentation

| Document | Description |
|----------|-------------|
| [CREATING_TEMPLATES.md](docs/CREATING_TEMPLATES.md) | Complete guide to creating templates |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture overview |
| [QUICK-REFERENCE.md](docs/QUICK-REFERENCE.md) | Quick reference for services and components |

## Available Components

Section components that can be used in templates:

| Component | Description |
|-----------|-------------|
| `Hero` | Landing hero with CTA buttons |
| `FeatureGrid` | Feature cards grid |
| `Stats` | Statistics/metrics display |
| `Pricing` | Pricing cards |
| `Testimonials` | Customer testimonials |
| `CTA` | Call-to-action section |
| `FAQ` | Accordion FAQ |
| `TrustBadges` | Brand/partner logos |
| `DomainSearch` | Domain search input |
| `FooterSection` | Full footer with links |
| `Portfolio` | Project showcase |
| `About` | About section |
| `ContactForm` | Contact form |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Database Setup

1. Create a Supabase project at https://supabase.com
2. Run the migration in `supabase/migrations/001_initial_schema.sql`
3. Add templates using SQL files in `supabase/migrations/`

## License

Private - All rights reserved
