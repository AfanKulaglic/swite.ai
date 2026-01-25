'use client';

import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  category: string;
  image?: string;
  link?: string;
}

interface PortfolioProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
  layout?: 'grid' | 'masonry';
  columns?: 2 | 3 | 4;
}

// Placeholder gradient patterns for projects without images
const placeholderGradients = [
  'from-blue-600 via-purple-600 to-pink-600',
  'from-green-600 via-teal-600 to-cyan-600',
  'from-orange-600 via-red-600 to-pink-600',
  'from-indigo-600 via-purple-600 to-fuchsia-600',
  'from-emerald-600 via-green-600 to-lime-600',
  'from-rose-600 via-pink-600 to-purple-600'
];

export function Portfolio({
  title,
  subtitle,
  projects,
  layout = 'grid',
  columns = 3
}: PortfolioProps) {
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
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true
              }
            }
          );
        }
      } catch (e) {
        // GSAP not available
      }
    };
    animateCards();
  }, []);

  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[var(--color-background,#000)]">
      <div className="container mx-auto max-w-7xl">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text,#fff)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl opacity-70 max-w-2xl mx-auto text-[var(--color-text,#fff)]">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div ref={cardsRef} className={`grid grid-cols-1 ${gridClasses[columns]} gap-6`}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || '#'}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              {/* Image or gradient placeholder */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}>
                  <div className="text-6xl opacity-30">✦</div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-sm font-medium text-[var(--color-primary,#4169E1)] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <span className="inline-flex items-center text-sm text-white/80">
                    View Project
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
