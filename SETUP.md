# Setup Instructions for Swite.ai

## Prerequisites

Make sure you have Node.js installed (v18 or higher recommended).

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- GSAP (for animations)
- TypeScript
- All necessary dev dependencies

### 2. Run Development Server

After installation completes, start the dev server:

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### 3. Optional: Add Satoshi Font

The design uses Satoshi font. To add it:

1. Download Satoshi from: https://www.fontshare.com/fonts/satoshi
2. Place font files in `public/fonts/satoshi/`
3. Update `app/layout.tsx` to import the font

For now, the site will use Inter (from Google Fonts) as the fallback.

## Project Structure

```
swite.ai/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Landing page with hero
│   ├── features/          # Features showcase
│   ├── how-it-works/      # Process timeline
│   ├── templates/         # Template gallery
│   ├── pricing/           # Pricing plans
│   ├── blog/              # Blog listing
│   ├── contact/           # Contact form
│   ├── login/             # Login UI
│   ├── signup/            # Signup UI
│   └── dashboard/         # Dashboard placeholder
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── hero/              # Hero section
│   ├── features/          # Feature blocks
│   ├── pricing/           # Pricing cards
│   └── ui/                # Button, Badge, Arrow
└── public/                # Static assets

```

## Available Pages

Once running, visit these pages:

- **/** - Landing page with animated hero
- **/features** - AI features with scroll animations
- **/how-it-works** - 4-step process timeline
- **/templates** - Template gallery with filters
- **/pricing** - Pricing plans (Free, Pro, Business)
- **/blog** - Blog listing
- **/contact** - Contact form
- **/login** - Login page
- **/signup** - Signup page
- **/dashboard** - Placeholder (locked)

## Design System

### Colors (Tailwind)
- `bg-brand` - Neon green (#E6FF00)
- `bg-black` - Dark background (#0A0A0A)
- `bg-accentBlue` - Blue accent (#4D9FFF)
- `bg-accentPurple` - Purple accent (#B56BFF)
- `text-muted` - Muted text (#A3A3A3)

### Typography
- All headings are UPPERCASE
- Font weights: 800-900 (font-black)
- Tight tracking (tracking-tight)

### Components
- `<Button>` - Primary/secondary CTAs
- `<Badge>` - Small labels with variants
- `<FeatureBlock>` - Feature sections with animations
- `<PricingCard>` - Pricing plan cards

## Next Steps

### Immediate
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000

### Future Enhancements (Not Implemented Yet)
- Supabase authentication
- Dashboard builder UI
- AI prompt input system
- Live preview editor
- Real template customization

## Troubleshooting

### PowerShell Execution Policy Error
If you see a script execution error on Windows, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Already in Use
If port 3000 is busy, Next.js will automatically try 3001, 3002, etc.

### Module Not Found
Make sure you ran `npm install` first.

## Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

Or deploy to Vercel (recommended for Next.js):
```bash
vercel
```

---

**Questions?** Check the main README.md or the documentation links in the design doc.
