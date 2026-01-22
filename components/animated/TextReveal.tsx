"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TextReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      const lines = textRef.current.querySelectorAll('.reveal-line');

      // Reveal text line by line
      lines.forEach((line, index) => {
        gsap.from(line, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        });
      });

      // Parallax background
      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-[#1A1A2E] to-[#0A0A0A]"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(65, 105, 225, 0.1), transparent 50%)',
        backgroundSize: '100% 200%',
        backgroundPosition: '50% 0%',
      }}
    >
      <div ref={textRef} className="max-w-6xl mx-auto">
        <div className="space-y-8 overflow-hidden">
          <div className="reveal-line">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              We believe in the
            </h2>
          </div>
          <div className="reveal-line">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
                power of design
              </span>
            </h2>
          </div>
          <div className="reveal-line">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              to transform
            </h2>
          </div>
          <div className="reveal-line">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              businesses and
            </h2>
          </div>
          <div className="reveal-line">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[#6B46C1] to-[#4169E1] bg-clip-text text-transparent">
                inspire people
              </span>
            </h2>
          </div>
        </div>

        <div className="reveal-line mt-16">
          <p className="text-2xl text-white/60 max-w-3xl">
            Every project is an opportunity to push boundaries, challenge conventions, 
            and create something extraordinary that resonates with audiences.
          </p>
        </div>
      </div>
    </div>
  );
}
