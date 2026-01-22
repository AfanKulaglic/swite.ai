# WordPress-Style Visual Editor Guide

## 🎨 Complete Visual Editing Experience

Your AI website builder now has a **WordPress-style visual editor** where users can click directly on elements in the template to edit them!

---

## 🎯 User Flow

### 1. **Studio Chat** → Describe Website
```
User types: "I want a business website"
  ↓
AI responds with contextual message
  ↓
Shows ONE professional template
```

### 2. **Template Preview** → Click to Customize
```
User sees full template preview
  ↓
Hover shows "Click to Customize"
  ↓
Click opens Visual Editor
```

### 3. **Visual Editor** → Click to Edit
```
User sees template in iframe
  ↓
Hovers over text → Blue outline appears
  ↓
Clicks text → Edit panel opens
  ↓
Types new content → Clicks "Update"
  ↓
Content updates in real-time!
```

---

## 🎨 Visual Editor Features

### WordPress-Style Interface:
```
┌─────────────────────────────────────────────┐
│  [←] Visual Editor  [Save] [Publish]        │
├──────────┬──────────────────────────────────┤
│  EDIT    │                                  │
│  PANEL   │      TEMPLATE PREVIEW            │
│          │      (Click to Edit)             │
│  [Type]  │                                  │
│  Heading │      ┌─────────────┐             │
│          │      │ WEBSPHERE   │ ← Editable │
│  Content │      │ Host Your   │             │
│  [____]  │      │ Site...     │             │
│          │      └─────────────┘             │
│  [Update]│                                  │
└──────────┴──────────────────────────────────┘
```

### Click-to-Edit Elements:
✅ **Headings** (h1, h2, h3, h4, h5, h6)
✅ **Paragraphs** (p)
✅ **Buttons** (button, a)

### Visual Feedback:
- **Hover**: Blue outline (2px)
- **Selected**: Thicker blue outline (3px)
- **Cursor**: Pointer on editable elements
- **Smooth**: 0.2s transitions

---

## 🎬 How It Works

### 1. **Template Loading**
```javascript
<iframe 
  src="/templates/websphere/index.html"
  ref={iframeRef}
/>
```

### 2. **Making Elements Editable**
```javascript
// On iframe load
const headings = iframeDoc.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(el => {
  // Add click handler
  el.addEventListener('click', handleElementClick);
  
  // Add hover effect
  el.style.cursor = 'pointer';
  el.style.outline = '2px solid transparent';
  
  // Hover states
  el.addEventListener('mouseenter', () => {
    el.style.outline = '2px solid #0C6EFD';
  });
});
```

### 3. **Edit Panel**
```javascript
// When element clicked
setSelectedElement({
  selector: getElementSelector(element),
  content: element.textContent,
  type: 'heading' | 'text' | 'button'
});

// Show edit panel with content
setEditValue(element.textContent);
```

### 4. **Updating Content**
```javascript
// When user clicks "Update"
const element = iframeDoc.querySelector(selector);
element.textContent = newValue;

// Save to localStorage
localStorage.setItem('template-edits', JSON.stringify(edits));
```

---

## 🎨 Template Structure

### WebSphere Template:
Located at: `/public/templates/websphere/index.html`

**Sections:**
- ✅ Navigation Bar
- ✅ Hero Section
- ✅ Features Grid
- ✅ Pricing Table
- ✅ Testimonials
- ✅ Contact Form
- ✅ Footer

**All text is editable!**

---

## 💡 User Experience

### Studio Page:
```
1. Chat Interface
   - User describes website
   - AI responds
   
2. Template Preview
   - Shows WebSphere template
   - Scaled preview in card
   - Hover effect with overlay
   - "Click to Customize" message
   
3. Click to Edit
   - Opens Visual Editor
```

### Editor Page:
```
1. Template in Iframe
   - Full-size preview
   - All elements hoverable
   - Blue outline on hover
   
2. Click Any Text
   - Edit panel slides in
   - Shows element type
   - Input/textarea for editing
   
3. Update Content
   - Click "Update" button
   - Content changes instantly
   - Saved to localStorage
   - Success message appears
```

---

## 🎯 Editable Elements

### Headings:
```html
<h1>Host Your Site...</h1>
<h2>Features</h2>
<h3>Pricing Plans</h3>
```
- Click to edit
- Single-line input
- Updates immediately

### Paragraphs:
```html
<p>Enterprise-grade web hosting...</p>
```
- Click to edit
- Multi-line textarea
- Updates immediately

### Buttons:
```html
<button>Get Started</button>
<a class="bg-accent">View Pricing</a>
```
- Click to edit
- Single-line input
- Updates immediately

---

## 🎨 Visual Indicators

### Hover State:
```
Normal:                 Hover:
┌──────────┐           ┌──────────┐
│ Heading  │    →      │ Heading  │ ← Blue outline
└──────────┘           └──────────┘   Cursor: pointer
```

### Selected State:
```
Selected:
┌──────────┐
│ Heading  │ ← Thicker blue outline
└──────────┘   Edit panel opens
```

