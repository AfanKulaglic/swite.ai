'use client';

import { useEffect, useRef } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  bulletPoints?: string[];
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  features: Feature[];
  columns?: 2 | 3 | 4 | 6;
  variant?: 'default' | 'websphere';
}

export function FeatureGrid({
  title,
  subtitle,
  badge,
  features,
  columns = 3,
  variant = 'default'
}: FeatureGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCards = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (cardsRef.current) {
          const cards = cardsRef.current.children;
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true
              }
            }
          );
        }
      } catch (e) {}
    };
    animateCards();
  }, []);

  const gridClasses: Record<number, string> = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    6: 'md:grid-cols-2 lg:grid-cols-3'
  };

  const bgClass = variant === 'websphere'
    ? 'py-24 px-6 bg-gradient-to-b from-[#0F0222] to-[#6D28D9]/20'
    : 'py-24 px-6 bg-[var(--color-background,#000)]';

  return (
    <section ref={sectionRef} className={bgClass}>
      <div className="container mx-auto max-w-7xl">
        {(title || subtitle || badge) && (
          <div className="text-center mb-16">
            {badge && (
              <span className="text-[var(--color-accent,#22C55E)] text-sm font-bold uppercase tracking-wider">{badge}</span>
            )}
            {title && (
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 text-[var(--color-text,#fff)] ${badge ? 'mt-3' : ''}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div ref={cardsRef} className={`grid grid-cols-1 ${gridClasses[columns] || gridClasses[3]} gap-8`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 ${
                variant === 'websphere'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#22C55E]/50'
                  : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-[var(--color-primary,#4169E1)]/50 hover:shadow-xl hover:shadow-[var(--color-primary,#4169E1)]/10'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform ${
                variant === 'websphere'
                  ? (index % 2 === 0 ? 'bg-[#22C55E]/20' : 'bg-[#6D28D9]/20')
                  : 'bg-gradient-to-br from-[var(--color-primary,#4169E1)] to-[var(--color-secondary,#6B46C1)]'
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-text,#fff)]">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {feature.description}
              </p>
              {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                <ul className="space-y-2">
                  {feature.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-[var(--color-accent,#22C55E)]">✓</span> {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
