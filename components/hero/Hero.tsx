import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full h-full flex items-center justify-center px-6 overflow-hidden">
      {/* Sophisticated Spider Web Background - positioned lower */}
      <div className="absolute -inset-y-[50vh] inset-x-0 opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(50%, 75%)">
            {/* Radial lines */}
            <line x1="0" y1="0" x2="0" y2="-800" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="565" y2="-565" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="800" y2="0" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="565" y2="565" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="800" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="-565" y2="565" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="-800" y2="0" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="-565" y2="-565" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <line x1="0" y1="0" x2="400" y2="-693" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="693" y2="-400" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="693" y2="400" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="400" y2="693" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-400" y2="693" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-693" y2="400" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-693" y2="-400" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-400" y2="-693" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            
            {/* Circular rings */}
            <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
            <circle cx="0" cy="0" r="200" fill="none" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="2" />
            <circle cx="0" cy="0" r="300" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
            <circle cx="0" cy="0" r="400" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="2" />
            <circle cx="0" cy="0" r="500" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
            <circle cx="0" cy="0" r="600" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="2" />
            <circle cx="0" cy="0" r="700" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full relative z-10 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-white/90">Enterprise-Grade Platform</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-sm text-white/60">SOC 2 Certified</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
          <span className="block text-white mb-2">
            Build Websites
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
            With AI Precision
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
          Enterprise AI platform trusted by 50,000+ businesses worldwide. 
          Deploy production-ready websites in minutes, not months.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            href="/studio" 
            variant="primary" 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 border-0 shadow-2xl shadow-white/20 font-bold text-lg px-10"
          >
            Start Building Free
          </Button>
          <Button 
            href="/contact" 
            variant="secondary" 
            size="lg" 
            className="bg-white/5 border-white/20 hover:bg-white/10 backdrop-blur-xl font-semibold text-lg px-10"
          >
            Talk to Sales
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "2M+", label: "Sites Deployed" },
            { value: "150+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
