export default function UseCasesGrid() {
  const useCases = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Enterprise Solutions",
      description: "Corporate platforms with advanced features for large-scale operations, team collaboration, and global deployment.",
      features: ["Multi-tenant", "SSO Integration", "Advanced Analytics", "Custom Workflows"],
      gradient: "from-blue-500 to-cyan-500",
      stats: { users: "10K+", uptime: "99.99%" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "E-Commerce",
      description: "Next-gen online stores with AI-powered recommendations, inventory management, and seamless checkout experiences.",
      features: ["AI Recommendations", "Payment Gateway", "Inventory Sync", "Order Tracking"],
      gradient: "from-green-500 to-emerald-500",
      stats: { conversion: "+45%", revenue: "$2M+" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: "Content Hubs",
      description: "Dynamic publishing platforms with intelligent content distribution, SEO optimization, and audience analytics.",
      features: ["CMS Integration", "SEO Tools", "Analytics", "Multi-channel"],
      gradient: "from-purple-500 to-pink-500",
      stats: { articles: "50K+", readers: "1M+" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Creative Studios",
      description: "Immersive portfolio experiences with stunning galleries, case studies, and client showcases that captivate.",
      features: ["Gallery System", "Case Studies", "Client Portal", "Booking"],
      gradient: "from-orange-500 to-red-500",
      stats: { projects: "5K+", clients: "500+" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning Platforms",
      description: "Advanced educational systems with AI tutoring, personalized learning paths, and progress tracking.",
      features: ["AI Tutoring", "Progress Tracking", "Certificates", "Live Classes"],
      gradient: "from-yellow-500 to-orange-500",
      stats: { students: "25K+", courses: "1K+" }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Event Experiences",
      description: "Interactive event platforms with live streaming, ticketing, networking, and real-time engagement features.",
      features: ["Live Streaming", "Ticketing", "Networking", "Analytics"],
      gradient: "from-pink-500 to-rose-500",
      stats: { events: "2K+", attendees: "100K+" }
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-xl mb-6 opacity-0 animate-fade-in">
            <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-scale-in delay-100">
              INFINITE POSSIBILITIES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="block opacity-0 animate-slide-in-left delay-200">Built for</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 animate-slide-in-right delay-300">
              Every Vision
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto opacity-0 animate-fade-in delay-[400ms]">
            From startups to enterprises, our platform adapts to your unique needs
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group relative opacity-0 animate-fade-in-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
              <div className={`absolute -inset-1 bg-gradient-to-r ${useCase.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all h-full flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white flex-shrink-0 opacity-0 animate-bounce-in" style={{ animationDelay: `${500 + index * 100 + 100}ms` }}>
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-1 opacity-0 animate-slide-in-left" style={{ animationDelay: `${500 + index * 100 + 200}ms` }}>
                      {useCase.title}
                    </h3>
                    <div className="flex gap-2 text-xs opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 100 + 300}ms` }}>
                      {Object.entries(useCase.stats).map(([key, value], i) => (
                        <span key={i} className="text-white/50">
                          <span className="text-white/80 font-bold">{value}</span> {key}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-4 opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 100 + 400}ms` }}>
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="mt-auto">
                  <div className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 100 + 500}ms` }}>
                    Key Features
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs opacity-0 animate-slide-in-right" style={{ animationDelay: `${500 + index * 100 + 600 + i * 50}ms` }}>
                        <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center opacity-0 animate-fade-in-up delay-[2000ms]">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-8 py-6 hover:border-white/30 transition-all">
              <p className="text-lg font-bold mb-2">Don't see your use case?</p>
              <p className="text-sm text-white/60 mb-4">Our platform is infinitely customizable to fit any vision</p>
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition-transform">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
