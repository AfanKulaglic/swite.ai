import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        "How to create your first website",
        "Understanding the AI generation process",
        "Navigating the dashboard",
        "Account setup and verification",
      ],
    },
    {
      title: "Website Builder",
      icon: "🎨",
      articles: [
        "Using the visual editor",
        "Adding and editing pages",
        "Customizing your design",
        "Working with templates",
      ],
    },
    {
      title: "Publishing & Domains",
      icon: "🌐",
      articles: [
        "Publishing your website",
        "Connecting a custom domain",
        "SSL certificate setup",
        "DNS configuration guide",
      ],
    },
    {
      title: "Billing & Plans",
      icon: "💳",
      articles: [
        "Understanding pricing plans",
        "Upgrading or downgrading",
        "Payment methods",
        "Refund policy",
      ],
    },
    {
      title: "SEO & Analytics",
      icon: "📈",
      articles: [
        "SEO best practices",
        "Setting up analytics",
        "Tracking conversions",
        "Improving site performance",
      ],
    },
    {
      title: "Integrations",
      icon: "🔌",
      articles: [
        "Available integrations",
        "Setting up payment gateways",
        "Email marketing integration",
        "Third-party tools",
      ],
    },
  ];

  const popularArticles = [
    { title: "How to publish your website", views: "12.5K", icon: "🌐" },
    { title: "Connecting a custom domain", views: "10.2K", icon: "🔗" },
    { title: "Using the AI website generator", views: "9.8K", icon: "🤖" },
    { title: "SEO optimization guide", views: "8.4K", icon: "📈" },
  ];

  const contactOptions = [
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Mon-Fri, 9am-6pm EST",
      action: "Start Chat",
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      availability: "24-48 hour response",
      action: "Send Email",
    },
    {
      icon: "📚",
      title: "Documentation",
      description: "Browse our docs",
      availability: "Always available",
      action: "View Docs",
    },
    {
      icon: "🎥",
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      availability: "50+ tutorials",
      action: "Watch Now",
    },
  ];

  return (
    <div className="pt-32">
      <div className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <Badge variant="brand">HELP CENTER</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              HOW CAN WE HELP?
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, browse guides, or contact our support team.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-5 pl-14 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none transition-all text-lg"
                />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-200">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-center">
              POPULAR ARTICLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href="/help"
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 group"
                >
                  <div className="text-4xl mb-3">{article.icon}</div>
                  <h3 className="font-bold mb-2 group-hover:text-brand transition-colors">
                    {article.title}
                  </h3>
                  <div className="text-xs text-muted">{article.views} views</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-300">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12 text-center">
              BROWSE BY CATEGORY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-xl font-black uppercase tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link
                          href="/help"
                          className="text-sm text-muted hover:text-brand transition-colors flex items-center gap-2 group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-400">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12 text-center">
              STILL NEED HELP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 text-center"
                >
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted mb-2">{option.description}</p>
                  <p className="text-xs text-muted mb-4">{option.availability}</p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 rounded-xl bg-brand text-black font-bold uppercase text-xs hover:bg-brand/90 transition-all"
                  >
                    {option.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 text-center opacity-0 animate-fade-in-up delay-500">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              JOIN OUR COMMUNITY
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Connect with other Swite.ai users, share tips, and get help from the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 rounded-xl bg-brand text-black font-black uppercase text-sm hover:bg-brand/90 transition-all"
              >
                Join Discord
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-black uppercase text-sm hover:bg-white/10 transition-all"
              >
                Visit Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
