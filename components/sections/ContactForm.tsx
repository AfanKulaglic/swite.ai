'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  fields?: string[];
  email?: string;
}

export function ContactForm({
  title = 'Get in Touch',
  subtitle,
  fields = ['name', 'email', 'message'],
  email
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (formRef.current) {
          gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true
              }
            }
          );
        }
      } catch (e) {
        // GSAP not available
      }
    };
    animate();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({});
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-[var(--color-background,#000)] to-black">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text,#fff)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl opacity-70 text-[var(--color-text,#fff)]">
              {subtitle}
            </p>
          )}
          {email && (
            <p className="text-sm opacity-50 mt-2 text-[var(--color-text,#fff)]">
              Or email us directly at <a href={`mailto:${email}`} className="text-[var(--color-primary,#4169E1)] hover:underline">{email}</a>
            </p>
          )}
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          {fields.includes('name') && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text,#fff)]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[var(--color-primary,#4169E1)] focus:ring-2 focus:ring-[var(--color-primary,#4169E1)]/20 focus:outline-none transition-all text-white placeholder-white/30"
                placeholder="Your name"
              />
            </div>
          )}

          {fields.includes('email') && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text,#fff)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[var(--color-primary,#4169E1)] focus:ring-2 focus:ring-[var(--color-primary,#4169E1)]/20 focus:outline-none transition-all text-white placeholder-white/30"
                placeholder="you@example.com"
              />
            </div>
          )}

          {fields.includes('company') && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-[var(--color-text,#fff)]">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[var(--color-primary,#4169E1)] focus:ring-2 focus:ring-[var(--color-primary,#4169E1)]/20 focus:outline-none transition-all text-white placeholder-white/30"
                placeholder="Your company"
              />
            </div>
          )}

          {fields.includes('message') && (
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text,#fff)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[var(--color-primary,#4169E1)] focus:ring-2 focus:ring-[var(--color-primary,#4169E1)]/20 focus:outline-none transition-all resize-none text-white placeholder-white/30"
                placeholder="Your message..."
              />
            </div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-[var(--color-primary,#4169E1)] hover:opacity-90 shadow-lg shadow-[var(--color-primary,#4169E1)]/30"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>

          {status === 'success' && (
            <div className="text-center p-4 rounded-xl bg-green-500/20 border border-green-500/30">
              <p className="text-green-400">✓ Message sent successfully!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
