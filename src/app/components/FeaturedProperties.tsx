'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const properties = [
  {
    id: 1,
    name: 'Unchehara Residential Plot',
    location: 'Unchehara, Satna',
    price: '₹450–₹500 / Sq.ft',
    area: '2400 Sq.ft',
    roadWidth: '40 m from Highway',
    category: 'Residential',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1f5eda2-1776279743397.png",
    imageAlt: 'Residential land plot in Unchehara near railway station and highway',
    verified: true,
    featured: true,
    amenities: ['Near Railway Station', 'Highway Access', 'Road Access'],
    description: 'Residential plot in Unchehara, located near the railway station and approximately 40 meters from the highway.'
  },
  {
    id: 2,
    name: 'Unchehara Maihar Main Road Plot',
    location: 'Unchehara Maihar  Main Road, Satna',
    price: '₹800 / Sq.ft',
    area: '5000 Sq.ft',
    roadWidth: 'Main Road',
    category: 'Commercial',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eaccd3d3-1765303391585.png",
    imageAlt: 'Main road property plot in Unchehara',
    verified: true,
    featured: true,
    amenities: ['Main Road', 'Water', 'Electricity', 'Road Access'],
    description: 'Prime property located on Unchehara Main Road, suitable for commercial or investment purposes.'
  },
  {
    id: 3,
    name: 'Jignahat Unchehara Main Road Plot',
    location: 'Jignahat Unchehara, Satna',
    price: '₹650 / Sq.ft',
    area: '100 ft Frontage',
    roadWidth: 'Main Road',
    category: 'Commercial',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae1933df-1781417520026.png",
    imageAlt: 'Main road plot at Jignahat Unchehara',
    verified: true,
    featured: true,
    amenities: ['Main Road', '100 ft Frontage', 'High Visibility'],
    description: 'Main road property in Jignahat Unchehara with approximately 100 ft frontage.'
  },
  {
    id: 4,
    name: 'Jignahat Unchehara Premium Plot',
    location: 'Jignahat Unchehara, Satna',
    price: '₹1,500 / Sq.ft',
    area: 'Available on Request',
    roadWidth: 'Main Road',
    category: 'Premium',
    image: "https://images.unsplash.com/photo-1641060872876-02c63ecd0e38",
    imageAlt: 'Premium land plot on main road in Jignahat Unchehara',
    verified: true,
    featured: true,
    amenities: ['Main Road', 'Prime Location', 'High Visibility'],
    description: 'Premium property available on the main road at Jignahat Unchehara.'
  }
];

const categoryColors: Record<string, string> = {
  Residential: 'bg-primary/10 text-primary',
  Commercial: 'bg-blue-100 text-blue-700',
  Agricultural: 'bg-green-100 text-green-700',
  'Farm House': 'bg-amber-100 text-amber-700',
  Investment: 'bg-purple-100 text-purple-700'
};

export default function FeaturedProperties() {
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
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 animate-on-scroll animate-fade-up">
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-3">
              🏘 Featured Properties
            </span>
            <h2 className="text-section-title font-extrabold text-foreground">
              Prime Land in{' '}
              <span className="text-gradient-emerald">Satna & MP</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Handpicked, verified properties with clear titles and legal documentation.
            </p>
          </div>
          <Link
            href="/properties"
            className="btn-primary whitespace-nowrap self-start sm:self-auto">

            View All Properties →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop, i) =>
            <div
              key={prop.id}
              className={`animate-on-scroll animate-fade-up card-hover bg-card rounded-3xl overflow-hidden shadow-md border border-border group`}
              style={{ animationDelay: `${i * 80}ms` }}>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={prop.image}
                  alt={prop.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                {/* Gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[prop.category] || 'bg-muted text-muted-foreground'}`}>
                    {prop.category}
                  </span>
                  {prop.verified &&
                    <span className="verified-badge flex items-center gap-1">
                      ✅ Verified
                    </span>
                  }
                </div>
                {prop.featured &&
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold bg-accent text-white px-2.5 py-1 rounded-full">⭐ Featured</span>
                  </div>
                }
                {/* Price */}
                <div className="absolute bottom-3 left-3">
                  <span className="glass-dark text-white font-bold text-base px-3 py-1 rounded-xl">
                    {prop.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground text-base mb-1 leading-tight">{prop.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {prop.location}
                </div>

                <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">📐 {prop.area}</span>
                  <span className="flex items-center gap-1">🛣 {prop.roadWidth}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {prop.amenities.slice(0, 3).map((a) =>
                    <span key={a} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      {a}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-wrap">
                  <Link
                    href="/property-detail"
                    className="flex-1 text-center text-sm font-semibold bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition-colors">

                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20am%20interested%20in%20${encodeURIComponent(prop.name)}%20at%20${encodeURIComponent(prop.location)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-sm"
                    aria-label="WhatsApp inquiry">

                    💬
                  </a>
                  <a
                    href="tel:+918462097970"
                    className="px-3 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm"
                    aria-label="Call now">

                    📞
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
