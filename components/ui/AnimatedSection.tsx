"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        animation: `${animation} 0.8s ease-out forwards`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
