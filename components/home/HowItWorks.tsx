export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Describe Your Vision",
      description: "Our AI understands natural language and interprets your requirements to create the perfect foundation.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "AI Generates",
      description: "Watch as advanced algorithms create a complete professional website with layouts, colors, and content.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Customize",
      description: "Fine-tune every detail with our immersive visual editor. See changes instantly with real-time preview.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Deploy",
      description: "Launch instantly on our global edge network with automatic SSL and lightning-fast performance.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-xl mb-4 opacity-0 animate-fade-in">
            <span className="text-xs font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent opacity-0 animate-scale-in delay-100">
              STREAMLINED WORKFLOW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            <span className="block opacity-0 animate-slide-in-left delay-200">Launch in</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 animate-slide-in-right delay-300">
              15 Minutes
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all h-full">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center opacity-0 animate-bounce-in text-white" style={{ animationDelay: `${400 + index * 120}ms` }}>
                    <span className="opacity-0 animate-scale-in" style={{ animationDelay: `${400 + index * 120 + 80}ms` }}>
                      {step.icon}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold opacity-0 animate-slide-in-left" style={{ animationDelay: `${400 + index * 120 + 160}ms` }}>
                        {step.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold opacity-0 animate-scale-in" style={{ animationDelay: `${400 + index * 120 + 240}ms` }}>
                        {step.number}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: `${400 + index * 120 + 320}ms` }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
