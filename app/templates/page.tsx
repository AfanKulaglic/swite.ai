'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { TemplateService } from '@/lib/services/templateService';
import { Database } from '@/lib/supabase/types';

type Template = Database['public']['Tables']['templates']['Row'];

const categories = [
  { name: 'All', icon: '🌐', slug: null },
  { name: 'Business', icon: '💼', slug: 'business' },
  { name: 'Portfolio', icon: '🎨', slug: 'portfolio' },
  { name: 'Agency', icon: '✨', slug: 'agency' },
  { name: 'SaaS', icon: '💻', slug: 'saas' },
  { name: 'Health', icon: '🌿', slug: 'health' },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      const data = await TemplateService.getAllTemplates();
      setTemplates(data || []);
    } catch (err) {
      console.error('Error loading templates:', err);
      setError('Failed to load templates');
    } finally {
      setLoading(false);
    }
  };

  // Filter templates by category (using tags since we don't have category_id populated)
  const filteredTemplates = selectedCategory 
    ? templates.filter(t => t.tags?.includes(selectedCategory))
    : templates;

  // Get theme colors from template
  const getThemeColors = (template: Template) => {
    const theme = typeof template.theme === 'string' 
      ? JSON.parse(template.theme) 
      : template.theme;
    return theme?.colors || { primary: '#6D28D9', secondary: '#4C1D95' };
  };

  // Get emoji thumbnail based on tags
  const getThumbnail = (template: Template) => {
    const tags = template.tags || [];
    if (tags.includes('hosting') || tags.includes('tech')) return '🌐';
    if (tags.includes('portfolio')) return '🎨';
    if (tags.includes('agency')) return '✨';
    if (tags.includes('business')) return '💼';
    if (tags.includes('saas')) return '💻';
    if (tags.includes('health')) return '🌿';
    return '🚀';
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading templates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Error Loading Templates</h1>
          <p className="text-white/60 mb-8">{error}</p>
          <Button onClick={loadTemplates}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Choose Your Template
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Start with a professionally designed template and customize it to match your vision
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-white text-black border-white'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl opacity-70 mb-6">
              {selectedCategory 
                ? `No templates found in "${selectedCategory}" category` 
                : 'No templates available yet'}
            </p>
            <Button onClick={() => setSelectedCategory(null)}>
              View All Templates
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => {
              const colors = getThemeColors(template);
              const thumbnail = getThumbnail(template);
              
              return (
                <div
                  key={template.id}
                  className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                >
                  {/* Thumbnail with theme colors */}
                  <div 
                    className="aspect-video relative overflow-hidden flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40)` 
                    }}
                  >
                    <span className="text-6xl">{thumbnail}</span>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <Button href={`/templates/${template.slug}`} variant="ghost" className="border border-white/20">
                        Preview
                      </Button>
                      <Button href={`/studio/builder?template=${template.slug}`}>
                        Use Template
                      </Button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {template.is_premium && (
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                          Premium
                        </span>
                      )}
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                        {template.tags?.[0] || 'Template'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                    <p className="text-sm opacity-70 mb-4">{template.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {template.tags?.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg opacity-70 mb-6">
            Can't find what you're looking for? Build from scratch with AI
          </p>
          <Button href="/studio/builder" size="lg">
            Start with Blank Canvas
          </Button>
        </div>
      </div>
    </div>
  );
}
