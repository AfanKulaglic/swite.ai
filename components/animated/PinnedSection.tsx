"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PinnedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      
      if (!cards) return;

      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        pinSpacing: true,
      });

      // Animate cards sequentially
      cards.forEach((card, index) => {
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${index * 25}% top`,
            end: `top+=${(index + 1) * 25}% top`,
            scrub: 1,
          },
        });

        // Fade out previous cards
        if (index > 0) {
          gsap.to(cards[index - 1], {
            scale: 0.9,
            opacity: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${index * 25}% top`,
              end: `top+=${(index + 1) * 25}% top`,
              scrub: 1,
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "AI-Powered",
      description: "Advanced artificial intelligence that understands your vision",
      icon: "⚡",
      color: "from-[#4169E1] to-[#6B46C1]"
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance for instant results",
      icon: "🚀",
      color: "from-[#10B981] to-[#059669]"
    },
    {
      title: "Secure",
      description: "Enterprise-grade security and compliance",
      icon: "🔒",
      color: "from-[#F59E0B] to-[#D97706]"
    },
    {
      title: "Scalable",
      description: "Built to grow with your business",
      icon: "📈",
      color: "from-[#8B5CF6] to-[#7C3AED]"
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E]"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-white/60">
            Scroll to discover our key features
          </p>
        </div>

        <div ref={cardsRef} className="relative h-[400px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card absolute inset-0 flex items-center justify-center"
            >
              <div className={`w-full max-w-2xl p-12 rounded-[2.5rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 backdrop-blur-xl`}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-4xl mb-6 shadow-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-5xl font-black text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-2xl text-white/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
