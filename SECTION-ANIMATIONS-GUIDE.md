# Section Animations Guide

## Overview
Each section can have its own unique enter and exit animation, creating a dynamic and engaging scrolling experience where every section transition feels different and purposeful.

## Available Animations

### 1. **slide-up**
- **Enter**: Slides up from bottom with slight scale
- **Exit**: Slides up and away with scale increase
- **Best for**: Standard content sections, features
- **Feel**: Clean, professional

### 2. **slide-down**
- **Enter**: Slides down from top with slight scale
- **Exit**: Slides down and away
- **Best for**: Headers, announcements
- **Feel**: Dramatic entrance

### 3. **slide-left**
- **Enter**: Slides in from right side
- **Exit**: Slides out to left side
- **Best for**: Timeline sections, before/after
- **Feel**: Directional, progressive

### 4. **slide-right**
- **Enter**: Slides in from left side
- **Exit**: Slides out to right side
- **Best for**: Portfolio items, galleries
- **Feel**: Smooth, lateral movement

### 5. **fade**
- **Enter**: Simple fade in, no movement
- **Exit**: Simple fade out
- **Best for**: Text-heavy sections, quotes
- **Feel**: Subtle, elegant

### 6. **zoom-in**
- **Enter**: Zooms in from small (70% scale)
- **Exit**: Zooms in further (150% scale)
- **Best for**: Hero sections, product showcases
- **Feel**: Bold, attention-grabbing

### 7. **zoom-out**
- **Enter**: Zooms in from large (130% scale)
- **Exit**: Zooms out to small (50% scale)
- **Best for**: Detailed content, specifications
- **Feel**: Revealing, focusing

### 8. **rotate-left**
- **Enter**: Rotates in from left with slide
- **Exit**: Rotates out to left
- **Best for**: Creative sections, portfolios
- **Feel**: Playful, dynamic

### 9. **rotate-right**
- **Enter**: Rotates in from right with slide
- **Exit**: Rotates out to right
- **Best for**: Team sections, testimonials
- **Feel**: Energetic, modern

### 10. **flip**
- **Enter**: 3D flip from bottom (90deg rotateX)
- **Exit**: 3D flip to top (-90deg rotateX)
- **Best for**: Cards, reveals, surprises
- **Feel**: Impressive, 3D depth

### 11. **scale-fade**
- **Enter**: Scales up from 85% with fade
- **Exit**: Scales down to 70% with fade
- **Best for**: CTAs, important messages
- **Feel**: Smooth, professional

### 12. **blur-in**
- **Enter**: Blurs in from 20px blur + scale
- **Exit**: Blurs out with scale down
- **Best for**: Image-heavy sections, galleries
- **Feel**: Cinematic, artistic

## Usage Example

```tsx
import FullPageSection from "@/components/ui/FullPageSection";

// Hero with zoom effect
<FullPageSection 
  enterAnimation="zoom-in"
  exitAnimation="zoom-out"
>
  <h1>Welcome</h1>
</FullPageSection>

// Features with slide
<FullPageSection 
  enterAnimation="slide-up"
  exitAnimation="slide-up"
>
  <div>Features content</div>
</FullPageSection>

// Creative section with rotation
<FullPageSection 
  enterAnimation="rotate-right"
  exitAnimation="rotate-left"
>
  <div>Portfolio items</div>
</FullPageSection>

// Dramatic flip effect
<FullPageSection 
  enterAnimation="flip"
  exitAnimation="flip"
>
  <div>Surprise content</div>
</FullPageSection>
```

## Animation Combinations

### Recommended Pairings

**Professional & Clean:**
- Enter: `slide-up` → Exit: `slide-up`
- Enter: `fade` → Exit: `zoom-out`
- Enter: `scale-fade` → Exit: `zoom-out`

**Dynamic & Energetic:**
- Enter: `zoom-in` → Exit: `zoom-out`
- Enter: `rotate-right` → Exit: `rotate-left`
- Enter: `slide-left` → Exit: `slide-right`

**Artistic & Creative:**
- Enter: `blur-in` → Exit: `zoom-in`
- Enter: `flip` → Exit: `flip`
- Enter: `rotate-left` → Exit: `zoom-out`

**Subtle & Elegant:**
- Enter: `fade` → Exit: `fade`
- Enter: `scale-fade` → Exit: `scale-fade`
- Enter: `slide-down` → Exit: `slide-up`

## Features Page Example

The Features page uses a variety of animations:

1. **Hero**: `zoom-in` → `zoom-out` (Bold entrance)
2. **AI-Powered**: `slide-up` → `slide-up` (Standard)
3. **Visual Editor**: `slide-left` → `slide-right` (Lateral)
4. **Performance**: `fade` → `zoom-out` (Subtle)
5. **Security**: `rotate-right` → `rotate-left` (Dynamic)
6. **Integrations**: `blur-in` → `zoom-in` (Artistic)
7. **Collaboration**: `flip` → `flip` (3D effect)
8. **CTA**: `scale-fade` → `zoom-out` (Professional)

## Technical Details

### Timing
- Duration: 0.9s
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth ease-out)
- Content delay: 0.2s (staggered effect)

### Transform Properties
- Uses `transform` for hardware acceleration
- Combines translate, scale, and rotate
- Preserves 3D for flip animations
- Filter effects for blur

### Performance
- GPU accelerated (transform, opacity, filter)
- No layout shifts
- Smooth 60fps animations
- Optimized paint operations

### Accessibility
- Respects `prefers-reduced-motion`
- Keyboard navigation preserved
- Screen reader friendly
- No functionality loss without animations

## Best Practices

### Do's ✅
- Use different animations for variety
- Match animation to content type
- Keep exit/enter animations complementary
- Test on different devices
- Consider content hierarchy

### Don'ts ❌
- Don't use same animation for all sections
- Don't use flip for every section (too much)
- Don't combine too many dramatic effects
- Don't ignore mobile performance
- Don't make animations too fast (<0.5s)

## Customization

### Creating New Animations

Add to `app/globals.css`:

```css
/* Custom animation - bounce in */
.fullpage-section[data-enter-animation="bounce-in"]:not(.active) {
  transform: translateY(100px) scale(0.5);
}

.fullpage-section[data-exit-animation="bounce-out"].exiting {
  opacity: 0;
  transform: translateY(-100px) scale(1.5);
}
```

Add to `FullPageSection.tsx` type:

```typescript
export type SectionAnimation = 
  | "slide-up"
  | "bounce-in"  // Add your new animation
  | ...
```

## Browser Support

### Full Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Partial Support (no 3D transforms)
- Older browsers get 2D fallbacks
- Animations still work, less dramatic

### Graceful Degradation
- `prefers-reduced-motion` users get simple fades
- No JavaScript required
- CSS-only implementation

## Performance Tips

1. **Limit blur animations** - Most expensive
2. **Use scale sparingly** - Can cause repaints
3. **Prefer translate** - Cheapest transform
4. **Test on mobile** - Lower-powered devices
5. **Monitor FPS** - Should stay at 60fps

## Result

Each section now has its own personality through unique animations:
- ✅ Variety keeps users engaged
- ✅ Smooth transitions between sections
- ✅ Professional and polished feel
- ✅ Performant and accessible
- ✅ Easy to customize per section
- ✅ Wix-level quality and smoothness

The combination of different animations creates a dynamic, engaging experience that feels premium and modern!
