# Enhanced Visual Editor Guide

## 🎨 Advanced Editing Features

The visual editor now supports **granular editing** with separate controls for gradient text, links, and every individual text element!

---

## ✨ New Features

### 1. **Gradient Text Editing**
Gradient text (like "Top-Tier Reliability") can be edited separately from regular text!

```html
<!-- Before -->
<h1>
  Host Your Site with 
  <span class="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">
    Top-Tier Reliability
  </span>
</h1>

<!-- Now Editable -->
✅ "Host Your Site with" - Click to edit
✅ "Top-Tier Reliability" - Click to edit separately
```

### 2. **Link URL Editing**
All links and buttons now have editable URLs!

```html
<a href="/pricing">Get Started</a>

<!-- Edit Panel Shows -->
Content: "Get Started"
Link URL: "/pricing"
```

### 3. **Individual Element Editing**
Every text element is now separately editable:
- ✅ Headings (h1-h6)
- ✅ Paragraphs
- ✅ Gradient text spans
- ✅ Links (with href)
- ✅ Buttons (with href)
- ✅ Badge text
- ✅ Stat numbers
- ✅ Stat labels
- ✅ Regular text spans

---

## 🎯 Editable Elements

### Headings with Gradient:
```html
<h1>
  Regular Text
  <span class="bg-gradient-to-r">Gradient Text</span>
</h1>
```
**Result:**
- Click "Regular Text" → Edit regular part
- Click "Gradient Text" → Edit gradient part separately

### Links:
```html
<a href="/pricing">View Pricing</a>
```
**Edit Panel:**
- Content: "View Pricing"
- Link URL: "/pricing"

### Buttons:
```html
<button>Get Started</button>
<a href="/signup" class="bg-accent">Sign Up</a>
```
**Edit Panel:**
- Content: "Get Started" or "Sign Up"
- Link URL: "/signup" (for links)

### Badge Text:
```html
<span>🚀 Limited Offer: 50% OFF First Year</span>
```
**Editable:** Click to change the offer text

### Stats:
```html
<div class="text-4xl font-bold">99.9%</div>
<div class="text-sm text-gray-400">Uptime SLA</div>
```
**Both Editable:**
- Click "99.9%" → Edit number
- Click "Uptime SLA" → Edit label

---

## 🎨 Edit Panel Features

### For Regular Text:
```
┌─────────────────────┐
│ Edit Content    [×] │
├─────────────────────┤
│ Element Type        │
│ ┌─────────────────┐ │
│ │ Text            │ │
│ └─────────────────┘ │
│                     │
│ Content             │
│ ┌─────────────────┐ │
│ │ Your text...    │ │
│ │                 │ │
│ └─────────────────┘ │
│                     │
│ [Update Content]    │
└─────────────────────┘
```

### For Gradient Text:
```
┌─────────────────────┐
│ Edit Content    [×] │
├─────────────────────┤
│ Element Type        │
│ ┌─────────────────┐ │
│ │ Gradient Text   │ │
│ └─────────────────┘ │
│                     │
│ Gradient Text       │
│ ┌─────────────────┐ │
│ │ Top-Tier...     │ │
│ └─────────────────┘ │
│                     │
│ [Update Content]    │
└─────────────────────┘
```

### For Links/Buttons:
```
┌─────────────────────┐
│ Edit Content    [×] │
├─────────────────────┤
│ Element Type        │
│ ┌─────────────────┐ │
│ │ Link            │ │
│ └─────────────────┘ │
│                     │
│ Content             │
│ ┌─────────────────┐ │
│ │ Get Started     │ │
│ └─────────────────┘ │
│                     │
│ Link URL            │
│ ┌─────────────────┐ │
│ │ /pricing        │ │
│ └─────────────────┘ │
│ 💡 Use relative     │
│ paths or full URLs  │
│                     │
│ [Update Content]    │
└─────────────────────┘
```

---

## 🎬 How It Works

### 1. **Detecting Gradient Text**
```javascript
// Find gradient spans
const gradientTexts = iframeDoc.querySelectorAll(
  'span.bg-gradient-to-r, 
   span.bg-clip-text, 
   .text-transparent'
);

// Make each gradient text separately editable
gradientTexts.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    handleElementClick(el, 'gradient-text');
  });
});
```

### 2. **Separating Text Parts**
```javascript
// For headings with gradient text
const heading = document.querySelector('h1');
const hasGradient = heading.querySelector('span.bg-gradient-to-r');

if (hasGradient) {
  // Make non-gradient parts editable separately
  const textNodes = getTextNodes(heading);
  textNodes.forEach(node => {
    // Wrap in span and make editable
    const span = document.createElement('span');
    span.textContent = node.textContent;
    span.className = 'editable-text';
    // Add click handler
  });
}
```

### 3. **Editing Links**
```javascript
// Detect link type
const handleElementClick = (element, type) => {
  const href = element.href || '';
  
  setSelectedElement({
    content: element.textContent,
    href: new URL(href).pathname, // Extract path
    type: 'link'
  });
  
  setEditHref(href);
};

// Update link
const handleUpdate = () => {
  element.textContent = newContent;
  element.href = newHref; // Update href
};
```

