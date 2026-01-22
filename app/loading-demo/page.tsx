'use client';

import { useState } from 'react';
import SpiderLoading from '@/components/ui/SpiderLoading';

export default function LoadingDemoPage() {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6">
            <span className="block">Spider Loading</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Component Demo
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-8">
            Modern, futuristic loading screen with animated spider building a web
          </p>
        </div>

        {/* Demo Controls */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-black mb-6">Try It Out</h2>
            <button
              onClick={() => setShowLoading(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Show Loading Screen
            </button>
            <p className="text-white/60 text-sm mt-4">
              Click to see the loading animation in action
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🕷️",
              title: "Animated Spider",
              description: "The spider actively builds the web as the page loads"
            },
            {
              icon: "🕸️",
              title: "Progressive Web",
              description: "Web strands appear progressively based on loading progress"
            },
            {
              icon: "✨",
              title: "Gradient Effects",
              description: "Modern gradient colors matching your design system"
            },
            {
              icon: "📊",
              title: "Progress Tracking",
              description: "Real-time progress bar with percentage display"
            }
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Example */}
        <div className="mt-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-black mb-4">Usage Example</h3>
            <pre className="bg-black/50 rounded-xl p-4 overflow-x-auto">
              <code className="text-sm text-white/80">
{`import SpiderLoading from '@/components/ui/SpiderLoading';

// In your component
{isLoading && <SpiderLoading message="Loading your content..." />}

// Or with custom message
<SpiderLoading message="Building your website..." />`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Loading Component */}
      {showLoading && (
        <div onClick={() => setShowLoading(false)}>
          <SpiderLoading message="Building your experience..." />
        </div>
      )}
    </div>
  );
}
