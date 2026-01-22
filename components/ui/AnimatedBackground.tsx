"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accentBlue/10 rounded-full blur-3xl animate-breathe delay-300" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accentPurple/10 rounded-full blur-3xl animate-breathe delay-500" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Professional Grid Pattern - More visible */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Accent Grid Lines - Stronger lines every 5 cells */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(12,110,253,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12,110,253,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </div>
  );
}
