'use client';

import Button from '@/components/ui/Button';

interface Stat {
  value: string;
  label: string;
}

interface CTAProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  showStats?: boolean;
  stats?: Stat[];
  bgGradient?: boolean;
}

export function CTA({
  title,
  subtitle,
  ctaText,
  ctaLink,
  showStats = false,
  stats = [],
  bgGradient = true
}: CTAProps) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className={`rounded-3xl p-12 md:p-16 text-center ${
          bgGradient 
            ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
            : 'bg-white/5 border border-white/10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <Button href={ctaLink} size="lg" variant="outline">
            {ctaText}
          </Button>

          {showStats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
