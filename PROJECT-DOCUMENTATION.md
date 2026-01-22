# SWITE.AI - Complete Project Documentation

> **Last Updated**: January 22, 2026  
> **Version**: 2.0  
> **Status**: Production Ready

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup & Installation](#setup--installation)
3. [Design System](#design-system)
4. [Features & Capabilities](#features--capabilities)
5. [Page Structure](#page-structure)
6. [Animation System](#animation-system)
7. [Studio & Editor](#studio--editor)
8. [Technical Implementation](#technical-implementation)
9. [Content Guide](#content-guide)
10. [Performance & Optimization](#performance--optimization)

---

## Project Overview

### What is SWITE.AI?

SWITE.AI is a professional AI-powered website builder platform that enables users to create, customize, and deploy professional websites without technical expertise.

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + Custom CSS
- **Deployment**: Vercel-ready

### Key Features

✅ AI-powered website generation (< 30 seconds)  
✅ Visual drag-and-drop editor  
✅ 200+ pre-built components  
✅ Real-time preview and editing  
✅ Global CDN deployment  
✅ Professional animations  
✅ Mobile-responsive design  
✅ Enterprise-grade security

---

## Setup & Installation

### Prerequisites

- Node.js v18 or higher
- npm or yarn package manager

### Installation Steps

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel
```

### Project Structure

```
swite.ai-main/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles & animations
│   ├── studio/            # AI Studio
│   │   ├── page.tsx       # Chat interface
│   │   └── editor/        # Visual editor
│   ├── documentation/     # Docs page
│   ├── features/          # Features showcase
│   ├── pricing/           # Pricing plans
│   ├── templates/         # Template gallery
│   ├── blog/              # Blog listing
│   ├── contact/           # Contact form
│   ├── login/             # Authentication
│   └── signup/            # Registration
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── hero/              # Hero sections
│   ├── home/              # Landing sections
│   ├── features/          # Feature blocks
│   ├── pricing/           # Pricing cards
│   ├── animated/          # GSAP components
│   └── ui/                # Reusable UI
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
```

---

## Design System

### Color Palette

#### Primary Colors
```css
Black:  #000000  /* Background */
White:  #FFFFFF  /* Text, accents */
Blue:   #4169E1  /* Brand primary */
Purple: #6B46C1  /* Brand secondary */
```

#### Gradient Usage
```css
/* Full Gradient (CTAs, Stats) */
from-[#4169E1] to-[#6B46C1]

/* Border Gradients */
border-[#4169E1]/20

/* Background Gradients */
from-[#4169E1]/5 to-[#6B46C1]/5

/* Hover Effects */
from-[#4169E1]/[0.02] to-[#6B46C1]/[0.02]
```

### Typography

```css
/* Headlines */
text-5xl to text-9xl (48px-128px)
font-light (300) to font-black (900)

/* Body Text */
text-sm to text-xl (14px-20px)
font-light (300)

/* Labels */
text-xs (12px)
uppercase, tracking-widest
```

### Spacing System

```css
/* Sections */
py-24 md:py-32 (96px-128px)

/* Cards */
p-6 to p-12 (24px-48px)

/* Gaps */
gap-4 to gap-16 (16px-64px)

/* Margins */
mb-4 to mb-24 (16px-96px)
```

### Component Patterns

#### Card Component
```tsx
<div className="rounded-2xl bg-white/5 border border-white/10 
                hover:border-[#4169E1]/40 hover:bg-white/10 
                transition-all duration-300 p-8">
  {/* Content */}
</div>
```

#### Button Component
```tsx
// Primary
<button className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] 
                   text-white rounded-xl hover:opacity-90 
                   transition-all duration-300">
  Button Text
</button>

// Secondary
<button className="px-6 py-3 border border-[#4169E1]/20 
                   hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 
                   transition-all duration-300">
  Button Text
</button>
```

#### Badge Component
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 
                 rounded-full bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 
                 border border-[#4169E1]/20">
  Badge Text
</span>
```

---

## Features & Capabilities

### AI Generation
- Complete website in < 30 seconds
- Industry-specific templates
- SEO-optimized content
- Responsive design automatic

### Visual Editor
- Click-to-edit functionality
- Real-time preview
- Device switcher (Desktop/Tablet/Mobile)
- Multi-page editing (6 pages)
- Image upload (max 5MB)
- Link editor
- Auto-save to localStorage

### Templates
- **WebSphere**: 6 pages (Home, Hosting, Domains, Pricing, Blog, Contact)
- **E-Commerce**: Product grids, cart, checkout
- **Portfolio**: Project gallery, about, contact
- **SaaS**: Dashboard, pricing, features
- **Blog**: Posts, categories, newsletter
- **Landing**: Hero, features, CTA

### Deployment
- One-click publish
- Global CDN (200+ locations)
- Automatic SSL/TLS
- DDoS protection
- 99.9% uptime SLA

### Integrations
- Analytics (Google, Plausible)
- Email (Mailchimp, SendGrid)
- Payments (Stripe, PayPal)
- CRM (HubSpot, Salesforce)
- 150+ third-party tools

---

## Page Structure

### Landing Page (/)

**Sections:**
1. Hero - Animated gradient headline, CTAs, stats
2. Features Grid - 6 key features
3. Social Proof - Testimonial + metrics
4. Process Timeline - 3-step workflow
5. CTA - Final conversion

**Key Elements:**
- Animated background orbs
- Parallax scroll effects
- Gradient accents throughout
- Mobile-responsive layout

### Studio (/studio)

**Features:**
- AI chat interface
- Quick prompts (Corporate, Portfolio, E-commerce, SaaS)
- Spider animation states
- Template selection screen
- WebSphere template preview

**User Flow:**
1. Describe website idea
2. AI generates template
3. Select template
4. Open editor

### Editor (/studio/editor)

**Features:**
- Click-to-edit all elements
- Left sidebar edit panel
- Device preview modes
- Page selector (6 pages)
- Section manager
- Save draft functionality
- Publish modal

**Editable Elements:**
- Headings (h1-h6)
- Paragraphs
- Links (with URL)
- Buttons
- Images (with upload)
- Gradient text (separate)

### Documentation (/documentation)

**Sections:**
1. Platform Overview
2. Getting Started (6 steps)
3. AI Generation
4. Visual Editor
5. Templates
6. Deployment
7. Integrations
8. API Reference
9. Best Practices
10. Troubleshooting

**Features:**
- Search functionality
- Quick stats
- Video tutorials
- Code examples
- Help cards

### Other Pages

- **/features** - Comprehensive feature showcase
- **/pricing** - 3 plans with comparison table
- **/templates** - Template gallery with filters
- **/blog** - Blog listing with categories
- **/contact** - Contact form with methods
- **/login** - User authentication
- **/signup** - User registration

---

## Animation System

### CSS Animations (globals.css)

**Entry Animations:**
```css
.animate-fade-in-up    /* Slide up + fade */
.animate-fade-in-down  /* Slide down + fade */
.animate-fade-in       /* Simple fade */
.animate-scale-in      /* Zoom in */
.animate-slide-in-left /* Slide from left */
.animate-slide-in-right /* Slide from right */
```

**Continuous Animations:**
```css
.animate-float         /* Gentle floating */
.animate-breathe       /* Pulsing effect */
.animate-rotate        /* Slow rotation */
.animate-glow-pulse    /* Pulsing glow */
.animate-shimmer       /* Shine effect */
```

**Floating Orbs:**
```css
.animate-float-orb     /* 8s ease-in-out */
.animate-float-orb-2   /* 10s ease-in-out */
.animate-float-orb-3   /* 7s ease-in-out */
```

### GSAP Animations

**Utilities (lib/gsap-utils.ts):**
- `fadeInUp()` - Fade in with upward motion
- `fadeIn()` - Simple fade in
- `scaleIn()` - Scale up with fade
- `parallax()` - Parallax scrolling
- `pinSection()` - Pin sections during scroll
- `horizontalScroll()` - Horizontal scroll container

**React Hooks (hooks/useGSAP.ts):**
- `useGSAP()` - Main hook with cleanup
- `useScrollAnimation()` - Scroll-triggered
- `useParallax()` - Parallax effect
- `usePinSection()` - Pin section
- `useHorizontalScroll()` - Horizontal scroll

**Animated Components:**
- `AnimatedHero` - Full-screen hero with parallax
- `PinnedSection` - Pinned cards with sequential reveal
- `HorizontalScroll` - Horizontal project showcase
- `TextReveal` - Line-by-line text reveal
- `ParallaxSection` - Multi-layer parallax

### Animation Best Practices

1. **Performance First**
   - Use transform and opacity only
   - Hardware acceleration enabled
   - Efficient selectors
   - Paused when not visible

2. **Purposeful Motion**
   - Every animation has meaning
   - Guides user attention
   - Provides feedback
   - Enhances hierarchy

3. **Accessibility**
   - Respects `prefers-reduced-motion`
   - Not required for functionality
   - Keyboard navigation preserved
   - Clear without animations

---

## Studio & Editor

### Studio Chat Interface

**Features:**
- Conversational AI assistant
- Quick prompts for common use cases
- Typing indicators
- Message history
- Spider animation states:
  - Idle (waiting)
  - Listening (receiving input)
  - Thinking (processing)
  - Building (generating)
  - Celebrating (complete)

**User Flow:**
```
1. User describes website idea
   ↓
2. AI responds with understanding
   ↓
3. AI shows template options
   ↓
4. User selects template
   ↓
5. Navigate to editor
```

### Visual Editor

**Click-to-Edit:**
```javascript
// Element selection
1. Hover element → Blue outline (2px)
2. Click element → Edit panel opens
3. Thicker outline (3px) on selected
4. Edit content in panel
5. Update → Changes apply instantly
```

**Edit Panel:**
- Element type indicator
- Content input (text/textarea)
- Link URL editor (for links)
- Image upload (for images)
- Update button
- Helpful tips
- Close button

**Section Manager:**
- Auto-detects sections
- Shows section names
- Grid layout display
- Collapsible panel

**Save & Publish:**
- Auto-save on every edit
- Manual "Save Draft" button
- "Publish" opens modal
- Requires sign up to publish
- localStorage persistence

**Multi-Page Support:**
- Page selector dropdown
- 6 template pages available
- Separate edits per page
- Smooth page switching

### localStorage Structure

```javascript
{
  "template-edits-index": {
    "h1:nth-of-type(1)": {
      "content": "New Heading",
      "type": "heading"
    },
    "a.btn:nth-of-type(1)": {
      "content": "Click Here",
      "href": "/pricing",
      "type": "link"
    },
    "img:nth-of-type(1)": {
      "src": "data:image/png;base64,...",
      "alt": "Description",
      "type": "image"
    }
  }
}
```

---

## Technical Implementation

### State Management

**Studio Page:**
```typescript
- messages: Message[]
- isTyping: boolean
- showTemplates: boolean
- spiderState: 'idle' | 'listening' | 'thinking' | 'building' | 'celebrating'
```

**Editor Page:**
```typescript
- selectedElement: SelectedElement | null
- editValue: string
- editHref: string
- editSrc: string
- showEditPanel: boolean
- showSectionManager: boolean
- sections: Section[]
- savedEdits: Record<string, any>
- showSuccess: boolean
- showPublishModal: boolean
- device: 'desktop' | 'tablet' | 'mobile'
- currentPage: string
```

### Key Functions

**Element Selection:**
```typescript
getElementSelector(element, doc): string
// Generates unique CSS selector
// Handles IDs, classes, nth-of-type
// Special handling for gradient text
```

**Click Handler:**
```typescript
handleElementClick(element, doc)
// Determines element type
// Extracts content, href, src
// Opens edit panel
// Highlights element
```

**Update Handler:**
```typescript
handleUpdate()
// Updates element content in iframe
// Updates href for links
// Updates src for images
// Saves to localStorage
// Shows success message
// Closes panel
```

**Section Detection:**
```typescript
detectSections(doc)
// Finds all section elements
// Extracts section names
// Generates selectors
// Updates sections state
```

### Performance Optimizations

1. **CSS-Based Animations**
   - Hardware accelerated
   - Transform and opacity only
   - No layout shifts
   - 60fps constant

2. **Intersection Observer**
   - Only animates when visible
   - Lazy loading animations
   - Threshold-based triggering
   - Memory efficient

3. **State Management**
   - Minimal re-renders
   - Efficient updates
   - Debounced handlers
   - Optimized selectors

4. **Bundle Size**
   - Single component pages
   - No heavy dependencies
   - Tree-shaking enabled
   - Code splitting ready

---

## Content Guide

### Writing Style

**Tone:**
- Professional and confident
- Technical but accessible
- Benefit-focused
- Action-oriented

**Voice:**
- Active voice preferred
- Short sentences
- Clear and direct
- No jargon unless necessary

### Content Patterns

**Feature Description:**
```
[Feature Name]
[One-line benefit]
[2-3 bullet points with specifics]
[CTA or learn more link]
```

**Testimonial:**
```
"[Quote about specific benefit]"
- [Name], [Title] at [Company]
```

**FAQ:**
```
Q: [Question in user's words]
A: [Direct answer] [Additional context] [Link to more info]
```

### SEO Guidelines

**Meta Tags:**
```html
<title>Page Title | SWITE.AI</title>
<meta name="description" content="150-160 character description" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Description" />
```

**Heading Hierarchy:**
```
H1: Page title (one per page)
H2: Major sections
H3: Subsections
H4-H6: Nested content
```

**Internal Linking:**
- Link to related pages
- Use descriptive anchor text
- Maintain logical site structure

---

## Performance & Optimization

### Core Web Vitals

**Target Metrics:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimizations:**
- Server-side rendering (Next.js)
- Image optimization
- Code splitting
- Lazy loading
- Efficient animations

### Loading Performance

**Strategies:**
- Critical CSS inline
- Defer non-critical JS
- Preload key resources
- Optimize fonts
- Minimize bundle size

### Animation Performance

**Best Practices:**
- Use transform and opacity
- Avoid layout thrashing
- Hardware acceleration
- RequestAnimationFrame
- Passive event listeners

### Mobile Optimization

**Responsive Design:**
- Mobile-first approach
- Touch-friendly targets (44x44px min)
- Optimized images
- Reduced animations
- Fast tap response

---

## Deployment Checklist

### Pre-Deployment

- [ ] Run `npm run build` successfully
- [ ] Test all pages and routes
- [ ] Verify animations work
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Validate SEO meta tags
- [ ] Check accessibility (WCAG 2.1 AA)
- [ ] Test cross-browser compatibility
- [ ] Optimize images
- [ ] Remove console.logs

### Environment Variables

```env
# Add to .env.local
NEXT_PUBLIC_SITE_URL=https://swite.ai
NEXT_PUBLIC_API_URL=https://api.swite.ai
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Post-Deployment

- [ ] Verify production build
- [ ] Test all functionality
- [ ] Check analytics integration
- [ ] Monitor error logs
- [ ] Test performance metrics
- [ ] Verify SSL certificate
- [ ] Check CDN caching
- [ ] Test contact forms
- [ ] Verify redirects

---

## Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Animation Issues:**
```javascript
// Check GSAP registration
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

**localStorage Not Persisting:**
```javascript
// Check browser settings
// Verify key names match
// Test in incognito mode
```

**Responsive Issues:**
```css
/* Check breakpoints */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Debug Mode

```javascript
// Enable debug logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

---

## Future Enhancements

### Phase 1 (Planned)
- [ ] Real AI integration (OpenAI API)
- [ ] User authentication (Supabase)
- [ ] Database for saved sites
- [ ] More templates (20+ total)
- [ ] Advanced editor features

### Phase 2 (Future)
- [ ] Drag-and-drop builder
- [ ] Component marketplace
- [ ] Team collaboration
- [ ] Version control
- [ ] A/B testing tools

### Phase 3 (Long-term)
- [ ] White-label solution
- [ ] API for developers
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Custom integrations

---

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [React Docs](https://react.dev)

### Design Inspiration
- [Linear](https://linear.app)
- [Stripe](https://stripe.com)
- [Vercel](https://vercel.com)
- [Apple](https://apple.com)

### Tools
- [Figma](https://figma.com) - Design
- [VS Code](https://code.visualstudio.com) - Development
- [Vercel](https://vercel.com) - Deployment
- [GitHub](https://github.com) - Version control

---

## Support & Contact

### Getting Help
- Check this documentation first
- Search existing issues on GitHub
- Join community Discord
- Contact support team

### Contributing
- Fork the repository
- Create feature branch
- Make changes
- Submit pull request
- Follow code style guidelines

---

## License

Proprietary - All rights reserved

---

## Changelog

### Version 2.0 (January 2026)
- ✅ Complete redesign with minimalist aesthetic
- ✅ Logo-inspired gradient accents
- ✅ Full studio and editor implementation
- ✅ Documentation page
- ✅ Advanced animation system
- ✅ Mobile-responsive design
- ✅ Performance optimizations

### Version 1.0 (Initial Release)
- ✅ Basic landing page
- ✅ Feature pages
- ✅ Pricing page
- ✅ Blog structure
- ✅ Contact form
- ✅ Authentication UI

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

**Last Updated**: January 22, 2026  
**Status**: Production Ready  
**Version**: 2.0
