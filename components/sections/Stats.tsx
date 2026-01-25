'use client';

import { useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  subtitle?: string;
  stats?: Stat[];
  variant?: 'default' | 'gradient' | 'cards';
}

export function Stats({
  title,
  subtitle,
  stats = [],
  variant = 'cards'
}: StatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (statsRef.current) {
          gsap.fromTo(
            statsRef.current.children,
            { opacity: 0, y: 40, scale: 0.95 },
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

  const bgClass = variant === 'gradient' 
    ? 'bg-gradient-to-br from-[var(--color-primary,#6D28D9)] via-[var(--color-primary,#6D28D9)]/80 to-[var(--color-primary,#6D28D9)]'
    : 'bg-[var(--color-background,#0F0222)]';

  return (
    <section ref={sectionRef} className={`py-24 px-6 relative overflow-hidden ${bgClass}`}>
      {/* Glow effects */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-accent,#22C55E)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent,#22C55E)] rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-200">{subtitle}</p>
            )}
          </div>
        )}

        <div ref={statsRef} className="grid md:grid-cols-4 gap-8 text-center">
          {!stats || stats.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-400">
              <p>No stats to display</p>
            </div>
          ) : (
            stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                variant === 'cards' 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all'
                  : 'p-6'
              }`}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-200 font-medium">{stat.label}</div>
              {stat.description && (
                <p className="text-sm text-gray-300 mt-2">{stat.description}</p>
              )}
            </div>
          ))
          )}
        </div>
      </div>
    </section>
  );
}
