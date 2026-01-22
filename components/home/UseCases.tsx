export default function UseCases() {
  const useCases = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Enterprise Solutions",
      description: "Corporate platforms with advanced features for large-scale operations and global teams.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "E-Commerce",
      description: "Next-gen online stores with AI-powered recommendations and seamless checkout.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: "Content Hubs",
      description: "Dynamic publishing platforms with intelligent distribution and analytics.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Creative Studios",
      description: "Immersive portfolio experiences with stunning galleries and showcases.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning Platforms",
      description: "Advanced educational systems with AI tutoring and personalized paths.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Event Experiences",
      description: "Interactive event platforms with live streaming and real-time engagement.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-xl mb-4 opacity-0 animate-fade-in">
            <span className="text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-scale-in delay-100">
              INFINITE POSSIBILITIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            <span className="block opacity-0 animate-slide-in-left delay-200">Built for</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 animate-slide-in-right delay-300">
              Every Vision
            </span>
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${useCase.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/30 transition-all h-full">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-white opacity-0 animate-bounce-in" style={{ animationDelay: `${400 + index * 80}ms` }}>
                  {useCase.icon}
                </div>
                <h3 className="text-base font-bold mb-2 opacity-0 animate-slide-in-left" style={{ animationDelay: `${400 + index * 80 + 80}ms` }}>
                  {useCase.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: `${400 + index * 80 + 160}ms` }}>
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
