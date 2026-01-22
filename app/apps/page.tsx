import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function AppsPage() {
  const categories = [
    {
      name: "Marketing & SEO",
      icon: "📈",
      count: 45,
      apps: ["Email Marketing", "Social Media", "SEO Tools", "Analytics"]
    },
    {
      name: "E-commerce",
      icon: "🛍️",
      count: 38,
      apps: ["Payment Gateways", "Shipping", "Inventory", "Product Reviews"]
    },
    {
      name: "Communication",
      icon: "💬",
      count: 32,
      apps: ["Live Chat", "Contact Forms", "Messaging", "Video Calls"]
    },
    {
      name: "Productivity",
      icon: "⚡",
      count: 28,
      apps: ["Project Management", "CRM", "Scheduling", "Automation"]
    },
    {
      name: "Media & Content",
      icon: "🎨",
      count: 25,
      apps: ["Image Galleries", "Video Players", "Audio", "Podcasts"]
    },
    {
      name: "Social",
      icon: "👥",
      count: 22,
      apps: ["Social Feeds", "Reviews", "Forums", "Membership"]
    }
  ];

  const featuredApps = [
    {
      name: "Mailchimp",
      description: "Email marketing and automation platform",
      icon: "📧",
      category: "Marketing",
      rating: 4.8,
      installs: "50K+"
    },
    {
      name: "Stripe Payments",
      description: "Accept credit cards and online payments",
      icon: "💳",
      category: "E-commerce",
      rating: 4.9,
      installs: "100K+"
    },
    {
      name: "Google Analytics",
      description: "Track website traffic and user behavior",
      icon: "📊",
      category: "Analytics",
      rating: 4.7,
      installs: "200K+"
    },
    {
      name: "Live Chat Pro",
      description: "Real-time customer support chat widget",
      icon: "💬",
      category: "Communication",
      rating: 4.6,
      installs: "30K+"
    },
    {
      name: "Instagram Feed",
      description: "Display your Instagram photos on your site",
      icon: "📸",
      category: "Social",
      rating: 4.5,
      installs: "80K+"
    },
    {
      name: "Booking Calendar",
      description: "Accept appointments and reservations",
      icon: "📅",
      category: "Productivity",
      rating: 4.8,
      installs: "45K+"
    }
  ];

  const benefits = [
    {
      title: "One-Click Install",
      description: "Add apps instantly without any coding. Configure settings through a simple dashboard and go live in seconds.",
      icon: "⚡"
    },
    {
      title: "Seamless Integration",
      description: "Apps integrate perfectly with your site's design and existing features. No broken layouts or compatibility issues.",
      icon: "🔗"
    },
    {
      title: "Auto-Updates",
      description: "Apps update automatically with new features, security patches, and improvements. Always stay current without lifting a finger.",
      icon: "🔄"
    },
    {
      title: "Enterprise Security",
      description: "All apps are vetted for security, performance, and reliability. SOC 2 compliant with regular security audits.",
      icon: "🔒"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="brand">APP MARKETPLACE</Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
            SUPERCHARGE YOUR SITE
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12">
            Add powerful features in one click. From marketing automation to payment processing, live chat to analytics—200+ apps and integrations to grow your business faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/signup" variant="primary" size="lg">
              Explore Apps
            </Button>
            <Button href="/developers" variant="secondary" size="lg">
              Build an App
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search 200+ apps... (e.g., email marketing, payments, analytics)"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none text-lg placeholder:text-muted/50"
              />
              <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="text-sm text-muted">Popular:</span>
              {["Stripe", "Mailchimp", "Google Analytics", "Zapier", "Calendly"].map((term) => (
                <button key={term} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:border-brand transition-all">
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            BROWSE BY CATEGORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{category.icon}</div>
                  <div className="px-3 py-1 rounded-full bg-brand/20 text-brand text-sm font-bold">
                    {category.count}
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.apps.map((app, idx) => (
                    <span key={idx} className="text-xs text-muted">
                      {app}{idx < category.apps.length - 1 ? " •" : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            FEATURED APPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApps.map((app, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{app.icon}</div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">{app.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                  {app.name}
                </h3>
                <p className="text-muted mb-4">{app.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand">{app.category}</span>
                  <span className="text-xs text-muted">{app.installs} installs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            WHY USE OUR APPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-br from-brand/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-brand mb-2">200+</div>
              <div className="text-muted">Available Apps</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand mb-2">5M+</div>
              <div className="text-muted">App Installs</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand mb-2">4.7/5</div>
              <div className="text-muted">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand mb-2">24/7</div>
              <div className="text-muted">App Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-brand/20 to-transparent border border-brand/30 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              BUILD AN APP
            </h2>
            <p className="text-lg text-muted mb-8">
              Join our developer community and create apps for thousands of websites.
            </p>
            <Button href="/developers" variant="primary">
              Developer Portal
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            START ADDING APPS TODAY
          </h2>
          <p className="text-xl text-muted mb-8">
            Create your website and get instant access to 200+ powerful apps and integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/signup" variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button href="/apps" variant="secondary" size="lg">
              Browse All Apps
            </Button>
          </div>
          <p className="text-sm text-muted">
            ✓ Free apps available • ✓ One-click install • ✓ 24/7 support
          </p>
        </div>
      </section>
    </div>
  );
}
