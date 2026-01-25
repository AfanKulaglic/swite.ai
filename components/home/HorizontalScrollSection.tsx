"use client";

import { useRef } from "react";

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section className="relative bg-black border-t border-[#4169E1]/10">
      <div className="relative w-full py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 via-transparent to-[#6B46C1]/5" />
        
        {/* Header in container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="lg:hidden w-8 h-px bg-gradient-to-r from-[#4169E1] to-transparent" />
            <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase">Our Platform</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            <span className="block text-white/40 text-left lg:text-left">Built for</span>
            <span className="block text-white text-right lg:text-left">Performance</span>
          </h2>
        </div>

        {/* Slides container - Grid on mobile, horizontal scroll on desktop */}
        <div className="relative z-10">
          {/* Mobile: 2-column grid */}
          <div className="grid grid-cols-2 gap-px bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 lg:hidden px-4 sm:px-6">
            {slides.map((slide, index) => (
              <div key={index} className={`group relative bg-black p-4 sm:p-6 hover:bg-gradient-to-br hover:from-[#4169E1]/[0.02] hover:to-[#6B46C1]/[0.02] transition-all duration-500 ${index === slides.length - 1 ? 'col-span-2' : ''}`}>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/[0.03] to-[#6B46C1]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:border-[#4169E1]/40 group-hover:scale-110 transition-all duration-500">
                    <div className="text-white/60 group-hover:text-white transition-colors w-5 h-5 sm:w-6 sm:h-6">
                      {slide.icon}
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="text-xs text-white/20 group-hover:bg-gradient-to-r group-hover:from-[#4169E1] group-hover:to-[#6B46C1] group-hover:bg-clip-text group-hover:text-transparent font-light mb-3 sm:mb-4 transition-all duration-500">
                    0{index + 1}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 group-hover:text-white transition-colors">
                    {slide.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors mb-4 sm:mb-6">
                    {slide.description}
                  </p>

                  {/* Stat badge */}
                  <div className="relative pt-4 sm:pt-5 border-t border-[#4169E1]/10 mt-auto">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-[#4169E1]/20 text-xs font-medium group-hover:border-[#4169E1]/40 group-hover:bg-[#4169E1]/5 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                      <span className="text-white/60 group-hover:text-white/80">{slide.stat}</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-wider mt-2">
                      {slide.statLabel}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-px h-8 sm:h-10 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal scroll */}
          <div ref={containerRef} className="hidden lg:flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-12">
            {slides.map((slide, index) => (
              <div key={index} className="group relative flex-shrink-0 w-[380px] bg-black border border-[#4169E1]/10 p-10 hover:bg-gradient-to-br hover:from-[#4169E1]/[0.02] hover:to-[#6B46C1]/[0.02] transition-all duration-500">
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/[0.03] to-[#6B46C1]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col min-h-[450px]">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center mb-6 group-hover:border-[#4169E1]/40 group-hover:scale-110 transition-all duration-500">
                    <div className="text-white/60 group-hover:text-white transition-colors w-8 h-8">
                      {slide.icon}
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="text-xs text-white/20 group-hover:bg-gradient-to-r group-hover:from-[#4169E1] group-hover:to-[#6B46C1] group-hover:bg-clip-text group-hover:text-transparent font-light mb-4 transition-all duration-500">
                    0{index + 1}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-white transition-colors">
                    {slide.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors mb-8">
                    {slide.description}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Stat badge */}
                  <div className="relative pt-6 border-t border-[#4169E1]/10 mt-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#4169E1]/20 text-xs font-medium group-hover:border-[#4169E1]/40 group-hover:bg-[#4169E1]/5 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                      <span className="text-white/60 group-hover:text-white/80">{slide.stat}</span>
                    </div>
                    <div className="text-xs text-white/30 uppercase tracking-wider mt-2">
                      {slide.statLabel}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add scrollbar hide utility */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
