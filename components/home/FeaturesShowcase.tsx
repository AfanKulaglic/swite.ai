"use client";

import { useState } from "react";
import SpiderWebCorner from "@/components/ui/SpiderWebCorner";

export default function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-Powered Generation",
      description: "Enterprise-grade AI that understands context, brand guidelines, and technical requirements.",
      stats: "30s avg generation time",
      details: [
        "Natural language processing",
        "Brand consistency enforcement",
        "SEO optimization built-in",
        "Responsive by default"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Visual Editor",
      description: "Professional-grade editing tools with real-time preview and version control.",
      stats: "Zero code required",
      details: [
        "Drag-and-drop interface",
        "Component library",
        "Real-time collaboration",
        "Version history"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Enterprise Infrastructure",
      description: "Global CDN, automatic scaling, and 99.99% uptime SLA with enterprise support.",
      stats: "99.99% uptime",
      details: [
        "Global CDN network",
        "Auto-scaling infrastructure",
        "DDoS protection",
        "24/7 enterprise support"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security & Compliance",
      description: "SOC 2 Type II certified with enterprise-grade security and compliance features.",
      stats: "SOC 2 Certified",
      details: [
        "SSL certificates included",
        "GDPR compliant",
        "Regular security audits",
        "Data encryption at rest"
      ]
    }
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6">
      <SpiderWebCorner position="top-right" size="xl" opacity={0.12} />
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 backdrop-blur-xl mb-8">
          <span className="text-sm font-bold bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent uppercase tracking-wider">
            Enterprise Platform
          </span>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-black mb-6 leading-none">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Built for Scale
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Enterprise-grade infrastructure with the speed and simplicity of modern AI
        </p>
      </div>

      {/* Interactive Feature Display */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left: Feature Details */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 rounded-[3rem] blur-3xl" />
          <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 rounded-[2.5rem] p-12">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] flex items-center justify-center text-white mb-8 shadow-2xl shadow-[#4169E1]/30">
              {features[activeFeature].icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-4xl font-black text-white mb-4">
              {features[activeFeature].title}
            </h3>
            <p className="text-xl text-white/60 mb-6 leading-relaxed">
              {features[activeFeature].description}
            </p>

            {/* Stats Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
              <span className="text-sm font-bold text-white">{features[activeFeature].stats}</span>
            </div>

            {/* Details List */}
            <div className="space-y-3">
              {features[activeFeature].details.map((detail, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#4169E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Feature Selector */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-full text-left p-8 rounded-3xl border transition-all duration-500 ${
                activeFeature === index
                  ? 'bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border-[#4169E1]/30 shadow-2xl shadow-[#4169E1]/10'
                  : 'bg-gradient-to-br from-[#1A1A2E]/50 to-[#16162A]/50 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30'
                    : 'bg-white/5 text-white/40'
                }`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className={`text-xl font-black mb-2 transition-colors duration-500 ${
                    activeFeature === index ? 'text-white' : 'text-white/60'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                    activeFeature === index ? 'text-white/60' : 'text-white/40'
                  }`}>
                    {feature.description}
                  </p>
                </div>
                {activeFeature === index && (
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] flex-shrink-0 mt-2" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
