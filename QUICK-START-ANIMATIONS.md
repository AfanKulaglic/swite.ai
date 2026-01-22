# Quick Start: GSAP Scroll Animations

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install GSAP 3.12.5 which is already configured in package.json.

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: View the Animated Page
Open your browser and navigate to:
```
http://localhost:3000/animated
```

## 🎨 What You'll See

### 1. Animated Hero
- Full-screen hero with gradient text
- Parallax background orbs
- Smooth fade out on scroll
- Scroll indicator

### 2. Text Reveal
- Line-by-line text animation
- Large typography with gradients
- Parallax background

### 3. Pinned Section
- Section pins while scrolling
- 4 feature cards animate in sequentially
- Previous cards fade as new ones appear

### 4. Parallax Section
- Multi-layer floating orbs
- 3-step process cards
- Different parallax speeds

### 5. Horizontal Scroll
- Scroll vertically to move horizontally
- 5 project cards with stats
- Smooth transitions

### 6. Final CTA
- Conversion-focused section
- Stats grid
- Call-to-action buttons

## 📁 Key Files

### Components
- `components/animated/AnimatedHero.tsx`
- `components/animated/PinnedSection.tsx`
- `components/animated/HorizontalScroll.tsx`
- `components/animated/TextReveal.tsx`
- `components/animated/ParallaxSection.tsx`

### Utilities
- `lib/gsap-utils.ts` - Reusable animation functions
- `hooks/useGSAP.ts` - React hooks for animations

### Page
- `app/animated/page.tsx` - Main animated page

## 🛠️ Customization

### Change Colors
Edit the gradient colors in any component:
```tsx
// From
from-[#4169E1] to-[#6B46C1]

// To your colors
from-[#YOUR_COLOR] to-[#YOUR_COLOR]
```

### Adjust Animation Speed
Modify the `duration` or `scrub` values:
```tsx
// Faster
duration: 0.5

// Slower
duration: 2

// Scroll-linked (1 = smooth)
scrub: 1
```

### Change Parallax Speed
Adjust the `yPercent` value:
```tsx
// Slower parallax
yPercent: 15

// Faster parallax
yPercent: 50
```

## 🎯 Use Individual Components

Import any component into your own pages:

```tsx
import AnimatedHero from '@/components/animated/AnimatedHero';

export default function MyPage() {
  return (
    <main>
      <AnimatedHero />
      {/* Your other content */}
    </main>
  );
}
```

## 📚 Learn More

See `ANIMATION-IMPLEMENTATION-COMPLETE.md` for:
- Detailed technical documentation
- All available utilities and hooks
- Performance optimization tips
- Advanced customization options

## ⚡ Performance Tips

1. **Scrub animations** are linked to scroll (60fps)
2. **Context API** handles cleanup automatically
3. **Batch animations** for multiple elements
4. **Lazy loading** - GSAP only loads client-side

## 🎨 Design System

**Colors:**
- Blue: `#4169E1`
- Purple: `#6B46C1`
- Background: `#0A0A0A`

**Typography:**
- Hero: 7xl-9xl
- Headings: 6xl-7xl
- Body: xl-2xl

**Animations:**
- Duration: 0.3s-1.2s
- Easing: power3.out, power4.out

## 🔗 Navigation

The animated page is accessible from the navbar:
- Click "Animated" in the navigation menu
- Or go directly to `/animated`

## ✅ Status

Everything is ready to use! Just run `npm install` and `npm run dev`.

Enjoy your high-end scroll-driven animations! 🎉
