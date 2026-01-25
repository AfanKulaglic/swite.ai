'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

interface HeroStat {
  value: string;
  label: string;
}

interface FloatingCard {
  icon: string;
  label: string;
  value: string;
  position: 'top-right' | 'bottom-left';
}

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgImage?: string;
  alignment?: 'left' | 'center' | 'right';
  overlay?: 'dark' | 'light' | 'none';
  backgroundStyle?: 'gradient' | 'minimal' | 'corporate' | 'bold' | 'nature' | 'websphere';
  // Websphere-specific props
  badge?: string;
  heroImage?: string;
  stats?: HeroStat[];
  floatingCards?: FloatingCard[];
  variant?: 'default' | 'split';
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  secondaryCtaText,
  secondaryCtaLink,
  bgImage,
  alignment = 'center',
  overlay = 'dark',
  backgroundStyle = 'gradient',
  badge,
  heroImage,
  stats,
  floatingCards,
  variant = 'default'
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateHero = async () => {
      try {
        const gsap = (await import('gsap')).default;
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, x: variant === 'split' ? -50 : 0, y: variant === 'split' ? 0 : 50 },
            { opacity: 1, x: 0, y: 0, duration: 1, ease: 'power3.out' }
          );
        }
        if (imageRef.current && variant === 'split') {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
          );
        }
      } catch (e) {}
    };
    animateHero();
  }, [variant]);

  const overlayClasses = {
    dark: 'bg-black/50',
    light: 'bg-white/50',
    none: ''
  };

  const backgroundStyles: Record<string, string> = {
    gradient: 'bg-gradient-to-br from-[var(--color-primary,#4169E1)] via-[var(--color-secondary,#6B46C1)] to-black',
    minimal: 'bg-[var(--color-background,#000)]',
    corporate: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    bold: 'bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700',
    nature: 'bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900',
    websphere: 'bg-gradient-to-br from-[#0F0222] via-[#4C1D95] to-[#0F0222]'
  };

  // Websphere split variant with image
  if (variant === 'split' && heroImage) {
    return (
      <section 
        ref={sectionRef}
        className={`relative py-32 overflow-hidden ${backgroundStyles[backgroundStyle] || backgroundStyles.gradient}`}
      >
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--color-primary,#6D28D9)] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-accent,#22C55E)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center relative z-10">
          <div ref={contentRef}>
            {badge && (
              <div className="inline-flex items-center gap-2 bg-[var(--color-accent,#22C55E)]/10 border border-[var(--color-accent,#22C55E)]/20 rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent,#22C55E)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent,#22C55E)]" />
                </span>
                <span className="text-[var(--color-accent,#22C55E)] text-sm font-semibold">{badge}</span>
              </div>
            )}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-[var(--color-text,#fff)]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-300 leading-relaxed mb-8">{subtitle}</p>
            )}
            <div className="flex flex-wrap gap-4 mb-12">
              {ctaText && (
                <a href={ctaLink} className="bg-[var(--color-accent,#22C55E)] text-black px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-xl shadow-[var(--color-accent,#22C55E)]/30 hover:scale-105">
                  {ctaText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}
              {secondaryCtaText && (
                <a href={secondaryCtaLink} className="border-2 border-[var(--color-accent,#22C55E)] text-[var(--color-accent,#22C55E)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--color-accent,#22C55E)] hover:text-black transition-all">
                  {secondaryCtaText}
                </a>
              )}
            </div>
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div ref={imageRef} className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <img src={heroImage} alt="Hero" className="rounded-xl w-full shadow-2xl" />
            </div>
            {floatingCards?.map((card, i) => (
              <div 
                key={i}
                className={`absolute ${card.position === 'top-right' ? '-top-6 -right-6' : '-bottom-6 -left-6'} bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent,#22C55E)]/20 to-[var(--color-accent,#22C55E)]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{card.label}</div>
                    <div className="text-xl font-bold text-white">{card.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default centered variant
  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${backgroundStyles[backgroundStyle] || backgroundStyles.gradient}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-primary,#4169E1)] rounded-full blur-[128px] opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-secondary,#6B46C1)] rounded-full blur-[128px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent,#E6FF00)] rounded-full blur-[200px] opacity-10" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
          {overlay !== 'none' && (
            <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div 
          ref={contentRef}
          className={`flex flex-col ${alignment === 'center' ? 'text-center items-center' : alignment === 'left' ? 'text-left items-start' : 'text-right items-end'} max-w-4xl mx-auto space-y-8`}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent,#22C55E)]/10 border border-[var(--color-accent,#22C55E)]/20 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent,#22C55E)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent,#22C55E)]" />
              </span>
              <span className="text-[var(--color-accent,#22C55E)] text-sm font-semibold">{badge}</span>
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[var(--color-text,#fff)]">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-80 max-w-2xl text-[var(--color-text,#fff)]">
              {subtitle}
            </p>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className={`flex flex-wrap gap-4 ${alignment === 'center' ? 'justify-center' : ''}`}>
              {ctaText && (
                <Button href={ctaLink} size="lg" className="bg-[var(--color-primary,#4169E1)] hover:opacity-90 shadow-lg shadow-[var(--color-primary,#4169E1)]/30">
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button href={secondaryCtaLink} variant="outline" size="lg" className="border-[var(--color-text,#fff)]/30 hover:bg-white/10">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}