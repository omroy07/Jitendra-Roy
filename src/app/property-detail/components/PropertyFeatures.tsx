import React from 'react';

const features = [
  { icon: '💧', label: 'Water Connection', available: true },
  { icon: '⚡', label: 'Electricity', available: true },
  { icon: '🛣', label: 'Road Frontage 30ft', available: true },
  { icon: '🚧', label: 'Boundary Wall', available: false },
  { icon: '🌳', label: 'Corner Plot', available: false },
  { icon: '🏪', label: 'Near Market', available: true },
  { icon: '🚌', label: 'Bus Stop Nearby', available: true },
  { icon: '📡', label: 'Mobile Tower', available: true },
  { icon: '🏫', label: 'Near School', available: true },
  { icon: '🌊', label: 'Drainage', available: true },
  { icon: '🏔', label: 'Scenic View', available: false },
  { icon: '🔒', label: 'Gated Area', available: false },
];

const futureGrowth = [
  { label: 'Ring Road Project', status: 'Upcoming', impact: 'High' },
  { label: 'Industrial Zone Expansion', status: 'Approved', impact: 'Very High' },
  { label: 'New Township Development', status: 'Planned', impact: 'High' },
  { label: 'Highway Widening NH-30', status: 'In Progress', impact: 'Medium' },
];

export default function PropertyFeatures() {
  return (
    <div className="space-y-6">
      {/* Features */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <h2 className="font-bold text-foreground text-lg mb-4">🏡 Property Features</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {features?.map((feat) => (
            <div
              key={feat?.label}
              className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium ${
                feat?.available
                  ? 'bg-green-50 text-green-700 border border-green-200' :'bg-muted text-muted-foreground border border-border opacity-60'
              }`}
            >
              <span>{feat?.icon}</span>
              <span className="text-xs">{feat?.label}</span>
              {feat?.available ? (
                <span className="ml-auto text-green-500 text-xs">✓</span>
              ) : (
                <span className="ml-auto text-muted-foreground/50 text-xs">✗</span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Future Growth */}
      <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
        <h2 className="font-bold text-foreground text-lg mb-4">📈 Future Growth Potential</h2>
        <div className="space-y-3">
          {futureGrowth?.map((item) => (
            <div key={item?.label} className="flex items-center justify-between p-3 bg-muted rounded-xl">
              <div>
                <div className="font-medium text-foreground text-sm">{item?.label}</div>
                <div className={`text-xs font-semibold mt-0.5 ${
                  item?.status === 'In Progress' ? 'text-blue-600' :
                  item?.status === 'Approved' ? 'text-green-600' :
                  item?.status === 'Upcoming' ? 'text-amber-600' : 'text-muted-foreground'
                }`}>
                  {item?.status}
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                item?.impact === 'Very High' ? 'bg-green-100 text-green-700' :
                item?.impact === 'High'? 'bg-primary/10 text-primary' : 'bg-amber-100 text-amber-700'
              }`}>
                {item?.impact} Impact
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Download Brochure */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
            📄
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">Download Property Brochure</h3>
            <p className="text-primary-foreground/80 text-sm">Get complete details, legal documents, and pricing in PDF format.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          <a
            href="https://wa.me/918462097970?text=Hello%2C%20I%20want%20to%20download%20the%20brochure%20for%20Green%20Valley%20Residential%20Plot."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex-1 text-center text-sm"
          >
            📥 Request Brochure via WhatsApp
          </a>
          <a
            href="tel:+918462097970"
            className="btn-outline-white flex-1 text-center text-sm"
          >
            📞 Call for Details
          </a>
        </div>
      </div>
    </div>
  );
}
