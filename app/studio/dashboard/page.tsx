'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/AuthContext';

export default function StudioDashboardPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const [sites, setSites] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-[#4169E1]/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-[#4169E1] rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden flex flex-col">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(65,105,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/15 to-violet-500/15 rounded-full blur-3xl animate-float-orb-3" />

      {/* Header - Compact */}
      <div className="relative z-10 border-b border-[#4169E1]/10">
        <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-light tracking-tight hover:text-white/80 transition-colors">
              SWITE.AI
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Studio</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm text-white/40 font-light">{user.email}</div>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-[#4169E1]/20 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300"
            >
              Back to Home
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-[#4169E1]/20 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Single Screen Layout */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <div className="h-full max-w-[1600px] mx-auto px-8 py-8 grid grid-cols-12 gap-6">
          
          {/* Left Column - Welcome & Stats */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* Welcome Card */}
            <div className="relative group flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
              <div className="relative h-full border border-[#4169E1]/20 backdrop-blur-sm p-8 flex flex-col justify-center">
                <div className="text-xs text-white/40 tracking-wider uppercase mb-3 font-light">Welcome back</div>
                <h1 className="text-4xl font-light tracking-tight mb-2">
                  <span className="text-white">
                    {user.user_metadata?.full_name ? user.user_metadata.full_name.split(' ')[0] : 'Creator'}
                  </span>
                </h1>
                <p className="text-sm text-white/40 font-light mb-8">Ready to build something amazing?</p>
                
                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-t border-[#4169E1]/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Active Sites</span>
                    <span className="text-2xl font-light bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">{sites.length}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-[#4169E1]/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Plan</span>
                    <span className="text-sm text-white/60">Free</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-[#4169E1]/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Status</span>
                    <span className="text-sm text-white/60">{user.email_confirmed_at ? '✓ Verified' : '○ Pending'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Info Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
              <div className="relative border border-[#4169E1]/20 backdrop-blur-sm p-6">
                <div className="text-xs text-white/40 tracking-wider uppercase mb-4 font-light">Account</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/40">Member since</span>
                    <span className="text-white/60 font-light">{new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="pt-3 border-t border-[#4169E1]/10">
                    <Link href="/pricing" className="text-[#4169E1] hover:text-[#6B46C1] transition-colors text-sm">
                      Upgrade Plan →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Actions */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="text-xs text-white/40 tracking-wider uppercase font-light">Quick Actions</div>
            
            <div className="flex-1 grid grid-rows-3 gap-4">
              {[
                {
                  title: "Create New Site",
                  description: "AI builder in < 30s",
                  href: "/studio/builder",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Browse Templates",
                  description: "50+ professional templates",
                  href: "/studio/templates",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  )
                },
                {
                  title: "AI Studio",
                  description: "Chat with AI to generate",
                  href: "/studio",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )
                }
              ].map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className="group relative bg-black border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/[0.03] to-[#6B46C1]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6 flex items-center gap-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center group-hover:border-[#4169E1]/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <div className="text-white/60 group-hover:text-white transition-colors">
                        {action.icon}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium mb-1 group-hover:text-white transition-colors">{action.title}</h3>
                      <p className="text-sm text-white/40 font-light group-hover:text-white/60 transition-colors">{action.description}</p>
                    </div>

                    {/* Arrow */}
                    <svg className="w-5 h-5 text-white/20 group-hover:text-[#4169E1] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Your Sites */}
          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/40 tracking-wider uppercase font-light">Your Sites</div>
              <Link
                href="/studio/builder"
                className="text-xs text-[#4169E1] hover:text-[#6B46C1] transition-colors"
              >
                + New
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {sites.length === 0 ? (
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                  <div className="relative h-full border border-[#4169E1]/20 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-lg font-light mb-2 text-white/80">No sites yet</h3>
                    <p className="text-sm text-white/40 mb-6 font-light">Start building your first website</p>
                    
                    <Link
                      href="/studio/builder"
                      className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
                    >
                      Create Site
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {sites.map((site) => (
                    <div key={site.id} className="group relative bg-black border border-[#4169E1]/20 hover:border-[#4169E1]/40 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/[0.03] to-[#6B46C1]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative p-4">
                        {/* Preview */}
                        <div className="aspect-video mb-3 bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/20 group-hover:border-[#4169E1]/40 transition-all duration-300" />
                        
                        {/* Info */}
                        <h3 className="font-medium text-sm mb-1 group-hover:text-white transition-colors truncate">{site.name}</h3>
                        <p className="text-xs text-white/40 font-light truncate">{site.subdomain}.swite.ai</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(65, 105, 225, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(65, 105, 225, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(65, 105, 225, 0.5);
        }
      `}</style>
    </main>
  );
}
