"use client";

import { useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Swite.ai transformed how we deliver websites to clients. What used to take our team 2-3 weeks now takes hours. The AI generates professional, conversion-optimized sites that our clients love. ROI has been incredible.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "Digital Wave Agency",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      quote: "As a non-technical founder, I was able to launch a professional SaaS landing page in under an hour. The AI understood my requirements perfectly and generated content that resonated with my target audience.",
      author: "Marcus Rodriguez",
      role: "Founder",
      company: "TechStart SaaS",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      quote: "The platform's flexibility is outstanding. I can quickly prototype ideas, test different designs, and iterate based on user feedback. The built-in analytics and A/B testing have helped optimize our conversion rates significantly.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "Growth Labs",
      avatar: "👩‍🎨",
      rating: 5,
    },
    {
      quote: "We migrated our entire client portfolio to Swite.ai. The white-label features, API access, and team collaboration tools make it perfect for agencies. Support team is responsive and the platform is rock-solid.",
      author: "James Park",
      role: "Creative Director",
      company: "Studio Collective",
      avatar: "👨‍🎨",
      rating: 5,
    },
    {
      quote: "The SEO optimization is impressive. Our website ranks on page 1 for multiple keywords within weeks of launch. The automatic schema markup and Core Web Vitals optimization really make a difference.",
      author: "Lisa Thompson",
      role: "Marketing Director",
      company: "E-commerce Plus",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      quote: "Best investment for our startup. We've built and launched 5 different landing pages for various campaigns. The speed and quality are unmatched. The platform pays for itself with just one client project.",
      author: "David Kim",
      role: "Co-founder",
      company: "Startup Ventures",
      avatar: "👨‍💼",
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="relative px-6 md:px-16 xl:px-32 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-brand text-2xl">★★★★★</span>
            <span className="text-sm text-gray-600">4.9/5 from 2,000+ reviews</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            TRUSTED BY PROFESSIONALS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses, agencies, and creators building professional websites with Swite.ai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all flex flex-col opacity-0"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand text-lg animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm mb-6 leading-relaxed flex-1 text-gray-600 group-hover:text-white transition-colors">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-accentBlue flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-brand font-bold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in delay-700">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "50K+", label: "Websites Built" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand/50 hover:scale-105 transition-all"
            >
              <div className="text-3xl font-black text-brand mb-2">{stat.value}</div>
              <div className="text-xs text-gray-600 uppercase font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
