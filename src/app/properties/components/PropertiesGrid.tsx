'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const allProperties = [
{
  id: 1,
  name: 'Green Valley Residential Plot',
  location: 'Dhawari, Satna',
  price: '₹12.5 Lakh',
  priceNum: 1250000,
  area: '2400 Sq.ft',
  roadWidth: '30 ft',
  category: 'Residential',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16a7af55d-1772541661390.png",
  imageAlt: 'Flat open residential land plot with clear boundary markings in bright daylight, lush green surroundings',
  amenities: ['Water', 'Electricity', 'Road Access']
},
{
  id: 2,
  name: 'Commercial Corner Plot – Main Road',
  location: 'Main Road, Satna',
  price: '₹45 Lakh',
  priceNum: 4500000,
  area: '5000 Sq.ft',
  roadWidth: '60 ft',
  category: 'Commercial',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png",
  imageAlt: 'Wide commercial corner land plot on busy main road with clear visibility in urban area',
  amenities: ['Water', 'Electricity', 'Highway Access', 'Corner Plot']
},
{
  id: 3,
  name: 'Agricultural Land – Fertile Soil',
  location: 'Ramnagar, Satna',
  price: '₹24 Lakh',
  priceNum: 2400000,
  area: '3 Acres',
  roadWidth: '20 ft',
  category: 'Agricultural',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae1933df-1781417520026.png",
  imageAlt: 'Lush green agricultural farmland with rows of crops under clear blue sky in Madhya Pradesh',
  amenities: ['Bore Well', 'Canal Water', 'Farm Road']
},
{
  id: 4,
  name: 'Farm House Plot – Scenic View',
  location: 'Maihar Road, Satna',
  price: '₹18 Lakh',
  priceNum: 1800000,
  area: '4000 Sq.ft',
  roadWidth: '40 ft',
  category: 'Farm House',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: false,
  image: "https://images.unsplash.com/photo-1641060872876-02c63ecd0e38",
  imageAlt: 'Scenic farmhouse land plot surrounded by trees and greenery with mountain view in background',
  amenities: ['Scenic View', 'Water', 'Electricity', 'Gated Access']
},
{
  id: 5,
  name: 'NH-30 Frontage Investment Plot',
  location: 'NH-30, Satna',
  price: '₹22 Lakh',
  priceNum: 2200000,
  area: '3200 Sq.ft',
  roadWidth: 'NH Frontage',
  category: 'Investment',
  purpose: 'Buy',
  water: false,
  verified: true,
  featured: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png",
  imageAlt: 'Prime highway-facing land plot with clear road frontage and high development potential',
  amenities: ['Highway Frontage', 'High Growth Zone', 'Power']
},
{
  id: 6,
  name: 'Budget Residential Plot',
  location: 'New Colony, Satna',
  price: '₹6.5 Lakh',
  priceNum: 650000,
  area: '1500 Sq.ft',
  roadWidth: '24 ft',
  category: 'Residential',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1902373b1-1778338412915.png",
  imageAlt: 'Affordable residential plot in new colony with clear survey marks and nearby infrastructure development',
  amenities: ['Water', 'Electricity', 'Near School']
},
{
  id: 7,
  name: 'Industrial Land – MIDC Zone',
  location: 'Industrial Area, Satna',
  price: '₹85 Lakh',
  priceNum: 8500000,
  area: '8000 Sq.ft',
  roadWidth: '80 ft',
  category: 'Commercial',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_168f844d6-1766507796227.png",
  imageAlt: 'Large industrial zone land plot with wide road access and utility connections in organized sector',
  amenities: ['3-Phase Power', 'Water', 'Wide Road', 'Industrial Zone']
},
{
  id: 8,
  name: 'Residential Plot – Near Railway',
  location: 'Station Road, Satna',
  price: '₹15 Lakh',
  priceNum: 1500000,
  area: '2000 Sq.ft',
  roadWidth: '30 ft',
  category: 'Residential',
  purpose: 'Buy',
  water: true,
  verified: true,
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_145c17c5b-1784136090405.png",
  imageAlt: 'Residential land plot near railway station with good connectivity and developed neighborhood',
  amenities: ['Railway Proximity', 'Water', 'Electricity', 'Market Nearby']
}];


const categories = ['All', 'Residential', 'Commercial', 'Agricultural', 'Farm House', 'Investment'];

