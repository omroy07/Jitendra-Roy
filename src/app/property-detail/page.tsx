import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyGallery from '@/app/property-detail/components/PropertyGallery';
import PropertyOverview from '@/app/property-detail/components/PropertyOverview';
import PropertyFeatures from '@/app/property-detail/components/PropertyFeatures';
import PropertyInquiry from '@/app/property-detail/components/PropertyInquiry';
import RelatedProperties from '@/app/property-detail/components/RelatedProperties';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export default function PropertyDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PropertyGallery />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyOverview />
            <PropertyFeatures />
          </div>
          <div className="lg:col-span-1">
            <PropertyInquiry />
          </div>
        </div>
      </div>
      <RelatedProperties />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
