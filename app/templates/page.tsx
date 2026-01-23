'use client';

import { useEffect, useState } from 'react';
import { TemplateService } from '@/lib/services/templateService';
import { Database } from '@/lib/supabase/types';
import Button from '@/components/ui/Button';

type Template = Database['public']['Tables']['templates']['Row'];
type Category = Database['public']['Tables']['template_categories']['Row'];

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const availableTags = ['modern', 'minimalist', 'bold', 'elegant', 'professional', 'creative', 'calm', 'nature', 'tech', 'office'];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterTemplates();
  }, [selectedCategory, selectedTags]);

  const loadData = async () => {
    try {
      const [templatesData, categoriesData] = await Promise.all([
        TemplateService.getAllTemplates(),
        TemplateService.getCategories()
      ]);
      setTemplates(templatesData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading templates:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterTemplates = async () => {
    try {
      setLoading(true);
      
      if (selectedTags.length > 0) {
        const filtered = await TemplateService.searchByTags(
          selectedTags,
          selectedCategory || undefined
        );
        setTemplates(filtered as any);
      } else if (selectedCategory) {
        const category = categories.find(c => c.id === selectedCategory);
        if (category) {
          const filtered = await TemplateService.getTemplatesByCategory(category.slug);
          setTemplates(filtered as any);
        }
      } else {
        const all = await TemplateService.getAllTemplates();
        setTemplates(all);
      }
    } catch (error) {
      console.error('Error filtering templates:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  if (loading && templates.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p>Loading templates...</p>
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

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium mb-3 opacity-70">CATEGORIES</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === null
                    ? 'bg-white text-black border-white'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-medium mb-3 opacity-70">STYLE</h3>
            <div className="flex flex-wrap gap-3">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
            <p>Filtering templates...</p>
          </div>
        ) : templates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl opacity-70">No templates found with these filters</p>
            <Button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedTags([]);
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map(template => (
              <div
                key={template.id}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                  {template.thumbnail_url ? (
                    <img
                      src={template.thumbnail_url}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      🎨
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Button href={`/studio/editor?template=${template.id}`}>
                      Use Template
                    </Button>
                    <Button href={`/templates/${template.slug}`} variant="outline">
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                  <p className="text-sm opacity-70 mb-4">{template.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Usage count */}
                  <div className="mt-4 text-xs opacity-50">
                    Used {template.usage_count} times
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
