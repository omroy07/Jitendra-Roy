'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const values = [
{ icon: '🎯', title: 'Mission', desc: 'To make land buying and selling in Satna transparent, legal, and hassle-free for every client.' },
{ icon: '🔭', title: 'Vision', desc: 'To be the most trusted real estate partner in Madhya Pradesh by 2030, with 1000+ verified properties.' },
{ icon: '💎', title: 'Values', desc: 'Transparency, Integrity, Legal Compliance, Client-First Approach, and Long-Term Relationships.' }];


export default function AboutSection() {
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
    <section ref={sectionRef} className="section-padding bg-muted" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative animate-on-scroll animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1863d7c1e-1773569105883.png"
                alt="Professional real estate broker consulting clients about land investment in well-lit office with documents and property maps"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-4 shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold">
                  15
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">Years of</div>
                  <div className="text-muted-foreground text-xs">Market Expertise</div>
                </div>
              </div>
            </div>
            {/* Floating trust badge */}
            <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-3 shadow-xl border border-border animate-float-badge">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="font-bold text-foreground text-xs">Top Rated</div>
                  <div className="text-muted-foreground text-xs">Broker in Satna</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll animate-fade-up" style={{ animationDelay: '150ms' }}>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-4">
              🏢 About Us
            </span>
            <h2 className="text-section-title font-extrabold text-foreground mb-4">
              Satna&apos;s Most Trusted{' '}
              <span className="text-gradient-emerald">Land Broker</span>{' '}
              Since 2009
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jitendra Roy Land Brokers is a premier real estate firm based in Dhawari, Satna, Madhya Pradesh. 
              With over 15 years of experience, we have helped 450+ families and investors find their dream land 
              — be it a residential plot, agricultural land, or commercial property.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our deep knowledge of the local market, strong legal network, and commitment to transparent dealings 
              make us the first choice for land transactions in Satna and surrounding areas.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-6">
              {values?.map((v) =>
              <div key={v?.title} className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-2xl flex-shrink-0">{v?.icon}</span>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{v?.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{v?.desc}</p>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://wa.me/918462097970?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Jitendra%20Roy%20Land%20Brokers."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2">
              
              💬 Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>);

}
