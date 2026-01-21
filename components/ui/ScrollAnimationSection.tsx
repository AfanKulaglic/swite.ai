"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollAnimationSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimationSection({ 
  children, 
  className = ""
}: ScrollAnimationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Create intersection observer to detect when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animations when section is 30% visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: [0.3], // Trigger when 30% of section is visible
        rootMargin: "0px"
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`scroll-animation-section min-h-screen flex items-center justify-center py-20 ${isVisible ? 'active' : ''} ${className}`}
    >
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
