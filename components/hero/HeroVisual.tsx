"use client";

import { useState } from "react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = ["Desktop", "Tablet", "Mobile"];

  return (
    <div className="relative w-full">
      {/* Device Selector */}
      <div className="flex justify-center gap-2 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === index
                ? "bg-white/10 text-white"
                : "bg-transparent text-muted hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Browser Window - More Professional */}
      <div className="relative rounded-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Browser Chrome */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 text-xs">
            <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-muted">yourwebsite.com</span>
          </div>
        </div>

        {/* Website Preview - Cleaner Design */}
        <div className={`bg-gradient-to-b from-white/[0.02] to-transparent p-8 transition-all ${
          activeTab === 0 ? "h-[500px]" : activeTab === 1 ? "h-[600px]" : "h-[650px]"
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="h-6 w-24 bg-white/10 rounded"></div>
            <div className="flex gap-4">
              <div className="h-6 w-16 bg-white/5 rounded"></div>
              <div className="h-6 w-16 bg-white/5 rounded"></div>
              <div className="h-6 w-20 bg-brand/30 rounded"></div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-8">
            <div className="h-4 w-3/4 bg-white/10 rounded mb-3"></div>
            <div className="h-4 w-2/3 bg-white/10 rounded mb-4"></div>
            <div className="h-3 w-full bg-white/5 rounded mb-2"></div>
            <div className="h-3 w-5/6 bg-white/5 rounded mb-6"></div>
            <div className="flex gap-3">
              <div className="h-10 w-28 bg-brand/40 rounded"></div>
              <div className="h-10 w-28 bg-white/10 rounded"></div>
            </div>
          </div>

          {/* Feature Cards - More Subtle */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="h-28 bg-white/5 rounded-lg border border-white/5"></div>
            <div className="h-28 bg-white/5 rounded-lg border border-white/5"></div>
            <div className="h-28 bg-white/5 rounded-lg border border-white/5"></div>
          </div>

          {/* Content Blocks */}
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/5 rounded"></div>
            <div className="h-2 w-4/5 bg-white/5 rounded"></div>
            <div className="h-2 w-5/6 bg-white/5 rounded"></div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Badge */}
      <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg bg-brand/90 text-black text-xs font-bold shadow-lg backdrop-blur-sm">
        ✓ Live Preview
      </div>
    </div>
  );
}
