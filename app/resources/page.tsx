import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Resources | SWITE.AI',
  description: 'Guides, tutorials, and resources to help you build better websites',
};

export default function ResourcesPage() {
  const categories = [
    { name: 'All Resources', count: 48 },
    { name: 'Getting Started', count: 12 },
    { name: 'Tutorials', count: 18 },
    { name: 'Best Practices', count: 10 },
    { name: 'Case Studies', count: 8 },
  ];

  const resources = [
    {
      title: 'Complete Guide to AI Website Building',
      description: 'Learn how to leverage AI to build professional websites in minutes',
      category: 'Getting Started',
      type: 'Guide',
      readTime: '15 min',
      badge: 'brand',
    },
    {
      title: 'SEO Best Practices for 2026',
      description: 'Master modern SEO techniques to rank higher in search results',
      category: 'Best Practices',
      type: 'Article',
      readTime: '10 min',
      badge: 'blue',
    },
    {
      title: 'Building High-Converting Landing Pages',
      description: 'Step-by-step tutorial on creating landing pages that convert',
      category: 'Tutorials',
      type: 'Tutorial',
      readTime: '20 min',
      badge: 'purple',
    },
    {
      title: 'How Agency X Scaled to 100 Clients',
      description: 'Real-world case study of an agency using SWITE.AI',
      category: 'Case Studies',
      type: 'Case Study',
      readTime: '8 min',
      badge: 'brand',
    },
    {
      title: 'Website Performance Optimization',
      description: 'Techniques to make your website lightning fast',
      category: 'Best Practices',
      type: 'Guide',
      readTime: '12 min',
      badge: 'blue',
    },
    {
      title: 'E-commerce Website Setup Guide',
      description: 'Everything you need to launch your online store',
      category: 'Tutorials',
      type: 'Tutorial',
      readTime: '25 min',
      badge: 'purple',
    },
  ];

  const tools = [
    {
      title: 'Website Speed Test',
      description: 'Analyze your website performance',
      icon: '⚡',
    },
    {
      title: 'SEO Analyzer',
      description: 'Check your SEO score',
      icon: '🔍',
    },
    {
      title: 'Color Palette Generator',
      description: 'Create beautiful color schemes',
      icon: '🎨',
    },
    {
      title: 'Domain Name Checker',
      description: 'Find available domains',
      icon: '🌐',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="brand">LEARNING CENTER</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            RESOURCES &
            <br />
            <span className="text-[#E6FF00]">GUIDES ✦</span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-12">
            Everything you need to build, launch, and grow your website. From beginner guides 
            to advanced tutorials and real-world case studies.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E6FF00]"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E6FF00]">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-16 xl:px-32 py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border transition-all ${
                  index === 0
                    ? 'bg-[#E6FF00] text-black border-[#E6FF00] font-black'
                    : 'bg-white/5 border-white/10 hover:border-[#E6FF00]/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href="/blog"
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#E6FF00]/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={resource.badge as any}>{resource.type}</Badge>
                  <span className="text-sm text-[#A3A3A3]">{resource.readTime}</span>
                </div>
                <h3 className="text-2xl font-black uppercase mb-3 group-hover:text-[#E6FF00] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-[#A3A3A3] mb-4">{resource.description}</p>
                <div className="text-[#E6FF00] font-bold">
                  Read More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              FREE TOOLS
            </h2>
            <p className="text-xl text-[#A3A3A3]">Helpful tools to improve your website</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <button
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E6FF00]/50 transition-all text-left"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-black uppercase mb-2">{tool.title}</h3>
                <p className="text-sm text-[#A3A3A3]">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4D9FFF]/10 to-[#B56BFF]/10 rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              STAY UPDATED
            </h2>
            <p className="text-xl text-[#A3A3A3] mb-8">
              Get the latest guides, tutorials, and tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E6FF00]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            READY TO BUILD?
          </h2>
          <p className="text-xl text-[#A3A3A3] mb-12">
            Put what you've learned into practice
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Start Building</Button>
            <Button variant="secondary" size="lg">View Templates</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