### Edit Panel:
```
┌─────────────────────┐
│ Edit Content    [×] │
├─────────────────────┤
│ Element Type        │
│ ┌─────────────────┐ │
│ │ Heading         │ │
│ └─────────────────┘ │
│                     │
│ Content             │
│ ┌─────────────────┐ │
│ │ Your text here  │ │
│ └─────────────────┘ │
│                     │
│ [Update Content]    │
│                     │
│ 💡 Tips:            │
│ • Click any text    │
│ • Changes saved     │
└─────────────────────┘
```

---

## 💾 Data Persistence

### localStorage Structure:
```javascript
{
  "template-edits": {
    "h1:nth-of-type(1)": "My Custom Heading",
    "p:nth-of-type(3)": "My custom paragraph text",
    "button:nth-of-type(1)": "Click Here"
  }
}
```

### Loading Saved Edits:
```javascript
// On page load
const savedEdits = JSON.parse(
  localStorage.getItem('template-edits') || '{}'
);

// Apply to iframe
Object.entries(savedEdits).forEach(([selector, content]) => {
  const element = iframeDoc.querySelector(selector);
  if (element) element.textContent = content;
});
```

---

## 🎬 Animations

### Studio Page:
- Chat messages fade in
- Template card zooms in
- Hover scale effect
- Shimmer overlay

### Editor Page:
- Edit panel slides in from left
- Success message slides in from right
- Smooth outline transitions
- Fade animations

---

## 🚀 Key Features

### 1. **One Template**
- Shows WebSphere template only
- Professional hosting design
- Fully customizable
- All sections editable

### 2. **Visual Editing**
- Click any text to edit
- No code required
- Real-time preview
- Instant updates

### 3. **WordPress-Style**
- Familiar interface
- Hover to see editable
- Click to edit
- Side panel for editing

### 4. **Auto-Save**
- Saves to localStorage
- No account needed
- Persists between sessions
- Success notifications

### 5. **Publish Flow**
- Edit freely without login
- Click "Publish" when ready
- Beautiful modal appears
- Sign up to go live

---

## 🎨 Design Highlights

### Top Bar:
```
┌─────────────────────────────────────────┐
│ ✨ Free Trial Mode • Click any text to │
│ edit. Sign up to publish your website.  │
├─────────────────────────────────────────┤
│ [←] Visual Editor    [Save] [Publish]   │
└─────────────────────────────────────────┘
```

### Template Frame:
```
┌─────────────────────────────────────────┐
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │    TEMPLATE IN IFRAME           │   │
│  │    (Click to Edit)              │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Edit Panel (Slides In):
```
┌──────────┐
│ EDIT     │ ← Slides from left
│ PANEL    │   when element clicked
│          │
│ [Input]  │
│          │
│ [Update] │
└──────────┘
```

---

## 💡 User Benefits

### Zero Learning Curve:
- Familiar WordPress-style interface
- Click to edit (intuitive)
- Visual feedback (hover outlines)
- Instant preview

### No Code Required:
- Just click and type
- No HTML/CSS knowledge
- No technical skills
- Anyone can use it

### Fast Editing:
- Click → Edit → Update
- 3 seconds per change
- Real-time preview
- Instant feedback

### Safe Experimentation:
- Changes saved locally
- Can undo by refreshing
- No account needed
- Risk-free editing

---

## 🎯 Comparison

### Before (Old Editor):
```
Sidebar with forms
  ↓
Type in inputs
  ↓
Preview updates
  ↓
Not intuitive
```

### After (Visual Editor):
```
Click text directly
  ↓
Edit in place
  ↓
Update instantly
  ↓
WordPress-style!
```

---

## 🚀 Technical Implementation

### Iframe Communication:
```javascript
// Access iframe document
const iframeDoc = iframe.contentDocument;

// Query elements
const elements = iframeDoc.querySelectorAll('h1, h2, p');

// Add event listeners
elements.forEach(el => {
  el.addEventListener('click', handleClick);
});
```

### Element Selection:
```javascript
// Get unique selector
const getElementSelector = (element) => {
  if (element.id) return `#${element.id}`;
  
  const tag = element.tagName.toLowerCase();
  const siblings = Array.from(parent.children)
    .filter(child => child.tagName === element.tagName);
  const index = siblings.indexOf(element);
  
  return `${tag}:nth-of-type(${index + 1})`;
};
```

### Content Update:
```javascript
// Update element
const element = iframeDoc.querySelector(selector);
element.textContent = newValue;

// Save to storage
const edits = JSON.parse(localStorage.getItem('template-edits') || '{}');
edits[selector] = newValue;
localStorage.setItem('template-edits', JSON.stringify(edits));
```

---

## 🎉 Result

Users now have a **professional, WordPress-style visual editor** where they can:

✅ Click any text to edit it
✅ See blue outlines on hover
✅ Edit in a side panel
✅ Update content instantly
✅ Save changes locally
✅ No coding required
✅ Intuitive interface
✅ Real-time preview

The editing experience is **familiar, intuitive, and powerful** - just like WordPress! 🎊✨
