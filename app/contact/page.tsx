'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "hello@swite.ai",
      description: "Send us an email anytime",
      link: "mailto:hello@swite.ai"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9am-6pm EST",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      value: "Available 24/7",
      description: "Chat with our support team",
      link: "#"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office",
      value: "San Francisco, CA",
      description: "Visit our headquarters",
      link: "#"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      region: "California, USA",
      timezone: "PST (UTC-8)"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12",
      region: "New York, USA",
      timezone: "EST (UTC-5)"
    },
    {
      city: "London",
      address: "789 Oxford Street",
      region: "United Kingdom",
      timezone: "GMT (UTC+0)"
    }
  ];

  const faqs = [
    {
      question: "What's your response time?",
      answer: "We typically respond within 24 hours during business days."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, phone support is available for Enterprise customers."
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! Use the form to request a personalized demo."
    }
  ];

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-pink-500/20 via-rose-500/15 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500/18 via-purple-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-500/15 to-pink-500/15 rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Available 24/7</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Get in</span>
            <span className="block font-medium text-white">Touch</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            Have questions? We're here to help. Reach out to our team and we'll get back to you within 24 hours.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "< 24h", label: "Response Time" },
              { value: "4+", label: "Support Channels" },
              { value: "50+", label: "Team Members" },
              { value: "98%", label: "Satisfaction" }
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

      {/* Contact Methods */}
      <section className="relative px-6 py-20">
        {/* Animated Background - Blue/Indigo theme */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-float-orb" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-18 animate-float-orb-2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white/90">
              Choose Your <span className="text-white font-normal">Channel</span>
            </h2>
            <p className="text-white/50 font-light">Multiple ways to reach our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 group-hover:text-white group-hover:border-white/20 transition-all">
                  {method.icon}
                </div>
                
                <h3 className="text-lg font-light text-white/90 mb-2">{method.title}</h3>
                <p className="text-white font-normal mb-2">{method.value}</p>
                <p className="text-sm text-white/40 font-light">{method.description}</p>

                {/* Arrow */}
                <div className="absolute top-8 right-8 w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative px-6 py-20">
        {/* Animated Background - Emerald/Green theme */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-float-orb" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-500 rounded-full blur-3xl opacity-18 animate-float-orb-2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-3 text-white/90">
                Send us a <span className="text-white font-normal">Message</span>
              </h2>
              <p className="text-white/50 font-light mb-8">Fill out the form and we'll be in touch soon</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-white/60 mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/30"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-white/60 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/30"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-white/60 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/30"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-white/60 mb-2">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all text-white"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Request Demo</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-white/60 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all resize-none text-white placeholder:text-white/30"
                    rows={6}
                    placeholder="Tell us about your project or question..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white py-4 rounded-xl font-light text-lg hover:shadow-lg hover:shadow-[#4169E1]/30 transition-all hover:scale-[1.02] border border-white/10"
                >
                  Send Message
                </button>

                <p className="text-xs text-white/40 font-light text-center">
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-light text-white/90 mb-6">Our <span className="text-white font-normal">Offices</span></h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                      <h4 className="text-lg font-normal text-white mb-2">{office.city}</h4>
                      <p className="text-sm text-white/60 font-light mb-1">{office.address}</p>
                      <p className="text-sm text-white/40 font-light mb-2">{office.region}</p>
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {office.timezone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div>
                <h3 className="text-2xl font-light text-white/90 mb-6">Quick <span className="text-white font-normal">Answers</span></h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-sm font-normal text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-white/60 font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20">
        {/* Animated Background - Violet/Purple theme */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-20 animate-pulse-glow-soft" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white/90">
              Prefer to <span className="text-white font-normal">Start Building?</span>
            </h2>
            <p className="text-white/50 font-light mb-8 max-w-2xl mx-auto">
              Jump right in and create your first website. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/studio"
                className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white font-light hover:shadow-lg hover:shadow-[#4169E1]/30 transition-all hover:scale-105 border border-white/10"
              >
                Start Building Free
              </Link>
              <Link
                href="/documentation"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-light hover:bg-white/10 hover:border-white/20 transition-all"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
