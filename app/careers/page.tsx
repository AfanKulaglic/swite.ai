"use client";

import Link from "next/link";

export default function CareersPage() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Salary",
      description: "Top-tier compensation packages"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Health Insurance",
      description: "Comprehensive medical, dental, vision"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Unlimited PTO",
      description: "Take time off when you need it"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Remote Work",
      description: "Work from anywhere in the world"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning Budget",
      description: "$2,000/year for courses & conferences"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Latest Equipment",
      description: "MacBook Pro + accessories of choice"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Equity Options",
      description: "Share in our success"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Career Growth",
      description: "Clear paths for advancement"
    }
  ];

  const openings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable features for our AI-powered platform using React, Node.js, and Python."
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Develop and improve our AI models for website generation and content optimization."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive interfaces that delight our users."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage and scale our global infrastructure serving 50K+ websites."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our customers succeed and grow their businesses with Swite.ai."
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content that educates and engages our audience."
    }
  ];

  const values = [
    { icon: "🎯", text: "Move fast and ship quality" },
    { icon: "🤝", text: "Collaborate openly and honestly" },
    { icon: "🌱", text: "Learn and grow continuously" },
    { icon: "💡", text: "Think big, start small" },
    { icon: "🌍", text: "Build for global impact" },
    { icon: "❤️", text: "Care deeply about our users" }
  ];

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Careers</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Join our</span>
            <span className="block font-medium text-white">Team</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            Help us build the future of web development. We're looking for talented, passionate people to join our mission.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "6", label: "Open Positions" },
              { value: "15+", label: "Countries" },
              { value: "100%", label: "Remote" }
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

      {/* Why Join Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-emerald-500/15 via-green-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white/90">
              Why <span className="text-white font-normal">SWITE.AI?</span>
            </h2>
            <p className="text-white/50 font-light">Join a team that's changing web development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fast Growth",
                description: "We're growing rapidly with 50K+ users and backed by top-tier investors. Join us at an exciting stage."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Cutting-Edge AI",
                description: "Work with the latest AI technologies and help shape the future of web development."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Global Impact",
                description: "Your work will empower millions of people to build professional websites without coding."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Amazing Team",
                description: "Work with talented people from Google, Meta, and other top tech companies."
              }
            ].map((item, index) => (
              <div key={index} className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-xl border border-[#4169E1]/20 bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 flex items-center justify-center mb-6 text-white/60 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-normal text-white mb-3">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-4 rounded-xl text-center text-sm font-light text-white/80"
              >
                <span className="mr-2">{value.icon}</span>
                {value.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-purple-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-indigo-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white/90">
              Benefits & <span className="text-white font-normal">Perks</span>
            </h2>
            <p className="text-white/50 font-light">We take care of our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-sm font-normal text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-white/40 font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white/90">
              Open <span className="text-white font-normal">Positions</span>
            </h2>
            <p className="text-white/50 font-light">Find your next opportunity</p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {openings.map((job, index) => (
              <div
                key={index}
                className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-normal text-white mb-3 group-hover:text-white/90 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full border border-[#4169E1]/30 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 text-white/80 text-sm font-light">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-light flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-light flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                    <p className="text-white/60 font-light leading-relaxed">{job.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white font-light hover:shadow-lg hover:shadow-[#4169E1]/30 transition-all hover:scale-105 border border-white/10 text-center whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-pink-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse-glow-soft" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white/90">
              Don't see a <span className="text-white font-normal">fit?</span>
            </h2>
            <p className="text-white/50 font-light mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us why you'd be a great addition to the team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white font-light hover:shadow-lg hover:shadow-[#4169E1]/30 transition-all hover:scale-105 border border-white/10"
              >
                Get In Touch
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-light hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
