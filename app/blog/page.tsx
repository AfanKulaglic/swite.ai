"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = {
    title: "How AI is Revolutionizing Web Design in 2026",
    excerpt: "Discover how artificial intelligence is transforming the way we build websites, making professional design accessible to everyone without technical barriers.",
    date: "Jan 21, 2026",
    slug: "ai-revolutionizing-web-design",
    category: "AI & Technology",
    readTime: "5 min read",
    author: "Sarah Chen"
  };

  const posts = [
    {
      title: "5 Tips for Better Website Conversion Rates",
      excerpt: "Learn proven strategies to turn more visitors into customers with these conversion optimization techniques.",
      date: "Jan 18, 2026",
      slug: "better-website-conversion",
      category: "Marketing",
      readTime: "4 min read",
      author: "Michael Rodriguez"
    },
    {
      title: "The Future of No-Code Development",
      excerpt: "Why no-code tools are empowering a new generation of creators and entrepreneurs to build without coding.",
      date: "Jan 15, 2026",
      slug: "future-of-no-code",
      category: "Development",
      readTime: "6 min read",
      author: "Emma Thompson"
    },
    {
      title: "SEO Best Practices for AI-Generated Websites",
      excerpt: "Essential SEO strategies to ensure your AI-built website ranks well in search engines.",
      date: "Jan 12, 2026",
      slug: "seo-best-practices",
      category: "SEO",
      readTime: "7 min read",
      author: "David Kim"
    },
    {
      title: "Building a SaaS Landing Page That Converts",
      excerpt: "The anatomy of a high-converting SaaS landing page and how to create one with AI.",
      date: "Jan 9, 2026",
      slug: "saas-landing-page",
      category: "Design",
      readTime: "5 min read",
      author: "Lisa Wang"
    },
    {
      title: "Why Every Business Needs a Website in 2026",
      excerpt: "The importance of online presence and how AI makes it easier than ever to get started.",
      date: "Jan 6, 2026",
      slug: "why-businesses-need-websites",
      category: "Business",
      readTime: "4 min read",
      author: "James Miller"
    },
    {
      title: "AI Copywriting: The Complete Guide",
      excerpt: "Everything you need to know about using AI to write compelling website copy that converts.",
      date: "Jan 3, 2026",
      slug: "ai-copywriting-guide",
      category: "AI & Technology",
      readTime: "8 min read",
      author: "Sarah Chen"
    },
    {
      title: "Mobile-First Design Principles",
      excerpt: "Why mobile-first approach is crucial for modern websites and how to implement it effectively.",
      date: "Dec 30, 2025",
      slug: "mobile-first-design",
      category: "Design",
      readTime: "5 min read",
      author: "Emma Thompson"
    },
    {
      title: "Performance Optimization for Web Apps",
      excerpt: "Advanced techniques to make your website load faster and provide better user experience.",
      date: "Dec 27, 2025",
      slug: "performance-optimization",
      category: "Development",
      readTime: "9 min read",
      author: "David Kim"
    }
  ];

  const categories = ["All", "AI & Technology", "Marketing", "Design", "SEO", "Business", "Development"];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-pink-500/20 via-rose-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500/18 via-purple-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-500/15 to-pink-500/15 rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Blog</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Insights &</span>
            <span className="block font-medium text-white">updates</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            Learn about AI, web design, and building better websites from our team of experts.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-[#4169E1]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/18 via-indigo-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-500/18 via-violet-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-xs text-white/40 uppercase tracking-wider mb-2">Featured Article</h2>
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <article className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-12 hover:border-[#4169E1]/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="px-3 py-1 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded-full text-xs text-white/70">
                  {featuredPost.category}
                </span>
                <span className="text-white/40">{featuredPost.date}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/40">{featuredPost.readTime}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/40">{featuredPost.author}</span>
              </div>

              <h3 className="text-4xl font-light mb-6 group-hover:text-white transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-lg text-white/60 leading-relaxed font-light mb-8 max-w-3xl">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors">
                <span>Read article</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-teal-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-500/15 via-green-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Recent</span>
              <br />
              <span className="text-white">articles</span>
            </h2>
            <p className="text-white/40 font-light">
              {activeCategory === "All" ? "All posts" : `Posts in ${activeCategory}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="h-full border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-8 hover:border-[#4169E1]/40 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-2 py-1 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 rounded text-white/70">
                      {post.category}
                    </span>
                    <span className="text-white/40">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed font-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-white/40 pt-4 border-t border-[#4169E1]/10">
                    <span>{post.readTime}</span>
                    <span>{post.author}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-orange-500/6 to-yellow-500/8 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/18 via-yellow-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-orange-500/18 via-amber-400/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-12 text-center">
            <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl font-light tracking-tight mb-4">
              <span className="text-white/40">Stay</span>
              <br />
              <span className="text-white">updated</span>
            </h2>

            <p className="text-white/60 mb-8 max-w-2xl mx-auto font-light">
              Get the latest insights on AI, web design, and building better websites delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-lg bg-black border border-[#4169E1]/20 focus:border-[#4169E1]/40 outline-none transition-all text-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-purple-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-violet-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Explore</span>
              <br />
              <span className="text-white">topics</span>
            </h2>
            <p className="text-white/40 font-light">
              Browse articles by category
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.filter(cat => cat !== "All").map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-8 hover:border-[#4169E1]/40 transition-all duration-500 group text-left"
              >
                <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">
                  {category}
                </h3>
                <p className="text-sm text-white/60 font-light">
                  {posts.filter(post => post.category === category).length} articles
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
