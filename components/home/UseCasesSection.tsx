import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Startups & SaaS",
      description: "Launch your product with a professional landing page, pricing tables, and conversion-optimized design. Perfect for validating ideas quickly.",
      icon: "🚀",
      features: ["Landing pages", "Product showcases", "Pricing tables", "Lead capture"],
      color: "brand",
    },
    {
      title: "E-commerce",
      description: "Build online stores with product catalogs, shopping carts, and secure checkout. Integrated payment processing and inventory management.",
      icon: "🛍️",
      features: ["Product catalogs", "Shopping cart", "Payment integration", "Order management"],
      color: "accentBlue",
    },
    {
      title: "Agencies & Freelancers",
      description: "Create client websites faster with white-label options. Manage multiple projects with team collaboration and client portals.",
      icon: "💼",
      features: ["White-label", "Client portals", "Team collaboration", "Project management"],
      color: "accentPurple",
    },
    {
      title: "Blogs & Content",
      description: "Professional blogging platform with SEO optimization, categories, tags, and RSS feeds. Built-in content management system.",
      icon: "✍️",
      features: ["Blog platform", "SEO optimization", "Content scheduling", "RSS feeds"],
      color: "brand",
    },
    {
      title: "Portfolios",
      description: "Showcase your work with stunning portfolio layouts. Perfect for designers, photographers, artists, and creative professionals.",
      icon: "🎨",
      features: ["Gallery layouts", "Project showcases", "Client testimonials", "Contact forms"],
      color: "accentBlue",
    },
    {
      title: "Local Business",
      description: "Establish online presence for restaurants, salons, gyms, and service businesses. Booking systems and location maps included.",
      icon: "🏪",
      features: ["Booking systems", "Location maps", "Service menus", "Customer reviews"],
      color: "accentPurple",
    },
  ];

  return (
    <section className="relative px-6 md:px-16 xl:px-32 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="brand">USE CASES</Badge>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-6 mb-6">
            BUILT FOR EVERY BUSINESS
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Whether you're launching a startup, running an agency, or building an online store—our platform adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                useCase.color === 'brand' ? 'bg-brand/20' :
                useCase.color === 'accentBlue' ? 'bg-accentBlue/20' :
                'bg-accentPurple/20'
              }`}>
                <span className="text-4xl">{useCase.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {useCase.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <span className={`${
                      useCase.color === 'brand' ? 'text-brand' :
                      useCase.color === 'accentBlue' ? 'text-accentBlue' :
                      'text-accentPurple'
                    }`}>✓</span>
                    <span className="text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6">
            Not sure which solution fits your needs?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand hover:bg-white/10 transition-all font-bold uppercase text-sm"
          >
            Talk to Our Team
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
