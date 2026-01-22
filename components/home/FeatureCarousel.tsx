"use client";

import { useState, useEffect } from "react";
import SpiderWebCorner from "@/components/ui/SpiderWebCorner";

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      title: "AI-Powered Generation",
      description: "Describe your vision in plain English. Our advanced AI understands context, brand guidelines, and design principles to create pixel-perfect websites in seconds.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: ["30s", "Generation Time"],
      color: "from-[#4169E1] to-[#6B46C1]"
    },
    {
      title: "Visual Editor",
      description: "Intuitive drag-and-drop interface with real-time preview. Edit every element, adjust layouts, and see changes instantly without touching code.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      stats: ["Zero", "Code Required"],
      color: "from-[#10B981] to-[#059669]"
    },
    {
      title: "Global CDN",
      description: "Lightning-fast performance with automatic deployment to 200+ edge locations worldwide. Your sites load in milliseconds, anywhere on Earth.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: ["200+", "Edge Locations"],
      color: "from-[#8B5CF6] to-[#7C3AED]"
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with automatic SSL, DDoS protection, and enterprise-grade security. Your data and your customers' data are always protected.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: ["SOC 2", "Certified"],
      color: "from-[#F59E0B] to-[#D97706]"
    },
    {
      title: "Real-Time Collaboration",
      description: "Work together with your team in real-time. See changes as they happen, leave comments, and ship faster with built-in collaboration tools.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stats: ["Live", "Collaboration"],
      color: "from-[#EC4899] to-[#DB2777]"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full px-6 py-32 overflow-hidden">
      <SpiderWebCorner position="bottom-left" size="lg" opacity={0.08} />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4169E1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6B46C1]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 backdrop-blur-xl mb-8">
            <span className="text-sm font-bold bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent uppercase tracking-wider">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Enterprise-grade tools that make website building effortless
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Feature Display */}
          <div className="relative h-[600px] mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                  {/* Left: Content */}
                  <div className="space-y-8">
                    {/* Icon */}
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.color} p-6 shadow-2xl`}>
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-5xl md:text-6xl font-black text-white leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-white/70 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div className={`px-6 py-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-10 border border-white/10`}>
                        <div className={`text-3xl font-black bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                          {feature.stats[0]}
                        </div>
                        <div className="text-sm text-white/60 font-medium">
                          {feature.stats[1]}
                        </div>
                      </div>
                    </div>

                    {/* Learn More Link */}
                    <button className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                      <span className="font-semibold">Learn more</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Right: Visual */}
                  <div className="relative h-full">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 overflow-hidden">
                      {/* Screenshot Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${feature.color} opacity-20 flex items-center justify-center`}>
                          <div className="w-20 h-20">
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1]'
                    : 'w-3 h-3 bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={() => goToSlide((activeIndex - 1 + features.length) % features.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 flex items-center justify-center hover:border-[#4169E1]/40 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => goToSlide((activeIndex + 1) % features.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 flex items-center justify-center hover:border-[#4169E1]/40 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
