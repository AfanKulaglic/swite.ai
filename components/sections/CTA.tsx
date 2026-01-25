'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

interface Stat {
  value: string;
  label: string;
}

interface CTAProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  showStats?: boolean;
  stats?: Stat[];
  bgGradient?: boolean;
  badge?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  variant?: 'default' | 'websphere';
}

export function CTA({
  title,
  subtitle,
  ctaText,
  ctaLink,
  showStats = false,
  stats = [],
  bgGradient = true,
  badge,
  secondaryCtaText,
  secondaryCtaLink,
  variant = 'default'
}: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCTA = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                once: true
              }
            }
          );
        }
      } catch (e) {}
    };
    animateCTA();
  }, []);

  // Websphere full-width gradient variant
  if (variant === 'websphere') {
    return (
      <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#6D28D9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div ref={contentRef} className="max-w-4xl mx-auto text-center relative z-10">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#22C55E] font-semibold">{badge}</span>
            </div>
          )}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={ctaLink}
              className="bg-[#22C55E] text-black px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-xl shadow-[#22C55E]/30 hover:scale-105 text-lg"
            >
              {ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            {secondaryCtaText && (
              <a
                href={secondaryCtaLink || '#'}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#6D28D9] transition-all text-lg"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[var(--color-background,#000)]">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={contentRef}
          className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
            bgGradient 
              ? 'bg-gradient-to-br from-[var(--color-primary,#4169E1)] via-[var(--color-secondary,#6B46C1)] to-[var(--color-primary,#4169E1)]' 
              : 'bg-white/5 border border-white/10'
          }`}
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-black/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-white font-semibold">{badge}</span>
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {title}
            </h2>
            
            {subtitle && (
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white">
                {subtitle}
              </p>
            )}

            <Button 
              href={ctaLink} 
              size="lg" 
              className="bg-white text-[var(--color-primary,#4169E1)] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              {ctaText}
            </Button>

            {showStats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm opacity-80 text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
