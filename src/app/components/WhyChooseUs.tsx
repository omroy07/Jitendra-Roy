'use client';

import React, { useEffect, useRef } from 'react';

const features = [
  {
    icon: '⚖️',
    title: '100% Legal Verification',
    desc: 'Every property undergoes thorough legal verification — title deed, encumbrance certificate, and mutation records checked.',
    color: 'from-emerald-50 to-emerald-100',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '💰',
    title: 'Best Market Prices',
    desc: 'We negotiate the best market rates for buyers and ensure sellers get fair value. No hidden charges.',
    color: 'from-blue-50 to-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '👨‍💼',
    title: 'Experienced Team',
    desc: '15+ years of local market expertise. Our team knows every locality, growth corridor, and price trend in Satna.',
    color: 'from-purple-50 to-purple-100',
    iconBg: 'bg-purple-100',
  },
  {
    icon: '🔍',
    title: 'Transparent Transactions',
    desc: 'Full transparency in every deal. We share all property documents, price history, and legal status upfront.',
    color: 'from-amber-50 to-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    icon: '🚗',
    title: 'Site Visit Assistance',
    desc: 'Free site visit arranged for every serious buyer. We accompany you to verify the property on ground.',
    color: 'from-teal-50 to-teal-100',
    iconBg: 'bg-teal-100',
  },
  {
    icon: '📊',
    title: 'Investment Guidance',
    desc: 'Data-driven investment advice based on upcoming infrastructure, growth zones, and 5-year market projections.',
    color: 'from-rose-50 to-rose-100',
    iconBg: 'bg-rose-100',
  },
  {
    icon: '📄',
    title: 'Fast Documentation',
    desc: 'We complete all documentation — sale deed, registry, mutation — within the shortest possible time.',
    color: 'from-indigo-50 to-indigo-100',
    iconBg: 'bg-indigo-100',
  },
  {
    icon: '🤝',
    title: 'After Sale Support',
    desc: 'Our relationship continues after the sale. We assist with mutation, property tax, and any post-purchase issues.',
    color: 'from-orange-50 to-orange-100',
    iconBg: 'bg-orange-100',
  },
];

const stats = [
  { value: '500+', label: 'Properties Sold' },
  { value: '15+', label: 'Years in Business' },
  { value: '450+', label: 'Happy Clients' },
  { value: '100%', label: 'Verified Properties' },
];

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="section-padding bg-background" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll animate-fade-up">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-3">
            🌟 Why Choose Us
          </span>
          <h2 className="text-section-title font-extrabold text-foreground">
            Satna&apos;s Most{' '}
            <span className="text-gradient-emerald">Trusted Land Broker</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            We go beyond just selling land — we build trust, ensure legality, and guide your investment journey.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 animate-on-scroll animate-fade-up">
          {stats?.map((stat) => (
            <div key={stat?.label} className="bg-primary rounded-2xl p-5 text-center text-white shadow-lg shadow-primary/25">
              <div className="text-3xl font-extrabold">{stat?.value}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        {/* 
          BENTO AUDIT:
          Array has 8 cards: [Legal, Price, Team, Transparent, SiteVisit, Investment, Docs, AfterSale]
          Row 1: [col-1: Legal cs-1] [col-2: Price cs-1] [col-3: Team cs-1] [col-4: Transparent cs-1]
          Row 2: [col-1: SiteVisit cs-1] [col-2: Investment cs-1] [col-3: Docs cs-1] [col-4: AfterSale cs-1]
          Placed 8/8 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features?.map((feat, i) => (
            <div
              key={feat?.title}
              className={`animate-on-scroll animate-fade-up group bg-gradient-to-br ${feat?.color} rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className={`w-12 h-12 ${feat?.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feat?.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2">{feat?.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feat?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
