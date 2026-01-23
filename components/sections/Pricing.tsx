'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  popular?: boolean;
}

interface PricingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  viewAllLink?: string;
  viewAllText?: string;
}

export function Pricing({
  badge,
  title,
  subtitle,
  plans,
  viewAllLink,
  viewAllText = 'View All Plans'
}: PricingProps) {
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
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
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

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[var(--color-background,#0F0222)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {badge && (
            <span className="text-[var(--color-accent,#22C55E)] text-sm font-bold uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3 text-white">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.popular
                  ? 'bg-gradient-to-br from-[var(--color-primary,#6D28D9)]/20 to-[var(--color-accent,#22C55E)]/20 border-2 border-[var(--color-accent,#22C55E)] transform md:scale-105 shadow-2xl shadow-[var(--color-accent,#22C55E)]/20'
                  : 'bg-[var(--color-background,#1E0B3A)]/50 border border-white/10 hover:border-[var(--color-accent,#22C55E)]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent,#22C55E)] text-black px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-sm font-bold text-[var(--color-accent,#22C55E)] uppercase tracking-wider mb-4">
                {plan.name}
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period || '/month'}</span>
              </div>
              
              <p className={`mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-2 ${plan.popular ? 'text-white' : 'text-gray-300'}`}
                  >
                    <span className="text-[var(--color-accent,#22C55E)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={plan.ctaLink || '#'}
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[var(--color-accent,#22C55E)] text-black hover:opacity-90 shadow-lg'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {plan.ctaText || 'Get Started'}
              </a>
            </div>
          ))}
        </div>

        {viewAllLink && (
          <div className="text-center">
            <a
              href={viewAllLink}
              className="inline-flex items-center gap-2 text-[var(--color-accent,#22C55E)] hover:opacity-80 transition-colors font-semibold"
            >
              {viewAllText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
