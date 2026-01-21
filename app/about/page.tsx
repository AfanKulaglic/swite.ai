export default function AboutPage() {
  const stats = [
    { value: "50K+", label: "Active Users", icon: "👥" },
    { value: "2M+", label: "Sites Built", icon: "🌐" },
    { value: "150+", label: "Countries", icon: "🌍" },
    { value: "99.99%", label: "Uptime", icon: "⚡" }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We push boundaries and challenge conventions to deliver cutting-edge AI solutions that transform how websites are built."
    },
    {
      icon: "❤️",
      title: "Customer Obsessed",
      description: "Every decision starts with understanding our customers. Their success is our success, and we're committed to their growth."
    },
    {
      icon: "🔒",
      title: "Trust & Security",
      description: "Security and privacy are built into our core, not added as an afterthought. Your data is always protected."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "We're building technology that empowers businesses worldwide to succeed online and reach their full potential."
    }
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO & Co-Founder", initials: "SC", color: "from-blue-500 to-cyan-500" },
    { name: "Michael Rodriguez", role: "CTO & Co-Founder", initials: "MR", color: "from-purple-500 to-pink-500" },
    { name: "Emma Thompson", role: "Head of Design", initials: "ET", color: "from-green-500 to-emerald-500" },
    { name: "David Kim", role: "Head of Engineering", initials: "DK", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl mb-8">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              About Swite.ai
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block">Building the Future</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              of Web Development
            </span>
          </h1>
          <p className="text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize web development through AI, making it accessible 
            for everyone to build professional websites without technical barriers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 transition-all">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all h-full">
              <div className="text-5xl mb-6">📖</div>
              <h2 className="text-4xl font-black mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70 leading-relaxed text-lg">
                <p>
                  Founded in 2023, Swite.ai was born from a simple observation: building websites 
                  was still too complex, time-consuming, and expensive for most businesses.
                </p>
                <p>
                  We assembled a team of AI researchers, designers, and engineers to solve this 
                  problem. Today, we're proud to serve over 50,000 businesses worldwide, helping 
                  them launch and scale their online presence with unprecedented speed and quality.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all h-full">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-4xl font-black mb-6">Our Mission</h2>
              <div className="space-y-4 text-white/70 leading-relaxed text-lg">
                <p>
                  To empower every business, regardless of size or technical expertise, to create 
                  stunning, professional websites that drive real results.
                </p>
                <p>
                  We believe that great design and powerful technology should be accessible to 
                  everyone. That's why we're building the most intuitive, intelligent, and reliable 
                  web platform on the planet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-5xl font-black text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-black mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-5xl font-black text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`} />
                  <div className={`relative w-full aspect-square rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-5xl font-black`}>
                    {member.initials}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-white/60 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-black mb-4">Join Our Journey</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                We're always looking for talented people who share our vision. 
                Check out our open positions.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
