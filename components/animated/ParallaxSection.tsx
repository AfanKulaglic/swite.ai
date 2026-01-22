"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Different parallax speeds for layers
      gsap.to(layer1Ref.current, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(layer2Ref.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(layer3Ref.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content fade in
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Parallax layers */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4169E1]/20 to-transparent blur-3xl" />
      </div>

      <div
        ref={layer2Ref}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#6B46C1]/30 to-transparent blur-2xl" />
      </div>

      <div
        ref={layer3Ref}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4169E1]/40 to-[#6B46C1]/40 blur-xl" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 backdrop-blur-xl mb-8">
          <span className="text-sm font-bold bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent uppercase tracking-wider">
            Our Approach
          </span>
        </div>

        <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Design with
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
            Purpose
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed">
          We combine strategic thinking with creative execution to deliver 
          solutions that not only look beautiful but drive real business results.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { number: "01", title: "Research", desc: "Deep dive into your business" },
            { number: "02", title: "Design", desc: "Craft the perfect solution" },
            { number: "03", title: "Deliver", desc: "Launch with confidence" }
          ].map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 backdrop-blur-xl hover:border-[#4169E1]/40 transition-all duration-500"
            >
              <div className="text-5xl font-black bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{step.title}</h3>
              <p className="text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
