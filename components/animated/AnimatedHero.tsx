"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hero animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      }, '-=0.6')
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4');

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade out on scroll
      gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A]"
    >
      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4169E1]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#6B46C1]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1
          ref={titleRef}
          className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
        >
          <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
            Creative
          </span>
          <span className="block bg-gradient-to-r from-[#4169E1] via-[#6B46C1] to-[#4169E1] bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting digital experiences that push boundaries and inspire innovation
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-lg font-bold shadow-2xl shadow-[#4169E1]/30 hover:scale-105 transition-transform duration-300">
            Explore Work
          </button>
          <button className="px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white text-lg font-bold hover:bg-white/10 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
