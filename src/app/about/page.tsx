import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/app/components/AboutSection';
import InteriorPageIntro from '@/app/components/InteriorPageIntro';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InteriorPageIntro
        eyebrow="About Jitendra Roy Land Brokers"
        title="Local expertise. Real guidance."
        description="Learn about the approach behind a land-brokerage experience built around clear information, verified opportunities and dependable support."
      />
      <AboutSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
