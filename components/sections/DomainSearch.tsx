'use client';

import { useEffect, useRef, useState } from 'react';

interface DomainPrice {
  extension: string;
  price: string;
}

interface DomainSearchProps {
  badge?: string;
  title: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  domainPrices?: DomainPrice[];
}

export function DomainSearch({
  badge,
  title,
  subtitle,
  placeholder = 'yourdomain.com',
  buttonText = 'Search',
  domainPrices = []
}: DomainSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle domain search
    console.log('Searching for:', searchQuery);
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-[var(--color-primary,#6D28D9)] via-[var(--color-primary,#6D28D9)]/80 to-[var(--color-primary,#6D28D9)] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--color-accent,#22C55E)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-accent,#22C55E)] rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto text-center relative z-10">
        {badge && (
          <span className="text-[var(--color-accent,#22C55E)] text-sm font-bold uppercase tracking-wider">
            {badge}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3 text-white">{title}</h2>
        {subtitle && (
          <p className="text-xl text-gray-200 mb-12">{subtitle}</p>
        )}

        <form onSubmit={handleSearch} className="flex gap-3 mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-5 rounded-xl text-black text-lg focus:outline-none focus:ring-4 focus:ring-[var(--color-accent,#22C55E)]/50 shadow-xl"
            placeholder={placeholder}
          />
          <button
            type="submit"
            className="bg-[var(--color-accent,#22C55E)] text-black px-12 rounded-xl font-bold hover:opacity-90 transition-all text-lg shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {buttonText}
          </button>
        </form>

        {domainPrices.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {domainPrices.map((domain, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 hover:bg-white/15 transition-all"
              >
                <span className="text-gray-200">{domain.extension} from</span>
                <span className="text-white font-bold ml-2">{domain.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
