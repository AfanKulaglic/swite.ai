"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedSpider from "@/components/ui/AnimatedSpider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? "bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50 py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              {/* Animated glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg transition-all duration-700 ${
                scrolled 
                  ? "opacity-0 group-hover:opacity-40" 
                  : "opacity-0 group-hover:opacity-60 animate-pulse"
              }`} />
              {/* Logo container */}
              <div className={`relative rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-xl transition-all duration-700 ease-out ${
                scrolled 
                  ? "w-10 h-10 p-0.5 shadow-blue-500/30 group-hover:shadow-blue-500/50" 
                  : "w-12 h-12 p-1 shadow-blue-500/40 group-hover:shadow-blue-500/60 group-hover:scale-110"
              }`}>
                <AnimatedSpider state="idle" className="w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent transition-all duration-700 ${
                scrolled ? "text-lg" : "text-xl"
              }`}>
                SWITE.AI
              </span>
              <span className={`font-semibold text-white/40 tracking-wider transition-all duration-700 ${
                scrolled ? "text-[9px] -mt-0.5 opacity-0 h-0" : "text-[10px] -mt-1 opacity-100"
              }`}>
                AI WEBSITE BUILDER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className={`flex items-center gap-2 backdrop-blur-xl border rounded-full shadow-lg transition-all duration-700 ease-out ${
              scrolled 
                ? "bg-white/5 border-white/10 p-1" 
                : "bg-white/10 border-white/20 p-1.5"
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full text-sm font-bold transition-all duration-500 ${
                    scrolled ? "px-4 py-1.5" : "px-5 py-2"
                  } ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive(link.href) && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50 transition-all duration-500" />
                    </>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={`rounded-full text-sm font-bold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-500 ${
                scrolled ? "px-4 py-2" : "px-5 py-2.5"
              }`}
            >
              Sign in
            </Link>
            <Link
              href="/studio"
              className="relative group/btn"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md transition-all duration-700 ${
                scrolled 
                  ? "opacity-50 group-hover/btn:opacity-75" 
                  : "opacity-75 group-hover/btn:opacity-100"
              }`} />
              <div className={`relative rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                scrolled ? "px-5 py-2" : "px-6 py-2.5"
              }`}>
                Start Building
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden relative rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-500 shadow-lg ${
              scrolled ? "w-10 h-10" : "w-11 h-11"
            }`}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-5 py-3 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Sign in
            </Link>
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold text-center shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300"
            >
              Start Building
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
