'use client';

import { Hero } from '@/components/sections/Hero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { ContactForm } from '@/components/sections/ContactForm';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Portfolio } from '@/components/sections/Portfolio';
import { About } from '@/components/sections/About';
import { Stats } from '@/components/sections/Stats';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { FeaturesWithList } from '@/components/sections/FeaturesWithList';
import { Pricing } from '@/components/sections/Pricing';
import { DomainSearch } from '@/components/sections/DomainSearch';
import { FAQ } from '@/components/sections/FAQ';
import { FooterSection } from '@/components/sections/FooterSection';
import { Navbar } from '@/components/sections/Navbar';
import { SectionComponent, SiteLayout, SiteTheme } from '@/lib/supabase/types';

// Component registry - maps type strings to React components
const COMPONENT_MAP = {
  Hero,
  Features: FeatureGrid,
  FeatureGrid: FeatureGrid,
  ContactForm,
  Testimonials,
  CTA,
  Portfolio,
  About,
  Stats,
  TrustBadges,
  FeaturesWithList,
  Pricing,
  DomainSearch,
  FAQ,
  FooterSection,
  Navbar
} as const;

interface DynamicRendererProps {
  layout: SiteLayout;
  theme?: SiteTheme;
  editable?: boolean;
  onSectionClick?: (sectionId: string) => void;
}

/**
 * DynamicRenderer - Renders a site from JSON layout data
 * This is the core of the component-as-data architecture
 */
export function DynamicRenderer({
  layout,
  theme,
  editable = false,
  onSectionClick
}: DynamicRendererProps) {
  // Sort sections by order if specified
  const sortedSections = [...layout.sections].sort((a, b) => {
    const orderA = a.order ?? 0;
    const orderB = b.order ?? 0;
    return orderA - orderB;
  });

  return (
    <div 
      className="dynamic-site"
      style={{
        // Apply theme colors as CSS variables
        ...(theme?.colors && {
          '--color-primary': theme.colors.primary,
          '--color-secondary': theme.colors.secondary,
          '--color-background': theme.colors.background,
          '--color-text': theme.colors.text,
          '--color-accent': theme.colors.accent
        }),
        // Apply theme fonts
        ...(theme?.fonts && {
          '--font-heading': theme.fonts.heading,
          '--font-body': theme.fonts.body
        })
      } as React.CSSProperties}
    >
      {sortedSections.map((section) => {
        const Component = COMPONENT_MAP[section.type as keyof typeof COMPONENT_MAP];

        if (!Component) {
          console.warn(`Unknown component type: ${section.type}`);
          return (
            <div key={section.id} className="p-8 text-center text-red-500">
              Unknown component: {section.type}
            </div>
          );
        }

        return (
          <div
            key={section.id}
            data-section-id={section.id}
            data-section-type={section.type}
            className={editable ? 'editable-section' : ''}
            onClick={() => editable && onSectionClick?.(section.id)}
          >
            <Component {...(section.props as any)} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Helper function to validate layout structure
 */
export function validateLayout(layout: any): layout is SiteLayout {
  if (!layout || typeof layout !== 'object') return false;
  if (!Array.isArray(layout.sections)) return false;
  
  return layout.sections.every((section: any) => {
    return (
      typeof section.id === 'string' &&
      typeof section.type === 'string' &&
      typeof section.props === 'object'
    );
  });
}

/**
 * Helper function to get available component types
 */
export function getAvailableComponents() {
  return Object.keys(COMPONENT_MAP);
}

/**
 * Helper function to get default props for a component type
 */
export function getDefaultProps(componentType: string): Record<string, any> {
  const defaults: Record<string, any> = {
    Hero: {
      title: 'Welcome',
      subtitle: 'Your journey starts here',
      ctaText: 'Get Started',
      ctaLink: '/',
      alignment: 'center'
    },
    Features: {
      title: 'Features',
      features: []
    },
    ContactForm: {
      title: 'Get in Touch',
      fields: ['name', 'email', 'message']
    },
    Testimonials: {
      title: 'What Our Customers Say',
      testimonials: []
    },
    CTA: {
      title: 'Ready to get started?',
      ctaText: 'Get Started',
      ctaLink: '/'
    },
    Portfolio: {
      title: 'Our Work',
      projects: [],
      layout: 'grid',
      columns: 3
    },
    About: {
      title: 'About Us',
      content: 'Tell your story here...',
      skills: []
    },
    Navbar: {
      logo: '/logo.png',
      logoText: 'Brand',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Contact', href: '/contact' }
      ],
      ctaButton: {
        text: 'Get Started',
        href: '/signup'
      },
      secondaryButton: {
        text: 'Sign In',
        href: '/login'
      }
    }
  };

  return defaults[componentType] || {};
}
