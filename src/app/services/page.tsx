import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/app/components/ServicesSection';
import InteriorPageIntro from '@/app/components/InteriorPageIntro';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InteriorPageIntro
        eyebrow="Jitendra Roy Land Brokers"
        title="Land guidance for every important step."
        description="From finding the right opportunity to valuation, documentation and registration, explore the services already available across Satna and Madhya Pradesh."
      />
      <ServicesSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
