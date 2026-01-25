'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
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

  // Filter templates by category
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
      <main className="h-screen w-full bg-black text-white flex items-center justify-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-[#4169E1]/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-[#4169E1] rounded-full animate-spin" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen w-full bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Error Loading Templates</h1>
          <p className="text-white/60 mb-8 font-light">{error}</p>
          <button
            onClick={loadTemplates}
            className="px-6 py-2.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden flex flex-col">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(65,105,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#4169E1]/10">
        <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-light tracking-tight hover:text-white/80 transition-colors">
              SWITE.AI
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Templates</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/studio/dashboard"
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-[#4169E1]/20 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300"
            >
              Dashboard
            </Link>
            <Link
              href="/studio/builder"
              className="px-6 py-2.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
            >
              Blank Canvas
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <div className="h-full max-w-[1600px] mx-auto px-8 py-8 flex flex-col">
          
          {/* Title & Categories */}
          <div className="mb-8">
            <h1 className="text-4xl font-light tracking-tight mb-2">Choose Your Template</h1>
            <p className="text-sm text-white/40 font-light mb-6">Start with a professionally designed template and customize it to match your vision</p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 text-sm font-light border transition-all duration-300 ${
                    selectedCategory === category.slug
                      ? 'bg-gradient-to-r from-[#4169E1] to-[#6B46C1] border-transparent text-white'
                      : 'border-[#4169E1]/20 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 text-white/60 hover:text-white'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredTemplates.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  </div>
                  <p className="text-lg font-light mb-2 text-white/80">
                    {selectedCategory 
                      ? `No templates found in "${selectedCategory}" category` 
                      : 'No templates available yet'}
                  </p>
                  <p className="text-sm text-white/40 mb-6 font-light">Try a different category or start from scratch</p>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-6 py-2.5 border border-[#4169E1]/20 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 text-white text-sm font-medium transition-all duration-300"
                  >
                    View All Templates
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                {filteredTemplates.map((template) => {
                  const colors = getThemeColors(template);
                  const thumbnail = getThumbnail(template);
                  
                  return (
                    <div
                      key={template.id}
                      className="group relative bg-black border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/[0.03] to-[#6B46C1]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative">
                        {/* Thumbnail */}
                        <div 
                          className="aspect-video relative overflow-hidden flex items-center justify-center border-b border-[#4169E1]/20"
                          style={{ 
                            background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40)` 
                          }}
                        >
                          <span className="text-6xl">{thumbnail}</span>
                          
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <Link
                              href={`/templates/${template.slug}`}
                              className="px-4 py-2 text-sm font-medium border border-[#4169E1]/20 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 text-white transition-all duration-300"
                            >
                              Preview
                            </Link>
                            <Link
                              href={`/studio/builder?template=${template.slug}`}
                              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white hover:opacity-90 transition-all duration-300"
                            >
                              Use Template
                            </Link>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {template.is_premium && (
                              <span className="text-xs px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-400 font-light">
                                Premium
                              </span>
                            )}
                            {template.tags?.[0] && (
                              <span className="text-xs px-2 py-1 border border-[#4169E1]/20 text-white/60 font-light">
                                {template.tags[0]}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors">{template.name}</h3>
                          <p className="text-sm text-white/40 font-light mb-4 line-clamp-2">{template.description}</p>
                          
                          {/* Tags */}
                          {template.tags && template.tags.length > 1 && (
                            <div className="flex flex-wrap gap-2">
                              {template.tags.slice(1, 4).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-1 border border-[#4169E1]/10 text-white/40 font-light"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(65, 105, 225, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(65, 105, 225, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(65, 105, 225, 0.5);
        }
      `}</style>
    </main>
  );
}
