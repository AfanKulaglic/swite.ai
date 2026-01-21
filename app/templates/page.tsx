export default function TemplatesPage() {
  const categories = [
    "All",
    "Business",
    "Portfolio",
    "E-commerce",
    "Blog",
    "Restaurant",
    "Agency",
  ];

  const templates = [
    {
      name: "WebSphere",
      category: "Business",
      description: "Professional hosting and cloud solutions",
      image: "/templates/websphere/preview.jpg",
    },
    {
      name: "Portfolio Pro",
      category: "Portfolio",
      description: "Showcase your creative work",
      image: "/templates/portfolio/preview.jpg",
    },
    {
      name: "Shop Modern",
      category: "E-commerce",
      description: "Clean online store design",
      image: "/templates/shop/preview.jpg",
    },
    {
      name: "Blog Minimal",
      category: "Blog",
      description: "Focus on your content",
      image: "/templates/blog/preview.jpg",
    },
    {
      name: "Restaurant Deluxe",
      category: "Restaurant",
      description: "Menus and reservations",
      image: "/templates/restaurant/preview.jpg",
    },
    {
      name: "Agency Bold",
      category: "Agency",
      description: "Stand out from the crowd",
      image: "/templates/agency/preview.jpg",
    },
    {
      name: "SaaS Launch",
      category: "Business",
      description: "Perfect for software products",
      image: "/templates/saas/preview.jpg",
    },
    {
      name: "Consulting Pro",
      category: "Business",
      description: "Professional services",
      image: "/templates/consulting/preview.jpg",
    },
    {
      name: "Photography",
      category: "Portfolio",
      description: "Image-focused layouts",
      image: "/templates/photography/preview.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Templates
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Professional designs for every industry. Fully customizable.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <a
              key={index}
              href="/studio"
              className="group block"
            >
              <div className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all">
                {/* Preview Image Placeholder */}
                <div className="aspect-[4/3] bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌐</div>
                    <div className="text-sm text-white/40">Preview</div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold group-hover:text-white transition-colors">
                      {template.name}
                    </h3>
                    <span className="text-xs text-white/40 px-2 py-1 rounded bg-white/5">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">
                    {template.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-32 pt-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-4">Can't find what you need?</h2>
          <p className="text-white/50 mb-8">
            Start from scratch with our AI builder
          </p>
          <a
            href="/studio"
            className="inline-block px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all"
          >
            Build Custom Site
          </a>
        </div>
      </div>
    </div>
  );
}
