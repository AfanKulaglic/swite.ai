"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'vertical' | 'shrinking' | 'expanding' | 'horizontal'>('vertical');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      
      if (scrolled && !isScrolled) {
        // Scrolling down - vertical to horizontal
        setAnimationPhase('shrinking');
        setTimeout(() => setAnimationPhase('expanding'), 200);
        setTimeout(() => setAnimationPhase('horizontal'), 400);
      } else if (!scrolled && isScrolled) {
        // Scrolling up - horizontal to vertical
        setAnimationPhase('expanding');
        setTimeout(() => setAnimationPhase('shrinking'), 200);
        setTimeout(() => setAnimationPhase('vertical'), 400);
      }
      
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { 
      href: "/", 
      label: "Home",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: "/studio", 
      label: "Works",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      href: "/features", 
      label: "Features",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      href: "/contact", 
      label: "Contact",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const getNavStyles = () => {
    switch (animationPhase) {
      case 'vertical':
        return 'left-4 top-4 bottom-4 w-20 opacity-100 scale-100';
      case 'shrinking':
        return 'left-4 top-4 bottom-auto w-20 h-20 opacity-80 scale-90';
      case 'expanding':
        return 'left-4 top-4 right-4 bottom-auto h-16 opacity-80 scale-95';
      case 'horizontal':
        return 'left-4 top-4 right-4 bottom-auto h-16 opacity-100 scale-100';
      default:
        return 'left-4 top-4 bottom-4 w-20 opacity-100 scale-100';
    }
  };

  const showVerticalContent = animationPhase === 'vertical';
  const showHorizontalContent = animationPhase === 'horizontal';
  const isTransitioning = animationPhase === 'shrinking' || animationPhase === 'expanding';

  return (
    <>
      {/* Unified Navigation - Morphs between vertical and horizontal */}
      <nav 
        style={{ 
          transition: 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform, width, height, opacity'
        }} 
        className={`hidden lg:flex fixed z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden ${getNavStyles()} ${
          showVerticalContent ? 'flex-col items-center py-6 group/nav hover:w-64' : 'flex-row items-center justify-between px-6 py-3'
        }`}
      >
        {/* Vertical Layout Content */}
        <div 
          style={{ 
            transition: 'opacity 0.1s ease-out',
            transitionDelay: showVerticalContent ? '0.1s' : '0s'
          }}
          className={`${showVerticalContent ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'} w-full h-full flex flex-col`}
        >
            {/* Logo at top */}
            <Link href="/" className="relative mb-8 w-full flex items-center justify-center group-hover/nav:justify-start px-4 transition-all duration-500">
              <div className="relative flex items-center gap-3">
                {/* Logo container with glow */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover/nav:opacity-60 animate-pulse transition-all duration-700" />
                  
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-xl shadow-blue-500/40 group-hover/nav:shadow-blue-500/60 group-hover/nav:scale-110 transition-all duration-700 ease-out overflow-hidden">
                    <Image 
                      src="/logo.png" 
                      alt="SWITE.AI Logo" 
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>

                {/* SWITE.AI text */}
                <div className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap w-0 group-hover/nav:w-auto">
                  <span className="font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent text-3xl">
                    SWITE.AI
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation Links - Centered */}
            <div className="flex-1 flex flex-col justify-center gap-2 w-full px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30"
                      : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                  } group-hover/nav:w-full group-hover/nav:justify-start group-hover/nav:gap-3 group-hover/nav:px-3`}
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    {link.icon}
                  </div>
                  <span className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap text-sm font-medium w-0 group-hover/nav:w-auto">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto w-full px-3 space-y-2">
              <Link
                href="/login"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 group-hover/nav:w-full group-hover/nav:justify-start group-hover/nav:gap-3 group-hover/nav:px-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap text-sm font-medium w-0 group-hover/nav:w-auto">
                  Sign In
                </span>
              </Link>

              <Link
                href="/studio"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30 hover:shadow-[#4169E1]/50 transition-all duration-300 group-hover/nav:w-full group-hover/nav:justify-start group-hover/nav:gap-3 group-hover/nav:px-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap text-sm font-medium w-0 group-hover/nav:w-auto">
                  Start Free
                </span>
              </Link>
            </div>
        </div>

        {/* Horizontal Layout Content */}
        <div 
          style={{ 
            transition: 'opacity 0.1s ease-out',
            transitionDelay: showHorizontalContent ? '0.1s' : '0s'
          }}
          className={`${showHorizontalContent ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'} w-full flex items-center justify-between`}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/60">
                <Image 
                  src="/logo.png" 
                  alt="SWITE.AI Logo" 
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <span className="font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent text-xl">
                SWITE.AI
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="w-5 h-5">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-5 py-2.5 rounded-2xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/studio"
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium shadow-lg shadow-[#4169E1]/30 hover:shadow-[#4169E1]/50 hover:scale-105 transition-all duration-300"
              >
                Start Free
              </Link>
            </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
        <div className="flex items-center justify-around px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              <div className={`relative ${isActive(link.href) ? 'scale-110' : ''} transition-transform`}>
                {isActive(link.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] rounded-lg blur-md opacity-50" />
                )}
                <div className={`relative ${
                  isActive(link.href) 
                    ? 'bg-gradient-to-r from-[#4169E1] to-[#6B46C1] p-2 rounded-lg' 
                    : 'p-2'
                }`}>
                  <div className="w-5 h-5">
                    {link.icon}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="lg:hidden h-20" />
    </>
  );
}