const categoryColors: Record<string, string> = {
  Residential: 'bg-primary/10 text-primary',
  Commercial: 'bg-blue-100 text-blue-700',
  Agricultural: 'bg-green-100 text-green-700',
  'Farm House': 'bg-amber-100 text-amber-700',
  Investment: 'bg-purple-100 text-purple-700'
};

export default function PropertiesGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [waterFilter, setWaterFilter] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
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
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  let filtered = allProperties.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    if (waterFilter && !p.water) return false;
    if (verifiedOnly && !p.verified) return false;
    return true;
  });

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.priceNum - b.priceNum);
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.priceNum - a.priceNum);

  return (
    <section ref={sectionRef} className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Bar */}
        <div className="bg-card rounded-2xl border border-border p-4 mb-8 flex flex-wrap gap-3 items-center justify-between shadow-sm">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === cat ?
              'bg-primary text-white shadow-md' :
              'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`
              }>
              
                {cat}
              </button>
            )}
          </div>

          {/* Sort & Toggles */}
          <div className="flex flex-wrap gap-3 items-center">
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={waterFilter}
                onChange={(e) => setWaterFilter(e.target.checked)}
                className="accent-primary" />
              
              Water Available
            </label>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="accent-primary" />
              
              Verified Only
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs border border-border rounded-xl px-3 py-1.5 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> properties
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((prop, i) =>
          <div
            key={prop.id}
            className="animate-on-scroll animate-fade-up card-hover bg-card rounded-3xl overflow-hidden shadow-md border border-border group"
            style={{ animationDelay: `${i * 60}ms` }}>
            
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={prop.image}
                alt={prop.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[prop.category] || 'bg-muted text-muted-foreground'}`}>
                    {prop.category}
                  </span>
                  {prop.verified &&
                <span className="verified-badge text-xs">✅ Verified</span>
                }
                </div>
                {prop.featured &&
              <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold bg-accent text-white px-2 py-0.5 rounded-full">⭐</span>
                  </div>
              }
                <div className="absolute bottom-3 left-3">
                  <span className="glass-dark text-white font-bold text-sm px-2.5 py-1 rounded-lg">
                    {prop.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm mb-1 leading-tight line-clamp-2">{prop.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
                  <svg className="w-3 h-3 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {prop.location}
                </div>
                <div className="flex gap-3 text-xs text-muted-foreground mb-3">
                  <span>📐 {prop.area}</span>
                  <span>🛣 {prop.roadWidth}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {prop.amenities.slice(0, 2).map((a) =>
                <span key={a} className="text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">{a}</span>
                )}
                </div>
                <div className="flex gap-1.5">
                  <Link
                  href="/property-detail"
                  className="flex-1 text-center text-xs font-semibold bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition-colors">
                  
                    View Details
                  </Link>
                  <a
                  href={`https://wa.me/918462097970?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(prop.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-xs"
                  aria-label="WhatsApp">
                  
                    💬
                  </a>
                  <a
                  href="tel:+918462097970"
                  className="px-2.5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-xs"
                  aria-label="Call">
                  
                    📞
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {filtered.length === 0 &&
        <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-bold text-foreground text-lg mb-2">No properties found</h3>
            <p className="text-muted-foreground text-sm mb-4">Try adjusting your filters</p>
            <button
            onClick={() => {setActiveCategory('All');setWaterFilter(false);setVerifiedOnly(false);}}
            className="btn-primary">
            
              Clear Filters
            </button>
          </div>
        }

        {/* Bottom CTA */}
        <div className="mt-12 bg-primary rounded-3xl p-8 text-center text-white shadow-xl shadow-primary/25">
          <h3 className="font-extrabold text-2xl mb-2">Can&apos;t find what you&apos;re looking for?</h3>
          <p className="text-primary-foreground/80 mb-6">
            Tell us your requirements and we&apos;ll find the perfect property for you from our exclusive listings.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/918462097970?text=Hello%2C%20I%20have%20specific%20land%20requirements%20in%20Satna."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold">
              
              💬 Share Requirements on WhatsApp
            </a>
            <a href="tel:+918462097970" className="btn-outline-white">
              📞 Call: +91 84620 97970
            </a>
          </div>
        </div>
      </div>
    </section>);

}
