"use client";

import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "2M+", label: "Sites Built" },
    { value: "150+", label: "Countries" },
    { value: "99.99%", label: "Uptime" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and challenge conventions to deliver cutting-edge AI solutions that transform how websites are built.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Customer Obsessed",
      description: "Every decision starts with understanding our customers. Their success is our success, and we're committed to their growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Trust & Security",
      description: "Security and privacy are built into our core, not added as an afterthought. Your data is always protected.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Global Impact",
      description: "We're building technology that empowers businesses worldwide to succeed online and reach their full potential.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO & Co-Founder", initials: "SC", gradient: "from-blue-500 to-cyan-500" },
    { name: "Michael Rodriguez", role: "CTO & Co-Founder", initials: "MR", gradient: "from-purple-500 to-pink-500" },
    { name: "Emma Thompson", role: "Head of Design", initials: "ET", gradient: "from-emerald-500 to-teal-500" },
    { name: "David Kim", role: "Head of Engineering", initials: "DK", gradient: "from-orange-500 to-red-500" },
    { name: "Lisa Wang", role: "Head of Product", initials: "LW", gradient: "from-violet-500 to-purple-500" },
    { name: "James Miller", role: "Head of Marketing", initials: "JM", gradient: "from-rose-500 to-pink-500" }
  ];

  const timeline = [
    { year: "2023", title: "Founded", desc: "SWITE.AI was born with a vision to democratize web development" },
    { year: "2023", title: "First 1K Users", desc: "Reached our first thousand happy customers" },
    { year: "2024", title: "Series A", desc: "Raised $15M to accelerate growth and innovation" },
    { year: "2024", title: "50K+ Users", desc: "Serving businesses in over 150 countries worldwide" }
  ];

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-violet-500/18 via-purple-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">About Us</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Building the future</span>
            <span className="block font-medium text-white">of web development</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            We're on a mission to democratize web development through AI, making it accessible for everyone to build professional websites.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
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

      {/* Story & Mission */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-emerald-500/15 via-green-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Story */}
            <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-10 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium mb-6">Our Story</h2>
              <div className="space-y-4 text-white/60 leading-relaxed font-light">
                <p>
                  Founded in 2023, SWITE.AI was born from a simple observation: building websites was still too complex, time-consuming, and expensive for most businesses.
                </p>
                <p>
                  We assembled a team of AI researchers, designers, and engineers to solve this problem. Today, we're proud to serve over 50,000 businesses worldwide, helping them launch and scale their online presence with unprecedented speed and quality.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-10 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <div className="space-y-4 text-white/60 leading-relaxed font-light">
                <p>
                  To empower every business, regardless of size or technical expertise, to create stunning, professional websites that drive real results.
                </p>
                <p>
                  We believe that great design and powerful technology should be accessible to everyone. That's why we're building the most intuitive, intelligent, and reliable web platform on the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-orange-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/18 via-yellow-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-orange-500/18 via-amber-400/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Our core</span>
              <br />
              <span className="text-white">values</span>
            </h2>
            <p className="text-white/40 font-light">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white/60 group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-pink-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-rose-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/18 via-rose-400/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Our</span>
              <br />
              <span className="text-white">journey</span>
            </h2>
            <p className="text-white/40 font-light">
              Key milestones in our story
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-light bg-gradient-to-r from-[#4169E1] to-[#6B46C1] bg-clip-text text-transparent">
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1] mt-2" />
                  {index < timeline.length - 1 && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#4169E1]/30 to-transparent" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-white/60 font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-purple-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-violet-500/18 via-purple-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-500/18 via-indigo-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Meet our</span>
              <br />
              <span className="text-white">leadership team</span>
            </h2>
            <p className="text-white/40 font-light">
              The people driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black flex items-center justify-center overflow-hidden group-hover:border-[#4169E1]/40 transition-all duration-500">
                    <div className={`text-6xl font-light bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent`}>
                      {member.initials}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-cyan-500/6 to-teal-500/8 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-teal-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-light tracking-tight mb-6">
            <span className="text-white/40">Join our journey</span>
            <br />
            <span className="text-white">We're hiring</span>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto font-light">
            We're always looking for talented people who share our vision. Check out our open positions and help us build the future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="px-8 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 rounded-lg"
            >
              View Open Positions
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#4169E1]/20 text-sm font-medium text-white/60 hover:text-white hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 tracking-wide rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
