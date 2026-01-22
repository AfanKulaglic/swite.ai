export default function FeaturesPreview() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Powered Design",
      description: "Neural networks generate stunning layouts in seconds.",
      gradient: "from-brand to-accentBlue",
      tags: ["Neural Design", "Auto-Layout", "Smart Grid"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quantum Performance",
      description: "Lightning-fast infrastructure powered by edge computing.",
      gradient: "from-yellow-500 to-orange-500",
      tags: ["Edge CDN", "0.3s Load", "99.99% Uptime"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Visual Editor",
      description: "Drag, drop, and watch your vision come to life instantly.",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Live Preview", "Drag & Drop", "Real-time"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Adaptive Design",
      description: "Automatically optimized for every device and screen size.",
      gradient: "from-green-500 to-emerald-500",
      tags: ["Mobile First", "Responsive", "Touch Ready"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Military-Grade Security",
      description: "Bank-level encryption protects your data and users.",
      gradient: "from-red-500 to-rose-500",
      tags: ["256-bit SSL", "GDPR Ready", "SOC 2"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO Superpowers",
      description: "Built-in optimization gets you to the top of search results.",
      gradient: "from-indigo-500 to-violet-500",
      tags: ["AI SEO", "Schema Pro", "Core Web Vitals"],
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-brand/20 to-accentBlue/20 border border-brand/30 backdrop-blur-xl mb-6 opacity-0 animate-fade-in">
            <span className="text-sm font-bold bg-gradient-to-r from-brand to-accentBlue bg-clip-text text-transparent opacity-0 animate-scale-in delay-100">
              ADVANCED CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="block opacity-0 animate-slide-in-left delay-200">Powered by</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand to-accentBlue opacity-0 animate-slide-in-right delay-300">
              Next-Gen Technology
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand/20 to-accentBlue/20 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all h-full">
                <div className="w-14 h-14 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-white opacity-0 animate-bounce-in" style={{ animationDelay: `${400 + index * 80}ms` }}>
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 opacity-0 animate-slide-in-left" style={{ animationDelay: `${400 + index * 80 + 80}ms` }}>
                  {feature.title}
                </h3>
                
                <p className="text-xs text-white/60 mb-3 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: `${400 + index * 80 + 160}ms` }}>
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {feature.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/70 opacity-0 animate-slide-in-right"
                      style={{ animationDelay: `${400 + index * 80 + 240 + tagIndex * 60}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
