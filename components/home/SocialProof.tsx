export default function SocialProof() {
  const testimonials = [
    {
      quote: "Reduced our development cycle from months to days. The AI capabilities are genuinely transformative for enterprise operations.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechVentures Inc.",
      rating: 5,
      image: "SC"
    },
    {
      quote: "ROI was immediate. We've deployed 50+ client sites with consistent quality and zero infrastructure headaches.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "Digital Innovations",
      rating: 5,
      image: "MR"
    },
    {
      quote: "The platform scales effortlessly. From startup MVPs to enterprise deployments, it handles everything flawlessly.",
      author: "Emma Thompson",
      role: "VP Engineering",
      company: "Studio Collective",
      rating: 5,
      image: "ET"
    },
  ];

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-white/90">4.9/5 from 12,000+ reviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join thousands of companies building faster with AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/50">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "99.99%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "150+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
