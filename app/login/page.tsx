import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen flex overflow-hidden bg-black text-white">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 relative z-10 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 px-3 py-2 mb-12 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 text-sm font-light group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Logo */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4169E1] to-[#6B46C1] flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="SWITE.AI Logo" 
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-light tracking-tight">SWITE.AI</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-light tracking-tight leading-[0.95] mb-3">
              <span className="block text-white/40">Welcome</span>
              <span className="block font-medium text-white">back</span>
            </h1>
            <p className="text-sm text-white/40 font-light">
              Sign in to continue building
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 mb-8">
            <div>
              <label className="block text-[10px] font-light text-white/40 mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#4169E1]/40 focus:bg-white/[0.07] outline-none transition-all duration-300 text-sm font-light"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] font-light text-white/40 uppercase tracking-wider">
                  Password
                </label>
                <Link href="/forgot-password" className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-wider">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#4169E1]/40 focus:bg-white/[0.07] outline-none transition-all duration-300 text-sm font-light"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4169E1]/30 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-black text-[10px] text-white/30 uppercase tracking-wider">Or</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-8">
            <button className="w-full px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#4169E1]/40 transition-all duration-300 flex items-center justify-center gap-3 text-sm font-light">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <button className="w-full px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#4169E1]/40 transition-all duration-300 flex items-center justify-center gap-3 text-sm font-light">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-white/40 font-light">
              Don't have an account?{" "}
              <Link href="/signup" className="text-white hover:text-white/80 transition-colors">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#6B46C1]/10 to-[#4169E1]/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-12 text-center">
          <div className="max-w-lg">
            {/* Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20">
              <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-tight mb-6">
              <span className="block text-white/40">Build the future</span>
              <span className="block font-medium text-white">with AI</span>
            </h2>
            
            <p className="text-base text-white/40 mb-12 leading-relaxed font-light">
              Join 50,000+ innovators using our enterprise platform to create stunning websites in minutes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "50K+", label: "Users" },
                { value: "99.99%", label: "Uptime" },
                { value: "2M+", label: "Sites" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-light mb-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
