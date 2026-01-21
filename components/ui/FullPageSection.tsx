"use client";

import { ReactNode } from "react";

export type SectionAnimation = 
  | "slide-up"      // Slides up from bottom
  | "slide-down"    // Slides down from top
  | "slide-left"    // Slides from left
  | "slide-right"   // Slides from right
  | "fade"          // Simple fade
  | "zoom-in"       // Zooms in from small
  | "zoom-out"      // Zooms out from large
  | "rotate-left"   // Rotates in from left
  | "rotate-right"  // Rotates in from right
  | "flip"          // 3D flip effect
  | "scale-fade"    // Scale and fade
  | "blur-in";      // Blur to clear

interface FullPageSectionProps {
  children: ReactNode;
  className?: string;
  enterAnimation?: SectionAnimation;
  exitAnimation?: SectionAnimation;
}

export default function FullPageSection({ 
  children, 
  className = "",
  enterAnimation = "slide-up",
  exitAnimation = "slide-up"
}: FullPageSectionProps) {
  
  return (
    <section 
      className={`fullpage-section ${className}`}
      data-enter-animation={enterAnimation}
      data-exit-animation={exitAnimation}
    >
      <div className="section-content w-full">
        {children}
      </div>
    </section>
  );
}
