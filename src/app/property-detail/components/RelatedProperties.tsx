import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const related = [
{
  id: 2,
  name: 'Commercial Corner Plot',
  location: 'Main Road, Satna',
  price: '₹45 Lakh',
  area: '5000 Sq.ft',
  category: 'Commercial',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png",
  imageAlt: 'Wide commercial corner land plot on busy main road with clear visibility in urban area'
},
{
  id: 5,
  name: 'NH-30 Investment Plot',
  location: 'NH-30, Satna',
  price: '₹22 Lakh',
  area: '3200 Sq.ft',
  category: 'Investment',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png",
  imageAlt: 'Prime highway-facing land plot with clear road frontage and high development potential'
},
{
  id: 6,
  name: 'Budget Residential Plot',
  location: 'New Colony, Satna',
  price: '₹6.5 Lakh',
  area: '1500 Sq.ft',
  category: 'Residential',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1902373b1-1778338412915.png",
  imageAlt: 'Affordable residential plot in new colony with survey marks and nearby infrastructure'
}];


const categoryColors: Record<string, string> = {
  Residential: 'bg-primary/10 text-primary',
  Commercial: 'bg-blue-100 text-blue-700',
  Investment: 'bg-purple-100 text-purple-700'
};

export default function RelatedProperties() {
  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Similar Properties</h2>
            <p className="text-muted-foreground text-sm mt-1">You might also be interested in these</p>
          </div>
          <Link href="/properties" className="text-sm font-semibold text-primary hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {related.map((prop) =>
          <div key={prop.id} className="card-hover bg-card rounded-3xl overflow-hidden shadow-md border border-border group">
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={prop.image}
                alt={prop.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[prop.category] || 'bg-muted text-muted-foreground'}`}>
                    {prop.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="glass-dark text-white font-bold text-sm px-2.5 py-1 rounded-lg">
                    {prop.price}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm mb-1">{prop.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
                  <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {prop.location} · {prop.area}
                </div>
                <div className="flex gap-2">
                  <Link
                  href="/property-detail"
                  className="flex-1 text-center text-xs font-semibold bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition-colors">
                  
                    View Details
                  </Link>
                  <a
                  href={`https://wa.me/918462097970?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(prop.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-xs"
                  aria-label="WhatsApp">
                  
                    💬
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
