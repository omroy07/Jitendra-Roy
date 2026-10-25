import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import InteriorPageIntro from '@/app/components/InteriorPageIntro';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export default function OurExpertisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InteriorPageIntro
        eyebrow="Our expertise"
        title="Experience that makes property decisions clearer."
        description="See how local knowledge, verified listings and practical transaction support help buyers, sellers and investors move forward with confidence."
      />
      <WhyChooseUs />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
