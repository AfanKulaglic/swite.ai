import Link from 'next/link';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Solutions | SWITE.AI',
  description: 'Industry-specific AI website solutions for every business type',
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'E-COMMERCE',
      description: 'Build high-converting online stores with AI-powered product pages, checkout optimization, and inventory management.',
      features: ['Product catalog AI', 'Smart checkout flow', 'Inventory sync', 'Payment integration'],
      icon: '🛍️',
      color: 'brand',
    },
    {
      title: 'SAAS & TECH',
      description: 'Launch your SaaS product with conversion-optimized landing pages, pricing tables, and feature showcases.',
      features: ['Pricing calculators', 'Feature comparison', 'API documentation', 'User dashboards'],
      icon: '💻',
      color: 'blue',
    },
    {
      title: 'AGENCIES',
      description: 'Showcase your portfolio and services with stunning case studies, team profiles, and client testimonials.',
      features: ['Portfolio galleries', 'Case study templates', 'Team management', 'Client portals'],
      icon: '🎨',
      color: 'purple',
    },
    {
      title: 'RESTAURANTS',
      description: 'Create beautiful restaurant websites with online menus, reservations, and ordering systems.',
      features: ['Digital menus', 'Table booking', 'Online ordering', 'Location maps'],
      icon: '🍽️',
      color: 'brand',
    },
    {
      title: 'REAL ESTATE',
      description: 'Display properties with virtual tours, search filters, and lead capture forms.',
      features: ['Property listings', 'Search & filters', 'Virtual tours', 'Lead management'],
      icon: '🏠',
      color: 'blue',
    },
    {
      title: 'HEALTHCARE',
      description: 'HIPAA-compliant websites with appointment booking, patient portals, and telehealth integration.',
      features: ['Appointment system', 'Patient portals', 'HIPAA compliance', 'Telehealth ready'],
      icon: '⚕️',
      color: 'purple',
    },
    {
      title: 'EDUCATION',
      description: 'Build learning platforms with course management, student portals, and progress tracking.',
      features: ['Course builder', 'Student dashboard', 'Progress tracking', 'Certification'],
      icon: '📚',
      color: 'brand',
    },
    {
      title: 'FITNESS',
      description: 'Engage members with class schedules, trainer profiles, and membership management.',
      features: ['Class schedules', 'Trainer bios', 'Membership plans', 'Booking system'],
      icon: '💪',
      color: 'blue',
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-16 xl:px-32 py-24 md:py-32 pt-48">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="brand">INDUSTRY SOLUTIONS</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            BUILT FOR YOUR
            <br />
            <span className="text-[#E6FF00]">INDUSTRY ✦</span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-12">
            AI-powered websites tailored to your industry's unique needs. Get started with pre-built templates, 
            industry-specific features, and best practices built in.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="secondary" size="lg">View All Templates</Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative z-10 px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#E6FF00]/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{solution.icon}</div>
                  <div className="mb-4">
                    <Badge variant={solution.color as any}>{solution.title}</Badge>
                  </div>
                  <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm group/item">
                        <span className="text-[#E6FF00] group-hover/item:scale-125 transition-transform">✓</span>
                        <span className="group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/templates" className="text-[#E6FF00] hover:underline font-bold inline-flex items-center gap-2 group/link">
                    View Templates 
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              EVERY SOLUTION INCLUDES
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🤖</div>
              <h3 className="text-xl font-black uppercase mb-3 group-hover:text-brand transition-colors">AI CUSTOMIZATION</h3>
              <p className="text-[#A3A3A3] leading-relaxed">Industry-specific content and design generated by AI</p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">📱</div>
              <h3 className="text-xl font-black uppercase mb-3 group-hover:text-brand transition-colors">MOBILE OPTIMIZED</h3>
              <p className="text-[#A3A3A3] leading-relaxed">Perfect experience on every device</p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🔒</div>
              <h3 className="text-xl font-black uppercase mb-3 group-hover:text-brand transition-colors">SECURE & COMPLIANT</h3>
              <p className="text-[#A3A3A3] leading-relaxed">Industry-standard security and compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-accentBlue/5 to-accentPurple/5 animate-gradient" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                READY TO <span className="text-brand animate-glow-pulse">BUILD</span>?
              </h2>
              <p className="text-xl text-[#A3A3A3] mb-12">
                Start with a template designed for your industry
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg">Generate My Site</Button>
                <Button variant="secondary" size="lg">Talk to Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
