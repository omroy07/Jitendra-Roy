'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const images = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1500606d7-1777100792119.png",
  alt: 'Main view of premium residential plot with clear boundary markings and road access in bright daylight'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1097c4409-1774514615488.png",
  alt: 'Aerial view of the land plot showing full extent of property boundaries with surrounding green area'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_18be02cc0-1766337706816.png",
  alt: 'Side view of property showing road frontage and neighboring development in residential area'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1573391d7-1775675583770.png",
  alt: 'Corner view of the plot showing road connectivity and clear visibility from main junction'
}];


export default function PropertyGallery() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section className="relative pt-20 bg-foreground">
      {/* Back breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/properties" className="hover:text-white transition-colors">Properties</a>
          <span>/</span>
          <span className="text-white">Green Valley Residential Plot</span>
        </div>
      </div>
      {/* Main Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-[480px] shadow-2xl">
          <AppImage
            src={images?.[activeImg]?.src}
            alt={images?.[activeImg]?.alt}
            fill
            priority
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 1280px) 100vw, 1280px" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Navigation arrows */}
          <button
            onClick={() => setActiveImg((prev) => (prev - 1 + images?.length) % images?.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-dark w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image">
            
            ‹
          </button>
          <button
            onClick={() => setActiveImg((prev) => (prev + 1) % images?.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-dark w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image">
            
            ›
          </button>

          {/* Image count */}
          <div className="absolute bottom-4 right-4 glass-dark rounded-full px-3 py-1 text-white text-xs font-semibold">
            {activeImg + 1} / {images?.length}
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="verified-badge">✅ Verified</span>
            <span className="property-badge">Residential</span>
            <span className="text-xs font-bold bg-accent text-white px-2.5 py-1 rounded-full">⭐ Featured</span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-3">
          {images?.map((img, i) =>
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
            i === activeImg ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-90'}`
            }
            aria-label={`View image ${i + 1}`}>
            
              <AppImage
              src={img?.src}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px" />
            
            </button>
          )}
        </div>
      </div>
    </section>);

}
