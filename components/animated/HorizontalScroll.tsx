"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !scrollRef.current) return;

      const sections = scrollRef.current.querySelectorAll('.scroll-section');
      const scrollWidth = scrollRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;

      gsap.to(scrollRef.current, {
        x: -(scrollWidth - containerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth - containerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate each section on entry
      sections.forEach((section) => {
        gsap.from(section.querySelector('.content'), {
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            containerAnimation: gsap.getProperty(scrollRef.current, 'x') as any,
            start: 'left 80%',
            end: 'left 20%',
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern shopping experience with AI recommendations",
      color: "from-[#4169E1] to-[#6B46C1]",
      stats: { users: "50K+", conversion: "+45%" }
    },
    {
      title: "SaaS Dashboard",
      category: "Product Design",
      description: "Analytics platform for enterprise clients",
      color: "from-[#10B981] to-[#059669]",
      stats: { clients: "200+", satisfaction: "98%" }
    },
    {
      title: "Mobile App",
      category: "App Development",
      description: "Social platform connecting creators",
      color: "from-[#F59E0B] to-[#D97706]",
      stats: { downloads: "1M+", rating: "4.8★" }
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete rebrand for tech startup",
      color: "from-[#8B5CF6] to-[#7C3AED]",
      stats: { reach: "10M+", engagement: "+120%" }
    },
    {
      title: "AI Platform",
      category: "Machine Learning",
      description: "Intelligent automation for businesses",
      color: "from-[#EC4899] to-[#DB2777]",
      stats: { accuracy: "99.5%", speed: "10x" }
    }
  ];

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Our Work
        </h2>
        <p className="text-xl text-white/60">Scroll horizontally to explore projects →</p>
      </div>

      <div ref={scrollRef} className="flex h-full items-center gap-12 px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="scroll-section flex-shrink-0 w-[600px] h-[500px]"
          >
            <div className="content h-full">
              <div className={`relative h-full rounded-[2.5rem] bg-gradient-to-br ${project.color} p-12 flex flex-col justify-between overflow-hidden group hover:scale-105 transition-transform duration-500`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl mb-6">
                    <span className="text-sm font-bold text-white">{project.category}</span>
                  </div>
                  <h3 className="text-5xl font-black text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-xl text-white/90 mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl">
                      <div className="text-3xl font-black text-white mb-1">{value}</div>
                      <div className="text-sm text-white/70 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
              </div>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-12" />
      </div>
    </div>
  );
}
