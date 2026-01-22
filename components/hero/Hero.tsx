"use client";

import Link from "next/link";
import SpiderWebCorner from "@/components/ui/SpiderWebCorner";

export default function Hero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
      {/* Spider Web Decorations */}
      <SpiderWebCorner position="top-right" size="xl" opacity={0.2} />
      <SpiderWebCorner position="bottom-left" size="lg" opacity={0.15} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4169E1]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#6B46C1]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 backdrop-blur-xl mb-8 group hover:border-[#4169E1]/40 transition-all duration-500">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            AI-Powered Website Builder
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
          <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
            Build Websites
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#4169E1] via-[#6B46C1] to-[#4169E1] bg-clip-text text-transparent animate-gradient">
            In Seconds
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transform your ideas into stunning, professional websites with the power of AI. 
          No coding required. Just describe, and watch it build.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/studio"
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-lg font-bold shadow-2xl shadow-[#4169E1]/30 hover:shadow-[#4169E1]/50 transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10">Start Building Free</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6B46C1] to-[#4169E1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          
          <Link
            href="/features"
            className="px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white text-lg font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-500"
          >
            See How It Works
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div className="text-sm text-white/50 font-semibold">Websites Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-2">
              30s
            </div>
            <div className="text-sm text-white/50 font-semibold">Average Build Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-sm text-white/50 font-semibold">Uptime</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
