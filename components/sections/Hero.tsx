'use client';

import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgImage?: string;
  alignment?: 'left' | 'center' | 'right';
  overlay?: 'dark' | 'light' | 'none';
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  secondaryCtaText,
  secondaryCtaLink,
  bgImage,
  alignment = 'center',
  overlay = 'dark'
}: HeroProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const overlayClasses = {
    dark: 'bg-black/50',
    light: 'bg-white/50',
    none: ''
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {overlay !== 'none' && (
            <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className={`flex flex-col ${alignmentClasses[alignment]} max-w-4xl mx-auto space-y-8`}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
              {subtitle}
            </p>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap gap-4 justify-center">
              {ctaText && (
                <Button href={ctaLink} size="lg">
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button href={secondaryCtaLink} variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
