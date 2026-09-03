'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const trustBadges = [
{ icon: '🏆', value: '500+', label: 'Properties Sold' },
{ icon: '⭐', value: '15+', label: 'Years Experience' },
{ icon: '😊', value: '450+', label: 'Happy Clients' },
{ icon: '✅', value: '100%', label: 'Verified Docs' }];


export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef?.current) return;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 700, 1);
      const blur = progress * 16;
      const brightness = 0.85 - progress * 0.45;
      const scale = 1 + progress * 0.06;
      bgRef.current.style.filter = `blur(${blur}px) brightness(${brightness})`;
      bgRef.current.style.transform = `scale(${scale})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 transition-none will-change-transform">
        <AppImage
          src="https://images.unsplash.com/photo-1594928635573-292d47012c42"
          alt="Aerial view of green land plots in Madhya Pradesh countryside with golden sunset light and expansive fields"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
      </div>
      {/* Scrim overlays */}
      <div className="absolute inset-0 hero-scrim hidden md:block" />
      <div className="absolute inset-0 hero-scrim-mobile md:hidden" />
      <div className="absolute inset-0 noise-overlay" />
      {/* Floating blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 blob-gold opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 blob-primary opacity-20 pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping-slow" />
            <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
              Satna & Madhya Pradesh&apos;s #1 Land Broker
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-hero-xl font-extrabold text-white mb-6 animate-fade-up delay-200">
            Find Your Perfect{' '}
            <span className="relative">
              <span className="text-gradient-gold">Land Investment</span>
            </span>{' '}
            with Confidence
          </h1>

          {/* Subheading */}
          <p className="text-white/80 text-lg leading-relaxed mb-8 animate-fade-up delay-300 max-w-xl">
            Verified properties, transparent deals, legal assistance, and expert consultation in Satna & Madhya Pradesh.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up delay-400">
            <Link href="/properties" className="btn-primary text-base">
              Browse Properties
            </Link>
            <a
              href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20want%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base">
              
              📅 Book Site Visit
            </a>
            <a href="tel:+918462097970" className="btn-outline-white text-base">
              📞 Call Now
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-500">
            {trustBadges?.map((badge, i) =>
            <div
              key={badge?.label}
              className="glass-dark rounded-2xl px-4 py-3 text-center animate-float-badge"
              style={{ animationDelay: `${i * 0.5}s` }}>
              
                <div className="text-xl mb-1">{badge?.icon}</div>
                <div className="text-white font-bold text-lg leading-tight">{badge?.value}</div>
                <div className="text-white/60 text-xs">{badge?.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-t-3xl px-6 py-5 shadow-2xl">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Property Search</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
              { placeholder: 'Location', icon: '📍' },
              { placeholder: 'Property Type', icon: '🏘' },
              { placeholder: 'Budget (₹)', icon: '💰' },
              { placeholder: 'Area (Sq.ft)', icon: '📐' },
              { placeholder: 'Purpose', icon: '🎯' },
              { placeholder: 'Road Facing', icon: '🛣' }]?.
              map((field) =>
              <div key={field?.placeholder} className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">{field?.icon}</span>
                  <input
                  type="text"
                  placeholder={field?.placeholder}
                  className="w-full pl-8 pr-3 py-2.5 text-sm bg-muted/60 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground/60 text-foreground" />
                
                </div>
              )}
            </div>
            <div className="flex justify-end mt-3">
              <Link href="/properties" className="btn-primary text-sm py-2.5 px-6">
                🔍 Search Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
