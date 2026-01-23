'use client';

import { useEffect, useRef } from 'react';

interface Testimonial {
  name?: string;
  author?: string;
  role: string;
  content?: string;
  quote?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3;
  showStars?: boolean;
  variant?: 'default' | 'websphere';
}

export function Testimonials({
  title,
  subtitle,
  badge,
  testimonials,
  columns = 3,
  showStars = false,
  variant = 'default'
}: TestimonialsProps) {
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
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out',
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

  const gridClasses = {
    1: 'md:grid-cols-1 max-w-2xl mx-auto',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const avatarColors = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-pink-500 to-rose-600',
    'from-indigo-500 to-blue-600'
  ];

  const bgClass = variant === 'websphere' 
    ? 'py-32 px-6 bg-[#1E0B3A]/30' 
    : 'py-24 px-6 bg-gradient-to-b from-[var(--color-background,#000)] to-black/50';

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
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div ref={cardsRef} className={`grid grid-cols-1 ${gridClasses[columns]} gap-8`}>
          {testimonials.map((testimonial, index) => {
            const displayName = testimonial.name || testimonial.author || 'Anonymous';
            const displayContent = testimonial.content || testimonial.quote || '';
            const rating = testimonial.rating ?? 5;
            
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all relative overflow-hidden group ${
                  variant === 'websphere'
                    ? 'bg-gradient-to-br from-[#1E0B3A]/50 to-[#1E0B3A]/30 border-white/10 hover:border-[#22C55E]/50'
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-[var(--color-primary,#4169E1)]/30'
                }`}
              >
                {/* Star Rating */}
                {showStars && (
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                    ))}
                  </div>
                )}
                
                {/* Quote icon for non-websphere */}
                {!showStars && (
                  <div className="absolute top-4 right-4 text-6xl opacity-10 text-[var(--color-primary,#4169E1)] group-hover:opacity-20 transition-opacity">
                    "
                  </div>
                )}
                
                <p className={`mb-6 leading-relaxed text-[var(--color-text,#fff)] relative z-10 ${variant === 'websphere' ? 'text-lg text-gray-300' : 'text-lg'}`}>
                  "{displayContent}"
                </p>
                
                <div className="flex items-center gap-4">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={displayName}
                      className={`w-14 h-14 rounded-full object-cover border-2 ${
                        variant === 'websphere' ? 'border-[#22C55E]/30' : 'ring-2 ring-[var(--color-primary,#4169E1)]/30'
                      }`}
                    />
                  ) : (
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold`}>
                      {getInitials(displayName)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-[var(--color-text,#fff)] text-lg">{displayName}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
