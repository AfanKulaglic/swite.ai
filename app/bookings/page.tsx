import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function BookingsPage() {
  const features = [
    {
      icon: "📅",
      title: "Smart Scheduling",
      description: "AI-powered calendar that learns your availability patterns. Set buffer times between appointments, block off personal time, and sync with your existing calendars automatically."
    },
    {
      icon: "🔔",
      title: "Automated Reminders",
      description: "Reduce no-shows by up to 80% with customizable email and SMS reminders. Send confirmations instantly, reminders 24 hours before, and follow-up messages after appointments."
    },
    {
      icon: "💰",
      title: "Flexible Payments",
      description: "Accept deposits, full payments, or payment plans at booking. Charge cancellation fees, offer package deals, and process refunds—all automated and secure."
    },
    {
      icon: "👥",
      title: "Team Management",
      description: "Manage multiple staff members with individual calendars, services, and pricing. Track performance, manage permissions, and optimize team scheduling."
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "70% of bookings happen on mobile. Your booking page is optimized for smartphones with fast loading, easy navigation, and one-tap booking."
    },
    {
      icon: "🔄",
      title: "Calendar Sync",
      description: "Two-way sync with Google Calendar, Outlook, Apple Calendar, and more. Block times automatically, prevent double-bookings, and keep everything in sync."
    }
  ];

  const useCases = [
    {
      title: "Health & Wellness",
      services: ["Spa & Massage", "Fitness Training", "Therapy Sessions", "Nutrition Consulting"],
      icon: "💆"
    },
    {
      title: "Professional Services",
      services: ["Legal Consultations", "Financial Advising", "Career Coaching", "Business Consulting"],
      icon: "💼"
    },
    {
      title: "Beauty & Personal Care",
      services: ["Hair Salons", "Nail Studios", "Makeup Artists", "Barbershops"],
      icon: "💇"
    },
    {
      title: "Education & Tutoring",
      services: ["Private Lessons", "Language Classes", "Music Instruction", "Test Prep"],
      icon: "📚"
    },
    {
      title: "Home Services",
      services: ["Cleaning Services", "Repair & Maintenance", "Pet Grooming", "Photography"],
      icon: "🏠"
    },
    {
      title: "Healthcare",
      services: ["Doctor Appointments", "Dental Visits", "Veterinary Care", "Telehealth"],
      icon: "🏥"
    }
  ];

  return (
    <div className="pt-32 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="opacity-0 animate-fade-in-down">
                <Badge variant="brand">BOOKING SYSTEM</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6 opacity-0 animate-fade-in-up delay-100">
                BOOKINGS ON <span className="text-brand animate-glow-pulse">AUTOPILOT</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-8 opacity-0 animate-fade-in-up delay-200">
                Stop playing phone tag. Let clients book appointments, classes, and services 24/7 through your website. Automated scheduling, payments, and reminders free up your time to focus on what matters—serving your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
                <Button href="/signup" variant="primary" size="lg">
                  Start Free Trial
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  Watch Demo
                </Button>
              </div>
              <div className="space-y-3 opacity-0 animate-fade-in delay-400">
                {[
                  "No setup fees • Cancel anytime",
                  "Unlimited bookings • Unlimited staff",
                  "Free SMS & email reminders included"
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <svg className="w-5 h-5 text-brand flex-shrink-0 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted group-hover:text-white transition-colors">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative opacity-0 animate-scale-in delay-300">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-brand/50 transition-all duration-500">
                <div className="space-y-3">
                  {[
                    { name: "Hair Cut & Style", duration: "45 min", price: "$65" },
                    { name: "Color Treatment", duration: "2 hrs", price: "$150" },
                    { name: "Consultation", duration: "30 min", price: "Free" }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-black border border-white/10 hover:border-brand/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div>
                        <div className="font-bold mb-1 group-hover:text-brand transition-colors">{service.name}</div>
                        <div className="text-sm text-muted">{service.duration} • {service.price}</div>
                      </div>
                      <Button href="#" variant="primary">Book</Button>
                    </div>
                  ))}
                  <div className="mt-6 p-4 rounded-xl bg-brand/10 border border-brand/30 animate-glow-pulse">
                    <div className="text-sm font-bold text-brand mb-1">Next Available</div>
                    <div className="text-sm text-muted">Today at 2:30 PM</div>
                  </div>
                </div>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
              POWERFUL BOOKING <span className="text-brand">FEATURES</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand/20 group cursor-pointer h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:animate-wave transition-transform">{feature.icon}</div>
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

      {/* Use Cases */}
      <section className="px-6 md:px-16 xl:px-32 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
              PERFECT FOR <span className="text-brand">SERVICE BUSINESSES</span>
            </h2>
            <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
              From healthcare to beauty, education to consulting - our booking system works for any service-based business.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={index} animation="slide-right" delay={index * 100}>
                <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all duration-500 group cursor-pointer h-full relative overflow-hidden">
                  <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{useCase.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-brand transition-colors">
                    {useCase.title}
                  </h3>
                  <ul className="space-y-2">
                    {useCase.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted group-hover:text-white transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:scale-150 transition-transform"></span>
                        {service}
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

      {/* Benefits */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-br from-brand/20 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
              THE NUMBERS <span className="text-brand">DON'T LIE</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: "80%", title: "Fewer No-Shows", desc: "Automated SMS and email reminders keep clients on track and reduce missed appointments dramatically." },
              { value: "10hrs", title: "Saved Per Week", desc: "Eliminate phone tag, manual scheduling, and back-and-forth emails. Get your time back to focus on clients." },
              { value: "35%", title: "More Bookings", desc: "Accept appointments 24/7, even while you sleep. Never miss a booking opportunity again." }
            ].map((benefit, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 150}>
                <div className="text-center group cursor-pointer">
                  <div className="text-5xl font-black text-brand mb-4 group-hover:scale-125 transition-transform duration-500">{benefit.value}</div>
                  <div className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{benefit.title}</div>
                  <p className="text-muted">{benefit.desc}</p>
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
              START ACCEPTING <span className="text-brand animate-glow-pulse">BOOKINGS TODAY</span>
            </h2>
            <p className="text-xl text-muted mb-8">
              Set up your booking system in under 10 minutes. Free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/signup" variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
            <p className="text-sm text-muted flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited bookings
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free SMS reminders
              </span>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
