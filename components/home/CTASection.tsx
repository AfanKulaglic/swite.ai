import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <div className="w-full px-6 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Build Faster?
          </h2>
          
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Join 50,000+ teams building production-ready websites with AI. 
            Start free, no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              href="/studio" 
              variant="primary" 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 border-0 shadow-2xl shadow-white/20 font-bold text-lg px-12"
            >
              Start Building Free
            </Button>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg" 
              className="bg-white/5 border-white/20 hover:bg-white/10 backdrop-blur-xl font-semibold text-lg px-12"
            >
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Deploy in 60 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
