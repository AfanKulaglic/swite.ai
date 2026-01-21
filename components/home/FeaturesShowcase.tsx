export default function FeaturesShowcase() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Design",
      description: "Neural networks trained on 10M+ professional websites generate pixel-perfect layouts instantly.",
      stats: [
        { label: "Accuracy", value: "99.8%" },
        { label: "Speed", value: "< 3s" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚡",
      title: "Global Edge Network",
      description: "Deploy to 200+ edge locations across 6 continents with automatic failover and DDoS protection.",
      stats: [
        { label: "Load Time", value: "0.3s" },
        { label: "Uptime", value: "99.99%" }
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🎨",
      title: "Visual Editor",
      description: "Professional drag-and-drop interface with 1000+ components and real-time collaboration.",
      stats: [
        { label: "Components", value: "1000+" },
        { label: "Templates", value: "500+" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with bank-level encryption, GDPR, HIPAA, and ISO 27001 compliance.",
      stats: [
        { label: "Encryption", value: "256-bit" },
        { label: "Compliance", value: "SOC 2" }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "📊",
      title: "AI SEO & Analytics",
      description: "Automatic optimization with schema markup, meta tags, and real-time performance insights.",
      stats: [
        { label: "SEO Score", value: "95+" },
        { label: "Insights", value: "Real-time" }
      ],
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: "🔌",
      title: "Integrations",
      description: "Connect with 1000+ apps including Stripe, Mailchimp, Zapier with one-click setup.",
      stats: [
        { label: "Apps", value: "1000+" },
        { label: "APIs", value: "REST" }
      ],
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <div className="w-full px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl mb-8">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Enterprise Technology Stack
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="block">Built on</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Military-Grade Infrastructure
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI combined with enterprise-grade security and performance. 
            Trusted by Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6 flex-1">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  {feature.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10M+", label: "Training Data", icon: "🧠" },
                { value: "200+", label: "Edge Locations", icon: "🌍" },
                { value: "1000+", label: "Components", icon: "🎨" },
                { value: "99.99%", label: "Uptime SLA", icon: "⚡" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
