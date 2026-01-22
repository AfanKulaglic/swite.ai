import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Integrations | SWITE.AI',
  description: 'Connect SWITE.AI with your favorite tools and services',
};

export default function IntegrationsPage() {
  const categories = [
    'All Integrations',
    'Marketing',
    'Analytics',
    'E-commerce',
    'CRM',
    'Payment',
    'Communication',
    'Productivity',
  ];

  const integrations = [
    {
      name: 'Google Analytics',
      category: 'Analytics',
      description: 'Track website traffic and user behavior',
      icon: '📊',
      badge: 'brand',
      popular: true,
    },
    {
      name: 'Stripe',
      category: 'Payment',
      description: 'Accept payments and manage subscriptions',
      icon: '💳',
      badge: 'blue',
      popular: true,
    },
    {
      name: 'Mailchimp',
      category: 'Marketing',
      description: 'Email marketing and automation',
      icon: '📧',
      badge: 'purple',
      popular: true,
    },
    {
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Sync products and manage inventory',
      icon: '🛍️',
      badge: 'brand',
      popular: false,
    },
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Manage customer relationships',
      icon: '☁️',
      badge: 'blue',
      popular: false,
    },
    {
      name: 'Slack',
      category: 'Communication',
      description: 'Team notifications and alerts',
      icon: '💬',
      badge: 'purple',
      popular: true,
    },
    {
      name: 'HubSpot',
      category: 'Marketing',
      description: 'Inbound marketing and sales',
      icon: '🎯',
      badge: 'brand',
      popular: false,
    },
    {
      name: 'PayPal',
      category: 'Payment',
      description: 'Accept PayPal payments',
      icon: '💰',
      badge: 'blue',
      popular: false,
    },
    {
      name: 'Zapier',
      category: 'Productivity',
      description: 'Connect 5000+ apps with automation',
      icon: '⚡',
      badge: 'purple',
      popular: true,
    },
    {
      name: 'Facebook Pixel',
      category: 'Analytics',
      description: 'Track conversions and retarget',
      icon: '📱',
      badge: 'brand',
      popular: false,
    },
    {
      name: 'Intercom',
      category: 'Communication',
      description: 'Customer messaging platform',
      icon: '💭',
      badge: 'blue',
      popular: false,
    },
    {
      name: 'WooCommerce',
      category: 'E-commerce',
      description: 'WordPress e-commerce integration',
      icon: '🛒',
      badge: 'purple',
      popular: false,
    },
  ];

  const features = [
    {
      title: 'ONE-CLICK SETUP',
      description: 'Connect integrations in seconds without any coding',
      icon: '⚡',
    },
    {
      title: 'AUTO-SYNC',
      description: 'Data syncs automatically in real-time',
      icon: '🔄',
    },
    {
      title: 'SECURE',
      description: 'Enterprise-grade security for all connections',
      icon: '🔒',
    },
    {
      title: 'CUSTOM WEBHOOKS',
      description: 'Build custom integrations with our API',
      icon: '🔌',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="brand">INTEGRATIONS</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            CONNECT YOUR
            <br />
            <span className="text-[#E6FF00]">FAVORITE TOOLS ✦</span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-12">
            Seamlessly integrate SWITE.AI with 150+ popular tools and services. 
            No coding required - just one-click setup.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#E6FF00]"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E6FF00]">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 xl:px-32 py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">150+</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Integrations</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">1-Click</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Setup</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">Real-time</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Sync</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#E6FF00] mb-2">100%</div>
              <div className="text-sm text-[#A3A3A3] uppercase">Secure</div>
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

      {/* Popular Integrations */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              POPULAR INTEGRATIONS
            </h2>
            <p className="text-[#A3A3A3]">Most used by our customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrations.filter(i => i.popular).map((integration, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#E6FF00]/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{integration.icon}</div>
                  <Badge variant={integration.badge as any}>{integration.category}</Badge>
                </div>
                <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-[#E6FF00] transition-colors">
                  {integration.name}
                </h3>
                <p className="text-[#A3A3A3] mb-6 text-sm">{integration.description}</p>
                <Button variant="secondary" className="w-full">Connect</Button>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              ALL INTEGRATIONS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.filter(i => !i.popular).map((integration, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E6FF00]/50 transition-all group"
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-lg font-black uppercase mb-2 group-hover:text-[#E6FF00] transition-colors">
                  {integration.name}
                </h3>
                <p className="text-[#A3A3A3] text-xs mb-4">{integration.description}</p>
                <button className="text-[#E6FF00] text-sm font-bold hover:underline">
                  Connect →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              INTEGRATION FEATURES
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase mb-3">{feature.title}</h3>
                <p className="text-[#A3A3A3] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4D9FFF]/10 to-[#B56BFF]/10 rounded-3xl p-12 border border-white/10 text-center">
            <div className="text-6xl mb-6">🔌</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              NEED A CUSTOM INTEGRATION?
            </h2>
            <p className="text-xl text-[#A3A3A3] mb-8">
              Use our powerful API and webhooks to build custom integrations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">View API Docs</Button>
              <Button variant="secondary" size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            START CONNECTING
          </h2>
          <p className="text-xl text-[#A3A3A3] mb-12">
            Get started with SWITE.AI and connect your tools today
          </p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>
    </main>
  );
}
