'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/AuthContext';
import Button from '@/components/ui/Button';

export default function DashboardPage() {
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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            SWITE.AI
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">{user.email}</span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back{user.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-white/60">Manage your websites and create new ones</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link 
            href="/studio/builder"
            className="p-6 bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 rounded-xl hover:border-[#4169E1]/50 transition-all group"
          >
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-[#4169E1] transition-colors">Create New Site</h3>
            <p className="text-sm text-white/60">Start from scratch with our AI builder</p>
          </Link>

          <Link 
            href="/templates"
            className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all group"
          >
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-lg font-bold mb-2">Browse Templates</h3>
            <p className="text-sm text-white/60">Start with a professional template</p>
          </Link>

          <Link 
            href="/studio"
            className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all group"
          >
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-bold mb-2">AI Studio</h3>
            <p className="text-sm text-white/60">Generate a site with AI chat</p>
          </Link>
        </div>

        {/* Your Sites */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Your Websites</h2>
            <Button href="/studio/builder" size="sm">
              + New Site
            </Button>
          </div>

          {sites.length === 0 ? (
            <div className="text-center py-16 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2">No websites yet</h3>
              <p className="text-white/60 mb-6">Create your first website to get started</p>
              <Button href="/studio/builder">Create Your First Site</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sites.map((site) => (
                <div key={site.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{site.name}</h3>
                    <p className="text-sm text-white/60">{site.subdomain}.swite.ai</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Account Info */}
        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-lg font-bold mb-4">Account Information</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white/40">Email:</span>
              <span className="ml-2">{user.email}</span>
            </div>
            <div>
              <span className="text-white/40">Plan:</span>
              <span className="ml-2">Free</span>
              <Link href="/pricing" className="ml-2 text-[#4169E1] hover:underline">Upgrade</Link>
            </div>
            <div>
              <span className="text-white/40">Member since:</span>
              <span className="ml-2">{new Date(user.created_at).toLocaleDateString()}</span>
            </div>
            <div>
              <span className="text-white/40">Email verified:</span>
              <span className="ml-2">{user.email_confirmed_at ? '✅ Yes' : '❌ No'}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
