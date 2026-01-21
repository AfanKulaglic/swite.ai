"use client";

import { useEffect, useRef } from "react";
import Badge from "@/components/ui/Badge";

export default function StatsSection() {
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
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll(".stat-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      number: "50K+", 
      label: "Websites Built", 
      description: "Trusted by businesses worldwide",
      icon: "🌐",
      color: "brand"
    },
    { 
      number: "99.9%", 
      label: "Uptime SLA", 
      description: "Enterprise-grade reliability",
      icon: "⚡",
      color: "accentBlue"
    },
    { 
      number: "<20s", 
      label: "Generation Time", 
      description: "Average website build speed",
      icon: "⏱️",
      color: "accentPurple"
    },
    { 
      number: "150+", 
      label: "Integrations", 
      description: "Connect your favorite tools",
      icon: "🔌",
      color: "brand"
    },
  ];

  return (
    <section ref={sectionRef} className="relative px-6 md:px-16 xl:px-32 py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <Badge variant="brand">TRUSTED PLATFORM</Badge>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-6 mb-4">
            POWERING WEBSITES GLOBALLY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses, creators, and agencies building professional websites with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 opacity-0"
              style={{ 
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
              
              {/* Number with Counter Animation */}
              <div className={`text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 ${
                stat.color === 'brand' ? 'text-brand' :
                stat.color === 'accentBlue' ? 'text-accentBlue' :
                'text-accentPurple'
              }`}>
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-base uppercase font-bold mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-transparent transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 opacity-0 animate-fade-in delay-500">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="text-brand text-xl">★★★★★</span>
            <span>4.9/5 Rating</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="text-brand">✓</span>
            <span>SOC 2 Certified</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="text-brand">✓</span>
            <span>GDPR Compliant</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="text-brand">✓</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
