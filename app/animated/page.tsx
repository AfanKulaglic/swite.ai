"use client";

import { useEffect } from 'react';
import AnimatedHero from '@/components/animated/AnimatedHero';
import PinnedSection from '@/components/animated/PinnedSection';
import HorizontalScroll from '@/components/animated/HorizontalScroll';
import TextReveal from '@/components/animated/TextReveal';
import ParallaxSection from '@/components/animated/ParallaxSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedPage() {
  useEffect(() => {
    // Smooth scroll configuration
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-[#0A0A0A]">
      {/* Hero with parallax and fade out */}
      <AnimatedHero />
      
      {/* Text reveal section */}
      <TextReveal />
      
      {/* Pinned section with sequential cards */}
      <PinnedSection />
      
      {/* Parallax section with floating orbs */}
      <ParallaxSection />
      
      {/* Horizontal scroll showcase */}
      <HorizontalScroll />
      
      {/* Final CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E] py-32 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4169E1]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6B46C1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Ready to create
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
              something amazing?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed">
            Let's work together to bring your vision to life with cutting-edge design and technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-lg font-bold shadow-2xl shadow-[#4169E1]/30 hover:scale-105 hover:shadow-[#4169E1]/50 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-12 py-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white text-lg font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              View Our Work
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "50+", label: "Countries" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20">
                <div className="text-4xl font-black bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
