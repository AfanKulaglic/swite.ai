"use client";

import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Define Your Requirements",
      description: "Start by describing your website needs through our intelligent questionnaire. Provide information about your business, target audience, desired features, and brand preferences. Our AI analyzes this information to understand your goals and requirements.",
      details: [
        "Business type, industry, and target market",
        "Required pages and website structure",
        "Content requirements and tone of voice",
        "Design preferences and brand guidelines",
        "Technical requirements and integrations",
        "SEO keywords and target audience demographics",
      ],
    },
    {
      number: "02",
      title: "AI Generates Your Website",
      description: "Our advanced AI engine processes your requirements and generates a complete, production-ready website. The system creates optimized layouts, writes compelling content, selects appropriate design elements, and ensures responsive functionality across all devices.",
      details: [
        "Intelligent page structure and navigation hierarchy",
        "SEO-optimized content tailored to your industry",
        "Professional design system with brand colors and typography",
        "Responsive layouts for desktop, tablet, and mobile",
        "Accessibility compliance (WCAG 2.1 AA)",
        "Performance optimization and Core Web Vitals",
      ],
    },
    {
      number: "03",
      title: "Customize & Refine",
      description: "Use our visual editor to fine-tune every aspect of your website. Drag-and-drop interface allows you to modify layouts, update content, adjust styling, and add functionality without writing code. Real-time preview shows changes instantly.",
      details: [
        "Drag-and-drop visual editor with real-time preview",
        "Component library with 200+ pre-built elements",
        "Global style manager for consistent branding",
        "Content management system for easy updates",
        "Media library with image optimization",
        "Mobile responsive design controls",
      ],
    },
    {
      number: "04",
      title: "Deploy & Launch",
      description: "Launch your website with a single click. Our platform handles all technical aspects including hosting, SSL certificates, CDN configuration, and DNS setup. Your website goes live on our global infrastructure with enterprise-grade performance and security.",
      details: [
        "One-click deployment to global CDN",
        "Automatic SSL/TLS certificate provisioning",
        "Custom domain connection with DNS management",
        "Automated backups and version control",
        "Performance monitoring and uptime tracking",
        "SEO sitemap and search engine submission",
      ],
    },
  ];

  const workflow = [
    {
      phase: "Planning",
      duration: "5-10 minutes",
      tasks: ["Define requirements", "Set goals", "Choose features"],
    },
    {
      phase: "Generation",
      duration: "15-30 seconds",
      tasks: ["AI creates structure", "Generates content", "Applies design"],
    },
    {
      phase: "Customization",
      duration: "30-60 minutes",
      tasks: ["Refine design", "Update content", "Add integrations"],
    },
    {
      phase: "Launch",
      duration: "1-2 minutes",
      tasks: ["Connect domain", "Deploy website", "Go live"],
    },
  ];

  const faqs = [
    {
      question: "How long does the entire process take?",
      answer: "Most users complete their website in 1-2 hours. The AI generation takes 15-30 seconds, while customization time depends on your specific needs and preferences.",
    },
    {
      question: "Do I need technical or design skills?",
      answer: "No technical skills required. Our platform is designed for non-technical users. The visual editor is intuitive, and our AI handles all the complex technical aspects automatically.",
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes, you can connect any domain you own. We provide automatic DNS configuration and SSL certificate setup. The process takes just a few minutes.",
    },
    {
      question: "What if I need to make changes after launching?",
      answer: "You can edit your website anytime using our visual editor. Changes are deployed instantly. We also maintain version history so you can rollback if needed.",
    },
    {
      question: "Is the generated website SEO-optimized?",
      answer: "Yes, every website includes comprehensive SEO optimization: meta tags, structured data, sitemap, optimized images, and fast loading speeds. We follow Google's best practices.",
    },
    {
      question: "Can I export my website or migrate to another platform?",
      answer: "Yes, you can export your website content and assets at any time. We provide standard formats (HTML, CSS, images) for easy migration if needed.",
    },
  ];

  return (
    <div className="relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-32">
        <div className="px-6 md:px-16 xl:px-32 py-24">
          <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <Badge variant="brand">PLATFORM WORKFLOW</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              FROM CONCEPT TO LIVE WEBSITE
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Our streamlined process takes you from initial concept to a live, professional website in under 2 hours. No technical knowledge required.
            </p>
          </div>

          {/* Workflow Timeline */}
          <div className="mb-32">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-center mb-12">
              TYPICAL PROJECT TIMELINE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {workflow.map((phase, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center hover:border-brand/50 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-brand font-black text-lg mb-2 group-hover:scale-110 transition-transform">{phase.phase}</div>
                  <div className="text-2xl font-black mb-4 group-hover:text-brand transition-colors">{phase.duration}</div>
                  <ul className="space-y-2 text-sm text-muted">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="group-hover:text-white transition-colors">• {task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-16 mb-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative pl-24 pb-16 border-l-4 border-brand last:border-transparent"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-16 h-16 rounded-full bg-brand text-black flex items-center justify-center font-black text-xl">
                  {step.number}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-muted max-w-2xl mb-6 leading-relaxed">{step.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-brand mt-1">→</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Video/Demo Section */}
          <div className="mb-32">
            <div className="rounded-3xl bg-gradient-to-br from-accentBlue to-accentPurple p-1">
              <div className="rounded-3xl bg-black p-12 md:p-16 text-center">
                <div className="text-6xl mb-6">▶️</div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                  WATCH THE PLATFORM IN ACTION
                </h2>
                <p className="text-muted mb-6 max-w-2xl mx-auto">
                  See how Swite.ai generates a complete, professional website in under 30 seconds. Watch the full workflow from requirements to deployment.
                </p>
                <Button variant="primary">Watch Demo Video (3:45)</Button>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-12">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-accentBlue/5 to-accentPurple/5 animate-gradient" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                READY TO BUILD YOUR <span className="text-brand animate-glow-pulse">WEBSITE</span>?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Start your free trial today. No credit card required. Launch your professional website in under 2 hours.
              </p>
              <Button href="/signup" variant="primary">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
