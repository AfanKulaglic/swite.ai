import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      icon: "🚀",
      links: [
        { title: "Quick Start Guide", href: "/docs/quick-start", time: "5 min" },
        { title: "Your First Website", href: "/docs/first-website", time: "10 min" },
        { title: "Understanding AI Generation", href: "/docs/ai-generation", time: "8 min" },
        { title: "Platform Overview", href: "/docs/overview", time: "12 min" },
      ],
    },
    {
      title: "Core Features",
      icon: "⚙️",
      links: [
        { title: "Visual Editor", href: "/docs/visual-editor", time: "15 min" },
        { title: "Content Management", href: "/docs/cms", time: "12 min" },
        { title: "Template System", href: "/docs/templates", time: "10 min" },
        { title: "Custom Domains", href: "/docs/domains", time: "8 min" },
      ],
    },
    {
      title: "Advanced Topics",
      icon: "🔧",
      links: [
        { title: "Custom Code Injection", href: "/docs/custom-code", time: "20 min" },
        { title: "API Integration", href: "/docs/api", time: "25 min" },
        { title: "Webhooks", href: "/docs/webhooks", time: "15 min" },
        { title: "Team Collaboration", href: "/docs/collaboration", time: "10 min" },
      ],
    },
    {
      title: "SEO & Performance",
      icon: "📈",
      links: [
        { title: "SEO Best Practices", href: "/docs/seo", time: "18 min" },
        { title: "Performance Optimization", href: "/docs/performance", time: "15 min" },
        { title: "Analytics Setup", href: "/docs/analytics", time: "12 min" },
        { title: "Core Web Vitals", href: "/docs/web-vitals", time: "10 min" },
      ],
    },
    {
      title: "Integrations",
      icon: "🔌",
      links: [
        { title: "Payment Gateways", href: "/docs/payments", time: "15 min" },
        { title: "Email Marketing", href: "/docs/email", time: "12 min" },
        { title: "CRM Integration", href: "/docs/crm", time: "10 min" },
        { title: "Third-Party Tools", href: "/docs/integrations", time: "20 min" },
      ],
    },
    {
      title: "Deployment",
      icon: "🌐",
      links: [
        { title: "Publishing Your Site", href: "/docs/publishing", time: "8 min" },
        { title: "SSL Certificates", href: "/docs/ssl", time: "5 min" },
        { title: "CDN Configuration", href: "/docs/cdn", time: "10 min" },
        { title: "Backup & Restore", href: "/docs/backup", time: "12 min" },
      ],
    },
  ];

  const popularDocs = [
    { title: "Quick Start Guide", views: "45K", icon: "🚀" },
    { title: "Visual Editor Tutorial", views: "38K", icon: "🎨" },
    { title: "API Reference", views: "32K", icon: "📚" },
    { title: "SEO Optimization", views: "28K", icon: "📈" },
  ];

  return (
    <div className="pt-32">
      <div className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <Badge variant="brand">DOCUMENTATION</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              LEARN SWITE.AI
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides and documentation to help you build amazing websites with AI. From beginner tutorials to advanced API integration.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up delay-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-5 pl-14 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none transition-all text-lg"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
            </div>
          </div>

          {/* Popular Docs */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
              POPULAR DOCUMENTATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularDocs.map((doc, index) => (
                <Link
                  key={index}
                  href="/docs"
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 group"
                >
                  <div className="text-4xl mb-3">{doc.icon}</div>
                  <h3 className="font-bold mb-2 group-hover:text-brand transition-colors">
                    {doc.title}
                  </h3>
                  <div className="text-xs text-muted">{doc.views} views</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between group hover:translate-x-2 transition-transform"
                      >
                        <span className="text-sm group-hover:text-brand transition-colors">
                          {link.title}
                        </span>
                        <span className="text-xs text-muted">{link.time}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Help CTA */}
          <div className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 text-center opacity-0 animate-fade-in-up delay-800">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              CAN'T FIND WHAT YOU'RE LOOKING FOR?
            </h2>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch and we'll assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-brand text-black font-black uppercase text-sm hover:bg-brand/90 transition-all"
              >
                Contact Support
              </Link>
              <Link
                href="/help"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-black uppercase text-sm hover:bg-white/10 transition-all"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
