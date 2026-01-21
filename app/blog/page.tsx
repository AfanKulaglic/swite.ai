import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function BlogPage() {
  const featuredPost = {
    title: "How AI is Revolutionizing Web Design in 2026",
    excerpt: "Discover how artificial intelligence is transforming the way we build websites, making professional design accessible to everyone.",
    date: "Jan 21, 2026",
    slug: "ai-revolutionizing-web-design",
    category: "AI & Technology",
    readTime: "5 min read",
  };

  const posts = [
    {
      title: "5 Tips for Better Website Conversion Rates",
      excerpt: "Learn proven strategies to turn more visitors into customers with these conversion optimization techniques.",
      date: "Jan 18, 2026",
      slug: "better-website-conversion",
      category: "Marketing",
      readTime: "4 min read",
    },
    {
      title: "The Future of No-Code Development",
      excerpt: "Why no-code tools are empowering a new generation of creators and entrepreneurs to build without coding.",
      date: "Jan 15, 2026",
      slug: "future-of-no-code",
      category: "Development",
      readTime: "6 min read",
    },
    {
      title: "SEO Best Practices for AI-Generated Websites",
      excerpt: "Essential SEO strategies to ensure your AI-built website ranks well in search engines.",
      date: "Jan 12, 2026",
      slug: "seo-best-practices",
      category: "SEO",
      readTime: "7 min read",
    },
    {
      title: "Building a SaaS Landing Page That Converts",
      excerpt: "The anatomy of a high-converting SaaS landing page and how to create one with AI.",
      date: "Jan 9, 2026",
      slug: "saas-landing-page",
      category: "Design",
      readTime: "5 min read",
    },
    {
      title: "Why Every Business Needs a Website in 2026",
      excerpt: "The importance of online presence and how AI makes it easier than ever to get started.",
      date: "Jan 6, 2026",
      slug: "why-businesses-need-websites",
      category: "Business",
      readTime: "4 min read",
    },
    {
      title: "AI Copywriting: The Complete Guide",
      excerpt: "Everything you need to know about using AI to write compelling website copy that converts.",
      date: "Jan 3, 2026",
      slug: "ai-copywriting-guide",
      category: "AI & Technology",
      readTime: "8 min read",
    },
  ];

  const categories = ["All", "AI & Technology", "Marketing", "Design", "SEO", "Business", "Development"];

  return (
    <div className="pt-32">
      <div className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Badge variant="brand">BLOG</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              INSIGHTS & UPDATES
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              Learn about AI, web design, and building better websites.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand font-bold uppercase text-sm transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featuredPost.slug}`} className="block group mb-16">
            <article className="rounded-3xl bg-gradient-to-br from-accentBlue to-accentPurple p-1">
              <div className="rounded-3xl bg-black p-12 md:p-16">
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="brand">{featuredPost.category}</Badge>
                  <span className="text-sm text-muted">{featuredPost.date}</span>
                  <span className="text-sm text-muted">• {featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 group-hover:text-brand transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted mb-6">{featuredPost.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-brand font-bold uppercase text-sm">
                  Read Article →
                </span>
              </div>
            </article>
          </Link>

          {/* Recent Posts */}
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12">
            RECENT POSTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand transition-all h-full">
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="text-brand font-bold uppercase">{post.category}</span>
                    <span className="text-muted">{post.date}</span>
                    <span className="text-muted">• {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-brand font-bold uppercase text-sm">
                    Read More →
                  </span>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-24 rounded-3xl bg-white/5 border border-white/10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              STAY UPDATED
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, web design, and building better websites delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-xl bg-black border border-white/10 focus:border-brand outline-none transition-colors"
              />
              <button className="px-8 py-4 rounded-xl bg-brand text-black font-black uppercase text-sm tracking-tight hover:bg-brand/90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
