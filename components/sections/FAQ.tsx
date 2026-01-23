'use client';

import { useEffect, useRef, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQ({ badge, title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
            contentRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
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
    <section ref={sectionRef} className="py-32 px-6 bg-[var(--color-background,#0a0a0a)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          {badge && (
            <span className="text-[var(--color-accent,#22C55E)] text-sm font-bold uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-3 text-[var(--color-text,#FFFFFF)]">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-400">{subtitle}</p>
          )}
        </div>

        <div ref={contentRef} className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--color-background,#0a0a0a)] border border-gray-800 rounded-2xl overflow-hidden hover:border-[var(--color-primary,#6D28D9)]/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-900/50 transition-all"
              >
                <span className="text-lg font-bold text-[var(--color-text,#FFFFFF)]">{item.question}</span>
                <svg
                  className={`w-6 h-6 text-[var(--color-primary,#6D28D9)] transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