### 4. **Smart Selectors**
```javascript
const getElementSelector = (element) => {
  // For gradient text
  if (element.classList.contains('bg-gradient-to-r')) {
    const parent = element.parentElement;
    const spans = parent.querySelectorAll('span.bg-gradient-to-r');
    const index = Array.from(spans).indexOf(element);
    return `${getParentSelector(parent)} > span.bg-gradient-to-r:nth-of-type(${index + 1})`;
  }
  
  // For regular elements
  const tag = element.tagName.toLowerCase();
  const classes = element.className.split(' ').slice(0, 2).join('.');
  return `${tag}.${classes}:nth-of-type(${index + 1})`;
};
```

---

## 💾 Data Storage

### localStorage Structure:
```javascript
{
  "template-edits": {
    "h1 > span.bg-gradient-to-r:nth-of-type(1)": {
      "content": "Top-Tier Reliability",
      "type": "gradient-text"
    },
    "a.bg-accent:nth-of-type(1)": {
      "content": "Get Started Now",
      "href": "/pricing",
      "type": "link"
    },
    "p:nth-of-type(1)": {
      "content": "Enterprise-grade hosting...",
      "type": "text"
    }
  }
}
```

---

## 🎨 Visual Feedback

### Hover States:
```
Regular Text:
┌──────────────┐
│ Normal text  │ → Hover → Blue outline
└──────────────┘

Gradient Text:
┌──────────────┐
│ Gradient ✨  │ → Hover → Blue outline
└──────────────┘           (separate from parent)

Link:
┌──────────────┐
│ Click here → │ → Hover → Blue outline
└──────────────┘           Shows it's editable
```

### Selected States:
```
Selected Element:
┌──────────────┐
│ Selected ✓   │ ← Thicker blue outline (3px)
└──────────────┘   Edit panel opens
```

---

## 🎯 Example Edits

### Edit Gradient Heading:
```
Original:
"Host Your Site with Top-Tier Reliability"
         ↑ regular    ↑ gradient

Click "Host Your Site with":
  → Edit panel: "Host Your Site with"
  → Update to: "Build Your Site with"

Click "Top-Tier Reliability":
  → Edit panel: "Top-Tier Reliability"
  → Update to: "Maximum Performance"

Result:
"Build Your Site with Maximum Performance"
```

### Edit Link:
```
Original:
<a href="/pricing">View Pricing</a>

Click link:
  → Edit panel shows:
     Content: "View Pricing"
     Link URL: "/pricing"
  
  → Update to:
     Content: "See Plans"
     Link URL: "/plans"

Result:
<a href="/plans">See Plans</a>
```

### Edit Stats:
```
Original:
99.9%
Uptime SLA

Click "99.9%":
  → Edit: "100%"

Click "Uptime SLA":
  → Edit: "Uptime Guarantee"

Result:
100%
Uptime Guarantee
```

---

## 🎨 Editable Elements List

### Hero Section:
✅ Badge text: "🚀 Limited Offer: 50% OFF First Year"
✅ Main heading: "Host Your Site with"
✅ Gradient text: "Top-Tier Reliability"
✅ Description paragraph
✅ Button text: "Get Started Now"
✅ Button link: "/pricing"
✅ Secondary button text: "View Pricing"
✅ Secondary button link: "/pricing"
✅ Stat numbers: "99.9%", "24/7", etc.
✅ Stat labels: "Uptime SLA", "Support", etc.

### Features Section:
✅ Section heading
✅ Feature titles
✅ Feature descriptions
✅ Feature icons (text)

### Pricing Section:
✅ Plan names
✅ Prices
✅ Feature lists
✅ Button text
✅ Button links

### Footer:
✅ Company name
✅ Links
✅ Copyright text

---

## 💡 User Benefits

### Granular Control:
- Edit each part separately
- Gradient text independent
- Links have custom URLs
- Every element accessible

### Visual Clarity:
- Blue outline on hover
- Thicker outline when selected
- Clear element type shown
- Helpful tips provided

### Smart Editing:
- Appropriate input type (text/textarea)
- URL field for links
- Validation hints
- Auto-save to localStorage

### Professional Result:
- Maintain gradient styling
- Keep link functionality
- Preserve design
- Update content only

---

## 🚀 Technical Features

### Element Detection:
```javascript
✅ Gradient text: .bg-gradient-to-r, .bg-clip-text
✅ Links: <a> tags with href
✅ Buttons: <button> and styled <a>
✅ Headings: h1-h6
✅ Paragraphs: <p>
✅ Badges: .inline-flex spans
✅ Stats: .text-4xl, .text-sm
```

### Smart Selectors:
```javascript
✅ ID-based: #element-id
✅ Class-based: tag.class1.class2
✅ Position-based: :nth-of-type(n)
✅ Nested: parent > child
✅ Gradient-aware: special handling
```

### Data Persistence:
```javascript
✅ Content saved
✅ URLs saved
✅ Element type saved
✅ Gradient flag saved
✅ All in localStorage
```

---

## 🎉 Result

Users can now:
✅ Edit gradient text separately
✅ Change link URLs
✅ Edit every text element
✅ Maintain styling
✅ Update content granularly
✅ See clear visual feedback
✅ Save all changes locally

The editor is now **professional, granular, and powerful** - just like WordPress and other professional page builders! 🎊✨
