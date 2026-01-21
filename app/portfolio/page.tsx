import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function PortfolioPage() {
  const features = [
    {
      icon: "🎨",
      title: "Stunning Galleries",
      description: "Choose from grid, masonry, carousel, or full-screen layouts. Lightbox viewing, image zoom, and smooth transitions make your work shine."
    },
    {
      icon: "📱",
      title: "Mobile Perfection",
      description: "Your portfolio automatically adapts to any screen size. Touch-optimized navigation and fast loading on mobile devices where 60% of views happen."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Automatic image optimization, lazy loading, and CDN delivery ensure your portfolio loads in under 2 seconds worldwide. Speed matters."
    },
    {
      icon: "🎬",
      title: "Video Showcase",
      description: "Embed videos from YouTube, Vimeo, or upload directly. Perfect for showreels, behind-the-scenes, and video portfolios."
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Get discovered on Google with automatic meta tags, image alt text, schema markup, and sitemap generation. Rank higher, get more clients."
    },
    {
      icon: "💼",
      title: "Client Proofing",
      description: "Share password-protected galleries with clients for feedback and approval. Collect comments, allow downloads, and streamline your workflow."
    }
  ];

  const portfolioTypes = [
    {
      title: "Photography",
      description: "Showcase your photography with stunning full-screen galleries",
      icon: "📸",
      features: ["High-res images", "Watermark protection", "Print shop integration"]
    },
    {
      title: "Design & Illustration",
      description: "Display your creative work with customizable project pages",
      icon: "🎨",
      features: ["Case studies", "Process documentation", "Client testimonials"]
    },
    {
      title: "Architecture",
      description: "Present architectural projects with detailed project pages",
      icon: "🏛️",
      features: ["Floor plans", "3D renders", "Project timelines"]
    },
    {
      title: "Video & Film",
      description: "Embed video reels and showcase your cinematography",
      icon: "🎥",
      features: ["Video hosting", "Showreels", "Behind-the-scenes"]
    },
    {
      title: "Fashion & Modeling",
      description: "Create a stunning portfolio for fashion and modeling work",
      icon: "👗",
      features: ["Lookbooks", "Comp cards", "Agency integration"]
    },
    {
      title: "Web Development",
      description: "Showcase websites and apps with live previews and code",
      icon: "💻",
      features: ["Live demos", "GitHub integration", "Tech stack display"]
    }
  ];

  const templates = [
    { name: "Minimal", style: "Clean and simple", best: "Photographers" },
    { name: "Bold", style: "Large images, strong typography", best: "Designers" },
    { name: "Editorial", style: "Magazine-style layout", best: "Writers" },
    { name: "Grid", style: "Organized grid system", best: "Illustrators" },
    { name: "Fullscreen", style: "Immersive full-screen", best: "Artists" },
    { name: "Masonry", style: "Pinterest-style layout", best: "Mixed media" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="brand">PORTFOLIO WEBSITES</Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
            YOUR WORK DESERVES BETTER
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12">
            Create a stunning portfolio that makes clients say "wow." Showcase your photography, design, art, or creative work with galleries that load instantly and look perfect on every device. No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/signup" variant="primary" size="lg">
              Build Your Portfolio
            </Button>
            <Button href="/templates" variant="secondary" size="lg">
              Explore Templates
            </Button>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "📸", label: "Photography" },
              { emoji: "🎨", label: "Design" },
              { emoji: "✏️", label: "Illustration" },
              { emoji: "🏛️", label: "Architecture" },
              { emoji: "🎥", label: "Video" },
              { emoji: "💻", label: "Development" },
              { emoji: "✍️", label: "Writing" },
              { emoji: "🎭", label: "Art" }
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex flex-col items-center justify-center hover:border-brand/50 transition-all group cursor-pointer"
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{item.emoji}</span>
                <span className="text-xs text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            PORTFOLIO FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Types */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
            PERFECT FOR CREATIVES
          </h2>
          <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
            Whether you're a photographer, designer, artist, or developer - create a portfolio that showcases your unique style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {type.title}
                </h3>
                <p className="text-muted mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
            BEAUTIFUL TEMPLATES
          </h2>
          <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
            Start with a professionally designed template and customize it to match your style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand transition-all"
              >
                <div className="aspect-video rounded-xl bg-black border border-white/10 mb-4 flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-muted mb-2">{template.style}</p>
                <p className="text-xs text-brand">Best for: {template.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            TRUSTED BY CREATIVES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-black border border-white/10">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted mb-4">"The perfect platform for showcasing my photography. Clean, fast, and my clients love it."</p>
              <p className="font-bold">Sarah Chen</p>
              <p className="text-sm text-muted">Wedding Photographer</p>
            </div>
            <div className="p-8 rounded-2xl bg-black border border-white/10">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted mb-4">"I built my portfolio in an afternoon. The templates are gorgeous and easy to customize."</p>
              <p className="font-bold">Marcus Rodriguez</p>
              <p className="text-sm text-muted">Graphic Designer</p>
            </div>
            <div className="p-8 rounded-2xl bg-black border border-white/10">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted mb-4">"Finally, a portfolio site that loads fast and looks amazing on mobile. Game changer!"</p>
              <p className="font-bold">Emma Thompson</p>
              <p className="text-sm text-muted">Illustrator</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            START SHOWCASING YOUR WORK
          </h2>
          <p className="text-xl text-muted mb-8">
            Create your professional portfolio in minutes. Impress clients and land more projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/signup" variant="primary" size="lg">
              Build Portfolio Free
            </Button>
            <Button href="/templates" variant="secondary" size="lg">
              View Templates
            </Button>
          </div>
          <p className="text-sm text-muted">
            ✓ Free forever plan • ✓ No watermarks • ✓ Custom domain included
          </p>
        </div>
      </section>
    </div>
  );
}
