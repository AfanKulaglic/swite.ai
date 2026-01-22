import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-orb" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-float-orb-3" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-black leading-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light">
          Oops! The page you're looking for seems to have wandered off into the digital void. 
          Don't worry, we'll help you find your way back.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white font-medium shadow-lg shadow-[#4169E1]/30 hover:shadow-[#4169E1]/50 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Home</span>
            </div>
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40 mb-4 font-light">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Documentation", href: "/documentation" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
