import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CareersPage() {
  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Top-tier compensation packages" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical, dental, vision" },
    { icon: "🏖️", title: "Unlimited PTO", description: "Take time off when you need it" },
    { icon: "🏠", title: "Remote Work", description: "Work from anywhere in the world" },
    { icon: "📚", title: "Learning Budget", description: "$2,000/year for courses & conferences" },
    { icon: "💻", title: "Latest Equipment", description: "MacBook Pro + accessories of choice" },
    { icon: "🚀", title: "Equity Options", description: "Share in our success" },
    { icon: "🎯", title: "Career Growth", description: "Clear paths for advancement" },
  ];

  const openings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable features for our AI-powered platform using React, Node.js, and Python.",
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Develop and improve our AI models for website generation and content optimization.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive interfaces that delight our users.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage and scale our global infrastructure serving 50K+ websites.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our customers succeed and grow their businesses with Swite.ai.",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content that educates and engages our audience.",
    },
  ];

  const values = [
    "🎯 Move fast and ship quality",
    "🤝 Collaborate openly and honestly",
    "🌱 Learn and grow continuously",
    "💡 Think big, start small",
    "🌍 Build for global impact",
    "❤️ Care deeply about our users",
  ];

  return (
    <div className="pt-32">
      <div className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24 opacity-0 animate-fade-in-up">
            <Badge variant="brand">CAREERS</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              JOIN OUR TEAM
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Help us build the future of web development. We're looking for talented, passionate people to join our mission.
            </p>
          </div>

          {/* Why Join */}
          <div className="mb-32 opacity-0 animate-fade-in-up delay-200">
            <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-12">
              WHY SWITE.AI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                  FAST GROWTH
                </h3>
                <p className="text-muted leading-relaxed">
                  We're growing rapidly with 50K+ users and backed by top-tier investors. Join us at an exciting stage.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                  CUTTING-EDGE AI
                </h3>
                <p className="text-muted leading-relaxed">
                  Work with the latest AI technologies and help shape the future of web development.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                  GLOBAL IMPACT
                </h3>
                <p className="text-muted leading-relaxed">
                  Your work will empower millions of people to build professional websites without coding.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                  AMAZING TEAM
                </h3>
                <p className="text-muted leading-relaxed">
                  Work with talented people from Google, Meta, and other top tech companies.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center text-sm font-bold"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-32 opacity-0 animate-fade-in-up delay-300">
            <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-12">
              BENEFITS & PERKS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-black text-sm mb-2">{benefit.title}</h3>
                  <p className="text-xs text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-32 opacity-0 animate-fade-in-up delay-400">
            <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-12">
              OPEN POSITIONS
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-brand transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 rounded-full bg-brand/20 text-brand font-bold">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-muted">
                          📍 {job.location}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-muted">
                          ⏰ {job.type}
                        </span>
                      </div>
                    </div>
                    <Button href="/contact" size="sm">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-muted leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 text-center opacity-0 animate-fade-in-up delay-500">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              DON'T SEE A FIT?
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us why you'd be a great addition to the team.
            </p>
            <Button href="/contact" variant="primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
