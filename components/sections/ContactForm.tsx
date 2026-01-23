'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  fields?: string[];
}

export function ContactForm({
  title = 'Get in Touch',
  subtitle,
  fields = ['name', 'email', 'message']
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl opacity-80">
              {subtitle}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.includes('name') && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
          )}

          {fields.includes('email') && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
          )}

          {fields.includes('company') && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
          )}

          {fields.includes('message') && (
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none"
              />
            </div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>

          {status === 'success' && (
            <p className="text-center text-green-400">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
