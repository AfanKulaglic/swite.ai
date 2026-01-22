"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

export default function HowItWorksPreview() {
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

    const steps = sectionRef.current?.querySelectorAll(".step-item");
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Describe",
      description: "Tell us about your business and vision",
      icon: "💭",
    },
    {
      number: "02",
      title: "Generate",
      description: "AI builds your complete website",
      icon: "⚡",
    },
    {
      number: "03",
      title: "Customize",
      description: "Fine-tune with visual editor",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Launch",
      description: "Go live with one click",
      icon: "🚀",
    },
  ];

  return (
    <section ref={sectionRef} className="px-6 md:px-16 xl:px-32 py-24 md:py-32 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            FROM IDEA TO LIVE IN MINUTES
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes website creation incredibly simple.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Animated Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-brand via-accentBlue to-accentPurple overflow-hidden">
              <div className="h-full w-1/4 bg-white/50 animate-shimmer"></div>
            </div>
            
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="step-item text-center opacity-0"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${0.2 + index * 0.15}s`
                  }}
                >
                  {/* Icon Circle */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-brand to-accentBlue mb-6 shadow-lg hover:scale-110 transition-transform animate-pulse-glow">
                    <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="inline-block px-4 py-1 rounded-full bg-brand text-black font-black text-sm mb-3 hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-[1.02] opacity-0"
              style={{
                animation: `slideInLeft 0.6s ease-out forwards`,
                animationDelay: `${0.2 + index * 0.15}s`
              }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-brand to-accentBlue flex items-center justify-center text-3xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-brand text-black font-black text-xs mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in delay-800">
          <Button href="/how-it-works" variant="secondary">
            See Full Process
          </Button>
        </div>
      </div>
    </section>
  );
}
