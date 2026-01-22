"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HorizontalScrollSection from "@/components/home/HorizontalScrollSection";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  useEffect(() => {
    // Subtle parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrolled / 800}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    {
      title: "E-Commerce Platform",
      description: "Complete online store with product management, shopping cart, secure checkout, and payment processing. Built-in inventory tracking and order management.",
      category: "Retail",
      features: ["Stripe & PayPal Integration", "Real-time Inventory", "Order Analytics", "Customer Accounts"],
      stats: { metric: "2.5x", label: "Avg. Conversion Rate" }
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics and insights platform with real-time data visualization, custom reporting, and team collaboration tools. Enterprise-ready from day one.",
      category: "Business",
      features: ["Live Data Sync", "Custom Dashboards", "Team Workspaces", "API Integration"],
      stats: { metric: "10K+", label: "Active Users" }
    },
    {
      title: "Portfolio Website",
      description: "Stunning visual showcase for creative professionals. Project galleries, case studies, client testimonials, and integrated contact forms.",
      category: "Creative",
      features: ["Project Galleries", "Case Studies", "Client Portal", "Blog & CMS"],
      stats: { metric: "99%", label: "Client Satisfaction" }
    },
    {
      title: "Landing Page",
      description: "High-converting pages optimized for lead generation. A/B testing, form builders, analytics integration, and conversion tracking built-in.",
      category: "Marketing",
      features: ["A/B Testing", "Lead Capture", "Analytics Suite", "Email Integration"],
      stats: { metric: "45%", label: "Higher Conversions" }
    }
  ];

  const accordionItems = [
    {
      question: "How does the AI website builder work?",
      answer: "Simply describe your website in natural language—tell us about your business, target audience, and goals. Our advanced AI analyzes your requirements, understands your brand identity, and generates a complete, production-ready website in under 30 seconds. The AI considers industry best practices, modern design trends, and conversion optimization automatically. You can then customize every element using our intuitive visual editor, or let the AI refine it further based on your feedback."
    },
    {
      question: "Can I customize the generated websites?",
      answer: "Absolutely. Every element is fully customizable through our intuitive visual editor. Change colors, fonts, layouts, spacing, content, images, and more—all without writing code. You have complete control over the final design while maintaining professional quality. Our component library includes 200+ pre-built elements you can drag and drop. Advanced users can also access the underlying code for deeper customization. All changes are reflected in real-time, so you see exactly what your visitors will see."
    },
    {
      question: "What types of websites can I build?",
      answer: "You can build virtually any type of website: e-commerce stores with full shopping cart functionality, professional portfolios with project galleries, landing pages optimized for conversions, SaaS platforms with user dashboards, blogs with CMS integration, documentation sites with search, business websites with booking systems, and much more. Our AI understands different website types and automatically generates appropriate structures, features, and layouts. Each template is fully customizable to match your specific needs."
    },
    {
      question: "Is the code production-ready?",
      answer: "Yes, absolutely. All generated code follows industry best practices and modern web standards. The code is clean, well-structured, fully responsive across all devices, optimized for performance (90+ Lighthouse scores), SEO-friendly with proper meta tags and semantic HTML, accessible (WCAG 2.1 compliant), and secure by default. The code is also maintainable and documented, making it easy for developers to extend if needed. You can deploy immediately to any hosting platform or use our built-in global CDN."
    },
    {
      question: "Do I need coding knowledge?",
      answer: "No coding knowledge required whatsoever. Our platform is designed for everyone—from complete beginners to experienced developers. The visual editor makes it easy to create professional websites without writing a single line of code. Simply describe what you want, customize using drag-and-drop, and publish. That said, developers can access the underlying code if they want to make advanced customizations. The platform grows with your skills."
    },
    {
      question: "What about hosting and deployment?",
      answer: "We provide automatic deployment to our global CDN with 200+ edge locations worldwide. Your site goes live instantly with automatic SSL certificates, DDoS protection, and 99.99% uptime SLA. We handle all the technical infrastructure—servers, security, scaling, backups, and monitoring. Your site loads in under 50ms globally and can handle unlimited traffic spikes automatically. You can also export your code and host it anywhere you prefer—we never lock you in."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free tier that includes full access to the AI builder, visual editor, and basic hosting. This is perfect for personal projects and testing. Our Pro plan ($29/month) includes custom domains, advanced analytics, priority support, and higher resource limits. Enterprise plans include dedicated infrastructure, SLA guarantees, custom integrations, and white-label options. All plans include unlimited websites and no hidden fees. You can start free and upgrade anytime as your needs grow."
    },
    {
      question: "Can I migrate my existing website?",
      answer: "Yes! We offer free migration assistance for existing websites. Simply provide your current site URL, and our AI will analyze it, recreate the design and content, and optimize it for better performance. The migration typically takes less than an hour, and we preserve all your content, images, and SEO settings. Our team can also help with custom migrations for complex sites. Once migrated, you can enhance your site with our AI tools and modern features."
    }
  ];

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* Hero Section - Minimalist & Futuristic */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#6B46C1]/5 to-[#4169E1]/5 rounded-full blur-3xl" />
        
        {/* Minimal accent line with gradient */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent" />
        
        <div ref={heroRef} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Minimal badge with gradient accent */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-12 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">AI Website Builder</span>
          </div>

          {/* Main headline - Ultra clean */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-light tracking-tight leading-[0.95] mb-8">
            <span className="block text-white/40">Build websites</span>
            <span className="block font-medium text-white">in seconds</span>
          </h1>

          {/* Subheadline - Minimal */}
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-16 font-light">
            Enterprise-grade AI that transforms ideas into production-ready websites. 
            No code. No complexity.
          </p>

          {/* CTA - Clean buttons with gradient accents */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <Link
              href="/studio"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
            >
              Start Building
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] to-[#4169E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Start Building</span>
            </Link>
            
            <Link
              href="/features"
              className="px-8 py-4 border border-[#4169E1]/20 text-sm font-medium text-white/60 hover:text-white hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 tracking-wide"
            >
              View Features
            </Link>
          </div>

          {/* Minimal stats with gradient accents */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-3xl font-light mb-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent group-hover:scale-110 transition-transform">50K+</div>
              <div className="text-white/30 text-xs tracking-wider uppercase mb-1">Websites Built</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#4169E1]/30 to-transparent" />
            </div>
            <div className="group">
              <div className="text-3xl font-light mb-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-white/30 text-xs tracking-wider uppercase mb-1">Uptime SLA</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#4169E1]/30 to-transparent" />
            </div>
            <div className="group">
              <div className="text-3xl font-light mb-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent group-hover:scale-110 transition-transform">&lt;30s</div>
              <div className="text-white/30 text-xs tracking-wider uppercase mb-1">Build Time</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#4169E1]/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator with gradient */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-xs text-white/20 tracking-widest uppercase">Scroll</div>
          <div className="w-px h-16 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent" />
        </div>
      </section>

      {/* Features Grid - Minimal Cards */}
      <section className="relative py-32 px-6">
        {/* Subtle gradient background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#4169E1]/3 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section label with gradient */}
          <div className="mb-20">
            <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-4">Features</div>
            <h2 className="text-5xl font-light tracking-tight">
              <span className="text-white/40">Everything you need.</span>
              <br />
              <span className="text-white">Nothing you don't.</span>
            </h2>
          </div>

          {/* Feature grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10">
            {[
              {
                title: "AI Generation",
                description: "Describe your vision in natural language. Watch it build in real-time with intelligent design decisions.",
                metric: "30s avg",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Visual Editor",
                description: "Intuitive drag-and-drop interface with pixel-perfect control. Real-time preview on all devices.",
                metric: "Zero code",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              {
                title: "Global CDN",
                description: "Lightning-fast delivery from 200+ edge locations. Automatic optimization and caching.",
                metric: "< 50ms",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Enterprise Security",
                description: "SOC 2 Type II certified with automatic SSL, DDoS protection, and enterprise-grade encryption.",
                metric: "99.99% SLA",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Real-time Collaboration",
                description: "Work together seamlessly. Live cursors, comments, and instant sync across your team.",
                metric: "Live sync",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Auto Scaling",
                description: "Handle unlimited traffic spikes automatically. Pay only for what you use with smart scaling.",
                metric: "Unlimited",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-black p-12 hover:bg-gradient-to-br hover:from-[#4169E1]/[0.02] hover:to-[#6B46C1]/[0.02] transition-all duration-500"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/[0.03] to-[#6B46C1]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center mb-6 group-hover:border-[#4169E1]/40 group-hover:scale-110 transition-all duration-500">
                    <div className="text-white/60 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Number with gradient on hover */}
                  <div className="text-xs text-white/20 group-hover:bg-gradient-to-r group-hover:from-[#4169E1] group-hover:to-[#6B46C1] group-hover:bg-clip-text group-hover:text-transparent font-light mb-4 transition-all duration-500">0{index + 1}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-white/40 leading-relaxed mb-6 font-light group-hover:text-white/60 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Metric with gradient border */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#4169E1]/20 text-xs font-medium group-hover:border-[#4169E1]/40 group-hover:bg-[#4169E1]/5 transition-all duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                    <span className="text-white/60 group-hover:text-white/80">{feature.metric}</span>
                  </div>
                </div>

                {/* Corner accent with gradient */}
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <HorizontalScrollSection />

      {/* Social Proof - Minimal */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10">
        {/* Subtle gradient background */}
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#6B46C1]/3 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Testimonial */}
            <div>
              <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-8">Testimonial</div>
              
              <blockquote className="text-3xl font-light leading-relaxed mb-12 text-white/80">
                "SWITE.AI reduced our deployment time from weeks to minutes. 
                The ROI was immediate and undeniable."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/20" />
                <div>
                  <div className="font-medium text-sm">Sarah Chen</div>
                  <div className="text-xs text-white/40">CTO, TechVentures</div>
                </div>
              </div>
            </div>

            {/* Right: Metrics */}
            <div className="grid grid-cols-2 gap-px bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10">
              {[
                { value: "50,000+", label: "Enterprise Clients", sublabel: "Fortune 500" },
                { value: "2M+", label: "Sites Deployed", sublabel: "Production" },
                { value: "99.99%", label: "Uptime SLA", sublabel: "Guaranteed" },
                { value: "24/7", label: "Support", sublabel: "Always Available" }
              ].map((stat, index) => (
                <div key={index} className="bg-black p-8 hover:bg-gradient-to-br hover:from-[#4169E1]/[0.02] hover:to-[#6B46C1]/[0.02] transition-all duration-500 group relative">
                  <div className="relative z-10">
                    <div className="text-4xl font-light mb-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent group-hover:scale-105 transition-transform">{stat.value}</div>
                    <div className="text-sm text-white/60 font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-white/30 tracking-wider uppercase">{stat.sublabel}</div>
                  </div>
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4169E1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process - Minimal Timeline */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-16 text-center">Process</div>
          
          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Describe",
                description: "Tell us what you want to build. Use natural language."
              },
              {
                step: "02",
                title: "Generate",
                description: "AI creates your website in seconds. Production-ready code."
              },
              {
                step: "03",
                title: "Deploy",
                description: "One click to go live. Global CDN. Automatic scaling."
              }
            ].map((item, index) => (
              <div key={index} className="group relative pl-24">
                {/* Step number with gradient on hover */}
                <div className="absolute left-0 top-0 text-6xl font-light text-white/10 group-hover:bg-gradient-to-r group-hover:from-[#4169E1] group-hover:to-[#6B46C1] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {item.step}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed">{item.description}</p>
                </div>

                {/* Connecting line with gradient */}
                {index < 2 && (
                  <div className="absolute left-8 top-20 w-px h-16 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio/Editor Showcase - Image Carousel */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10">
        <div className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#4169E1]/3 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-4">Studio</div>
            <h2 className="text-5xl font-light tracking-tight mb-6">
              <span className="text-white/40">Powerful editor.</span>
              <br />
              <span className="text-white">Intuitive interface.</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto font-light">
              Professional tools that feel natural. Build, customize, and deploy with confidence.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black">
              {/* Carousel Items */}
              <div className="relative h-[600px]">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeCarouselIndex
                        ? 'opacity-100 translate-x-0'
                        : index < activeCarouselIndex
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 h-full">
                      {/* Left: Image Placeholder */}
                      <div className="relative bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 flex items-center justify-center p-12">
                        <div className="w-full h-full rounded-xl border border-[#4169E1]/20 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                          {/* Animated gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 via-transparent to-[#6B46C1]/5 animate-pulse" />
                          
                          {/* Mock Browser Window */}
                          <div className="w-full max-w-md relative z-10">
                            <div className="flex items-center gap-2 mb-4 px-4">
                              <div className="w-3 h-3 rounded-full bg-red-500/50" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                              <div className="w-3 h-3 rounded-full bg-green-500/50" />
                              <div className="flex-1 h-6 bg-white/5 rounded ml-2" />
                            </div>
                            <div className="space-y-3 px-4">
                              <div className="h-8 bg-gradient-to-r from-[#4169E1]/30 to-[#6B46C1]/30 rounded animate-pulse" />
                              <div className="h-32 bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 rounded relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="h-20 bg-gradient-to-br from-[#4169E1]/15 to-[#6B46C1]/15 rounded relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
                                  </div>
                                ))}
                              </div>
                              <div className="flex gap-2">
                                <div className="h-10 flex-1 bg-gradient-to-r from-[#4169E1]/25 to-[#6B46C1]/25 rounded" />
                                <div className="h-10 w-10 bg-white/10 rounded" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/30 uppercase tracking-wider">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] animate-pulse" />
                            {item.category} Template
                          </div>
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="flex flex-col justify-center p-12 lg:p-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#4169E1]/20 text-xs text-white/60 font-medium mb-6 w-fit bg-[#4169E1]/5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                          {item.category}
                        </div>
                        <h3 className="text-4xl font-medium mb-6">{item.title}</h3>
                        <p className="text-lg text-white/60 mb-8 font-light leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Stats Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-[#4169E1]/20 bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5 mb-8 w-fit">
                          <div className="text-3xl font-light bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
                            {item.stats.metric}
                          </div>
                          <div className="text-xs text-white/40 uppercase tracking-wider">
                            {item.stats.label}
                          </div>
                        </div>

                        <div className="space-y-3 mb-8">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 group">
                              <div className="w-5 h-5 rounded border border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#4169E1]/50 transition-colors">
                                <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href="/studio"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:border-[#4169E1]/40 hover:from-[#4169E1]/20 hover:to-[#6B46C1]/20 transition-all group"
                        >
                          <span>Try in Studio</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCarouselIndex(index)}
                    className={`transition-all duration-500 ${
                      index === activeCarouselIndex
                        ? 'w-12 h-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1]'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/30'
                    } rounded-full`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={() => setActiveCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#4169E1]/20 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-[#4169E1]/40 hover:bg-black/70 transition-all"
              >
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveCarouselIndex((prev) => (prev + 1) % carouselItems.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#4169E1]/20 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-[#4169E1]/40 hover:bg-black/70 transition-all"
              >
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Stacked List with Images */}
      <section className="relative py-32 px-6">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#6B46C1]/3 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-4">Capabilities</div>
            <h2 className="text-5xl font-light tracking-tight">
              <span className="text-white/40">Built for</span>
              <br />
              <span className="text-white">professionals</span>
            </h2>
          </div>

          {/* Stacked List */}
          <div className="space-y-32">
            {/* Item 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 border border-[#4169E1]/20 text-xs text-white/60 font-medium mb-6">
                  Visual Editor
                </div>
                <h3 className="text-4xl font-medium mb-6">Drag, drop, done</h3>
                <p className="text-lg text-white/40 mb-8 font-light leading-relaxed">
                  Intuitive visual editor with real-time preview. Move elements, adjust spacing, change colors—all without code. What you see is what you get.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time preview",
                    "Component library",
                    "Responsive controls",
                    "Undo/redo history"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded border border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full border border-[#4169E1]/20 rounded-lg bg-black/50 backdrop-blur-sm p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-6 bg-gradient-to-r from-[#4169E1]/20 to-transparent rounded w-3/4" />
                        <div className="h-24 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 rounded" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-16 bg-gradient-to-br from-[#4169E1]/15 to-[#6B46C1]/15 rounded" />
                          <div className="h-16 bg-gradient-to-br from-[#4169E1]/15 to-[#6B46C1]/15 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/5 to-[#4169E1]/5" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full space-y-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 border border-[#4169E1]/20 rounded-lg bg-black/50 backdrop-blur-sm">
                          <div className="w-12 h-12 rounded bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20" />
                          <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gradient-to-r from-[#4169E1]/20 to-transparent rounded w-2/3" />
                            <div className="h-2 bg-white/5 rounded w-1/2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-3 py-1 border border-[#4169E1]/20 text-xs text-white/60 font-medium mb-6">
                  Component Library
                </div>
                <h3 className="text-4xl font-medium mb-6">Pre-built components</h3>
                <p className="text-lg text-white/40 mb-8 font-light leading-relaxed">
                  Hundreds of professionally designed components ready to use. Headers, footers, forms, galleries, and more. Just drag and customize.
                </p>
                <ul className="space-y-4">
                  {[
                    "200+ components",
                    "Fully responsive",
                    "Customizable styles",
                    "Regular updates"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded border border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 border border-[#4169E1]/20 text-xs text-white/60 font-medium mb-6">
                  Deployment
                </div>
                <h3 className="text-4xl font-medium mb-6">One-click deploy</h3>
                <p className="text-lg text-white/40 mb-8 font-light leading-relaxed">
                  Deploy to our global CDN instantly. Automatic SSL, DDoS protection, and edge caching. Your site is live in seconds, fast everywhere.
                </p>
                <ul className="space-y-4">
                  {[
                    "Global CDN",
                    "Automatic SSL",
                    "DDoS protection",
                    "Edge caching"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded border border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full max-w-sm space-y-6">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-full border-4 border-[#4169E1]/30 border-t-[#4169E1] animate-spin mb-4" />
                        <div className="h-4 bg-gradient-to-r from-transparent via-[#4169E1]/20 to-transparent rounded mb-2" />
                        <div className="h-3 bg-white/5 rounded w-2/3 mx-auto" />
                      </div>
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 border border-[#4169E1]/20 rounded bg-black/50">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                            <div className="h-2 bg-white/10 rounded flex-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-t from-[#4169E1]/3 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-4">FAQ</div>
            <h2 className="text-5xl font-light tracking-tight mb-6">
              <span className="text-white/40">Questions?</span>
              <br />
              <span className="text-white">We have answers.</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-px bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10">
            {accordionItems.map((item, index) => (
              <div key={index} className="bg-black">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full text-left p-8 flex items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-[#4169E1]/[0.02] hover:to-[#6B46C1]/[0.02] transition-all duration-300 group"
                >
                  <span className="text-lg font-medium group-hover:text-white transition-colors">
                    {item.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full border border-[#4169E1]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeAccordion === index ? 'bg-gradient-to-r from-[#4169E1] to-[#6B46C1] border-transparent rotate-180' : ''
                  }`}>
                    <svg className={`w-4 h-4 transition-colors ${activeAccordion === index ? 'text-white' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8 text-white/60 font-light leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/40 mb-6 font-light">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#4169E1]/20 text-sm font-medium text-white/60 hover:text-white hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300"
            >
              <span>Contact Support</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10">
        {/* Subtle gradient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-[#4169E1]/5 via-[#6B46C1]/5 to-[#4169E1]/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-light tracking-tight mb-8">
            <span className="text-white/40">Ready to build?</span>
            <br />
            <span className="text-white">Start in seconds.</span>
          </h2>

          <p className="text-white/40 mb-12 font-light">
            No credit card required. No setup. Just start building.
          </p>

          <Link
            href="/studio"
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#4169E1]/20"
          >
            Start Building Free
          </Link>

          {/* Minimal footer accent */}
          <div className="mt-24 pt-12 border-t border-white/5">
            <div className="flex items-center justify-center gap-8 text-xs text-white/20">
              <span>SOC 2 Certified</span>
              <span>•</span>
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>99.99% Uptime</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Add shimmer animation
const shimmerKeyframes = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
`;
