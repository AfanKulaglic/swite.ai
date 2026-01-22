"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface FullPageScrollProps {
  children: ReactNode;
}

export default function FullPageScroll({ children }: FullPageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all sections
    const sections = Array.from(container.querySelectorAll('.fullpage-section'));
    
    // Set first section as active immediately
    if (sections.length > 0 && !isInitialized) {
      sections[0].classList.add('active');
      setIsInitialized(true);
    }

    // Create intersection observer for section transitions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            // Mark other sections as exiting first
            sections.forEach((otherSection) => {
              if (otherSection !== section && otherSection.classList.contains('active')) {
                otherSection.classList.add('exiting');
                otherSection.classList.remove('active');
              }
            });

            // Remove classes to reset
            section.classList.remove('exiting');
            section.classList.remove('active');
            
            // Force reflow
            void section.offsetWidth;
            
            // Add active class in next frame
            requestAnimationFrame(() => {
              section.classList.add('active');
            });
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isInitialized]);

  return (
    <div ref={containerRef} className="fullpage-scroll-container">
      {children}
    </div>
  );
}
