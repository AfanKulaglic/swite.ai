'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WebSphereTemplate() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.fromTo('.hero-content', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' });
        gsap.fromTo('.hero-image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 });

        // Animate sections on scroll
        document.querySelectorAll('.animate-section').forEach((section) => {
          gsap.fromTo(section, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true }
          });
        });
      } catch (e) {}
    };
    initGSAP();
  }, []);

  const faqs = [
    { question: 'What is web hosting?', answer: 'Web hosting is a service that allows you to publish your website on the internet. When you purchase hosting, you\'re renting space on a server where your website files are stored and made accessible to visitors worldwide.' },
    { question: 'Can I migrate my existing website?', answer: 'Yes! We offer free website migration for all plans. Our expert team will handle the entire process, ensuring zero downtime and a seamless transition from your current host.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency payments including Bitcoin and Ethereum.' },
    { question: 'Is there a money-back guarantee?', answer: 'Absolutely! All our plans come with a 30-day money-back guarantee. If you\'re not satisfied for any reason, we\'ll refund your payment in full.' },
    { question: 'Do you offer 24/7 support?', answer: 'Yes, our support team is available 24/7/365 via live chat, email, and phone (for Enterprise plans). Our average response time is under 5 minutes.' },
    { question: 'What is your uptime guarantee?', answer: 'We guarantee 99.9% uptime for all plans. If we fail to meet this commitment, you\'ll receive service credits as compensation.' },
  ];

  return (
    <div className="min-h-screen bg-[#0F0222] text-white font-sans antialiased">
      {/* Navbar */}
      <header className="bg-[#0F0222]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6D28D9] to-[#22C55E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="text-2xl font-bold text-white">WEBSPHERE</div>
          </div>
          <ul className="hidden md:flex gap-8 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors font-medium">Home</a></li>
            <li><a href="#features" className="hover:text-white transition-colors font-medium">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors font-medium">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors font-medium">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors font-medium">FAQ</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-gray-400 hover:text-white transition-colors font-medium">Sign In</a>
            <button className="bg-[#22C55E] text-black px-6 py-2.5 rounded-xl font-semibold hover:bg-[#86EFAC] transition-all shadow-lg shadow-[#22C55E]/20">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F0222] via-[#4C1D95] to-[#0F0222] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#6D28D9] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center relative z-10">
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
              </span>
              <span className="text-[#22C55E] text-sm font-semibold">🚀 Limited Offer: 50% OFF First Year</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Host Your Site with <span className="bg-gradient-to-r from-[#22C55E] to-green-400 bg-clip-text text-transparent">Top-Tier Reliability</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Enterprise-grade web hosting solutions designed for your success. Lightning-fast performance, military-grade security, and 24/7 expert support included.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#pricing" className="bg-[#22C55E] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#86EFAC] transition-all inline-flex items-center gap-2 shadow-xl shadow-[#22C55E]/30 hover:shadow-[#22C55E]/50 hover:scale-105">
                Get Started Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#pricing" className="border-2 border-[#22C55E] text-[#22C55E] px-8 py-4 rounded-xl font-semibold hover:bg-[#22C55E] hover:text-black transition-all inline-flex items-center gap-2">
                View Pricing
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1E0B3A]/80 to-[#1E0B3A]/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
                  alt="Modern Server Infrastructure" 
                  className="rounded-xl w-full shadow-2xl"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#1E0B3A] to-[#1E0B3A]/80 border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Load Time</div>
                    <div className="text-xl font-bold text-white">0.8s</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#1E0B3A] to-[#1E0B3A]/80 border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9]/20 to-[#6D28D9]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">SSL Secure</div>
                    <div className="text-xl font-bold text-white">Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#1E0B3A]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm mb-10 uppercase tracking-wider font-semibold">Trusted by 50,000+ Companies Worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {['TechCorp', 'StartupHub', 'CloudBase', 'DevStudio', 'WebFlow', 'DataSync'].map((brand) => (
              <div key={brand} className="text-center text-2xl font-bold text-white/40 hover:text-white/60 transition-colors">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-[#0F0222] to-[#6D28D9]/20 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Features</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 mt-3">Why Choose WebSphere?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Everything you need for a successful online presence, backed by industry-leading technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', description: 'NVMe SSD storage and global CDN integration for blazing fast load times.', features: ['NVMe SSD Storage', 'Global CDN Network', 'HTTP/3 Support'] },
              { icon: '🔒', title: 'Secure & Safe', description: 'Military-grade security with free SSL certificates and automated daily backups.', features: ['Free SSL Certificate', 'Daily Backups', 'DDoS Protection'] },
              { icon: '📈', title: 'Infinitely Scalable', description: 'Grow your site with flexible hosting plans. Seamlessly upgrade as you expand.', features: ['Instant Upgrades', 'Auto-Scaling', 'Load Balancing'] },
              { icon: '💬', title: '24/7 Expert Support', description: 'Award-winning support team available around the clock. Get help anytime.', features: ['Live Chat Support', 'Phone Support', 'Email Tickets'] },
              { icon: '🎯', title: '99.9% Uptime', description: 'Industry-leading uptime guarantee backed by SLA. Your site stays online.', features: ['SLA Guarantee', 'Redundant Servers', '24/7 Monitoring'] },
              { icon: '🚀', title: 'Easy Setup', description: 'Get your site online in minutes with one-click install. No technical knowledge required.', features: ['1-Click WordPress', 'Website Builder', 'Free Migration'] },
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#22C55E]/50 transition-all">
                <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-[#22C55E]/20' : 'bg-[#6D28D9]/20'} rounded-xl flex items-center justify-center mb-6`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-[#22C55E]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#6D28D9] relative overflow-hidden animate-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-200">Join thousands of successful businesses worldwide</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Active Websites', sub: 'Hosted globally' },
              { value: '99.9%', label: 'Uptime Guarantee', sub: 'SLA backed' },
              { value: '24/7', label: 'Expert Support', sub: 'Always available' },
              { value: '15+', label: 'Years Experience', sub: 'Industry leader' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-gray-200 font-medium">{stat.label}</div>
                <p className="text-sm text-gray-300 mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-[#0F0222] animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Pricing</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 mt-3">Choose Your Perfect Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible hosting solutions for every need. Start small and scale as you grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter Plan */}
            <div className="bg-[#1E0B3A]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#22C55E]/50 transition-all">
              <div className="text-sm font-bold text-[#22C55E] uppercase tracking-wider mb-4">Starter</div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">$4.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Perfect for personal websites and blogs</p>
              <ul className="space-y-3 mb-8">
                {['10 GB SSD Storage', '1 Website', 'Free SSL Certificate', '24/7 Support', 'Daily Backups'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#22C55E]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="block w-full text-center bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Get Started
              </button>
            </div>

            {/* Business Plan (Popular) */}
            <div className="bg-gradient-to-br from-[#6D28D9]/20 to-[#22C55E]/20 backdrop-blur-sm border-2 border-[#22C55E] rounded-2xl p-8 relative transform scale-105 shadow-2xl shadow-[#22C55E]/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#22C55E] text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-sm font-bold text-[#22C55E] uppercase tracking-wider mb-4">Business</div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">$9.99</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses and e-commerce</p>
              <ul className="space-y-3 mb-8">
                {['50 GB SSD Storage', 'Unlimited Websites', 'Free SSL Certificate', 'Priority Support', 'Daily Backups', 'Free CDN'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-white">
                    <span className="text-[#22C55E]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="block w-full text-center bg-[#22C55E] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#86EFAC] transition-all shadow-lg">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#1E0B3A]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#22C55E]/50 transition-all">
              <div className="text-sm font-bold text-[#22C55E] uppercase tracking-wider mb-4">Enterprise</div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">$24.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Maximum performance for high-traffic sites</p>
              <ul className="space-y-3 mb-8">
                {['200 GB SSD Storage', 'Unlimited Websites', 'Free SSL Certificate', 'VIP Support', 'Hourly Backups', 'Free CDN + WAF', 'Dedicated IP'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#22C55E]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="block w-full text-center bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Search */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#6D28D9] relative overflow-hidden animate-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Domain Registration</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 mt-3">Find Your Perfect Domain</h2>
          <p className="text-xl text-gray-200 mb-12">Search and register your ideal domain name today. Over 400+ extensions available with instant activation.</p>
          <div className="flex gap-3 mb-10">
            <input 
              type="text" 
              className="flex-1 p-5 rounded-xl text-black text-lg focus:outline-none focus:ring-4 focus:ring-[#22C55E]/50 shadow-xl" 
              placeholder="yourdomain.com" 
            />
            <button className="bg-[#22C55E] text-black px-12 rounded-xl font-bold hover:bg-[#86EFAC] transition-all text-lg shadow-xl hover:shadow-2xl hover:scale-105">
              Search
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { ext: '.com', price: '$12.99/yr' },
              { ext: '.net', price: '$14.99/yr' },
              { ext: '.org', price: '$13.99/yr' },
              { ext: '.io', price: '$39.99/yr' },
            ].map((d, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 hover:bg-white/15 transition-all">
                <span className="text-gray-200">{d.ext} from</span>
                <span className="text-white font-bold ml-2">{d.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-[#1E0B3A]/30 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 mt-3">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied customers worldwide who trust WebSphere</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "WebSphere has been hosting our company website for 3 years. The uptime is incredible and support team is always helpful. Highly recommended!", name: 'John Smith', role: 'CEO, TechCorp', img: 12 },
              { quote: "Switched from another host and couldn't be happier. The migration was seamless and the performance improvement is noticeable. Great value!", name: 'Sarah Johnson', role: 'Founder, StartupHub', img: 45 },
              { quote: "The speed improvement was immediate. Our e-commerce store loads 3x faster now. Customer support is responsive and knowledgeable.", name: 'Michael Chen', role: 'CTO, CloudBase', img: 33 },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1E0B3A]/50 to-[#1E0B3A]/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#22C55E]/50 transition-all">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/150?img=${t.img}`} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#22C55E]/30" />
                  <div>
                    <div className="font-bold text-white text-lg">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#6D28D9] relative overflow-hidden animate-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#22C55E] font-semibold">🎉 Limited Time Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses who trust WebSphere. Get 50% off your first year with our special launch offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#22C55E] text-black px-10 py-4 rounded-xl font-semibold hover:bg-[#86EFAC] transition-all inline-flex items-center gap-2 shadow-xl shadow-[#22C55E]/30 hover:shadow-[#22C55E]/50 hover:scale-105 text-lg">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#6D28D9] transition-all text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-[#0F0222] animate-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">FAQ</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 mt-3">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1E0B3A]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#6D28D9]/50 transition-all">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-all"
                >
                  <span className="text-lg font-bold text-white">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#6D28D9] transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0222] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6D28D9] to-[#22C55E] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <div className="text-2xl font-bold text-white">WEBSPHERE</div>
              </div>
              <p className="text-gray-400 mb-8 max-w-xs">
                Enterprise-grade web hosting solutions designed for your success. Lightning-fast performance, military-grade security.
              </p>
              <div className="flex gap-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#6D28D9] hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Products', links: ['Web Hosting', 'VPS Hosting', 'Dedicated Servers', 'Cloud Hosting', 'WordPress Hosting'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'] },
              { title: 'Support', links: ['Help Center', 'Documentation', 'Status', 'Community', 'Contact Support'] },
            ].map((col, i) => (
              <div key={i}>
                <h3 className="text-white font-bold mb-6">{col.title}</h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-[#6D28D9] transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© 2026 WebSphere. All rights reserved.</p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
