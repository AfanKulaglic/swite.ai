'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { DynamicRenderer, getDefaultProps, getAvailableComponents } from '@/components/renderer/DynamicRenderer';
import { SiteLayout, SiteTheme, SectionComponent, Database } from '@/lib/supabase/types';
import { TemplateService } from '@/lib/services/templateService';
import Button from '@/components/ui/Button';

type Template = Database['public']['Tables']['templates']['Row'];

function BuilderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get('template');

  const [layout, setLayout] = useState<SiteLayout | null>(null);
  const [theme, setTheme] = useState<SiteTheme | null>(null);
  const [templateName, setTemplateName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showAddSection, setShowAddSection] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    const loadTemplate = async () => {
      if (templateSlug) {
        try {
          // Load template from database
          const template = await TemplateService.getTemplateBySlug(templateSlug) as Template | null;
          if (template) {
            const templateLayout = typeof template.layout === 'string' 
              ? JSON.parse(template.layout) 
              : template.layout;
            const templateTheme = typeof template.theme === 'string'
              ? JSON.parse(template.theme)
              : template.theme;
            
            setLayout(templateLayout as SiteLayout);
            setTheme(templateTheme as SiteTheme);
            setTemplateName(template.name);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error('Error loading template:', error);
        }
      }
      
      // Create blank site if no template or error
      setLayout({ sections: [] });
      setTheme({
        colors: {
          primary: '#4169E1',
          secondary: '#6B46C1',
          background: '#000000',
          text: '#FFFFFF',
          accent: '#E6FF00'
        },
        fonts: {
          heading: 'Inter',
          body: 'Inter'
        }
      });
      setTemplateName('New Website');
      setLoading(false);
    };

    loadTemplate();
  }, [templateSlug]);

  const handleSectionClick = (sectionId: string) => {
    if (!previewMode) {
      setSelectedSection(sectionId);
    }
  };

  const handleAddSection = (type: string) => {
    if (!layout) return;

    const newSection: SectionComponent = {
      id: `${type.toLowerCase()}_${Date.now()}`,
      type,
      order: layout.sections.length,
      props: getDefaultProps(type)
    };

    setLayout({
      ...layout,
      sections: [...layout.sections, newSection]
    });
    setShowAddSection(false);
    setSelectedSection(newSection.id);
  };

  const handleDeleteSection = (sectionId: string) => {
    if (!layout) return;

    setLayout({
      ...layout,
      sections: layout.sections.filter(s => s.id !== sectionId)
    });
    setSelectedSection(null);
  };

  const handleMoveSection = (sectionId: string, direction: 'up' | 'down') => {
    if (!layout) return;

    const index = layout.sections.findIndex(s => s.id === sectionId);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= layout.sections.length) return;

    const newSections = [...layout.sections];
    [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];

    // Update order values
    newSections.forEach((section, i) => {
      section.order = i;
    });

    setLayout({ ...layout, sections: newSections });
  };

  const handleUpdateSectionProp = (sectionId: string, propKey: string, value: any) => {
    if (!layout) return;

    setLayout({
      ...layout,
      sections: layout.sections.map(section =>
        section.id === sectionId
          ? { ...section, props: { ...section.props, [propKey]: value } }
          : section
      )
    });
  };

  const getSelectedSectionData = () => {
    if (!layout || !selectedSection) return null;
    return layout.sections.find(s => s.id === selectedSection);
  };

  const handleSave = async () => {
    setSaving(true);
    // TODO: Implement save to database with SiteService
    // For now, save to localStorage
    localStorage.setItem('builder-layout', JSON.stringify(layout));
    localStorage.setItem('builder-theme', JSON.stringify(theme));
    setTimeout(() => {
      setSaving(false);
      alert('Saved! (Currently saving to localStorage. Database save coming soon.)');
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading builder...</p>
        </div>
      </div>
    );
  }

  const selectedSectionData = getSelectedSectionData();
  const availableComponents = getAvailableComponents();

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Left Sidebar - Component Library */}
      {!previewMode && (
        <div className="w-64 bg-zinc-900 border-r border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <h2 className="font-bold text-white">Components</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {availableComponents.map(type => (
                <button
                  key={type}
                  onClick={() => handleAddSection(type)}
                  className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <span className="text-lg mr-2">
                    {type === 'Hero' && '🎯'}
                    {type === 'Features' && '✨'}
                    {type === 'CTA' && '📢'}
                    {type === 'Testimonials' && '💬'}
                    {type === 'Portfolio' && '🖼️'}
                    {type === 'About' && '👤'}
                    {type === 'ContactForm' && '📧'}
                  </span>
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-16 bg-zinc-900 border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button href="/studio/templates" variant="ghost" className="text-white/70">
              ← Back
            </Button>
            <div className="h-6 w-px bg-white/20" />
            <h1 className="text-white font-bold">{templateName}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                previewMode 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {previewMode ? '✏️ Edit' : '👁️ Preview'}
            </button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-y-auto bg-zinc-800 p-8">
          <div className="max-w-6xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl">
            {layout && layout.sections.length > 0 ? (
              <DynamicRenderer
                layout={layout}
                theme={theme || undefined}
                editable={!previewMode}
                onSectionClick={handleSectionClick}
              />
            ) : (
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <h2 className="text-2xl font-bold text-white mb-2">Start Building</h2>
                  <p className="text-white/60 mb-6">
                    Add components from the sidebar to build your website
                  </p>
                  <Button onClick={() => handleAddSection('Hero')}>
                    Add Hero Section
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Properties Panel */}
      {!previewMode && selectedSectionData && (
        <div className="w-80 bg-zinc-900 border-l border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-bold text-white">{selectedSectionData.type}</h2>
            <button
              onClick={() => setSelectedSection(null)}
              className="text-white/50 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {/* Section Actions */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => handleMoveSection(selectedSectionData.id, 'up')}
                className="flex-1 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-sm"
              >
                ↑ Move Up
              </button>
              <button
                onClick={() => handleMoveSection(selectedSectionData.id, 'down')}
                className="flex-1 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-sm"
              >
                ↓ Move Down
              </button>
            </div>
            <button
              onClick={() => handleDeleteSection(selectedSectionData.id)}
              className="w-full py-2 rounded bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm mb-6"
            >
              🗑️ Delete Section
            </button>

            {/* Property Editor */}
            <div className="space-y-4">
              {Object.entries(selectedSectionData.props).map(([key, value]) => {
                // Skip complex objects/arrays for now
                if (typeof value === 'object' && value !== null) {
                  return (
                    <div key={key} className="text-white/50 text-sm">
                      {key}: [Complex data - editor coming soon]
                    </div>
                  );
                }

                return (
                  <div key={key}>
                    <label className="block text-sm text-white/70 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    {typeof value === 'boolean' ? (
                      <button
                        onClick={() => handleUpdateSectionProp(selectedSectionData.id, key, !value)}
                        className={`w-full py-2 rounded text-sm ${
                          value ? 'bg-blue-500 text-white' : 'bg-white/10 text-white'
                        }`}
                      >
                        {value ? 'Yes' : 'No'}
                      </button>
                    ) : (
                      <input
                        type="text"
                        value={value as string || ''}
                        onChange={(e) => handleUpdateSectionProp(selectedSectionData.id, key, e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading builder...</p>
        </div>
      </div>
    }>
      <BuilderContent />
    </Suspense>
  );
}
