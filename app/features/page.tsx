"use client";

import { useState } from "react";
import Link from "next/link";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const features = [
    {
      category: "AI-Powered Design",
      tag: "ai",
      gradient: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      items: [
        {
          title: "Smart Layout Generation",
          description: "AI analyzes your content and automatically creates optimal layouts that convert visitors into customers.",
          features: ["Auto-optimization", "Mobile-first", "Conversion-focused"]
        },
        {
          title: "Intelligent Color Schemes",
          description: "Get professional color palettes that match your brand identity and industry standards perfectly.",
          features: ["Brand matching", "Accessibility", "Psychology-based"]
        },
        {
          title: "Content Suggestions",
          description: "AI-powered copywriting assistance helps you craft compelling messages that resonate with your audience.",
          features: ["SEO optimized", "Tone matching", "Multi-language"]
        },
        {
          title: "Design System Generation",
          description: "Automatically create consistent design systems with typography, spacing, and component styles.",
          features: ["Style guide", "Component library", "Design tokens"]
        }
      ]
    },
    {
      category: "Professional Tools",
      tag: "tools",
      gradient: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: [
        {
          title: "Visual Editor",
          description: "Intuitive drag-and-drop interface with real-time preview across all devices and screen sizes.",
          features: ["Click-to-edit", "Live preview", "Responsive"]
        },
        {
          title: "Component Library",
          description: "200+ pre-built, customizable components ready to deploy in seconds.",
          features: ["Pre-designed", "Customizable", "Production-ready"]
        },
        {
          title: "Version Control",
          description: "Track every change, rollback anytime, and collaborate seamlessly with your team.",
          features: ["Git integration", "History tracking", "Team collaboration"]
        },
        {
          title: "Code Export",
          description: "Export clean, production-ready code in React, Vue, or vanilla HTML/CSS/JS.",
          features: ["Multiple frameworks", "Clean code", "No vendor lock-in"]
        }
      ]
    },
    {
      category: "Performance & Scale",
      tag: "performance",
      gradient: "from-yellow-500 to-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        {
          title: "Global CDN",
          description: "200+ edge locations worldwide ensure lightning-fast load times for every visitor.",
          features: ["< 50ms latency", "200+ locations", "99.99% uptime"]
        },
        {
          title: "Auto-Scaling",
          description: "Handle traffic spikes effortlessly with automatic resource scaling and load balancing.",
          features: ["Unlimited traffic", "Auto-scaling", "Load balancing"]
        },
        {
          title: "Performance Optimization",
          description: "Automatic image optimization, lazy loading, code minification, and caching.",
          features: ["Image optimization", "Code minification", "Smart caching"]
        },
        {
          title: "Edge Computing",
          description: "Run serverless functions at the edge for ultra-fast dynamic content delivery.",
          features: ["Serverless", "Edge functions", "Zero cold starts"]
        }
      ]
    },
    {
      category: "Security & Compliance",
      tag: "security",
      gradient: "from-green-500 to-emerald-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        {
          title: "Enterprise Security",
          description: "SOC 2 Type II certified with bank-level encryption, DDoS protection, and 24/7 monitoring.",
          features: ["SOC 2 certified", "DDoS protection", "24/7 monitoring"]
        },
        {
          title: "Compliance Ready",
          description: "GDPR, HIPAA, and ISO 27001 compliant infrastructure built-in from day one.",
          features: ["GDPR", "HIPAA", "ISO 27001"]
        },
        {
          title: "Automatic SSL",
          description: "Free SSL certificates with automatic renewal and HTTPS enforcement across all sites.",
          features: ["Free SSL", "Auto-renewal", "HTTPS enforced"]
        },
        {
          title: "Data Privacy",
          description: "Complete data ownership with encrypted backups and secure data centers worldwide.",
          features: ["Data ownership", "Encrypted backups", "Secure centers"]
        }
      ]
    },
    {
      category: "SEO & Analytics",
      tag: "seo",
      gradient: "from-indigo-500 to-violet-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      items: [
        {
          title: "AI SEO Optimization",
          description: "Automatic meta tags, schema markup, sitemap generation, and Core Web Vitals optimization.",
          features: ["Meta tags", "Schema markup", "Core Web Vitals"]
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time insights into traffic, conversions, user behavior, and performance metrics.",
          features: ["Real-time data", "Custom reports", "User behavior"]
        },
        {
          title: "A/B Testing",
          description: "Test different versions of your pages and optimize for maximum conversions automatically.",
          features: ["Split testing", "Auto-optimization", "Conversion tracking"]
        },
        {
          title: "Search Console Integration",
          description: "Direct integration with Google Search Console for keyword tracking and indexing status.",
          features: ["Keyword tracking", "Index monitoring", "Performance insights"]
        }
      ]
    },
    {
      category: "Integrations",
      tag: "integrations",
      gradient: "from-red-500 to-rose-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      items: [
        {
          title: "Third-Party Apps",
          description: "Connect with 1000+ apps including Stripe, Mailchimp, Zapier, and more with one click.",
          features: ["1000+ apps", "One-click setup", "Auto-sync"]
        },
        {
          title: "Custom APIs",
          description: "RESTful APIs for custom integrations, automation workflows, and headless CMS setups.",
          features: ["REST API", "GraphQL", "Webhooks"]
        },
        {
          title: "Payment Gateways",
          description: "Integrated support for Stripe, PayPal, Square, and other major payment processors.",
          features: ["Multiple gateways", "Secure checkout", "Subscription billing"]
        },
        {
          title: "Marketing Tools",
          description: "Connect email marketing, CRM, and analytics tools to grow your business.",
          features: ["Email marketing", "CRM sync", "Marketing automation"]
        }
      ]
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA", desc: "Enterprise reliability" },
    { value: "< 50ms", label: "Global Latency", desc: "Lightning fast" },
    { value: "200+", label: "Edge Locations", desc: "Worldwide coverage" },
    { value: "SOC 2", label: "Certified", desc: "Enterprise security" }
  ];

  const comparisons = [
    { feature: "AI Website Generation", us: true, others: false },
    { feature: "Visual Editor", us: true, others: true },
    { feature: "Global CDN", us: true, others: true },
    { feature: "Automatic SSL", us: true, others: true },
    { feature: "Real-time Collaboration", us: true, others: false },
    { feature: "Version Control", us: true, others: false },
    { feature: "A/B Testing", us: true, others: false },
    { feature: "Edge Computing", us: true, others: false },
    { feature: "Custom Code Export", us: true, others: false },
    { feature: "24/7 Support", us: true, others: true }
  ];

  const filteredFeatures = activeTab === "all" 
    ? features 
    : features.filter(f => f.tag === activeTab);

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-violet-500/18 via-purple-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Platform Features</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Everything you need</span>
            <span className="block font-medium text-white">to build & scale</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            Enterprise-grade features designed to help you build, launch, and grow professional websites faster than ever.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl">
                <div className="text-2xl font-light bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-[#4169E1]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {[
              { id: "all", label: "All Features" },
              { id: "ai", label: "AI-Powered" },
              { id: "tools", label: "Tools" },
              { id: "performance", label: "Performance" },
              { id: "security", label: "Security" },
              { id: "seo", label: "SEO" },
              { id: "integrations", label: "Integrations" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {activeTab === "all" ? (
          /* All Features - Special Grid Layout */
          <div className="space-y-24">
            {features.map((category, index) => (
              <section key={index} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <div className="text-white/60">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-light tracking-tight text-white">{category.category}</h2>
                  </div>
                </div>
                
                {/* Feature Cards - Alternating Layout */}
                {index % 2 === 0 ? (
                  /* Even: 1 Large + 3 Small */
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Large Featured Card */}
                    <div className="md:row-span-2 group relative">
                      <div className="relative h-full border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-10 hover:border-[#4169E1]/40 transition-all duration-500">
                        <div className="mb-6">
                          <div className="inline-flex px-3 py-1 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded-full text-xs text-white/70 mb-4">
                            Featured
                          </div>
                          <h3 className="text-3xl font-light mb-4 group-hover:text-white transition-colors">{category.items[0].title}</h3>
                          <p className="text-base text-white/60 leading-relaxed font-light mb-6">{category.items[0].description}</p>
                        </div>
                        
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {category.items[0].features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/50">
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Visual Element */}
                        <div className="mt-auto pt-6 border-t border-[#4169E1]/10">
                          <div className="flex items-center gap-2 text-sm text-white/40">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span>Learn more</span>
                          </div>
                        </div>
                        
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Small Cards */}
                    <div className="space-y-6">
                      {category.items.slice(1).map((item, i) => (
                        <div key={i} className="group relative">
                          <div className="relative h-full border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-6 hover:border-[#4169E1]/40 transition-all duration-500">
                            <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-light mb-4">{item.description}</p>
                            
                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.features.map((feature, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50">
                                  {feature}
                                </span>
                              ))}
                            </div>
                            
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Odd: 3 Small + 1 Large */
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Small Cards */}
                    <div className="space-y-6">
                      {category.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="group relative">
                          <div className="relative h-full border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-6 hover:border-[#4169E1]/40 transition-all duration-500">
                            <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-light mb-4">{item.description}</p>
                            
                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.features.map((feature, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50">
                                  {feature}
                                </span>
                              ))}
                            </div>
                            
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Large Featured Card */}
                    <div className="md:row-span-2 group relative">
                      <div className="relative h-full border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-10 hover:border-[#4169E1]/40 transition-all duration-500">
                        <div className="mb-6">
                          <div className="inline-flex px-3 py-1 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded-full text-xs text-white/70 mb-4">
                            Featured
                          </div>
                          <h3 className="text-3xl font-light mb-4 group-hover:text-white transition-colors">{category.items[3].title}</h3>
                          <p className="text-base text-white/60 leading-relaxed font-light mb-6">{category.items[3].description}</p>
                        </div>
                        
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {category.items[3].features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/50">
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Visual Element */}
                        <div className="mt-auto pt-6 border-t border-[#4169E1]/10">
                          <div className="flex items-center gap-2 text-sm text-white/40">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span>Learn more</span>
                          </div>
                        </div>
                        
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        ) : (
          /* Filtered View - Standard Grid */
          <div className="space-y-32">
            {filteredFeatures.map((category, index) => (
              <section key={index} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center flex-shrink-0">
                    <div className="text-white/60">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-light tracking-tight text-white">{category.category}</h2>
                  </div>
                </div>
                
                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="group relative">
                      <div className="relative h-full border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-6 hover:border-[#4169E1]/40 transition-all duration-500">
                        <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed font-light mb-4">{item.description}</p>
                        
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* Comparison Table */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-teal-500/18 via-cyan-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">How we compare</span>
              <br />
              <span className="text-white">to other platforms</span>
            </h2>
            <p className="text-white/40 font-light">
              See why leading companies choose SWITE.AI
            </p>
          </div>

          <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-[#4169E1]/10">
              <div className="bg-black p-6">
                <div className="text-sm text-white/60 font-medium">Feature</div>
              </div>
              <div className="bg-black p-6 text-center">
                <div className="text-sm font-medium text-white">SWITE.AI</div>
              </div>
              <div className="bg-black p-6 text-center">
                <div className="text-sm font-medium text-white/60">Others</div>
              </div>
            </div>

            {comparisons.map((item, i) => (
              <div key={i} className="grid grid-cols-3 gap-px bg-[#4169E1]/10">
                <div className="bg-black p-4">
                  <div className="text-sm text-white/80">{item.feature}</div>
                </div>
                <div className="bg-black p-4 flex items-center justify-center">
                  {item.us ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div className="bg-black p-4 flex items-center justify-center">
                  {item.others ? (
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-fuchsia-500/6 to-pink-500/8 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/18 via-violet-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-pink-500/18 via-fuchsia-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-light tracking-tight mb-6">
            <span className="text-white/40">Ready to get started?</span>
            <br />
            <span className="text-white">Start building today</span>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto font-light">
            Start building with all features included. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              className="px-8 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 rounded-lg"
            >
              Start Building Free
            </Link>
            
            <Link
              href="/documentation"
              className="px-8 py-4 border border-[#4169E1]/20 text-sm font-medium text-white/60 hover:text-white hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 tracking-wide rounded-lg"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
