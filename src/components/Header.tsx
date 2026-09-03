'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-card/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <AppLogo size={40} />
              <div className="hidden sm:block">
                <span
                  className={`font-bold text-base leading-tight block transition-colors duration-300 ${
                    scrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  Jitendra Roy
                </span>
                <span
                  className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                    scrolled ? 'text-muted-foreground' : 'text-white/70'
                  }`}
                >
                  Land Brokers
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks?.map((link) => (
                link?.href?.startsWith('#') ? (
                  <a
                    key={link?.label}
                    href={link?.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                      scrolled ? 'text-foreground/80' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link?.label}
                  </a>
                ) : (
                  <Link
                    key={link?.label}
                    href={link?.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                      scrolled ? 'text-foreground/80' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link?.label}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918462097970"
                className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  scrolled
                    ? 'border-primary text-primary hover:bg-primary hover:text-white' :'border-white/60 text-white hover:bg-white/15'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                +91 84620 97970
              </a>
              <a
                href="https://wa.me/918462097970"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <nav className="flex-1 space-y-1">
            {navLinks?.map((link) => (
              link?.href?.startsWith('#') ? (
                <a
                  key={link?.label}
                  href={link?.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-xl font-medium text-white/80 hover:text-white transition-colors border-b border-white/10"
                >
                  {link?.label}
                </a>
              ) : (
                <Link
                  key={link?.label}
                  href={link?.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-xl font-medium text-white/80 hover:text-white transition-colors border-b border-white/10"
                >
                  {link?.label}
                </Link>
              )
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="tel:+918462097970"
              className="btn-outline-white text-center text-base"
              onClick={() => setMenuOpen(false)}
            >
              📞 Call: +91 84620 97970
            </a>
            <a
              href="https://wa.me/918462097970"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center text-base"
              onClick={() => setMenuOpen(false)}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
