import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function StorePage() {
  const features = [
    {
      icon: "🛍️",
      title: "Product Management",
      description: "Unlimited products with variants, options, and SKUs. Bulk import via CSV, organize with collections, and manage inventory across multiple locations with low-stock alerts."
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description: "Accept all major credit cards, digital wallets (Apple Pay, Google Pay), PayPal, and 50+ payment gateways. PCI-DSS compliant with fraud detection built-in."
    },
    {
      icon: "📦",
      title: "Order Management",
      description: "Centralized dashboard for all orders. Automated fulfillment workflows, print shipping labels, send tracking updates, and manage returns with ease."
    },
    {
      icon: "🚚",
      title: "Smart Shipping",
      description: "Real-time shipping rates from USPS, FedEx, UPS, DHL. Set up free shipping thresholds, flat rates, or local pickup. Print labels directly from your dashboard."
    },
    {
      icon: "📊",
      title: "Sales Analytics",
      description: "Real-time insights into revenue, conversion rates, average order value, and customer lifetime value. Identify best-sellers and optimize your product mix."
    },
    {
      icon: "🎁",
      title: "Marketing Tools",
      description: "Create discount codes, BOGO offers, flash sales, and abandoned cart recovery emails. Built-in email marketing and customer segmentation."
    }
  ];

  const storeTypes = [
    {
      title: "Fashion & Apparel",
      description: "Size charts, color swatches, style guides, and fit recommendations. Perfect for clothing brands, boutiques, and accessory shops.",
      image: "👗",
      features: ["Size variants", "Color options", "Style guides"]
    },
    {
      title: "Digital Products",
      description: "Instant delivery of ebooks, courses, software, templates, and digital art. No inventory, no shipping—pure profit.",
      image: "💾",
      features: ["Instant delivery", "License keys", "Download limits"]
    },
    {
      title: "Food & Beverage",
      description: "Online ordering with pickup/delivery options. Perfect for restaurants, bakeries, coffee shops, and specialty food retailers.",
      image: "🍕",
      features: ["Menu builder", "Pickup times", "Dietary tags"]
    },
    {
      title: "Art & Crafts",
      description: "Showcase handmade items, custom orders, and limited editions. Built-in tools for print-on-demand and made-to-order products.",
      image: "🎨",
      features: ["Custom orders", "Print-on-demand", "Limited editions"]
    },
    {
      title: "Electronics & Tech",
      description: "Detailed specifications, comparison tables, warranty information, and technical support documentation for tech products.",
      image: "📱",
      features: ["Spec sheets", "Warranties", "Tech support"]
    },
    {
      title: "Health & Beauty",
      description: "Ingredient lists, usage instructions, before/after galleries, and subscription options for cosmetics and wellness products.",
      image: "💄",
      features: ["Ingredients", "Subscriptions", "Reviews"]
    }
  ];

  return (
    <div className="pt-32 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="opacity-0 animate-fade-in-down">
                <Badge variant="brand">ECOMMERCE PLATFORM</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6 opacity-0 animate-fade-in-up delay-100">
                SELL ANYTHING, <span className="text-brand animate-glow-pulse">ANYWHERE</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-8 opacity-0 animate-fade-in-up delay-200">
                Launch your online store in minutes, not months. From product listings to checkout, inventory management to shipping integrations—everything you need to start selling online is built-in and ready to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
                <Button href="/signup" variant="primary" size="lg">
                  Start Selling Free
                </Button>
                <Button href="/templates" variant="secondary" size="lg">
                  Browse Store Designs
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 opacity-0 animate-fade-in delay-400">
                <div className="group cursor-pointer">
                  <div className="text-2xl font-black text-brand mb-1 group-hover:scale-110 transition-transform">0%</div>
                  <div className="text-sm text-muted">Transaction Fees</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-black text-brand mb-1 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm text-muted">Payment Methods</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-black text-brand mb-1 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-sm text-muted">Store Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative opacity-0 animate-scale-in delay-300">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-brand/50 transition-all duration-500">
                <div className="space-y-4">
                  {[
                    { emoji: "👕", name: "Premium T-Shirt", price: "$29.99", status: "In Stock" },
                    { emoji: "👟", name: "Running Shoes", price: "$89.99", status: "12 left" },
                    { emoji: "🎒", name: "Travel Backpack", price: "$59.99", status: "Best Seller" }
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-black border border-white/10 hover:border-brand/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {product.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1 group-hover:text-brand transition-colors">{product.name}</div>
                        <div className="text-sm text-muted">{product.price} • {product.status}</div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
              EVERYTHING YOU NEED TO <span className="text-brand">SELL ONLINE</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand/20 group cursor-pointer h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:animate-bounce-in transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-bold">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store Types */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
              BUILT FOR YOUR <span className="text-brand">INDUSTRY</span>
            </h2>
            <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
              Industry-specific features and templates designed for your business type. From fashion to food, digital to physical—we've got you covered.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storeTypes.map((type, index) => (
              <ScrollReveal key={index} animation="slide-left" delay={index * 100}>
                <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all duration-500 group cursor-pointer h-full relative overflow-hidden">
                  <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {type.image}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium group-hover:border-brand/50 group-hover:bg-brand/10 transition-all">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl animate-border-glow"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-br from-brand/20 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
              TRUSTED BY ONLINE SELLERS <span className="text-brand">WORLDWIDE</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$2.5B+", label: "Total Sales Processed", sub: "Last 12 months" },
              { value: "150K+", label: "Active Stores", sub: "Across 180 countries" },
              { value: "99.9%", label: "Uptime Guarantee", sub: "Enterprise infrastructure" },
              { value: "4.8/5", label: "Customer Rating", sub: "From 12K+ reviews" }
            ].map((stat, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
                <div className="group cursor-pointer">
                  <div className="text-5xl font-black text-brand mb-2 group-hover:scale-125 transition-transform duration-500">{stat.value}</div>
                  <div className="text-muted font-bold">{stat.label}</div>
                  <div className="text-xs text-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{stat.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <ScrollReveal animation="zoom-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              READY TO <span className="text-brand animate-glow-pulse">START SELLING?</span>
            </h2>
            <p className="text-xl text-muted mb-8">
              Join 150,000+ businesses selling online. Launch your store in minutes—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/signup" variant="primary" size="lg">
                Start Selling Free
              </Button>
              <Button href="/demo" variant="secondary" size="lg">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </span>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
