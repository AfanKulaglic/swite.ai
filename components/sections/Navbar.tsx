'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NavbarProps } from '@/lib/supabase/types';

/**
 * Navbar Section Component
 * Customizable navigation bar for templates
 */
export function Navbar({
  logo = '/logo.png',
  logoText = 'SWITE.AI',
  links = [],
  dropdowns = [],
  ctaButton,
  secondaryButton,
  variant = 'default'
}: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' }
  ];

  const navLinks = links.length > 0 ? links : defaultLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {logo && (
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg overflow-hidden">
                <Image 
                  src={logo} 
                  alt={logoText} 
                  fill
                  className="object-contain p-2"
                />
              </div>
            )}
            {logoText && (
              <span className="font-black text-xl bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {logoText}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdowns */}
            {dropdowns.map((dropdown) => (
              <div 
                key={dropdown.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(dropdown.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-1"
                >
                  {dropdown.label}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === dropdown.label ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-56 bg-black backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ${
                    openDropdown === dropdown.label 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="p-2">
                    {dropdown.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {secondaryButton.text}
              </Link>
            )}
            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {ctaButton.text}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}

              {dropdowns.map((dropdown) => (
                <div key={dropdown.label} className="space-y-1">
                  <div className="px-4 py-2 text-sm font-bold text-white/90">
                    {dropdown.label}
                  </div>
                  {dropdown.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-8 py-2 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2">
                {secondaryButton && (
                  <Link
                    href={secondaryButton.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-center text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {secondaryButton.text}
                  </Link>
                )}
                {ctaButton && (
                  <Link
                    href={ctaButton.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg transition-all duration-300"
                  >
                    {ctaButton.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
