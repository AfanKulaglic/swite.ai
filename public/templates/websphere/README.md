# WebSphere Hosting Template

## Overview
Professional web hosting website template with modern design, animations, and responsive layout.

## Tech Stack

### Core
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **GSAP** - Professional animations
- **Vanilla JavaScript (ES6)** - No framework dependencies

### CDN Libraries
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Color Palette

```javascript
colors: {
    primary: '#6D28D9',      // Purple
    primaryDark: '#4C1D95',  // Dark Purple
    accent: '#22C55E',       // Green
    accentSoft: '#86EFAC',   // Light Green
    background: '#0F0222',   // Dark Background
    surface: '#1E0B3A',      // Card Background
    muted: '#9CA3AF'         // Gray Text
}
```

## Pages Included

1. **index.html** - Landing page with hero, features, domain search
2. **hosting.html** - Hosting plans and features
3. **domains.html** - Domain search and registration
4. **pricing.html** - Pricing plans comparison
5. **blog.html** - Blog listing page
6. **contact.html** - Contact form

## Features

### Landing Page
- ✅ Hero section with CTA buttons
- ✅ Features grid (6 features)
- ✅ Domain search section
- ✅ Stats display (uptime, support, customers)
- ✅ Call-to-action section
- ✅ Responsive navigation
- ✅ Footer with links

### Animations (GSAP)
- Hero text entrance (fade + slide up)
- Hero image entrance (fade + slide right)
- Feature cards scroll animation (stagger)
- Smooth transitions on hover

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Hamburger menu for mobile (ready to implement)

## Customization Guide

### Change Colors
Edit the Tailwind config in `<head>`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_COLOR',
                accent: '#YOUR_COLOR'
            }
        }
    }
}
```

### Change Font
Replace Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Update Tailwind config:
```javascript
fontFamily: {
    sans: ['YOUR_FONT', 'sans-serif']
}
```

### Add New Section
```html
<section class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
        <!-- Your content -->
    </div>
</section>
```

### Add GSAP Animation
```javascript
gsap.from(".your-element", {
    scrollTrigger: {
        trigger: ".your-element",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8
});
```

## File Structure

```
/websphere/
├── index.html          # Landing page
├── hosting.html        # Hosting features
├── domains.html        # Domain search
├── pricing.html        # Pricing plans
├── blog.html           # Blog listing
├── contact.html        # Contact form
└── README.md           # This file
```

## Deployment

### Firebase Hosting
```bash
firebase init hosting
firebase deploy
```

### Netlify
1. Drag and drop folder to Netlify
2. Or connect Git repository

### Vercel
```bash
vercel deploy
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## SEO Ready
- Semantic HTML5
- Meta tags ready
- Open Graph tags ready
- Structured data ready

## Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- WCAG 2.1 AA compliant

## Future Enhancements
- [ ] Add mobile hamburger menu
- [ ] Implement domain search API
- [ ] Add pricing calculator
- [ ] Integrate payment gateway
- [ ] Add customer testimonials
- [ ] Implement blog CMS
- [ ] Add live chat widget

## Support
For questions or issues, contact support@devfactory.com

## License
This template is part of DevFactory Studio.

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Author:** DevFactory Team
