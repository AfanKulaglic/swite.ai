"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(section.getAttribute("data-section") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section with Visual */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/20 via-sky-500/8 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/18 via-blue-400/6 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500/15 to-blue-500/8 rounded-full blur-3xl animate-float-orb-3" />
        

        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] animate-pulse" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Complete Documentation</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Master</span>
            <span className="block font-medium text-white">SWITE.AI</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            Everything you need to build, deploy, and scale professional websites with AI. 
            From beginner guides to advanced techniques.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/5 border border-white/10 focus:border-[#4169E1]/50 outline-none transition-all text-base backdrop-blur-xl group-hover:bg-white/10"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity -z-10" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Guides" },
              { value: "100+", label: "Tutorials" },
              { value: "24/7", label: "Support" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-2xl font-light bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <nav className="space-y-1 border border-[#4169E1]/10 bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl backdrop-blur-xl">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-4 font-medium">Contents</div>
              {[
                { id: "overview", label: "Overview" },
                { id: "getting-started", label: "Getting Started" },
                { id: "ai-generation", label: "AI Generation" },
                { id: "visual-editor", label: "Visual Editor" },
                { id: "templates", label: "Templates" },
                { id: "deployment", label: "Deployment" },
                { id: "integrations", label: "Integrations" },
                { id: "api-reference", label: "API Reference" },
                { id: "best-practices", label: "Best Practices" },
                { id: "troubleshooting", label: "Troubleshooting" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-300 rounded ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 text-white border-l-2 border-[#4169E1]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Help Card */}
            <div className="mt-6 p-6 border border-[#4169E1]/10 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Need Help?</h3>
              </div>
              <p className="text-xs text-white/60 mb-4">Our support team is here 24/7</p>
              <Link
                href="/contact"
                className="block text-center px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Support
              </Link>
            </div>
          </aside>

          {/* Main Documentation Content */}
          <div className="space-y-24">
            {/* Overview Section */}
            <section data-section="overview" className="scroll-mt-24">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                      Introduction
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white">Platform Overview</h2>
                  </div>
                </div>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  SWITE.AI is an enterprise-grade AI website builder that transforms natural language descriptions into production-ready websites in under 30 seconds.
                </p>
              </div>

              {/* Visual Feature Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Lightning Fast", desc: "Build in under 30 seconds", color: "from-yellow-500 to-orange-500" },
                  { title: "Pixel Perfect", desc: "Professional quality output", color: "from-blue-500 to-purple-500" },
                  { title: "Enterprise Ready", desc: "SOC 2 Type II certified", color: "from-green-500 to-teal-500" },
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                    <div className="relative border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500">
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Workflow Diagram */}
              <div className="relative rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium mb-8 text-center">How It Works</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Describe", desc: "Tell us what you want in natural language" },
                      { step: "02", title: "Generate", desc: "AI creates your site instantly" },
                      { step: "03", title: "Deploy", desc: "Go live with one click" },
                    ].map((item, i) => (
                      <div key={i} className="text-center group">
                        <div className="text-xs text-white/30 mb-2">{item.step}</div>
                        <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started Section */}
            <section data-section="getting-started" className="scroll-mt-24">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                      Quick Start
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white">Getting Started</h2>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Guide */}
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "Open AI Studio",
                    desc: "Navigate to /studio and start a conversation with our AI assistant",
                    code: "AI asks: 'What type of site are you looking to create?'"
                  },
                  {
                    number: "2",
                    title: "Describe Your Website",
                    desc: "Tell the AI what you want in natural language or use quick prompts",
                    code: "Examples: 'Corporate website', 'Portfolio', 'E-commerce store', 'SaaS landing page'"
                  },
                  {
                    number: "3",
                    title: "AI Generates Template",
                    desc: "Watch as the AI analyzes your requirements and prepares a professional template",
                    code: "Generation time: < 30 seconds • Production-ready code"
                  },
                  {
                    number: "4",
                    title: "Open Visual Editor",
                    desc: "Click to open the editor and customize every element with click-to-edit",
                    code: "Click any text or image • Real-time preview • Auto-save"
                  },
                  {
                    number: "5",
                    title: "Customize Content",
                    desc: "Edit text, images, links, and styling. Switch between pages and devices",
                    code: "6 pages included: Home, Hosting, Domains, Pricing, Blog, Contact"
                  },
                  {
                    number: "6",
                    title: "Publish Your Site",
                    desc: "Sign up when ready and deploy to our global CDN with one click",
                    code: "Automatic SSL • DDoS protection • 200+ edge locations"
                  },
                ].map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="flex gap-6 border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4169E1]/20 to-[#6B46C1]/20 border border-[#4169E1]/30 flex items-center justify-center text-3xl font-light text-white group-hover:scale-110 transition-transform">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                        <p className="text-white/60 mb-4">{step.desc}</p>
                        <div className="px-4 py-3 bg-black/50 border border-[#4169E1]/10 rounded-lg font-mono text-sm text-white/70">
                          {step.code}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Tutorial Card */}
              <div className="mt-12 relative rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                <div className="relative z-10 p-12">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-medium mb-2">Video Tutorial</h3>
                      <p className="text-white/60">Watch how to build your first website in 5 minutes</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 rounded-xl flex items-center justify-center border border-[#4169E1]/20 group-hover:border-[#4169E1]/40 transition-all cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Generation Section */}
            <section data-section="ai-generation" className="scroll-mt-24">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                      Core Technology
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white">AI Generation Engine</h2>
                  </div>
                </div>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Our advanced AI understands natural language and transforms your ideas into production-ready code.
                </p>
              </div>

              {/* Feature Cards with Icons */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Conversational Interface",
                    desc: "Chat with our AI assistant that asks questions and understands your needs",
                    features: ["Natural dialogue", "Quick prompts", "Context-aware"]
                  },
                  {
                    title: "Instant Generation",
                    desc: "Watch the AI think, build, and celebrate as it creates your website",
                    features: ["< 30 second build", "Real-time status", "Animated feedback"]
                  },
                  {
                    title: "Professional Templates",
                    desc: "AI selects optimal templates based on your requirements and industry",
                    features: ["WebSphere template", "6 pages included", "Fully responsive"]
                  },
                  {
                    title: "Iterative Refinement",
                    desc: "Continue the conversation to refine and adjust the generated template",
                    features: ["Follow-up questions", "Instant updates", "No limits"]
                  },
                ].map((card, i) => (
                  <div key={i} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group">
                    <h3 className="text-xl font-medium mb-4">{card.title}</h3>
                    <p className="text-white/60 mb-6 font-light">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded-full text-xs text-white/70">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Visualization */}
              <div className="relative rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium mb-8">Example: AI Generation Process</h3>
                  <div className="space-y-6">
                    <div className="border border-[#4169E1]/20 rounded-lg p-6 bg-black/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-xs text-white/40 uppercase tracking-wider">Input</div>
                      </div>
                      <p className="text-white/80 font-light italic">
                        "Create a modern e-commerce website for selling handmade jewelry with elegant design and gold accents"
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-px h-12 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent" />
                    </div>
                    <div className="border border-[#4169E1]/20 rounded-lg p-6 bg-black/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-xs text-white/40 uppercase tracking-wider">AI Analysis</div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { label: "Industry", value: "E-commerce" },
                          { label: "Style", value: "Elegant, Minimalist" },
                          { label: "Features", value: "Gallery, Cart, Checkout" },
                        ].map((item, idx) => (
                          <div key={idx} className="text-sm">
                            <div className="text-white/40 mb-1">{item.label}</div>
                            <div className="text-white/80 font-medium">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-px h-12 bg-gradient-to-b from-[#4169E1]/30 via-[#6B46C1]/30 to-transparent" />
                    </div>
                    <div className="border border-[#4169E1]/20 rounded-lg p-6 bg-black/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-xs text-white/40 uppercase tracking-wider">Generated Output</div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["Hero Section", "Product Grid", "Shopping Cart", "Checkout", "Product Details", "User Account", "Payment", "Order Tracking"].map((component, idx) => (
                          <div key={idx} className="px-3 py-2 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 rounded text-xs text-white/70 text-center border border-[#4169E1]/20">
                            {component}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Visual Editor Section */}
            <section data-section="visual-editor" className="scroll-mt-24">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                      Customization
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white">Visual Editor</h2>
                  </div>
                </div>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Intuitive drag-and-drop interface with complete control over every aspect of your website.
                </p>
              </div>

              {/* Editor Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Click-to-Edit", desc: "Click any text or image to edit instantly" },
                  { title: "Device Preview", desc: "Switch between desktop, tablet, and mobile" },
                  { title: "Multi-Page", desc: "Edit 6 pages: Home, Hosting, Domains, Pricing, Blog, Contact" },
                  { title: "Image Upload", desc: "Upload images or paste URLs • Max 5MB" },
                  { title: "Link Editor", desc: "Edit URLs for buttons and links" },
                  { title: "Auto-Save", desc: "Changes saved to localStorage automatically" },
                ].map((feature, i) => (
                  <div key={i} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group text-center">
                    <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Editor Interface Mockup */}
              <div className="relative rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5" />
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-medium mb-8 text-center">Editor Interface</h3>
                  
                  {/* Top Bar */}
                  <div className="border border-[#4169E1]/20 rounded-lg bg-black/50 p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1.5 bg-white/5 rounded text-xs">← Back</div>
                        <div className="text-xs text-white/60">Visual Editor • WebSphere Template</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 px-1 py-1 border border-white/10 rounded">
                          <div className="px-2 py-1 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-[10px]">Desktop</div>
                          <div className="px-2 py-1 text-[10px] text-white/40">Tablet</div>
                          <div className="px-2 py-1 text-[10px] text-white/40">Mobile</div>
                        </div>
                        <select className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs">
                          <option>Home</option>
                          <option>Hosting</option>
                          <option>Domains</option>
                          <option>Pricing</option>
                          <option>Blog</option>
                          <option>Contact</option>
                        </select>
                        <div className="px-3 py-1.5 border border-white/10 rounded text-xs">Save Draft</div>
                        <div className="px-4 py-1.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] rounded text-xs">Publish</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-[280px_1fr] gap-4 h-[500px]">
                    {/* Left Edit Panel */}
                    <div className="border border-[#4169E1]/20 rounded-lg bg-black/50 p-4">
                      <div className="text-xs text-white/40 mb-4 uppercase tracking-wider">Edit Content</div>
                      <div className="space-y-4">
                        <div>
                          <div className="text-[10px] text-white/40 mb-2">Element Type</div>
                          <div className="px-3 py-2 bg-white/5 rounded text-xs">Heading</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-white/40 mb-2">Content</div>
                          <div className="px-3 py-2 bg-white/5 rounded text-xs h-8"></div>
                        </div>
                        <div>
                          <div className="text-[10px] text-white/40 mb-2">Link URL</div>
                          <div className="px-3 py-2 bg-white/5 rounded text-xs h-8"></div>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] rounded text-xs text-center">
                          Update Content
                        </div>
                        <div className="p-3 border border-white/10 bg-white/5 rounded">
                          <div className="text-[10px] text-white/40 mb-2">💡 TIPS</div>
                          <div className="text-[10px] text-white/60 space-y-1">
                            <div>• Click any text to edit</div>
                            <div>• Changes save automatically</div>
                            <div>• Hover to see editable elements</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Canvas */}
                    <div className="border border-[#4169E1]/20 rounded-lg bg-black/50 p-6">
                      <div className="space-y-4">
                        <div className="h-16 bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 rounded animate-pulse" />
                        <div className="h-32 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 rounded relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-24 bg-gradient-to-br from-[#4169E1]/15 to-[#6B46C1]/15 rounded" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-[#4169E1]/20 mt-4 pt-3">
                    <div className="flex items-center justify-between text-[10px] text-white/30">
                      <span>Click any text or image to edit • Hover to see editable elements</span>
                      <span>12 edits saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Templates Section */}
            <section data-section="templates" className="scroll-mt-24">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                      Website Types
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white">Templates & Use Cases</h2>
                  </div>
                </div>
              </div>

              {/* Template Gallery */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Hosting",
                    title: "WebSphere Template",
                    desc: "Professional cloud hosting template with 6 pages: Home, Hosting, Domains, Pricing, Blog, Contact",
                    color: "from-blue-500 to-purple-500",
                    pages: ["Home", "Hosting", "Domains", "Pricing", "Blog", "Contact"]
                  },
                  {
                    category: "E-Commerce",
                    title: "Online Store",
                    desc: "Complete e-commerce with product catalog, cart, checkout, and payment integration",
                    color: "from-green-500 to-teal-500",
                    pages: ["Home", "Products", "Cart", "Checkout", "Account", "Orders"]
                  },
                  {
                    category: "Business",
                    title: "Corporate Website",
                    desc: "Professional business presence with services, team profiles, and contact forms",
                    color: "from-purple-500 to-pink-500",
                    pages: ["Home", "About", "Services", "Team", "Portfolio", "Contact"]
                  },
                  {
                    category: "Portfolio",
                    title: "Creative Showcase",
                    desc: "Stunning galleries and project case studies for creative professionals",
                    color: "from-pink-500 to-red-500",
                    pages: ["Home", "Work", "About", "Services", "Blog", "Contact"]
                  },
                  {
                    category: "SaaS",
                    title: "Dashboard Platform",
                    desc: "Analytics and insights platform with real-time data visualization",
                    color: "from-cyan-500 to-blue-500",
                    pages: ["Home", "Features", "Pricing", "Docs", "Login", "Dashboard"]
                  },
                  {
                    category: "Blog",
                    title: "Content Platform",
                    desc: "Publishing platform with CMS, categories, tags, and SEO optimization",
                    color: "from-orange-500 to-yellow-500",
                    pages: ["Home", "Blog", "Categories", "Tags", "About", "Contact"]
                  },
                ].map((template, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl overflow-hidden hover:border-[#4169E1]/40 transition-all duration-500">
                      {/* Visual Preview */}
                      <div className="h-48 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border-b border-[#4169E1]/20 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 via-transparent to-[#6B46C1]/5 animate-pulse" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${template.color} bg-opacity-10 border border-white/10 rounded-full text-xs font-medium mb-3`}>
                          {template.category}
                        </div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">{template.title}</h3>
                        <p className="text-sm text-white/60 mb-4">{template.desc}</p>
                        
                        {/* Pages */}
                        <div className="flex flex-wrap gap-2">
                          {template.pages.map((page, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50">
                              {page}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deployment Section */}
            <section data-section="deployment" className="scroll-mt-24">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                      Infrastructure
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white">Deployment & Hosting</h2>
                  </div>
                </div>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Deploy to our global CDN with 200+ edge locations. Your site goes live instantly.
                </p>
              </div>

              {/* Deployment Features */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Global CDN",
                    desc: "Lightning-fast delivery from 200+ edge locations worldwide",
                    metrics: ["< 50ms", "200+ Locations", "Auto-scaling"]
                  },
                  {
                    title: "Security",
                    desc: "Automatic SSL, DDoS protection, and enterprise encryption",
                    metrics: ["SSL Included", "DDoS Protection", "SOC 2 Certified"]
                  },
                  {
                    title: "Analytics",
                    desc: "Real-time insights into traffic, performance, and user behavior",
                    metrics: ["Real-time", "Custom Reports", "API Access"]
                  },
                  {
                    title: "CI/CD",
                    desc: "Automated deployments with Git integration and rollbacks",
                    metrics: ["Git Integration", "Auto Deploy", "Instant Rollback"]
                  },
                ].map((feature, i) => (
                  <div key={i} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group">
                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-white/60 mb-6">{feature.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.metrics.map((metric, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded-full text-xs text-white/70">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Remaining Sections - Compact */}
            {[
              {
                id: "integrations",
                title: "Integrations",
                subtitle: "Connect Your Tools",
                items: [
                  { name: "Payment Gateways", desc: "Stripe, PayPal, Square" },
                  { name: "Email Marketing", desc: "Mailchimp, SendGrid" },
                  { name: "Analytics", desc: "Google Analytics, Mixpanel" },
                  { name: "CRM", desc: "Salesforce, HubSpot" },
                ]
              },
              {
                id: "api-reference",
                title: "API Reference",
                subtitle: "Developer Resources",
                items: [
                  { name: "REST API", desc: "Full API documentation" },
                  { name: "Webhooks", desc: "Event-driven integrations" },
                  { name: "SDKs", desc: "JavaScript, Python, Ruby" },
                  { name: "GraphQL", desc: "Flexible data queries" },
                ]
              },
              {
                id: "best-practices",
                title: "Best Practices",
                subtitle: "Tips & Tricks",
                items: [
                  { name: "Performance", desc: "Optimize load times" },
                  { name: "SEO", desc: "Rank higher in search" },
                  { name: "Accessibility", desc: "WCAG 2.1 compliance" },
                  { name: "Security", desc: "Protect your site" },
                ]
              },
              {
                id: "troubleshooting",
                title: "Troubleshooting",
                subtitle: "Common Issues",
                items: [
                  { name: "Build Errors", desc: "Fix generation issues" },
                  { name: "Deployment", desc: "Resolve publish problems" },
                  { name: "Performance", desc: "Speed optimization" },
                  { name: "Browser Support", desc: "Compatibility fixes" },
                ]
              },
            ].map((section, sectionIdx) => (
              <section key={sectionIdx} data-section={section.id} className="scroll-mt-24">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div>
                      <div className="text-xs bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent tracking-widest uppercase mb-2">
                        {section.subtitle}
                      </div>
                      <h2 className="text-4xl font-light tracking-tight text-white">{section.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group cursor-pointer">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors">{item.name}</h3>
                      <p className="text-sm text-white/60">{item.desc}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-white/40 group-hover:text-white/60 transition-colors">
                        <span>Learn more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* CTA Section */}
            <section className="relative rounded-2xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-12 overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/18 via-purple-500/8 to-fuchsia-500/10 animate-pulse-glow-soft" />
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/22 to-transparent rounded-full blur-3xl animate-float-orb-2" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-fuchsia-500/22 to-transparent rounded-full blur-3xl animate-float-orb-3" />
              <div className="relative z-10">
                <h2 className="text-3xl font-medium mb-4">Ready to Build?</h2>
                <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                  Start creating your website today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/studio"
                    className="px-8 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white font-medium rounded-xl hover:opacity-90 transition-all"
                  >
                    Start Building Free
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border border-[#4169E1]/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
}
