"use client";

import { useEffect, useRef, useState } from "react";

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section center is in viewport center
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const isInView = Math.abs(sectionCenter - viewportCenter) < windowHeight * 0.6;
      
      if (!isInView) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;

      // Scrolling down
      if (e.deltaY > 0 && progress < 0.995) {
        e.preventDefault();
        const newScroll = Math.min(maxScroll, currentScroll + e.deltaY * 2);
        container.scrollLeft = newScroll;
        setScrollProgress(newScroll / maxScroll);
      } 
      // Scrolling up
      else if (e.deltaY < 0 && progress > 0.005) {
        e.preventDefault();
        const newScroll = Math.max(0, currentScroll + e.deltaY * 2);
        container.scrollLeft = newScroll;
        setScrollProgress(newScroll / maxScroll);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const slides = [
    {
      title: "AI-Powered Design",
      description: "Our advanced AI understands your brand, industry, and goals to create pixel-perfect designs that convert.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      stat: "10M+",
      statLabel: "Designs Generated"
    },
    {
      title: "Lightning Fast",
      description: "From concept to deployment in under 30 seconds. No waiting, no complexity, just results.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      stat: "<30s",
      statLabel: "Average Build Time"
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with automatic SSL, DDoS protection, and enterprise-grade encryption.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      stat: "99.99%",
      statLabel: "Uptime SLA"
    },
    {
      title: "Global CDN",
      description: "200+ edge locations worldwide ensure your site loads instantly, anywhere on the planet.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      stat: "200+",
      statLabel: "Edge Locations"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with live cursors, comments, and instant sync across your entire team.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      stat: "Live",
      statLabel: "Team Sync"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-black">
      <div className="min-h-screen w-full flex items-center overflow-hidden py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 via-transparent to-[#6B46C1]/5" />
        
        <div className="absolute top-12 left-12 z-10">
          <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">Our Platform</div>
          <h2 className="text-4xl font-light text-white/80">Built for <span className="font-medium text-white">Performance</span></h2>
        </div>

        <div className="absolute bottom-12 left-12 right-12 z-10">
          <div className="h-px bg-white/10 relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] transition-all duration-100" style={{ width: `${scrollProgress * 100}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/40">
            <span>Scroll to explore</span>
            <span>{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>

        <div ref={containerRef} className="flex gap-8 px-12 overflow-x-hidden w-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-[500px] h-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 flex flex-col justify-between group hover:bg-white/[0.07] transition-all duration-500">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#4169E1]/40 transition-all duration-500">
                <div className="text-white/60 group-hover:text-white transition-colors">{slide.icon}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-medium mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-[#4169E1] group-hover:to-[#6B46C1] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{slide.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500">{slide.description}</p>
              </div>
              <div className="pt-8 border-t border-white/10">
                <div className="text-5xl font-light mb-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">{slide.stat}</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">{slide.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
