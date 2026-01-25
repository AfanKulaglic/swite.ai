'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TemplateService } from '@/lib/services/templateService';
import { DynamicRenderer } from '@/components/renderer/DynamicRenderer';
import Button from '@/components/ui/Button';
import { Database } from '@/lib/supabase/types';

type Template = Database['public']['Tables']['templates']['Row'];

export default function TemplatePreviewPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadTemplate();
    }
  }, [slug]);

  const loadTemplate = async () => {
    try {
      setLoading(true);
      const data = await TemplateService.getTemplateBySlug(slug);
      setTemplate(data);
    } catch (err) {
      console.error('Error loading template:', err);
      setError('Template not found');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading template preview...</p>
        </div>
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Template Not Found</h1>
          <p className="text-white/60 mb-8">The template you're looking for doesn't exist.</p>
          <Button href="/studio/templates">Back to Templates</Button>
        </div>
      </div>
    );
  }

  // Parse layout and theme from database
  const layout = typeof template.layout === 'string' 
    ? JSON.parse(template.layout) 
    : template.layout;
  
  const theme = typeof template.theme === 'string'
    ? JSON.parse(template.theme)
    : template.theme;

  return (
    <div className="min-h-screen bg-black">
      {/* Preview Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              href="/studio/templates" 
              variant="ghost"
              className="text-white/70 hover:text-white"
            >
              ← Back to Templates
            </Button>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <h1 className="text-lg font-bold text-white">{template.name}</h1>
              <p className="text-xs text-white/50">{template.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {template.tags && template.tags.length > 0 && (
              <div className="hidden md:flex gap-2">
                {template.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Button href={`/studio/builder?template=${template.id}`}>
              Use This Template
            </Button>
          </div>
        </div>
      </div>

      {/* Template Preview */}
      <div className="pt-20">
        {layout && layout.sections && layout.sections.length > 0 ? (
          <DynamicRenderer 
            layout={layout} 
            theme={theme}
            editable={false}
          />
        ) : (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h2 className="text-2xl font-bold text-white mb-2">Preview Not Available</h2>
              <p className="text-white/60 mb-6">
                This template doesn't have a component-based layout yet.
              </p>
              <Button href={`/studio/builder?template=${template.id}`}>
                Use Template Anyway
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
