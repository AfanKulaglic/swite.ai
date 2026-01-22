"use client";

import { useState } from "react";
import SpiderWebCorner from "@/components/ui/SpiderWebCorner";

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState(0);

  const companies = [
    { name: "Stripe", logo: "S" },
    { name: "Shopify", logo: "Sh" },
    { name: "Airbnb", logo: "A" },
    { name: "Netflix", logo: "N" },
    { name: "Uber", logo: "U" },
    { name: "Spotify", logo: "Sp" },
  ];

  const testimonials = [
    {
      quote: "SWITE.AI reduced our time-to-market by 85%. What used to take our team weeks now takes hours. The ROI is undeniable.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechVentures Inc.",
      revenue: "$2.4B ARR",
      image: "SC"
    },
    {
      quote: "We've deployed over 200 client websites using SWITE.AI. The consistency, speed, and quality have transformed our agency operations.",
      author: "Michael Rodriguez",
      role: "Chief Executive Officer",
      company: "Digital Innovations",
      revenue: "Series C",
      image: "MR"
    },
    {
      quote: "From prototype to production in minutes. SWITE.AI handles everything from design to deployment with enterprise-grade reliability.",
      author: "Emma Thompson",
      role: "VP of Engineering",
      company: "Studio Collective",
      revenue: "$180M Funding",
      image: "ET"
    },
  ];

  return (
    <div className="relative w-full px-6">
      <SpiderWebCorner position="top-left" size="lg" opacity={0.1} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Trusted By Section */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center text-2xl font-black text-white/60 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Large Featured Testimonial */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 rounded-[3rem] blur-3xl" />
            <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 rounded-[2.5rem] p-12">
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] flex items-center justify-center mb-8 shadow-2xl shadow-[#4169E1]/30">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
                {testimonials[activeTab].quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] flex items-center justify-center text-white text-xl font-black shadow-lg shadow-[#4169E1]/20">
                  {testimonials[activeTab].image}
                </div>
                <div>
                  <div className="text-lg font-black text-white">{testimonials[activeTab].author}</div>
                  <div className="text-sm text-white/60">{testimonials[activeTab].role}</div>
                  <div className="text-sm font-semibold text-white/40">{testimonials[activeTab].company} • {testimonials[activeTab].revenue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50,000+", label: "Enterprise Clients", sublabel: "Fortune 500 Companies" },
              { value: "99.99%", label: "Uptime SLA", sublabel: "Enterprise Guarantee" },
              { value: "2M+", label: "Sites Deployed", sublabel: "Production Websites" },
              { value: "<30s", label: "Deploy Time", sublabel: "Average Speed" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/10 rounded-3xl p-8 hover:border-[#4169E1]/30 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4169E1]/0 to-[#6B46C1]/0 group-hover:from-[#4169E1]/5 group-hover:to-[#6B46C1]/5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/40">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Tabs */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeTab === index 
                  ? 'w-12 bg-gradient-to-r from-[#4169E1] to-[#6B46C1]' 
                  : 'w-2 bg-white/20 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
