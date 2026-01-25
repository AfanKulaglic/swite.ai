import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation helper functions
export const fadeInUp = (element: gsap.DOMTarget, delay = 0) => {
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

export const fadeIn = (element: gsap.DOMTarget, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
  });
};

export const scaleIn = (element: gsap.DOMTarget, delay = 0) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'back.out(1.7)',
  });
};

export const slideInLeft = (element: gsap.DOMTarget, delay = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

export const slideInRight = (element: gsap.DOMTarget, delay = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

// Text reveal animation (split by lines or words)
export const revealText = (element: gsap.DOMTarget, delay = 0) => {
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power4.out',
    stagger: 0.1,
  });
};

// Parallax effect
export const parallax = (element: gsap.DOMTarget, speed = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Pin section
export const pinSection = (element: gsap.DOMTarget, duration = 1) => {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: `+=${window.innerHeight * duration}`,
    pin: true,
    pinSpacing: true,
  });
};

// Horizontal scroll
export const horizontalScroll = (
  container: gsap.DOMTarget,
  items: gsap.DOMTarget,
  options = {}
) => {
  const scrollWidth = (items as HTMLElement).scrollWidth;
  const containerWidth = (container as HTMLElement).offsetWidth;

  return gsap.to(items, {
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
      ...options,
    },
  });
};

// Smooth scroll setup
export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return;

  ScrollTrigger.normalizeScroll(true);
  
  // Optional: Add Lenis or custom smooth scroll here
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  });
};

// Batch animations for multiple elements
export const batchAnimate = (
  elements: gsap.DOMTarget,
  animation: gsap.TweenVars,
  scrollTriggerOptions = {}
) => {
  return ScrollTrigger.batch(elements, {
    onEnter: (batch) => gsap.from(batch, animation),
    start: 'top 80%',
    ...scrollTriggerOptions,
  });
};

// Kill all ScrollTriggers (cleanup)
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

// Refresh ScrollTrigger (useful after layout changes)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
