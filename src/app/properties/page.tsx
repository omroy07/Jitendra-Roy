import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertiesHero from '@/app/properties/components/PropertiesHero';
import PropertiesGrid from '@/app/properties/components/PropertiesGrid';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PropertiesHero />
      <PropertiesGrid />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
