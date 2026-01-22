import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Enterprise | SWITE.AI',
  description: 'Enterprise-grade AI website solutions with advanced security, scalability, and support',
};

export default function EnterprisePage() {
  const features = [
    {
      title: 'ADVANCED SECURITY',
      description: 'Enterprise-grade security with SSO, 2FA, role-based access control, and compliance certifications.',
      items: ['SOC 2 Type II certified', 'GDPR & CCPA compliant', 'SSO integration', 'Advanced DDoS protection'],
      icon: '🔐',
    },
    {
      title: 'SCALABILITY',
      description: 'Infrastructure that scales with your business from thousands to millions of visitors.',
      items: ['Auto-scaling CDN', '99.99% uptime SLA', 'Load balancing', 'Global edge network'],
      icon: '📈',
    },
    {
      title: 'CUSTOM INTEGRATIONS',
      description: 'Connect your existing tools and workflows with our comprehensive API and webhook system.',
      items: ['REST & GraphQL APIs', 'Custom webhooks', 'CRM integration', 'ERP connectivity'],
      icon: '🔌',
    },
    {
      title: 'DEDICATED SUPPORT',
      description: '24/7 priority support with dedicated account management and technical assistance.',
      items: ['24/7 phone support', 'Dedicated account manager', 'Priority bug fixes', 'Custom training'],
      icon: '🎯',
    },
    {
      title: 'WHITE-LABEL',
      description: 'Fully customizable platform with your branding, domain, and custom features.',
      items: ['Custom branding', 'Private label', 'Custom domain', 'Branded dashboard'],
      icon: '🎨',
    },
    {
      title: 'TEAM COLLABORATION',
      description: 'Advanced collaboration tools for large teams with granular permissions and workflows.',
      items: ['Unlimited team members', 'Role-based permissions', 'Approval workflows', 'Activity logs'],
      icon: '👥',
    },
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '10M+', label: 'Sites Hosted' },
    { value: '<100ms', label: 'Response Time' },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
          <div className="mb-6">
            <Badge variant="brand">ENTERPRISE SOLUTIONS</Badge>
          </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
                SCALE YOUR
                <br />
                <span className="text-[#E6FF00]">BUSINESS ✦</span>
              </h1>
              <p className="text-xl text-[#A3A3A3] mb-8">
                Enterprise-grade AI website platform with advanced security, unlimited scalability, 
                and dedicated support for large organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Contact Sales</Button>
                <Button variant="secondary" size="lg">Schedule Demo</Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4D9FFF]/20 to-[#B56BFF]/20 rounded-3xl p-12 border border-white/10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black text-[#E6FF00] mb-2">{stat.value}</div>
                    <div className="text-sm text-[#A3A3A3] uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              ENTERPRISE FEATURES
            </h2>
            <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto">
              Everything you need to power your organization's digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#E6FF00]/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4">{feature.title}</h3>
                <p className="text-[#A3A3A3] mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#E6FF00] mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              SECURITY & COMPLIANCE
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-black">SOC 2 TYPE II</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-black">GDPR COMPLIANT</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-2">⚕️</div>
              <div className="font-black">HIPAA READY</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-2">✓</div>
              <div className="font-black">ISO 27001</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4D9FFF]/10 to-[#B56BFF]/10 rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              CUSTOM ENTERPRISE PRICING
            </h2>
            <p className="text-xl text-[#A3A3A3] mb-8">
              Get a tailored solution that fits your organization's needs and budget
            </p>
            <ul className="text-left max-w-2xl mx-auto mb-8 space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-[#E6FF00]">✓</span>
                <span>Volume discounts for multiple sites</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E6FF00]">✓</span>
                <span>Flexible payment terms</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E6FF00]">✓</span>
                <span>Custom feature development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E6FF00]">✓</span>
                <span>Dedicated infrastructure options</span>
              </li>
            </ul>
            <Button size="lg">Contact Sales Team</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            LET'S TALK
          </h2>
          <p className="text-xl text-[#A3A3A3] mb-12">
            Schedule a call with our enterprise team to discuss your needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Schedule Demo</Button>
            <Button variant="secondary" size="lg">Download Brochure</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
