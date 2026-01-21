import Button from "@/components/ui/Button";
import Link from "next/link";
import AnimatedSpider from "@/components/ui/AnimatedSpider";

export default function LoginPage() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 relative z-10 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back to home</span>
          </Link>

          {/* Logo/Brand */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-white p-2 shadow-lg shadow-white/20">
                <AnimatedSpider state="idle" className="w-full h-full" />
              </div>
              <span className="text-2xl font-black">Swite.ai</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-black mb-2">
              Welcome Back
            </h1>
            <p className="text-white/60 text-sm">
              Sign in to continue building the future
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-2 mb-6">
            <button className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-medium">Continue with Google</span>
            </button>

            <button className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span className="font-medium">Continue with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-black text-white/40">Or continue with email</span>
            </div>
          </div>

          {/* Email Login Form */}
          <form className="space-y-3 mb-6">
            <div>
              <label className="block text-xs font-medium mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand focus:bg-white/10 outline-none transition-all text-sm"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-brand hover:text-accentBlue transition-colors">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand focus:bg-white/10 outline-none transition-all text-sm"
                placeholder="••••••••"
              />
            </div>

            <Button variant="primary" className="w-full bg-gradient-to-r from-brand to-accentBlue border-0 hover:scale-[1.02] transition-transform">
              Sign In
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-white/60 text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-brand hover:text-accentBlue font-medium transition-colors">
              Create account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-accentBlue/20 to-accentPurple/20 z-10" />
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black">
          {/* Single Large Spider Web - positioned lower */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <g transform="translate(50%, 70%)">
                <line x1="0" y1="0" x2="0" y2="-800" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="565" y2="-565" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="800" y2="0" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="565" y2="565" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="0" y2="800" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="-565" y2="565" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="-800" y2="0" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="-565" y2="-565" stroke="rgba(12, 110, 253, 0.4)" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="400" y2="-693" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="693" y2="-400" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="693" y2="400" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="400" y2="693" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="-400" y2="693" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="-693" y2="400" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="-693" y2="-400" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <line x1="0" y1="0" x2="-400" y2="-693" stroke="rgba(12, 110, 253, 0.3)" strokeWidth="1" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(12, 110, 253, 0.35)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="160" fill="none" stroke="rgba(12, 110, 253, 0.33)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="240" fill="none" stroke="rgba(12, 110, 253, 0.31)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="320" fill="none" stroke="rgba(12, 110, 253, 0.29)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="400" fill="none" stroke="rgba(12, 110, 253, 0.27)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="500" fill="none" stroke="rgba(12, 110, 253, 0.25)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="600" fill="none" stroke="rgba(12, 110, 253, 0.23)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="700" fill="none" stroke="rgba(12, 110, 253, 0.21)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand/40 to-accentBlue/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-accentPurple/40 to-pink-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-12 text-center">
          <div className="max-w-lg">
            {/* Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-accentBlue">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Build the Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-accentBlue to-accentPurple">
                AI-Powered Design
              </span>
            </h2>
            
            <p className="text-base text-white/70 mb-6 leading-relaxed">
              Join 50,000+ innovators using our enterprise platform to create stunning websites in minutes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50K+", label: "Users" },
                { value: "99.99%", label: "Uptime" },
                { value: "2M+", label: "Sites" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-accentBlue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
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
