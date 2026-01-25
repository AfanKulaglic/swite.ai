'use client';

import { useEffect, useRef } from 'react';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  bulletPoints?: string[];
}

interface FeaturesWithListProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  columns?: 2 | 3;
}

export function FeaturesWithList({
  badge,
  title = 'Features',
  subtitle,
  features = [],
  columns = 3
}: FeaturesWithListProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (cardsRef.current) {
          gsap.fromTo(
            cardsRef.current.children,
            { opacity: 0, y: 50, scale: 0.95 },
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
    animate();
  }, []);

  const gridClass = columns === 2 ? 'md:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-[var(--color-background,#0F0222)] to-[var(--color-primary,#6D28D9)]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {badge && (
            <span className="text-[var(--color-accent,#22C55E)] text-sm font-bold uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3 text-white">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 ${gridClass} gap-8`}>
          {!features || features.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-400">
              <p>No features to display</p>
            </div>
          ) : (
            features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[var(--color-accent,#22C55E)]/50 transition-all group"
            >
              <div className="w-16 h-16 bg-[var(--color-accent,#22C55E)]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                <ul className="space-y-2">
                  {feature.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-[var(--color-accent,#22C55E)]">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
          )}
        </div>
      </div>
    </section>
  );
}
