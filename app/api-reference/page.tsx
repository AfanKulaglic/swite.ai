import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function APIReferencePage() {
  const endpoints = [
    {
      category: "Authentication",
      icon: "🔐",
      endpoints: [
        { method: "POST", path: "/auth/login", description: "Authenticate user and get access token" },
        { method: "POST", path: "/auth/register", description: "Create new user account" },
        { method: "POST", path: "/auth/refresh", description: "Refresh access token" },
        { method: "POST", path: "/auth/logout", description: "Invalidate access token" },
      ],
    },
    {
      category: "Websites",
      icon: "🌐",
      endpoints: [
        { method: "GET", path: "/websites", description: "List all websites" },
        { method: "POST", path: "/websites", description: "Create new website" },
        { method: "GET", path: "/websites/:id", description: "Get website details" },
        { method: "PUT", path: "/websites/:id", description: "Update website" },
        { method: "DELETE", path: "/websites/:id", description: "Delete website" },
        { method: "POST", path: "/websites/:id/publish", description: "Publish website" },
      ],
    },
    {
      category: "AI Generation",
      icon: "🤖",
      endpoints: [
        { method: "POST", path: "/ai/generate", description: "Generate website from prompt" },
        { method: "POST", path: "/ai/content", description: "Generate content for page" },
        { method: "POST", path: "/ai/optimize", description: "Optimize existing content" },
        { method: "GET", path: "/ai/suggestions", description: "Get AI suggestions" },
      ],
    },
    {
      category: "Pages",
      icon: "📄",
      endpoints: [
        { method: "GET", path: "/websites/:id/pages", description: "List all pages" },
        { method: "POST", path: "/websites/:id/pages", description: "Create new page" },
        { method: "GET", path: "/pages/:id", description: "Get page details" },
        { method: "PUT", path: "/pages/:id", description: "Update page" },
        { method: "DELETE", path: "/pages/:id", description: "Delete page" },
      ],
    },
    {
      category: "Media",
      icon: "🖼️",
      endpoints: [
        { method: "GET", path: "/media", description: "List media files" },
        { method: "POST", path: "/media/upload", description: "Upload media file" },
        { method: "DELETE", path: "/media/:id", description: "Delete media file" },
        { method: "POST", path: "/media/optimize", description: "Optimize image" },
      ],
    },
    {
      category: "Analytics",
      icon: "📊",
      endpoints: [
        { method: "GET", path: "/analytics/:id", description: "Get website analytics" },
        { method: "GET", path: "/analytics/:id/visitors", description: "Get visitor data" },
        { method: "GET", path: "/analytics/:id/conversions", description: "Get conversion data" },
        { method: "POST", path: "/analytics/:id/events", description: "Track custom event" },
      ],
    },
  ];

  const sdks = [
    { name: "JavaScript", icon: "📦", status: "Stable", version: "v2.1.0" },
    { name: "Python", icon: "🐍", status: "Stable", version: "v2.0.5" },
    { name: "PHP", icon: "🐘", status: "Stable", version: "v1.8.2" },
    { name: "Ruby", icon: "💎", status: "Beta", version: "v1.5.0" },
  ];

  return (
    <div className="pt-32">
      <div className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <Badge variant="brand">API REFERENCE</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              DEVELOPER API
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              RESTful API for building custom integrations and automating your workflow. Complete with authentication, webhooks, and real-time updates.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 opacity-0 animate-fade-in-up delay-200">
            <Link
              href="#authentication"
              className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 text-center group"
            >
              <div className="text-3xl mb-2">🔑</div>
              <div className="font-bold text-sm group-hover:text-brand transition-colors">
                Authentication
              </div>
            </Link>
            <Link
              href="#rate-limits"
              className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 text-center group"
            >
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-sm group-hover:text-brand transition-colors">
                Rate Limits
              </div>
            </Link>
            <Link
              href="#webhooks"
              className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 text-center group"
            >
              <div className="text-3xl mb-2">🔔</div>
              <div className="font-bold text-sm group-hover:text-brand transition-colors">
                Webhooks
              </div>
            </Link>
            <Link
              href="#sdks"
              className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 text-center group"
            >
              <div className="text-3xl mb-2">📦</div>
              <div className="font-bold text-sm group-hover:text-brand transition-colors">
                SDKs
              </div>
            </Link>
          </div>

          {/* Base URL */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 opacity-0 animate-fade-in-up delay-300">
            <h2 className="text-xl font-black uppercase tracking-tight mb-4">BASE URL</h2>
            <code className="block p-4 rounded-xl bg-black/50 font-mono text-brand">
              https://api.swite.ai/v1
            </code>
            <p className="text-sm text-muted mt-4">
              All API requests must be made over HTTPS. Requests made over HTTP will fail.
            </p>
          </div>

          {/* API Endpoints */}
          <div className="space-y-8 mb-16">
            {endpoints.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">
                    {category.category}
                  </h2>
                </div>
                <div className="space-y-3">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div
                      key={endpointIndex}
                      className="flex items-center gap-4 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all group cursor-pointer"
                    >
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          endpoint.method === "GET"
                            ? "bg-accentBlue/20 text-accentBlue"
                            : endpoint.method === "POST"
                            ? "bg-brand/20 text-brand"
                            : endpoint.method === "PUT"
                            ? "bg-accentPurple/20 text-accentPurple"
                            : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm flex-1 group-hover:text-brand transition-colors">
                        {endpoint.path}
                      </code>
                      <span className="text-xs text-muted">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SDKs */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-800">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
              OFFICIAL SDKs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-4">{sdk.icon}</div>
                  <h3 className="text-xl font-black mb-2">{sdk.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        sdk.status === "Stable"
                          ? "bg-brand/20 text-brand"
                          : "bg-accentBlue/20 text-accentBlue"
                      }`}
                    >
                      {sdk.status}
                    </span>
                    <span className="text-xs text-muted">{sdk.version}</span>
                  </div>
                  <Link
                    href="#"
                    className="text-sm text-brand hover:underline"
                  >
                    View Documentation →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center opacity-0 animate-fade-in-up delay-900">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              NEED HELP WITH THE API?
            </h2>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Join our developer community or contact our API support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-brand text-black font-black uppercase text-sm hover:bg-brand/90 transition-all"
              >
                Contact API Support
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-black uppercase text-sm hover:bg-white/10 transition-all"
              >
                View Full Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
