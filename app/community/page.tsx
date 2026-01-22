import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CommunityPage() {
  const features = [
    {
      icon: "💬",
      title: "Discussion Forums",
      description: "Create unlimited topic-based forums with categories, tags, and pinned posts. Rich text editor, code syntax highlighting, and file attachments included."
    },
    {
      icon: "👥",
      title: "Member Profiles",
      description: "Customizable user profiles with avatars, bios, social links, and activity feeds. Members can follow each other and build connections."
    },
    {
      icon: "🏆",
      title: "Gamification",
      description: "Award badges, points, and achievements to encourage participation. Create leaderboards, levels, and unlock exclusive content for top contributors."
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Real-time alerts for mentions, replies, likes, and new content. Email digests, push notifications, and customizable notification preferences."
    },
    {
      icon: "🔒",
      title: "Moderation Tools",
      description: "Powerful admin controls with auto-moderation, spam filters, user reports, and content approval workflows. Keep your community safe and healthy."
    },
    {
      icon: "📱",
      title: "Mobile-First",
      description: "Fully responsive design optimized for mobile. Native app-like experience with smooth scrolling, touch gestures, and offline support."
    }
  ];

  const useCases = [
    {
      title: "Brand Communities",
      description: "Build a loyal customer base around your brand",
      icon: "🏢",
      examples: ["Product feedback", "Customer support", "Brand advocates"]
    },
    {
      title: "Learning Communities",
      description: "Create spaces for students and learners to connect",
      icon: "📚",
      examples: ["Study groups", "Course discussions", "Peer learning"]
    },
    {
      title: "Hobby & Interest Groups",
      description: "Connect people with shared passions and interests",
      icon: "🎨",
      examples: ["Photography clubs", "Gaming guilds", "Book clubs"]
    },
    {
      title: "Professional Networks",
      description: "Build industry-specific professional communities",
      icon: "💼",
      examples: ["Industry forums", "Job boards", "Networking events"]
    },
    {
      title: "Support Communities",
      description: "Peer-to-peer support and mutual aid groups",
      icon: "🤝",
      examples: ["Health support", "Mental wellness", "Life transitions"]
    },
    {
      title: "Creator Communities",
      description: "Connect with fans and build your creator community",
      icon: "⭐",
      examples: ["Fan clubs", "Exclusive content", "Behind-the-scenes"]
    }
  ];

  const communityFeatures = [
    { name: "Private Groups", description: "Create invite-only spaces for exclusive discussions" },
    { name: "Direct Messaging", description: "Enable private conversations between members" },
    { name: "Content Moderation", description: "Auto-moderation and manual review tools" },
    { name: "Rich Media", description: "Share images, videos, and files in posts" },
    { name: "Polls & Surveys", description: "Gather feedback and opinions from members" },
    { name: "Events Calendar", description: "Schedule and promote community events" },
    { name: "Member Directory", description: "Searchable directory of all community members" },
    { name: "Analytics", description: "Track engagement, growth, and activity metrics" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="brand">COMMUNITY PLATFORM</Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
            BUILD YOUR TRIBE
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12">
            Create a thriving online community where your audience connects, shares, and grows together. Forums, member profiles, direct messaging, gamification—everything you need to build engagement and loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/signup" variant="primary" size="lg">
              Launch Your Community
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              Explore Demo
            </Button>
          </div>

          {/* Community Preview */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-black border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-xl flex-shrink-0">
                    👤
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold">Sarah Chen</span>
                      <span className="px-2 py-0.5 rounded-full bg-brand/20 text-brand text-xs font-bold">PRO</span>
                      <span className="text-sm text-muted">• 2 hours ago</span>
                    </div>
                    <p className="text-muted mb-3">Just launched my first product! Thanks to everyone in this community for the support and feedback. 🚀</p>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <button className="hover:text-brand transition-colors">❤️ 24</button>
                      <button className="hover:text-brand transition-colors">💬 8 replies</button>
                      <button className="hover:text-brand transition-colors">🔗 Share</button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-black border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-xl flex-shrink-0">
                    👤
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold">Marcus Rodriguez</span>
                      <span className="text-sm text-muted">• 5 hours ago</span>
                    </div>
                    <p className="text-muted mb-3">Looking for feedback on my new design. What do you think?</p>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <button className="hover:text-brand transition-colors">❤️ 15</button>
                      <button className="hover:text-brand transition-colors">💬 12 replies</button>
                      <button className="hover:text-brand transition-colors">🔗 Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            POWERFUL COMMUNITY FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
            COMMUNITIES FOR EVERYONE
          </h2>
          <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
            From brands to creators, educators to hobbyists - build the perfect community for your audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            MORE FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            WHY BUILD A COMMUNITY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-black text-brand mb-4">3x</div>
              <div className="text-xl font-bold mb-2">Higher Engagement</div>
              <p className="text-muted">Community members are 3x more engaged than regular visitors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-brand mb-4">85%</div>
              <div className="text-xl font-bold mb-2">Retention Rate</div>
              <p className="text-muted">Communities increase customer retention significantly</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-brand mb-4">2x</div>
              <div className="text-xl font-bold mb-2">Lifetime Value</div>
              <p className="text-muted">Community members have 2x higher lifetime value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            COMMUNITY SUCCESS STORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-black border border-white/10">
              <p className="text-lg text-muted mb-6">"Our community has become the heart of our business. Members help each other, share ideas, and create amazing content. It's transformed how we engage with customers."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-bold">Alex Johnson</p>
                  <p className="text-sm text-muted">Founder, TechStartup</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-black border border-white/10">
              <p className="text-lg text-muted mb-6">"Building a community around our courses was the best decision. Students support each other, share projects, and the engagement is incredible. Completion rates are up 60%!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-bold">Maria Garcia</p>
                  <p className="text-sm text-muted">Online Educator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            START BUILDING YOUR COMMUNITY
          </h2>
          <p className="text-xl text-muted mb-8">
            Launch your community platform in minutes. Engage your audience and build lasting connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/signup" variant="primary" size="lg">
              Launch Community Free
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              See Live Demo
            </Button>
          </div>
          <p className="text-sm text-muted">
            ✓ Free up to 100 members • ✓ No setup fees • ✓ Unlimited posts
          </p>
        </div>
      </section>
    </div>
  );
}
