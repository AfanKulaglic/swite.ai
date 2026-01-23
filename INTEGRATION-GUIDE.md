# Integration Guide - Connecting Everything Together

## Overview

You now have two systems:
1. **Existing Editor** - Static HTML editing with click-to-edit
2. **New Architecture** - Component-as-data with database persistence

This guide shows how to integrate them.

## Step 1: Run Database Setup

### 1.1 Run Migration
1. Open Supabase Dashboard: https://supabase.com/dashboard
2. Go to SQL Editor
3. Copy content from `swite.ai-main/supabase/migrations/001_initial_schema.sql`
4. Run it
5. Verify tables created in Table Editor

### 1.2 Run Seed Data
1. In SQL Editor
2. Copy content from `swite.ai-main/supabase/seed/sample-templates.sql`
3. Run it
4. Verify 4 templates in `templates` table

### 1.3 Create Storage Buckets
1. Go to Storage in Supabase Dashboard
2. Create 3 buckets:
   - `templates` (public)
   - `user-assets` (public)
   - `site-exports` (private)

3. Add storage policies (see SETUP-GUIDE.md)

## Step 2: Test the New Components

### 2.1 Test Template Browser
```bash
npm run dev
```

Visit: http://localhost:3000/templates

You should see:
- 4 sample templates
- Category filters
- Tag filters
- "Use Template" buttons

### 2.2 Test Dynamic Renderer

Create a test page: `swite.ai-main/app/test-renderer/page.tsx`

```tsx
'use client';

import { DynamicRenderer } from '@/components/renderer/DynamicRenderer';

export default function TestPage() {
  const testLayout = {
    sections: [
      {
        id: 'hero_1',
        type: 'Hero',
        order: 0,
        props: {
          title: 'Test Hero',
          subtitle: 'This is a test',
          ctaText: 'Click Me',
          ctaLink: '/'
        }
      }
    ]
  };

  const testTheme = {
    colors: {
      primary: '#4169E1',
      secondary: '#6B46C1',
      background: '#000000',
      text: '#FFFFFF'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    }
  };

  return (
    <div className="bg-black text-white">
      <DynamicRenderer layout={testLayout} theme={testTheme} />
    </div>
  );
}
```

Visit: http://localhost:3000/test-renderer

## Step 3: Add Authentication

### 3.1 Set Up Supabase Auth

In Supabase Dashboard:
1. Go to Authentication > Providers
2. Enable Email provider
3. Configure email templates (optional)

### 3.2 Create Auth Context

Create `swite.ai-main/lib/auth/AuthContext.tsx`:

```tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### 3.3 Wrap App with Auth Provider

Update `swite.ai-main/app/layout.tsx`:

```tsx
import { AuthProvider } from '@/lib/auth/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

## Step 4: Create New Editor with Database Integration

### 4.1 Create New Editor Page

Create `swite.ai-main/app/studio/builder/page.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';
import { DynamicRenderer } from '@/components/renderer/DynamicRenderer';
import { TemplateService } from '@/lib/services/templateService';
import { SiteService } from '@/lib/services/siteService';
import { SiteLayout, SiteTheme } from '@/lib/supabase/types';

export default function BuilderPage() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');
  
  const [layout, setLayout] = useState<SiteLayout | null>(null);
  const [theme, setTheme] = useState<SiteTheme | null>(null);
  const [siteId, setSiteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && templateId) {
      loadTemplate();
    }
  }, [user, templateId]);

  const loadTemplate = async () => {
    try {
      // Get template
      const template = await TemplateService.getTemplateById(templateId!);
      
      // Create user site from template
      const site = await SiteService.createSiteFromTemplate(
        user!.id,
        templateId!,
        'My New Site',
        `site-${Date.now()}`
      );

      setLayout(site.layout as SiteLayout);
      setTheme(site.theme as SiteTheme);
      setSiteId(site.id);
    } catch (error) {
      console.error('Error loading template:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!siteId || !layout) return;
    
    try {
      await SiteService.updateSiteLayout(siteId, layout);
      alert('Saved!');
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  if (!user) {
    return <div>Please log in</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 p-4">
        <button onClick={handleSave}>Save</button>
      </div>
      
      <div className="pt-20">
        {layout && theme && (
          <DynamicRenderer layout={layout} theme={theme} />
        )}
      </div>
    </div>
  );
}
```

