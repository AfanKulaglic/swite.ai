"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI website generation work?",
      answer: "Our AI analyzes your business requirements, industry, and target audience to generate a complete website. It creates page structures, writes SEO-optimized content, designs layouts, and ensures responsive functionality. The entire process takes under 30 seconds.",
    },
    {
      question: "Can I customize the AI-generated website?",
      answer: "Absolutely! After generation, you have full control through our visual editor. Modify layouts, change colors and fonts, update content, add or remove sections, and customize every aspect without coding. Changes are reflected in real-time.",
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes 1 AI-generated website, basic templates, community support, 1GB storage, and basic analytics. It's perfect for testing the platform. You can upgrade anytime to unlock unlimited websites and premium features.",
    },
    {
      question: "Do I need technical skills to use Swite.ai?",
      answer: "No technical skills required. Our platform is designed for non-technical users. The AI handles all complex aspects automatically, and our visual editor uses simple drag-and-drop interactions. If you can use a word processor, you can build a website with Swite.ai.",
    },
    {
      question: "How is SEO handled?",
      answer: "Every website includes comprehensive SEO optimization: automatic meta tags, structured data markup, XML sitemaps, optimized images, fast loading speeds, mobile responsiveness, and Core Web Vitals optimization. Our AI also generates SEO-friendly content.",
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! You can connect any domain you own. We provide automatic DNS configuration and free SSL certificates. The setup process is simple and takes just a few minutes. We also support subdomains and domain aliases.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multiple support channels: email support (24-hour response time), live chat (Mon-Fri 9am-6pm EST), comprehensive documentation, video tutorials, and community forums. Pro and Business plans include priority support.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We're SOC 2 Type II certified with enterprise-grade security. All data is encrypted in transit and at rest. We're GDPR and CCPA compliant, perform regular security audits, and maintain 99.9% uptime SLA with daily backups.",
    },
    {
      question: "Can I export my website?",
      answer: "Yes, you can export your website content and assets at any time. We provide standard formats (HTML, CSS, images, content) for easy migration. We believe in data portability and never lock you in.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe. We also offer invoicing for Business and Enterprise plans.",
    },
  ];

  return (
    <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand">FAQ</Badge>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-6 mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Swite.ai. Can't find an answer? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <span className="font-black uppercase text-sm pr-4">
                  {faq.question}
                </span>
                <span className={`text-brand text-2xl transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-black uppercase tracking-tight mb-3">
            STILL HAVE QUESTIONS?
          </h3>
          <p className="text-muted text-sm mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-black font-black uppercase text-sm hover:bg-brand/90 transition-all"
          >
            Contact Support
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
