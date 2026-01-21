export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for individuals and small projects",
      features: [
        "5 websites",
        "50GB bandwidth",
        "Basic AI templates",
        "Community support",
        "SSL certificate",
        "Mobile responsive"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "49",
      description: "For growing businesses and agencies",
      features: [
        "Unlimited websites",
        "500GB bandwidth",
        "Advanced AI features",
        "Priority support",
        "Custom domains",
        "Team collaboration",
        "Version control",
        "Analytics dashboard"
      ],
      cta: "Start 14-Day Trial",
      popular: true,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Professional",
        "Unlimited bandwidth",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl mb-8">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Simple, Transparent Pricing
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Plans That Scale</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              With Your Business
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Start free, upgrade when you're ready. All plans include our core AI features 
            with no hidden fees or surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border ${
                plan.popular ? 'border-blue-500/50' : 'border-white/10'
              } rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-300`}>
                
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-3">{plan.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="mb-8">
                  {plan.price === "Custom" ? (
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                      Custom
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                        ${plan.price}
                      </span>
                      <span className="text-white/50 text-lg">/month</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105' 
                    : 'bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30'
                }`}>
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">
                    What's Included
                  </div>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12">Compare Plans</h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/60 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-bold">Starter</th>
                  <th className="text-center py-4 px-4 font-bold">Professional</th>
                  <th className="text-center py-4 px-4 font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Websites", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Bandwidth", starter: "50GB", pro: "500GB", enterprise: "Unlimited" },
                  { feature: "AI Templates", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
                  { feature: "Support", starter: "Community", pro: "Priority", enterprise: "24/7 Dedicated" },
                  { feature: "Team Members", starter: "1", pro: "10", enterprise: "Unlimited" },
                  { feature: "Custom Domain", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "White Label", starter: "✗", pro: "✗", enterprise: "✓" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white/80">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-white/60">{row.starter}</td>
                    <td className="py-4 px-4 text-center text-white/60">{row.pro}</td>
                    <td className="py-4 px-4 text-center text-white/60">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, upgrade or downgrade anytime. Changes take effect immediately with prorated billing."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers for enterprise plans."
              },
              {
                q: "Is there a free trial?",
                a: "Professional and Enterprise plans include a 14-day free trial. No credit card required."
              },
              {
                q: "What happens if I exceed limits?",
                a: "We'll notify you before limits are reached. You can upgrade or purchase additional resources anytime."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked."
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. Cancel anytime with no penalties. Your sites remain active until the end of your billing period."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
