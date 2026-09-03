'use client';

import React, { useEffect, useRef } from 'react';

const services = [
  {
    icon: '🏘',
    title: 'Residential Plots',
    desc: 'Premium residential plots in prime localities with clear titles and all amenities.',
    span: 'col-span-1',
  },
  {
    icon: '🏢',
    title: 'Commercial Land',
    desc: 'High-footfall commercial land on main roads and NH frontage for business ventures.',
    span: 'col-span-1',
  },
  {
    icon: '🌾',
    title: 'Agricultural Land',
    desc: 'Fertile agricultural land with water sources, canal access, and clear revenue records.',
    span: 'col-span-1',
  },
  {
    icon: '🌳',
    title: 'Farm House Land',
    desc: 'Scenic farm house plots on Maihar Road and highway belts — weekend retreat or investment.',
    span: 'md:col-span-2',
  },
  {
    icon: '📈',
    title: 'Investment Consulting',
    desc: 'Expert guidance on high-ROI land investments with market trend analysis and growth forecasting.',
    span: 'col-span-1',
  },
  {
    icon: '🔍',
    title: 'Property Valuation',
    desc: 'Accurate market valuation of your land based on current rates, location, and demand.',
    span: 'col-span-1',
  },
  {
    icon: '📋',
    title: 'Legal Documentation',
    desc: 'Complete assistance with sale deed, mutation, registry, and all legal paperwork.',
    span: 'col-span-1',
  },
  {
    icon: '🏛',
    title: 'Registration Support',
    desc: 'End-to-end support at Sub-Registrar Office including stamp duty and registration guidance.',
    span: 'col-span-1',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll animate-fade-up">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-3">
            🛠 Our Services
          </span>
          <h2 className="text-section-title font-extrabold text-foreground">
            Everything You Need to{' '}
            <span className="text-gradient-emerald">Buy or Sell Land</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            From finding the right plot to completing documentation — we handle it all.
          </p>
        </div>

        {/* Bento Grid */}
        {/* 
          BENTO AUDIT:
          Array has 8 cards: [Residential, Commercial, Agricultural, FarmHouse, Investment, Valuation, Legal, Registration]
          Row 1: [col-1: Residential cs-1] [col-2: Commercial cs-1] [col-3: Agricultural cs-1]
          Row 2: [col-1: FarmHouse cs-2] [col-3: Investment cs-1]
          Row 3: [col-1: Valuation cs-1] [col-2: Legal cs-1] [col-3: Registration cs-1]
          Placed 8/8 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services?.map((service, i) => (
            <div
              key={service?.title}
              className={`animate-on-scroll animate-fade-up group bg-card hover:bg-primary hover:text-white transition-all duration-300 rounded-3xl p-7 border border-border shadow-sm hover:shadow-xl hover:shadow-primary/20 cursor-pointer ${service?.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service?.icon}
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-white mb-2">
                {service?.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed">
                {service?.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-primary group-hover:text-white/90 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 animate-on-scroll animate-fade-up">
          <a
            href="https://wa.me/918462097970?text=Hello%2C%20I%20need%20help%20with%20land%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base inline-flex items-center gap-2"
          >
            💬 Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
