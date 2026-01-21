export default function Testimonials() {
  const testimonials = [
    {
      quote: "This platform revolutionized our entire workflow. The AI capabilities are years ahead of anything else on the market.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechVentures Inc.",
      rating: 5,
    },
    {
      quote: "Incredible performance and intuitive design. Our team launched 10 client sites in the time it used to take for one.",
      author: "Michael Rodriguez",
      role: "Creative Director",
      company: "Digital Innovations",
      rating: 5,
    },
    {
      quote: "The future of web development is here. Our clients are blown away by the quality and speed of delivery.",
      author: "Emma Thompson",
      role: "Founder & CEO",
      company: "Studio Collective",
      rating: 5,
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-xl mb-6 opacity-0 animate-fade-in">
            <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent opacity-0 animate-scale-in delay-100 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5 • 12,000+ REVIEWS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="block opacity-0 animate-slide-in-left delay-200">Trusted by</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 animate-slide-in-right delay-300">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto opacity-0 animate-fade-in delay-[400ms] font-light">
            Join thousands of innovators building the future
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand/20 to-accentBlue/20 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 120}ms` }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 opacity-0 animate-bounce-in" style={{ animationDelay: `${500 + index * 120 + 80 + i * 40}ms` }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-sm text-white/70 mb-6 leading-relaxed italic opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 120 + 280}ms` }}>
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-white/10">
                  <div className="font-bold opacity-0 animate-slide-in-left" style={{ animationDelay: `${500 + index * 120 + 360}ms` }}>
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-white/50 mt-1 opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 120 + 440}ms` }}>
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5 font-medium opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 120 + 520}ms` }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { 
              value: "63K+", 
              label: "Active Sites", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            { 
              value: "99.9%", 
              label: "Uptime", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            { 
              value: "24/7", 
              label: "Support", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              )
            },
            { 
              value: "4.9★", 
              label: "Rating", 
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )
            }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand/20 to-accentBlue/20 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:border-white/30 transition-all">
                <div className="text-white mb-2 opacity-0 animate-bounce-in flex justify-center" style={{ animationDelay: `${900 + index * 100}ms` }}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-accentBlue mb-1 opacity-0 animate-scale-in" style={{ animationDelay: `${900 + index * 100 + 80}ms` }}>
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider opacity-0 animate-fade-in" style={{ animationDelay: `${900 + index * 100 + 160}ms` }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
