import React from 'react';

export default function PropertiesHero() {
  return (
    <section className="relative bg-foreground pt-24 pb-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 blob-primary opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 blob-gold opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest bg-accent/20 px-3 py-1 rounded-full mb-4">
          🏘 All Properties
        </span>
        <h1 className="text-hero-xl font-extrabold text-white mb-4">
          Browse Verified{' '}
          <span className="text-gradient-gold">Land Properties</span>
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Explore our curated collection of residential, commercial, agricultural, and investment land in Satna & MP.
        </p>
        <div className="flex justify-center gap-3 mt-6 text-sm text-white/60">
          <span className="glass-dark rounded-full px-3 py-1">500+ Properties</span>
          <span className="glass-dark rounded-full px-3 py-1">100% Verified</span>
          <span className="glass-dark rounded-full px-3 py-1">Clear Title</span>
        </div>
      </div>
    </section>
  );
}
