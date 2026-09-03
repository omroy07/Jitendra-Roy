'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  id: 1,
  name: 'Rajesh Tiwari',
  location: 'Satna, MP',
  rating: 5,
  review: 'Jitendra bhai helped me find the perfect residential plot in Dhawari within my budget of ₹10 lakh. All documents were verified and registration was done in just 2 days. Highly recommended!',
  property: 'Residential Plot, Dhawari',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b48d0a1c-1763296743407.png",
  avatarAlt: 'Indian middle-aged man smiling in business casual attire',
  date: 'January 2025'
},
{
  id: 2,
  name: 'Sunita Patel',
  location: 'Rewa, MP',
  rating: 5,
  review: 'We were looking for agricultural land near Satna. Jitendra Roy Land Brokers showed us 5 properties and helped us select the best one with canal access. The process was smooth and transparent.',
  property: 'Agricultural Land, Ramnagar',
  avatar: "https://images.unsplash.com/photo-1624354865912-fdf2f0e09a21",
  avatarAlt: 'Indian woman in her forties with warm smile in traditional attire',
  date: 'March 2025'
},
{
  id: 3,
  name: 'Amit Gupta',
  location: 'Jabalpur, MP',
  rating: 5,
  review: 'I was investing from Jabalpur and was worried about fraud. Jitendra ji personally verified all documents and arranged a site visit. Got a great commercial plot at the right price. Excellent service!',
  property: 'Commercial Plot, NH-30',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5906c02-1763296133413.png",
  avatarAlt: 'Young Indian professional man with confident expression in formal shirt',
  date: 'April 2025'
},
{
  id: 4,
  name: 'Meena Shukla',
  location: 'Satna, MP',
  rating: 5,
  review: 'After retirement we wanted to sell our old agricultural land. Jitendra bhai got us the best market price and handled all the mutation and registry work. Very honest and professional.',
  property: 'Agricultural Land Sale',
  avatar: "https://images.unsplash.com/photo-1632110287190-7b6807b7ad2e",
  avatarAlt: 'Senior Indian woman with gentle expression wearing saree',
  date: 'May 2025'
},
{
  id: 5,
  name: 'Vikram Singh Parihar',
  location: 'Bhopal, MP',
  rating: 5,
  review: 'Invested in a farm house plot on Maihar Road based on their recommendation. The area has grown 40% in 2 years. Best investment decision! Their market knowledge is unmatched.',
  property: 'Farm House Plot, Maihar Road',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_110ce9b39-1763295413245.png",
  avatarAlt: 'Indian businessman in formal suit with professional demeanor',
  date: 'June 2025'
}];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials?.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-foreground" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll animate-fade-up">
          <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest bg-accent/20 px-3 py-1 rounded-full mb-3">
            ⭐ Client Stories
          </span>
          <h2 className="text-section-title font-extrabold text-white">
            What Our{' '}
            <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-white/60 mt-3">
            450+ happy clients across Satna and Madhya Pradesh trust us with their land investments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials?.map((t, i) =>
          <div
            key={t?.id}
            className={`animate-on-scroll animate-fade-up glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${
            i === activeIndex ? 'ring-2 ring-accent/50' : ''}`
            }
            style={{ animationDelay: `${i * 80}ms` }}>
            
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t?.rating })?.map((_, s) =>
              <span key={s} className="text-accent text-sm">★</span>
              )}
              </div>

              {/* Review */}
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{t?.review}&rdquo;
              </p>

              {/* Property tag */}
              <div className="mb-4">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  🏘 {t?.property}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t?.avatar}
                  alt={t?.avatarAlt}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t?.name}</div>
                  <div className="text-white/50 text-xs">{t?.location} · {t?.date}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials?.map((_, i) =>
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === activeIndex ? 'bg-accent w-6' : 'bg-white/30 hover:bg-white/50'}`
            }
            aria-label={`Go to testimonial ${i + 1}`} />

          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 animate-on-scroll animate-fade-up">
          <p className="text-white/60 text-sm mb-4">Join 450+ satisfied clients — your dream land is waiting</p>
          <a
            href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20want%20to%20buy%20land%20in%20Satna."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2">
            
            💬 Start Your Land Journey
          </a>
        </div>
      </div>
    </section>);

}
