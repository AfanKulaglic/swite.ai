"use client";

import SpiderWebCorner from "@/components/ui/SpiderWebCorner";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <div className="relative w-full px-6 py-32">
      <SpiderWebCorner position="top-right" size="xl" opacity={0.08} />
      
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 backdrop-blur-xl mb-8">
            <span className="text-sm font-bold bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent uppercase tracking-wider">
              See It In Action
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Professional Websites
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
              Generated Instantly
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Real examples from our AI. Every design is unique, responsive, and production-ready.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Large Feature - Spans 2 rows, 8 columns */}
          <div className="col-span-12 lg:col-span-8 row-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] animate-pulse" />
                  <span className="text-sm font-bold text-white">E-Commerce Platform</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Modern Online Store</h3>
                <p className="text-white/60">Full shopping experience with cart, checkout, and payment integration</p>
              </div>
              
              {/* Screenshot Placeholder */}
              <div className="flex-1 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-white/40 font-medium">Product Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Feature - 1 row, 4 columns */}
          <div className="col-span-12 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 flex flex-col">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 mb-3">
                  <span className="text-xs font-bold text-white">Portfolio</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1">Creative Studio</h3>
                <p className="text-sm text-white/60">Stunning visual showcase</p>
              </div>
              
              <div className="flex-1 relative rounded-xl overflow-hidden bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Feature - 1 row, 4 columns */}
          <div className="col-span-12 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 flex flex-col">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 mb-3">
                  <span className="text-xs font-bold text-white">SaaS</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1">Dashboard App</h3>
                <p className="text-sm text-white/60">Analytics & insights</p>
              </div>
              
              <div className="flex-1 relative rounded-xl overflow-hidden bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Small Features - 1 row, 4 columns each */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Blog Platform</h3>
                <p className="text-sm text-white/60">Content management system</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Articles, SEO, Comments</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Landing Page</h3>
                <p className="text-sm text-white/60">High-converting design</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Forms, CTAs, Analytics</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A1A2E] to-[#16162A] border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Documentation</h3>
                <p className="text-sm text-white/60">Technical knowledge base</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Search, Guides, API Docs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Want to see your website come to life?</p>
          <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-lg font-bold shadow-2xl shadow-[#4169E1]/30 hover:shadow-[#4169E1]/50 hover:scale-105 transition-all duration-500">
            Try It Free
          </button>
        </div>
      </div>
    </div>
  );
}