## Step 5: Connect Template Browser to New Editor

Update the "Use Template" button in `swite.ai-main/app/templates/page.tsx`:

```tsx
<Button href={`/studio/builder?template=${template.id}`}>
  Use Template
</Button>
```

## Step 6: Add Property Editor

Create `swite.ai-main/components/editor/PropertyPanel.tsx`:

```tsx
'use client';

import { SectionComponent } from '@/lib/supabase/types';

interface PropertyPanelProps {
  section: SectionComponent | null;
  onUpdate: (props: Record<string, any>) => void;
}

export function PropertyPanel({ section, onUpdate }: PropertyPanelProps) {
  if (!section) {
    return (
      <div className="p-6 text-center text-white/50">
        Select a section to edit
      </div>
    );
  }

  const handleChange = (key: string, value: any) => {
    onUpdate({
      ...section.props,
      [key]: value
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-sm font-bold uppercase">Properties</h3>
      
      {/* Render inputs based on section type */}
      {section.type === 'Hero' && (
        <>
          <div>
            <label className="block text-xs mb-2">Title</label>
            <input
              type="text"
              value={section.props.title || ''}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-3 py-2 bg-black border border-white/10"
            />
          </div>
          
          <div>
            <label className="block text-xs mb-2">Subtitle</label>
            <textarea
              value={section.props.subtitle || ''}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              className="w-full px-3 py-2 bg-black border border-white/10"
              rows={3}
            />
          </div>
          
          <div>
            <label className="block text-xs mb-2">CTA Text</label>
            <input
              type="text"
              value={section.props.ctaText || ''}
              onChange={(e) => handleChange('ctaText', e.target.value)}
              className="w-full px-3 py-2 bg-black border border-white/10"
            />
          </div>
        </>
      )}
      
      {/* Add more section types as needed */}
    </div>
  );
}
```

## Step 7: Test Complete Flow

### 7.1 User Journey
1. Visit `/templates`
2. Filter templates by category/tags
3. Click "Use Template"
4. Redirects to `/studio/builder?template=xxx`
5. Creates user site from template
6. Edit sections with property panel
7. Save to database
8. Publish site

### 7.2 Test Checklist
- [ ] Templates load from database
- [ ] Filtering works
- [ ] Authentication works
- [ ] Site creation from template works
- [ ] DynamicRenderer displays correctly
- [ ] Property editing updates layout
- [ ] Save persists to database
- [ ] Version history created automatically

## Step 8: Add Drag-and-Drop (Optional)

Install dependencies:
```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

Create `swite.ai-main/components/editor/SortableSections.tsx`:

```tsx
'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SectionComponent } from '@/lib/supabase/types';

function SortableSection({ section, children }: { section: SectionComponent; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: section.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export function SortableSections({ sections, onReorder, children }: {
  sections: SectionComponent[];
  onReorder: (newOrder: SectionComponent[]) => void;
  children: React.ReactNode;
}) {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sections.findIndex(s => s.id === active.id);
      const newIndex = sections.findIndex(s => s.id === over.id);
      
      const newSections = [...sections];
      const [moved] = newSections.splice(oldIndex, 1);
      newSections.splice(newIndex, 0, moved);
      
      onReorder(newSections);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}
```

## Next Steps

1. **Run database migration** (Step 1)
2. **Test template browser** (Step 2)
3. **Add authentication** (Step 3)
4. **Create new builder page** (Step 4)
5. **Test complete flow** (Step 7)
6. **Add drag-and-drop** (Step 8 - optional)

## Troubleshooting

### Templates not loading
- Check Supabase connection in `.env.local`
- Verify migration ran successfully
- Check browser console for errors

### Authentication not working
- Verify Supabase Auth is enabled
- Check email provider settings
- Verify RLS policies are correct

### Images not uploading
- Verify storage buckets created
- Check storage policies
- Verify bucket names match code

### Renderer not displaying
- Check layout JSON structure
- Verify component types match COMPONENT_MAP
- Check browser console for errors

## Resources

- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
- DnD Kit Docs: https://docs.dndkit.com
