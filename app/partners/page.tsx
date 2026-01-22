import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Partner Program | SWITE.AI',
  description: 'Join the SWITE.AI partner program and grow your business with exclusive benefits',
};

export default function PartnersPage() {
  const benefits = [
    {
      title: 'REVENUE SHARE',
      description: 'Earn up to 30% recurring commission on every client you refer',
      icon: '💰',
      details: ['30% recurring commission', 'Lifetime revenue share', 'Monthly payouts', 'No earning caps'],
    },
    {
      title: 'PRIORITY SUPPORT',
      description: 'Get dedicated support for you and your clients',
      icon: '🎯',
      details: ['Dedicated partner manager', '24/7 priority support', 'Technical assistance', 'Training resources'],
    },
    {
      title: 'EXCLUSIVE TOOLS',
      description: 'Access partner-only features and resources',
      icon: '🛠️',
      details: ['White-label options', 'Custom branding', 'Client management', 'Bulk operations'],
    },
    {
      title: 'LEAD GENERATION',
      description: 'Get qualified leads from our platform',
      icon: '📈',
      details: ['Lead sharing program', 'Co-marketing opportunities', 'Featured in directory', 'Case study support'],
    },
  ];

  const tiers = [
    {
      name: 'STARTER',
      commission: '20%',
      requirements: '0-10 clients',
      features: [
        'Basic partner dashboard',
        'Email support',
        'Marketing materials',
        'Monthly payouts',
      ],
    },
    {
      name: 'GROWTH',
      commission: '25%',
      requirements: '11-50 clients',
      features: [
        'Advanced dashboard',
        'Priority support',
        'Co-marketing opportunities',
        'Bi-weekly payouts',
        'Partner badge',
      ],
      recommended: true,
    },
    {
      name: 'ENTERPRISE',
      commission: '30%',
      requirements: '51+ clients',
      features: [
        'Full white-label access',
        'Dedicated account manager',
        'Custom integrations',
        'Weekly payouts',
        'Featured partner status',
        'Custom training',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge variant="brand">PARTNER PROGRAM</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
                GROW WITH
                <br />
                <span className="text-[#E6FF00]">SWITE.AI ✦</span>
              </h1>
              <p className="text-xl text-[#A3A3A3] mb-8">
                Join our partner program and unlock exclusive benefits including revenue share, 
                priority support, and lead generation opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Apply Now</Button>
                <Button variant="secondary" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4D9FFF]/20 to-[#B56BFF]/20 rounded-3xl p-12 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">💰</div>
                  <div>
                    <div className="text-3xl font-black text-[#E6FF00]">30%</div>
                    <div className="text-sm text-[#A3A3A3]">Recurring Commission</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <div className="text-3xl font-black text-[#E6FF00]">500+</div>
                    <div className="text-sm text-[#A3A3A3]">Active Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📈</div>
                  <div>
                    <div className="text-3xl font-black text-[#E6FF00]">$2M+</div>
                    <div className="text-sm text-[#A3A3A3]">Paid to Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              PARTNER BENEFITS
            </h2>
            <p className="text-xl text-[#A3A3A3]">Everything you need to succeed</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#E6FF00]/50 transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4">{benefit.title}</h3>
                <p className="text-[#A3A3A3] mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-[#E6FF00]">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              PARTNER TIERS
            </h2>
            <p className="text-xl text-[#A3A3A3]">Grow your commission as you scale</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/5 border rounded-3xl p-8 ${
                  tier.recommended ? 'border-[#E6FF00]' : 'border-white/10'
                }`}
              >
                {tier.recommended && (
                  <div className="mb-4">
                    <Badge variant="brand">MOST POPULAR</Badge>
                  </div>
                )}
                <h3 className="text-3xl font-black uppercase mb-2">{tier.name}</h3>
                <div className="text-5xl font-black text-[#E6FF00] mb-2">{tier.commission}</div>
                <p className="text-[#A3A3A3] mb-6">{tier.requirements}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#E6FF00] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              HOW IT WORKS
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6FF00] text-black rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-black uppercase mb-2">APPLY</h3>
              <p className="text-[#A3A3A3] text-sm">Submit your application and get approved in 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6FF00] text-black rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-black uppercase mb-2">REFER</h3>
              <p className="text-[#A3A3A3] text-sm">Share your unique link with clients and prospects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6FF00] text-black rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-black uppercase mb-2">EARN</h3>
              <p className="text-[#A3A3A3] text-sm">Get paid recurring commissions every month</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6FF00] text-black rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-black uppercase mb-2">SCALE</h3>
              <p className="text-[#A3A3A3] text-sm">Grow your tier and unlock higher commissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            READY TO PARTNER?
          </h2>
          <p className="text-xl text-[#A3A3A3] mb-12">
            Join hundreds of agencies and freelancers growing with SWITE.AI
          </p>
          <Button size="lg">Apply to Partner Program</Button>
        </div>
      </section>
    </main>
  );
}
