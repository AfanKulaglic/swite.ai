# Logo-Inspired Design System

## Design Philosophy
Based on the SWITE.AI logo, the design system emphasizes:
- **Clean Geometry**: Spider web corner pattern as a recurring motif
- **Modern Minimalism**: Simple, bold, uncluttered layouts
- **Blue-Purple Gradient**: Primary brand colors from the logo
- **High Contrast**: White/light text on dark backgrounds
- **Rounded Corners**: Consistent with the logo's rounded square shape

## Color Palette

### Primary Colors
- **Blue Primary**: `#4169E1` (Royal Blue)
- **Purple Primary**: `#6B46C1` (Medium Purple)
- **Gradient**: `from-[#4169E1] to-[#6B46C1]`

### Background Colors
- **Dark Base**: `#0A0A0A` (Near Black)
- **Dark Secondary**: `#1A1A1A`
- **Dark Tertiary**: `#2A2A2A`

### Accent Colors
- **White**: `#FFFFFF`
- **Light Gray**: `#E5E5E5`
- **Medium Gray**: `#A0A0A0`
- **Blue Glow**: `rgba(65, 105, 225, 0.3)`
- **Purple Glow**: `rgba(107, 70, 193, 0.3)`

## Typography

### Font Sizes
- **Hero**: `text-6xl` to `text-8xl` (60-96px)
- **H1**: `text-5xl` (48px)
- **H2**: `text-4xl` (36px)
- **H3**: `text-3xl` (30px)
- **Body Large**: `text-xl` (20px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)

### Font Weights
- **Black**: `font-black` (900) - For headlines
- **Bold**: `font-bold` (700) - For emphasis
- **Semibold**: `font-semibold` (600) - For subheadings
- **Normal**: `font-normal` (400) - For body text

## Spacing System
- **Section Padding**: `py-24` to `py-32`
- **Container Max Width**: `max-w-7xl`
- **Grid Gaps**: `gap-8` to `gap-12`
- **Card Padding**: `p-8` to `p-12`

## Component Patterns

### Spider Web Corner Decoration
```tsx
<div className="absolute top-0 right-0 w-32 h-32 opacity-20">
  {/* Spider web SVG in corner */}
</div>
```

### Gradient Cards
- Background: `bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10`
- Border: `border border-[#4169E1]/20`
- Rounded: `rounded-3xl`
- Backdrop: `backdrop-blur-xl`

### Buttons
- Primary: `bg-gradient-to-r from-[#4169E1] to-[#6B46C1]`
- Hover: `hover:shadow-lg hover:shadow-[#4169E1]/50`
- Rounded: `rounded-2xl`
- Padding: `px-8 py-4`

### Glow Effects
- Box Shadow: `shadow-2xl shadow-[#4169E1]/20`
- Hover Glow: `group-hover:shadow-[#4169E1]/40`

## Layout Principles

### Hero Sections
- Full viewport height
- Centered content
- Large bold typography
- Gradient backgrounds
- Spider web decoration in corner

### Content Sections
- Alternating backgrounds (black to dark gray gradients)
- Consistent vertical spacing
- Max-width containers
- Grid-based layouts

### Cards
- Rounded corners (rounded-3xl)
- Subtle gradients
- Border glow on hover
- Backdrop blur effects
- Spider web accents

## Animation Guidelines
- Smooth transitions: `transition-all duration-500`
- Hover scale: `hover:scale-105`
- Fade in on scroll
- Glow pulse effects
- Subtle floating animations

## Accessibility
- High contrast ratios (white on dark)
- Focus states with blue outline
- Reduced motion support
- Semantic HTML
- ARIA labels where needed
