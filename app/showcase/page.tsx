import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Showcase | SWITE.AI',
  description: 'Explore stunning websites built with SWITE.AI',
};

export default function ShowcasePage() {
  const categories = [
    'All Sites',
    'E-commerce',
    'SaaS',
    'Portfolio',
    'Agency',
    'Restaurant',
    'Real Estate',
    'Healthcare',
  ];

  const showcases = [
    {
      title: 'TechFlow SaaS',
      category: 'SaaS',
      description: 'Modern SaaS platform with pricing and feature showcase',
      image: '💻',
      color: 'from-blue-500/20 to-purple-500/20',
      stats: { visitors: '50K', conversion: '12%' },
    },
    {
      title: 'Luxe Fashion',
      category: 'E-commerce',
      description: 'High-end fashion e-commerce with stunning product galleries',
      image: '👗',
      color: 'from-pink-500/20 to-orange-500/20',
      stats: { visitors: '120K', conversion: '8%' },
    },
    {
      title: 'Creative Studio',
      category: 'Portfolio',
      description: 'Award-winning design agency portfolio',
      image: '🎨',
      color: 'from-purple-500/20 to-blue-500/20',
      stats: { visitors: '30K', conversion: '15%' },
    },
    {
      title: 'Bistro Moderne',
      category: 'Restaurant',
      description: 'Elegant restaurant with online reservations',
      image: '🍽️',
      color: 'from-orange-500/20 to-red-500/20',
      stats: { visitors: '25K', conversion: '20%' },
    },
    {
      title: 'Urban Properties',
      category: 'Real Estate',
      description: 'Real estate platform with virtual tours',
      image: '🏠',
      color: 'from-green-500/20 to-blue-500/20',
      stats: { visitors: '80K', conversion: '10%' },
    },
    {
      title: 'Wellness Clinic',
      category: 'Healthcare',
      description: 'Modern healthcare practice with appointment booking',
      image: '⚕️',
      color: 'from-blue-500/20 to-green-500/20',
      stats: { visitors: '40K', conversion: '18%' },
    },
    {
      title: 'Digital Agency Pro',
      category: 'Agency',
      description: 'Full-service digital agency with case studies',
      image: '🚀',
      color: 'from-purple-500/20 to-pink-500/20',
      stats: { visitors: '60K', conversion: '14%' },
    },
    {
      title: 'FitLife Studio',
      category: 'Fitness',
      description: 'Fitness studio with class schedules and memberships',
      image: '💪',
      color: 'from-red-500/20 to-orange-500/20',
      stats: { visitors: '35K', conversion: '16%' },
    },
    {
      title: 'EduLearn Platform',
      category: 'Education',
      description: 'Online learning platform with course management',
      image: '📚',
      color: 'from-blue-500/20 to-cyan-500/20',
      stats: { visitors: '90K', conversion: '11%' },
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="brand">WEBSITE SHOWCASE</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            BUILT WITH
            <br />
            <span className="text-[#E6FF00]">SWITE.AI ✦</span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-12">
            Explore stunning websites created by our users. Get inspired and see what's possible 
            with AI-powered website building.
          </p>
          <Button size="lg">Submit Your Site</Button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-16 xl:px-32 py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">10K+</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Sites Built</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">50+</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Industries</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">4.9/5</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Avg Rating</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">100M+</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Page Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-16 xl:px-32 py-12">
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
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcases.map((site, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#E6FF00]/50 transition-all group"
              >
                <div className={`bg-gradient-to-br ${site.color} h-48 flex items-center justify-center text-7xl`}>
                  {site.image}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="blue">{site.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-[#E6FF00] transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-[#A3A3A3] mb-4 text-sm">{site.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="text-xs text-[#A3A3A3]">Monthly Visitors</div>
                      <div className="font-black">{site.stats.visitors}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#A3A3A3]">Conversion</div>
                      <div className="font-black text-[#E6FF00]">{site.stats.conversion}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              FEATURED THIS MONTH
            </h2>
          </div>
          <div className="bg-gradient-to-br from-[#4D9FFF]/20 to-[#B56BFF]/20 rounded-3xl p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl h-80 flex items-center justify-center text-9xl">
                🎯
              </div>
              <div>
                <div className="mb-4">
                  <Badge variant="brand">FEATURED SITE</Badge>
                </div>
                <h3 className="text-4xl font-black uppercase mb-4">STARTUP ACCELERATOR</h3>
                <p className="text-lg text-[#A3A3A3] mb-6">
                  A comprehensive platform for startup founders with resources, mentorship, 
                  and funding opportunities. Built in under 2 hours with SWITE.AI.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-black text-[#E6FF00]">200K</div>
                    <div className="text-xs text-[#A3A3A3]">Monthly Visitors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#E6FF00]">25%</div>
                    <div className="text-xs text-[#A3A3A3]">Conversion Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#E6FF00]">4.8/5</div>
                    <div className="text-xs text-[#A3A3A3]">User Rating</div>
                  </div>
                </div>
                <Button>View Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            BUILD YOUR OWN
          </h2>
          <p className="text-xl text-[#A3A3A3] mb-12">
            Create a stunning website like these in minutes
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
