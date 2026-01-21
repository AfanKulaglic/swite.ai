export default function FeaturesPage() {
  const features = [
    {
      category: "AI-Powered Design",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Smart Layout Generation",
          description: "AI analyzes your content and automatically creates optimal layouts that convert visitors into customers."
        },
        {
          title: "Intelligent Color Schemes",
          description: "Get professional color palettes that match your brand identity and industry standards perfectly."
        },
        {
          title: "Content Suggestions",
          description: "AI-powered copywriting assistance helps you craft compelling messages that resonate with your audience."
        }
      ]
    },
    {
      category: "Professional Tools",
      icon: "🛠️",
      gradient: "from-purple-500 to-pink-500",
      items: [
        {
          title: "Visual Editor",
          description: "Intuitive drag-and-drop interface with real-time preview across all devices and screen sizes."
        },
        {
          title: "Component Library",
          description: "1000+ pre-built, customizable components ready to deploy in seconds."
        },
        {
          title: "Version Control",
          description: "Track every change, rollback anytime, and collaborate seamlessly with your team."
        }
      ]
    },
    {
      category: "Performance & Scale",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
      items: [
        {
          title: "Global CDN",
          description: "200+ edge locations worldwide ensure lightning-fast load times for every visitor."
        },
        {
          title: "Auto-Scaling",
          description: "Handle traffic spikes effortlessly with automatic resource scaling and load balancing."
        },
        {
          title: "Performance Optimization",
          description: "Automatic image optimization, lazy loading, code minification, and caching."
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: "🔒",
      gradient: "from-green-500 to-emerald-500",
      items: [
        {
          title: "Enterprise Security",
          description: "SOC 2 Type II certified with bank-level encryption, DDoS protection, and 24/7 monitoring."
        },
        {
          title: "Compliance Ready",
          description: "GDPR, HIPAA, and ISO 27001 compliant infrastructure built-in from day one."
        },
        {
          title: "Automatic SSL",
          description: "Free SSL certificates with automatic renewal and HTTPS enforcement across all sites."
        }
      ]
    },
    {
      category: "SEO & Analytics",
      icon: "📊",
      gradient: "from-indigo-500 to-violet-500",
      items: [
        {
          title: "AI SEO Optimization",
          description: "Automatic meta tags, schema markup, sitemap generation, and Core Web Vitals optimization."
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time insights into traffic, conversions, user behavior, and performance metrics."
        },
        {
          title: "A/B Testing",
          description: "Test different versions of your pages and optimize for maximum conversions automatically."
        }
      ]
    },
    {
      category: "Integrations",
      icon: "🔌",
      gradient: "from-red-500 to-rose-500",
      items: [
        {
          title: "Third-Party Apps",
          description: "Connect with 1000+ apps including Stripe, Mailchimp, Zapier, and more with one click."
        },
        {
          title: "Custom APIs",
          description: "RESTful APIs for custom integrations, automation workflows, and headless CMS setups."
        },
        {
          title: "Webhooks",
          description: "Real-time notifications for events like form submissions, purchases, and user actions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl mb-8">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Platform Features
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block">Everything You Need</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              To Build & Scale
            </span>
          </h1>
          <p className="text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade features designed to help you build, launch, and grow 
            professional websites faster than ever before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-20">
          {features.map((category, index) => (
            <div key={index}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-4xl shadow-lg`}>
                  {category.icon}
                </div>
                <h2 className="text-4xl font-black">{category.category}</h2>
              </div>
              
              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
                    <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all h-full">
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 text-center">
              <h2 className="text-5xl font-black mb-6">Ready to Get Started?</h2>
              <p className="text-2xl text-white/60 mb-10 max-w-2xl mx-auto">
                Start building with all features included. No credit card required.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
                Start Building Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
