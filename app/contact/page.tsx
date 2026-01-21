'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@swite.ai",
      description: "Send us an email anytime",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9am-6pm EST",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Available 24/7",
      description: "Chat with our support team",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street",
      region: "California, USA",
      emoji: "🌉"
    },
    {
      city: "New York",
      address: "456 Broadway",
      region: "New York, USA",
      emoji: "🗽"
    },
    {
      city: "London",
      address: "789 Oxford Street",
      region: "United Kingdom",
      emoji: "🇬🇧"
    }
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl mb-8">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Get in Touch
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block">Let's Start</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              A Conversation
            </span>
          </h1>
          <p className="text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to our team and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all text-center">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-white font-semibold mb-2">{method.value}</p>
                <p className="text-white/60 text-sm">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl font-black mb-8 text-center">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all resize-none"
                    rows={6}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-5 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h2 className="text-4xl font-black text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all text-center">
                  <div className="text-5xl mb-4">{office.emoji}</div>
                  <h3 className="text-2xl font-bold mb-3">{office.city}</h3>
                  <p className="text-white/60 mb-1">{office.address}</p>
                  <p className="text-white/60">{office.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
