import { useEffect, useRef, MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom hook for GSAP animations with cleanup
export const useGSAP = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    });

    return () => ctx.revert();
  }, dependencies);
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  ref: MutableRefObject<HTMLElement | null>,
  animation: gsap.TweenVars,
  scrollTriggerOptions = {}
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...animation,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollTriggerOptions,
        },
      });
    });

    return () => ctx.revert();
  }, [ref]);
};

// Hook for parallax effect
export const useParallax = (
  ref: MutableRefObject<HTMLElement | null>,
  speed = 0.5
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
};

// Hook for pinned sections
export const usePinSection = (
  ref: MutableRefObject<HTMLElement | null>,
  duration = 1
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: `+=${window.innerHeight * duration}`,
      pin: true,
      pinSpacing: true,
    });

    return () => trigger.kill();
  }, [ref, duration]);
};

// Hook for horizontal scroll
export const useHorizontalScroll = (
  containerRef: MutableRefObject<HTMLElement | null>,
  itemsRef: MutableRefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!containerRef.current || !itemsRef.current) return;

    const container = containerRef.current;
    const items = itemsRef.current;
    
    const ctx = gsap.context(() => {
      const scrollWidth = items.scrollWidth;
      const containerWidth = container.offsetWidth;

      gsap.to(items, {
        x: -(scrollWidth - containerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth - containerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, [containerRef, itemsRef]);
};

// Hook for text reveal animation
export const useTextReveal = (
  ref: MutableRefObject<HTMLElement | null>,
  options = {}
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const words = element.querySelectorAll('.word');
    
    const ctx = gsap.context(() => {
      gsap.from(words, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          ...options,
        },
      });
    });

    return () => ctx.revert();
  }, [ref]);
};

export default useGSAP;
