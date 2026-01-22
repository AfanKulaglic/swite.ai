import Link from "next/link";
import SpiderWebCorner from "@/components/ui/SpiderWebCorner";

export default function CTASection() {
  return (
    <div className="relative w-full px-6">
      <SpiderWebCorner position="top-right" size="lg" opacity={0.12} />
      <SpiderWebCorner position="bottom-left" size="md" opacity={0.08} />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Content Card */}
        <div className="relative bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 backdrop-blur-xl border border-[#4169E1]/20 rounded-[2.5rem] p-12 md:p-20 overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 via-transparent to-[#6B46C1]/5" />
          
          {/* Floating orbs */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#4169E1]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#6B46C1]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                Ready to Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 50,000+ teams building production-ready websites with AI. 
              Start free, no credit card required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/studio"
                className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-lg font-bold shadow-2xl shadow-[#4169E1]/30 hover:shadow-[#4169E1]/50 transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Start Building Free</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6B46C1] to-[#4169E1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              
              <Link
                href="/contact"
                className="px-12 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 text-white text-lg font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500"
              >
                Contact Sales
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Free forever plan</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Deploy in 60 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
