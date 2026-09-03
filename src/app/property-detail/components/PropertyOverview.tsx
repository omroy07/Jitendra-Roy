'use client';

import React from 'react';

const stats = [
  { icon: '💰', label: 'Price', value: '₹12.5 Lakh' },
  { icon: '📐', label: 'Area', value: '2400 Sq.ft' },
  { icon: '🛣', label: 'Road Width', value: '30 ft' },
  { icon: '📍', label: 'Location', value: 'Dhawari, Satna' },
  { icon: '🏘', label: 'Category', value: 'Residential' },
  { icon: '💧', label: 'Water', value: 'Available' },
];

const nearbyPlaces = [
  { icon: '🏫', type: 'School', name: 'Govt. Higher Secondary School', distance: '0.5 km' },
  { icon: '🏥', type: 'Hospital', name: 'District Hospital Satna', distance: '2.2 km' },
  { icon: '🛒', type: 'Market', name: 'Dhawari Main Market', distance: '0.3 km' },
  { icon: '🚌', type: 'Bus Stand', name: 'Dhawari Bus Stand', distance: '0.8 km' },
  { icon: '🚂', type: 'Railway', name: 'Satna Railway Station', distance: '5 km' },
  { icon: '⛽', type: 'Petrol Pump', name: 'HP Petrol Pump', distance: '0.4 km' },
];

const legalInfo = [
  { label: 'Title Type', value: 'Freehold' },
  { label: 'Revenue Record', value: 'Clear Khasra/Khatauni' },
  { label: 'Encumbrance', value: 'Nil' },
  { label: 'Mutation Status', value: 'Completed' },
  { label: 'Registry', value: 'Ready for Registry' },
  { label: 'Dispute Status', value: 'No Disputes' },
];

export default function PropertyOverview() {
  return (
    <div className="space-y-6">
      {/* Title & Price */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground mb-1">Green Valley Residential Plot</h1>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Shop No.7 Area, Dhawari, Satna, Madhya Pradesh
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-primary">₹12.5 Lakh</div>
            <div className="text-xs text-muted-foreground">₹521/Sq.ft</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {stats?.map((stat) => (
            <div key={stat?.label} className="bg-muted rounded-2xl p-3 flex items-center gap-3">
              <span className="text-xl">{stat?.icon}</span>
              <div>
                <div className="text-xs text-muted-foreground">{stat?.label}</div>
                <div className="font-bold text-foreground text-sm">{stat?.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Description */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <h2 className="font-bold text-foreground text-lg mb-3">Property Description</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          This premium residential plot is located in the heart of Dhawari, Satna — one of the fastest growing localities in Madhya Pradesh. The plot has clear title, all legal documents verified, and is ready for immediate registry.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          With 30 ft road frontage, access to water and electricity, and proximity to schools, markets, and the main highway, this is an ideal investment for building your dream home or for capital appreciation. Land prices in this area have grown 25% in the last 2 years.
        </p>
      </div>
      {/* Investment Score */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <h2 className="font-bold text-foreground text-lg mb-4">Investment Score</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Growth Potential', score: 88, color: 'bg-green-500' },
            { label: 'Legal Clarity', score: 95, color: 'bg-primary' },
            { label: 'Connectivity', score: 82, color: 'bg-blue-500' },
            { label: 'ROI Potential', score: 79, color: 'bg-accent' },
          ]?.map((item) => (
            <div key={item?.label} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.9"
                    fill="none"
                    stroke={item?.color?.replace('bg-', '')?.includes('primary') ? '#0F766E' : item?.color?.includes('green') ? '#22c55e' : item?.color?.includes('blue') ? '#3b82f6' : '#B8973A'}
                    strokeWidth="3"
                    strokeDasharray={`${item?.score} 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                  {item?.score}
                </span>
              </div>
              <div className="text-xs text-muted-foreground font-medium">{item?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Legal Status */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <h2 className="font-bold text-foreground text-lg mb-4">⚖️ Legal Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {legalInfo?.map((item) => (
            <div key={item?.label} className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
              <span className="text-sm text-muted-foreground">{item?.label}</span>
              <span className="text-sm font-semibold text-green-700 flex items-center gap-1">
                ✅ {item?.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Nearby */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <h2 className="font-bold text-foreground text-lg mb-4">📍 Nearby Places</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nearbyPlaces?.map((place) => (
            <div key={place?.name} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
              <span className="text-xl">{place?.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground">{place?.type}</div>
                <div className="font-medium text-foreground text-sm truncate">{place?.name}</div>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full flex-shrink-0">
                {place?.distance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
