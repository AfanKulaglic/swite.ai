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
      href: "/documentation", 
      label: "Docs",
      special: true,
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const dropdownMenus = {
    Product: {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Templates", href: "/templates" },
        { label: "Integrations", href: "/integrations" },
      ]
    },
    Company: {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ]
    },
    Resources: {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "API", href: "/api-reference" },
      ]
    },
    Legal: {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
      ]
    }
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isDropdownActive = (menuName: string) => {
    const menu = dropdownMenus[menuName as keyof typeof dropdownMenus];
    return menu.links.some(link => isActive(link.href));
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
        className={`hidden lg:flex fixed z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl ${getNavStyles()} ${
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
            <Link href="/" className="relative mb-6 -mt-6 w-full flex items-center px-4 pt-8 transition-all duration-500">
              {/* Logo container with glow - centered */}
              <div className="relative flex-shrink-0 mx-auto group-hover/nav:mx-0">
                {/* Animated glow effect - very bright and visible */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] blur-3xl opacity-100 animate-pulse" />
                
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-2xl shadow-blue-500/80 group-hover/nav:shadow-blue-500/100 group-hover/nav:scale-110 transition-all duration-700 ease-out overflow-hidden">
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
              <div className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap w-0 group-hover/nav:w-auto ml-0 group-hover/nav:ml-3">
                <span className="font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent text-3xl">
                  SWITE.AI
                </span>
              </div>
            </Link>

            {/* Navigation Links - Centered */}
            <div className="flex-1 flex flex-col justify-center gap-2 w-full px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center w-full h-12 rounded-2xl transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30"
                      : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                  } group-hover/nav:gap-3 group-hover/nav:px-3`}
                >
                  <div className="w-6 h-6 flex-shrink-0 mx-auto group-hover/nav:mx-0">
                    {link.icon}
                  </div>
                  <span className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap text-sm font-medium w-0 group-hover/nav:w-auto">
                    {link.label}
                  </span>
                </Link>
              ))}

              {/* Dropdown Menus */}
              {Object.entries(dropdownMenus).map(([menuName, menu]) => (
                <div key={menuName} className="relative">
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === menuName ? null : menuName)}
                    className={`relative flex items-center w-full h-12 rounded-2xl transition-all duration-300 ${
                      isDropdownActive(menuName)
                        ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30"
                        : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                    } group-hover/nav:gap-3 group-hover/nav:px-3`}
                  >
                    <div className="w-6 h-6 flex-shrink-0 mx-auto group-hover/nav:mx-0">
                      {menu.icon}
                    </div>
                    <span className="opacity-0 group-hover/nav:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap text-sm font-medium w-0 group-hover/nav:w-auto">
                      {menuName}
                    </span>
                    <svg 
                      className={`absolute right-3 w-4 h-4 opacity-0 group-hover/nav:opacity-100 transition-all duration-300 ${expandedMobile === menuName ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded submenu for vertical nav */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedMobile === menuName ? 'max-h-48 opacity-100 mt-1' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="opacity-0 group-hover/nav:opacity-100 pl-3 space-y-1">
                      {menu.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                            isActive(link.href)
                              ? "bg-white/10 text-white"
                              : "text-white/50 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
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
              <div className="relative">
                {/* Animated glow effect - same as vertical */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-100 animate-pulse" />
                
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-2xl shadow-blue-500/80 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/100 overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="SWITE.AI Logo" 
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
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

              {/* Dropdown Menus */}
              {Object.entries(dropdownMenus).map(([menuName, menu]) => (
                <div 
                  key={menuName}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(menuName)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
                      isDropdownActive(menuName)
                        ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/30"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="w-5 h-5">
                      {menu.icon}
                    </div>
                    <span className="text-sm font-medium">{menuName}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === menuName ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 bg-black backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 z-[60] ${
                      openDropdown === menuName 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="p-2">
                      {menu.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            isActive(link.href)
                              ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white shadow-lg shadow-[#4169E1]/20"
                              : "text-white/80 hover:text-white hover:bg-white/10"
                          }`}
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
        <div className="flex items-center justify-around px-2 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
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

          {/* Mobile Dropdown Trigger */}
          <button
            onClick={() => setExpandedMobile(expandedMobile ? null : 'menu')}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 text-white/40 hover:text-white"
          >
            <div className="relative p-2">
              <div className="w-5 h-5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>

        {/* Mobile Expanded Menu */}
        <div 
          className={`overflow-hidden transition-all duration-300 border-t border-white/10 ${
            expandedMobile === 'menu' ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {Object.entries(dropdownMenus).map(([menuName, menu]) => (
              <div key={menuName}>
                <div className="flex items-center gap-2 mb-2 text-white/90 text-sm font-bold">
                  <div className="w-4 h-4">
                    {menu.icon}
                  </div>
                  {menuName}
                </div>
                <div className="space-y-1 pl-6">
                  {menu.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setExpandedMobile(null)}
                      className={`block px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                        isActive(link.href)
                          ? "bg-gradient-to-br from-[#4169E1] to-[#6B46C1] text-white"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="lg:hidden h-20" />
    </>
  );
}
