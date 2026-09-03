import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Residential Plots',
  'Commercial Land',
  'Agricultural Land',
  'Farm House Land',
  'Investment Consulting',
  'Legal Documentation',
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={40} />
              <div>
                <span className="font-bold text-base text-white block">Jitendra Roy</span>
                <span className="text-xs text-white/60">Land Brokers</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Trusted land brokers in Satna & Madhya Pradesh. 500+ properties sold, 15+ years experience.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918462097970"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-500 transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="tel:+918462097970"
                className="w-9 h-9 rounded-full bg-primary hover:bg-primary/80 transition-colors flex items-center justify-center"
                aria-label="Call us"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-white/90 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks?.map((link) => (
                <li key={link?.label}>
                  {link?.href?.startsWith('#') ? (
                    <a href={link?.href} className="text-sm text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      {link?.label}
                    </a>
                  ) : (
                    <Link href={link?.href} className="text-sm text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      {link?.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm text-white/90 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services?.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm text-white/90 uppercase tracking-wider mb-4">Contact</h4>
            <address className="not-italic space-y-3">
              <div className="flex gap-2">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-white/60 leading-relaxed">
                  Shop No.7, Infront of Dhawari Stadium Gate No.1, Dhawari, Satna, MP
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918462097970" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 84620 97970
                </a>
              </div>
              <p className="text-xs text-white/40">Mon–Sat: 9:00 AM – 7:00 PM</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2025 Jitendra Roy Land Brokers. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white/70 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
