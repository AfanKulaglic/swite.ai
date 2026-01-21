import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function EventsPage() {
  const features = [
    {
      icon: "🎟️",
      title: "Ticket Sales",
      description: "Sell unlimited tickets with multiple pricing tiers—early bird, VIP, group discounts, and promo codes. Set capacity limits and create urgency with countdown timers."
    },
    {
      icon: "✅",
      title: "RSVP Management",
      description: "Track attendees in real-time, send personalized invitations, manage waitlists, and handle guest lists with ease. Export attendee data anytime."
    },
    {
      icon: "📧",
      title: "Email Campaigns",
      description: "Built-in email marketing to promote your event. Send save-the-dates, reminders, last-minute updates, and post-event follow-ups to boost engagement."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track ticket sales velocity, revenue projections, traffic sources, and conversion rates. Make data-driven decisions to maximize attendance."
    },
    {
      icon: "🎫",
      title: "QR Code Check-In",
      description: "Lightning-fast mobile check-in with QR code scanning. Track attendance in real-time, prevent ticket fraud, and manage entry with ease."
    },
    {
      icon: "🌐",
      title: "Virtual & Hybrid",
      description: "Host online events with integrated video streaming, live chat, Q&A sessions, and virtual networking rooms. Perfect for webinars and hybrid events."
    }
  ];

  const eventTypes = [
    {
      title: "Conferences & Summits",
      description: "Multi-day events with sessions, speakers, and networking",
      icon: "🎤",
      examples: ["Tech Conferences", "Business Summits", "Industry Forums"]
    },
    {
      title: "Workshops & Classes",
      description: "Educational events with limited capacity and hands-on learning",
      icon: "📚",
      examples: ["Cooking Classes", "Art Workshops", "Fitness Bootcamps"]
    },
    {
      title: "Concerts & Performances",
      description: "Entertainment events with tiered seating and VIP packages",
      icon: "🎵",
      examples: ["Live Music", "Theater Shows", "Comedy Nights"]
    },
    {
      title: "Networking Events",
      description: "Professional gatherings for business connections",
      icon: "🤝",
      examples: ["Meetups", "Mixers", "Industry Socials"]
    },
    {
      title: "Fundraisers & Galas",
      description: "Charity events with donations and sponsorship tiers",
      icon: "💝",
      examples: ["Charity Auctions", "Benefit Dinners", "Fundraising Runs"]
    },
    {
      title: "Sports & Recreation",
      description: "Athletic events with team registration and scoring",
      icon: "⚽",
      examples: ["Tournaments", "Marathons", "League Games"]
    }
  ];

  return (
    <div className="pt-32 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in-down">
            <Badge variant="brand">EVENT MANAGEMENT</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6 opacity-0 animate-fade-in-up delay-100">
            EVENTS THAT <span className="text-brand animate-glow-pulse">SELL OUT</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-200">
            From intimate workshops to massive conferences—create stunning event pages, sell tickets, manage RSVPs, and promote like a pro. Everything you need to plan, market, and execute unforgettable events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up delay-300">
            <Button href="/signup" variant="primary" size="lg">
              Create Your Event
            </Button>
            <Button href="/templates" variant="secondary" size="lg">
              Browse Event Templates
            </Button>
          </div>

          {/* Event Card Preview */}
          <div className="max-w-4xl mx-auto opacity-0 animate-scale-in delay-400">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:border-brand/50 transition-all duration-500 group">
              <div className="aspect-video bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700">
                <span className="animate-float">🎉</span>
              </div>
              <div className="p-8 text-left">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-brand font-bold mb-2 animate-pulse">SAT, MAR 15 • 7:00 PM</div>
                    <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-brand transition-colors">SUMMER MUSIC FESTIVAL 2026</h3>
                    <p className="text-muted">Central Park, New York City</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-brand group-hover:scale-125 transition-transform">$45</div>
                    <div className="text-sm text-muted">General Admission</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button href="#" variant="primary">Get Tickets</Button>
                  <Button href="#" variant="secondary">Learn More</Button>
                </div>
              </div>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
              COMPLETE EVENT <span className="text-brand">MANAGEMENT</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand/20 group cursor-pointer h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:animate-swing transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
              ANY TYPE OF <span className="text-brand">EVENT</span>
            </h2>
            <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
              From intimate workshops to large conferences, our platform scales to meet your event needs.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <ScrollReveal key={index} animation="slide-left" delay={index * 100}>
                <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all duration-500 group cursor-pointer h-full relative overflow-hidden">
                  <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{type.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted group-hover:text-white transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:scale-150 transition-transform"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl animate-border-glow"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
              HOW IT <span className="text-brand">WORKS</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Create Event", desc: "Set up your event page with details, images, and schedule" },
              { num: "2", title: "Sell Tickets", desc: "Set pricing, create discount codes, and start selling" },
              { num: "3", title: "Promote", desc: "Share on social media and send email campaigns" },
              { num: "4", title: "Host Event", desc: "Check in guests and manage your event in real-time" }
            ].map((step, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 150}>
                <div className="text-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand text-black font-black text-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-black uppercase mb-2 group-hover:text-brand transition-colors">{step.title}</h3>
                  <p className="text-muted text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-br from-brand/20 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500K+", label: "Events Hosted" },
              { value: "10M+", label: "Tickets Sold" },
              { value: "95%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
                <div className="group cursor-pointer">
                  <div className="text-5xl font-black text-brand mb-2 group-hover:scale-125 transition-transform duration-500">{stat.value}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <ScrollReveal animation="zoom-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              READY TO HOST <span className="text-brand animate-glow-pulse">YOUR EVENT?</span>
            </h2>
            <p className="text-xl text-muted mb-8">
              Create your first event in minutes. Sell tickets, manage RSVPs, and promote like a pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/signup" variant="primary" size="lg">
                Create Event Free
              </Button>
              <Button href="/templates" variant="secondary" size="lg">
                Browse Templates
              </Button>
            </div>
            <p className="text-sm text-muted flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free for small events
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No setup fees
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Instant payouts
              </span>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
