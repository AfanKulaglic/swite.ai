'use client';

import { useEffect, useRef } from 'react';

interface Brand {
  name: string;
  logo?: string;
}

interface TrustBadgesProps {
  title?: string;
  brands?: (string | Brand)[];
}

export function TrustBadges({
  title = 'Trusted by leading companies worldwide',
  brands = []
}: TrustBadgesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (sectionRef.current) {
          const items = sectionRef.current.querySelectorAll('.brand-item');
          gsap.fromTo(
            items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 90%',
                once: true
              }
            }
          );
        }
      } catch (e) {}
    };
    animate();
  }, []);

  const getBrandName = (brand: string | Brand): string => {
    return typeof brand === 'string' ? brand : brand.name;
  };

  const getBrandLogo = (brand: string | Brand): string | undefined => {
    return typeof brand === 'string' ? undefined : brand.logo;
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[var(--color-background,#0F0222)]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm mb-10 uppercase tracking-wider font-semibold">
          {title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {!brands || brands.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-400">
              <p>No brands to display</p>
            </div>
          ) : (
            brands.map((brand, index) => {
            const name = getBrandName(brand);
            const logo = getBrandLogo(brand);
            
            return (
              <div
                key={index}
                className="brand-item text-center text-2xl font-bold text-white/40 hover:text-white/70 transition-colors cursor-default"
              >
                {logo ? (
                  <img src={logo} alt={name} className="h-8 mx-auto opacity-50 hover:opacity-80 transition-opacity" />
                ) : (
                  name
                )}
              </div>
            );
          })
          )}
        </div>
      </div>
    </section>
  );
}
