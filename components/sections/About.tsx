'use client';

import { useEffect, useRef } from 'react';

interface AboutProps {
  title?: string;
  content?: string;
  description?: string; // Alternative to content
  image?: string;
  skills?: string[];
  layout?: 'left' | 'right';
}

export function About({
  title,
  content,
  description,
  image,
  skills = [],
  layout = 'left'
}: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        });

        if (imageRef.current) {
          tl.fromTo(
            imageRef.current,
            { opacity: 0, x: layout === 'left' ? -60 : 60, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
          );
        }

        if (contentRef.current) {
          tl.fromTo(
            contentRef.current.children,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
            '-=0.4'
          );
        }
      } catch (e) {
        // GSAP not available
      }
    };
    animate();
  }, [layout]);

  const isImageLeft = layout === 'left';
  const displayContent = content || description || '';

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[var(--color-background,#000)]">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid md:grid-cols-2 gap-16 items-center`}>
          {/* Image */}
          <div 
            ref={imageRef}
            className={`${isImageLeft ? 'md:order-1' : 'md:order-2'}`}
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-primary,#4169E1)]/20 to-[var(--color-secondary,#6B46C1)]/20 relative group">
              {image ? (
                <img
                  src={image}
                  alt={title || 'About'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary,#4169E1)] to-[var(--color-secondary,#6B46C1)] flex items-center justify-center">
                  <div className="text-8xl opacity-50">👤</div>
                </div>
              )}
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-[var(--color-primary,#4169E1)]/30 rounded-3xl" />
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`${isImageLeft ? 'md:order-2' : 'md:order-1'}`}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text,#fff)]">
                {title}
              </h2>
            )}
            
            <p className="text-lg opacity-70 mb-8 leading-relaxed text-[var(--color-text,#fff)]">
              {displayContent}
            </p>

            {skills.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-[var(--color-text,#fff)]">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-[var(--color-primary,#4169E1)]/20 border border-[var(--color-primary,#4169E1)]/30 text-sm text-[var(--color-text,#fff)] hover:bg-[var(--color-primary,#4169E1)]/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
