import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CoursesPage() {
  const features = [
    {
      icon: "📹",
      title: "Professional Video Hosting",
      description: "Upload unlimited HD video lessons with adaptive streaming, playback speed controls, and automatic transcoding. No buffering, no limits—just smooth learning."
    },
    {
      icon: "📝",
      title: "Intuitive Course Builder",
      description: "Drag-and-drop course creation with modules, lessons, quizzes, and assignments. Add PDFs, worksheets, and resources. Structure your curriculum in minutes."
    },
    {
      icon: "🎓",
      title: "Custom Certificates",
      description: "Award beautiful, branded certificates upon course completion. Automated delivery, unique verification codes, and LinkedIn integration to showcase achievements."
    },
    {
      icon: "💬",
      title: "Student Community",
      description: "Built-in discussion forums, direct messaging, and group projects. Foster peer learning, answer questions, and build an engaged student community."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Track student progress, completion rates, quiz scores, and engagement metrics. Identify struggling students and optimize your course content."
    },
    {
      icon: "💳",
      title: "Flexible Monetization",
      description: "Sell courses with one-time payments, subscriptions, payment plans, or bundles. Offer coupons, early-bird pricing, and affiliate programs."
    }
  ];

  const courseTypes = [
    {
      title: "Professional Development",
      description: "Career skills, certifications, and industry training",
      icon: "💼",
      examples: ["Project Management", "Leadership Training", "Sales Mastery"]
    },
    {
      title: "Creative Arts",
      description: "Design, photography, music, and creative skills",
      icon: "🎨",
      examples: ["Graphic Design", "Photography", "Music Production"]
    },
    {
      title: "Technology & Programming",
      description: "Coding, web development, and tech skills",
      icon: "💻",
      examples: ["Web Development", "Python Programming", "Data Science"]
    },
    {
      title: "Health & Fitness",
      description: "Wellness, nutrition, and fitness programs",
      icon: "💪",
      examples: ["Yoga Instruction", "Nutrition Coaching", "Personal Training"]
    },
    {
      title: "Business & Marketing",
      description: "Entrepreneurship, marketing, and business strategy",
      icon: "📈",
      examples: ["Digital Marketing", "Entrepreneurship", "Social Media"]
    },
    {
      title: "Languages & Communication",
      description: "Language learning and communication skills",
      icon: "🗣️",
      examples: ["English Speaking", "Spanish Lessons", "Public Speaking"]
    }
  ];

  const benefits = [
    {
      title: "Unlimited Students",
      description: "No limits on enrollment - scale your courses to thousands of students"
    },
    {
      title: "Drip Content",
      description: "Release lessons on a schedule to keep students engaged over time"
    },
    {
      title: "Quizzes & Tests",
      description: "Create assessments with multiple choice, true/false, and essay questions"
    },
    {
      title: "Student Analytics",
      description: "Track engagement, completion rates, and identify struggling students"
    },
    {
      title: "Mobile Learning",
      description: "Students can access courses from any device with responsive design"
    },
    {
      title: "Email Automation",
      description: "Send welcome emails, reminders, and course updates automatically"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="brand">ONLINE LEARNING PLATFORM</Badge>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
                TEACH. SCALE. PROFIT.
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-8">
                Turn your expertise into a thriving online academy. Create professional courses with video lessons, quizzes, certificates, and community features. Teach thousands while you sleep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href="/signup" variant="primary" size="lg">
                  Start Teaching Free
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  Explore Demo Course
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-black text-brand mb-1">0%</div>
                  <div className="text-sm text-muted">Transaction Fees</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand mb-1">∞</div>
                  <div className="text-sm text-muted">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand mb-1">∞</div>
                  <div className="text-sm text-muted">Video Storage</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                <div className="aspect-video bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-lg">
                      👤
                    </div>
                    <div>
                      <div className="font-bold">Introduction to Web Design</div>
                      <div className="text-sm text-muted">12 lessons • 4.5 hours</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Progress</span>
                      <span className="font-bold">67%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{width: '67%'}}></div>
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
            EVERYTHING YOU NEED TO TEACH
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

      {/* Course Types */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">
            TEACH ANY SUBJECT
          </h2>
          <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
            From professional skills to creative hobbies, our platform supports all types of online courses and coaching programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-brand transition-all group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {type.title}
                </h3>
                <p className="text-muted mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
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

      {/* Additional Benefits */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            MORE POWERFUL FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 xl:px-32 py-24 bg-gradient-to-br from-brand/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
            JOIN THE CREATOR ECONOMY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-brand mb-2">50K+</div>
              <div className="text-muted">Courses Created</div>
              <div className="text-xs text-muted mt-1">Across all industries</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand mb-2">2M+</div>
              <div className="text-muted">Students Enrolled</div>
              <div className="text-xs text-muted mt-1">Learning every day</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand mb-2">$100M+</div>
              <div className="text-muted">Instructor Earnings</div>
              <div className="text-xs text-muted mt-1">Paid to creators</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand mb-2">92%</div>
              <div className="text-muted">Completion Rate</div>
              <div className="text-xs text-muted mt-1">Industry leading</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            START YOUR TEACHING JOURNEY
          </h2>
          <p className="text-xl text-muted mb-8">
            Create your first course today. Unlimited students, unlimited earning potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/signup" variant="primary" size="lg">
              Start Teaching Free
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              Compare Plans
            </Button>
          </div>
          <p className="text-sm text-muted">
            ✓ 14-day free trial • ✓ 0% transaction fees • ✓ Unlimited video storage
          </p>
        </div>
      </section>
    </div>
  );
}
