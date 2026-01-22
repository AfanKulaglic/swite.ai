# Minimalist Design Quick Reference

## 🎨 Design System

### Colors
```css
/* Primary */
--black: #000000;
--white: #FFFFFF;

/* Opacity Scale */
white/5   → rgba(255, 255, 255, 0.05)  /* Hairline borders */
white/10  → rgba(255, 255, 255, 0.10)  /* Subtle borders */
white/20  → rgba(255, 255, 255, 0.20)  /* Visible elements */
white/30  → rgba(255, 255, 255, 0.30)  /* Secondary text */
white/40  → rgba(255, 255, 255, 0.40)  /* Body text */
white/60  → rgba(255, 255, 255, 0.60)  /* Interactive elements */
white/80  → rgba(255, 255, 255, 0.80)  /* Primary text */
```

### Typography
```css
/* Sizes */
Hero:        clamp(3rem, 8vw, 7rem)  /* 48px-112px */
H2:          text-5xl                 /* 48px */
H3:          text-2xl to text-3xl    /* 24px-30px */
Body Large:  text-lg                  /* 18px */
Body:        text-sm                  /* 14px */
Small:       text-xs                  /* 12px */

/* Weights */
Primary:     font-light (300)
Emphasis:    font-medium (500)
```

### Spacing
```css
/* Sections */
Major:   py-32  /* 128px */
Minor:   py-24  /* 96px */

/* Cards */
Large:   p-12   /* 48px */
Medium:  p-8    /* 32px */

/* Gaps */
XL:      gap-20 /* 80px */
Large:   gap-16 /* 64px */
Medium:  gap-8  /* 32px */
Small:   gap-4  /* 16px */
Hairline: gap-px /* 1px */
```

### Transitions
```css
Quick:   duration-300  /* Buttons, links */
Medium:  duration-500  /* Cards, overlays */
```

## 📐 Layout Patterns

### Grid System
```jsx
/* Feature Grid */
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
  {/* Cards with hairline borders */}
</div>

/* Metrics Grid */
<div className="grid grid-cols-2 gap-px bg-white/5">
  {/* 2x2 stats */}
</div>
```

### Flex Patterns
```jsx
/* Centered Content */
<div className="flex items-center justify-center">

/* Horizontal Stats */
<div className="flex items-center justify-center gap-16">

/* Vertical Stack */
<div className="flex flex-col gap-4">
```

## 🎯 Component Patterns

### Minimal Badge
```jsx
<div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full">
  <div className="w-1.5 h-1.5 rounded-full bg-white" />
  <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
    Label
  </span>
</div>
```

### Section Label
```jsx
<div className="text-xs text-white/30 tracking-widest uppercase mb-8">
  Section Name
</div>
```

### Minimal Button
```jsx
/* Primary */
<button className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300">
  Button Text
</button>

/* Secondary */
<button className="px-8 py-4 border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:border-white/20 transition-all duration-300">
  Button Text
</button>
```

### Feature Card
```jsx
<div className="group relative bg-black p-12 hover:bg-white/[0.02] transition-all duration-500">
  {/* Hover gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  <div className="relative">
    {/* Number */}
    <div className="text-xs text-white/20 font-light mb-8">01</div>
    
    {/* Title */}
    <h3 className="text-xl font-medium mb-3">Title</h3>
    
    {/* Description */}
    <p className="text-sm text-white/40 leading-relaxed mb-6 font-light">
      Description text
    </p>
    
    {/* Metric */}
    <div className="inline-block px-3 py-1 border border-white/10 text-xs text-white/60 font-medium">
      Metric
    </div>
  </div>

  {/* Corner accent */}
  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
```

### Stat Card
```jsx
<div className="bg-black p-8">
  <div className="text-4xl font-light mb-2">50,000+</div>
  <div className="text-xs text-white/30 tracking-wider uppercase">Label</div>
</div>
```

### Timeline Step
```jsx
<div className="group relative pl-24">
  {/* Step number */}
  <div className="absolute left-0 top-0 text-6xl font-light text-white/10 group-hover:text-white/20 transition-colors duration-500">
    01
  </div>
  
  {/* Content */}
  <div>
    <h3 className="text-2xl font-medium mb-3">Title</h3>
    <p className="text-white/40 font-light leading-relaxed">Description</p>
  </div>

  {/* Connecting line */}
  <div className="absolute left-8 top-20 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
</div>
```

## 🎬 Animation Patterns

### Parallax Scroll
```jsx
const heroRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (heroRef.current) {
      heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroRef.current.style.opacity = `${1 - scrolled / 800}`;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Hover States
```css
/* Card hover */
hover:bg-white/[0.02]

/* Text hover */
hover:text-white (from white/60)

/* Border hover */
hover:border-white/20 (from white/10)

/* Button hover */
hover:bg-white/90 (from white)
```

## 🎨 Background Patterns

### Subtle Grid
```jsx
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
```

### Accent Lines
```jsx
/* Vertical */
<div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent" />

/* Horizontal */
<div className="h-px w-32 bg-gradient-to-r from-white/20 to-transparent" />
```

### Dividers
```jsx
/* Section divider */
<div className="border-t border-white/5" />

/* Vertical divider */
<div className="w-px h-8 bg-white/10" />
```

## 📱 Responsive Patterns

### Breakpoints
```jsx
/* Mobile first */
className="text-3xl md:text-4xl lg:text-5xl"

/* Grid responsive */
className="grid md:grid-cols-2 lg:grid-cols-3"

/* Flex responsive */
className="flex flex-col sm:flex-row"
```

### Clamp for Fluid Typography
```jsx
/* Hero headline */
text-[clamp(3rem,8vw,7rem)]

/* Scales from 48px to 112px based on viewport */
```

## ✅ Do's and Don'ts

### ✅ DO
- Use pure black and white
- Embrace whitespace
- Keep typography light
- Use subtle hover states
- Maintain consistent spacing
- Focus on content
- Use hairline borders (1px)
- Keep animations minimal

### ❌ DON'T
- Add colors or gradients
- Clutter the layout
- Use bold or black fonts
- Add heavy animations
- Reduce whitespace
- Add decorative elements
- Use thick borders
- Overuse effects

## 🎯 Key Principles

1. **Restraint** - Less is always more
2. **Precision** - Mathematical spacing
3. **Clarity** - Clear visual hierarchy
4. **Consistency** - Predictable patterns
5. **Performance** - Fast and efficient
6. **Accessibility** - Readable and usable
7. **Timelessness** - Won't look dated

## 📊 Checklist

Before shipping, verify:
- [ ] Only black and white colors used
- [ ] Font weights are light or medium only
- [ ] Spacing follows the system (4, 8, 12, 16, 20, 24, 32)
- [ ] Transitions are 300ms or 500ms
- [ ] Hover states are subtle
- [ ] No decorative elements
- [ ] Typography is readable
- [ ] Layout is clean and uncluttered
- [ ] Performance is optimized
- [ ] Responsive on all devices

## 🚀 Quick Start

```bash
# View the design
npm run dev

# Visit
http://localhost:3000
```

## 📚 Resources

### Inspiration
- Apple product pages
- Linear landing page
- Stripe documentation
- Vercel homepage
- Swiss design principles

### Tools
- Tailwind CSS (utility classes)
- React (component framework)
- Next.js (routing and SSR)

---

**Remember**: Every element must earn its place. If it doesn't serve a clear purpose, remove it.
