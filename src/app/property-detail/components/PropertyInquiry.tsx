'use client';

import React, { useState } from 'react';

export default function PropertyInquiry() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Jitendra Roy Land Brokers,\n\nI am interested in:\nProperty: Green Valley Residential Plot\nLocation: Dhawari, Satna\nPrice: ₹12.5 Lakh\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/918462097970?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="sticky top-24 space-y-4">
      {/* Quick Actions */}
      <div className="bg-card rounded-3xl border border-border p-5 shadow-sm">
        <div className="text-center mb-4">
          <div className="text-2xl font-extrabold text-primary mb-1">₹12.5 Lakh</div>
          <div className="text-xs text-muted-foreground">Green Valley Residential Plot · 2400 Sq.ft</div>
        </div>
        <div className="space-y-2.5">
          <a
            href="https://wa.me/918462097970?text=Hello%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20Green%20Valley%20Residential%20Plot%20in%20Dhawari%2C%20Satna."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block text-sm"
          >
            📅 Book Site Visit
          </a>
          <a
            href="https://wa.me/918462097970?text=Hello%2C%20I%20am%20interested%20in%20Green%20Valley%20Residential%20Plot%20at%20%E2%82%B912.5%20Lakh%20in%20Dhawari%2C%20Satna."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full text-center block text-sm"
          >
            💬 WhatsApp Inquiry
          </a>
          <a
            href="tel:+918462097970"
            className="w-full text-center block text-sm font-semibold bg-muted text-foreground py-3 rounded-full hover:bg-border transition-colors"
          >
            📞 Call: +91 84620 97970
          </a>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-card rounded-3xl border border-border p-5 shadow-sm">
        <h3 className="font-bold text-foreground text-base mb-4">Send Quick Inquiry</h3>
        {sent ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-sm font-semibold text-foreground">WhatsApp opened!</p>
            <p className="text-xs text-muted-foreground mt-1">We&apos;ll respond shortly.</p>
            <button onClick={() => setSent(false)} className="mt-3 text-xs text-primary hover:underline">
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground/60"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground/60"
            />
            <textarea
              placeholder="Message (optional)"
              rows={3}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground/60 resize-none"
            />
            <button type="submit" className="btn-primary w-full text-sm">
              📤 Send via WhatsApp
            </button>
          </form>
        )}
      </div>

      {/* Agent Card */}
      <div className="bg-card rounded-3xl border border-border p-5 shadow-sm">
        <h3 className="font-bold text-foreground text-sm mb-3">Listed By</h3>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            JR
          </div>
          <div>
            <div className="font-bold text-foreground text-sm">Jitendra Roy</div>
            <div className="text-xs text-muted-foreground">Land Broker · 15+ Years Exp.</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-accent text-xs">★★★★★</span>
              <span className="text-xs text-muted-foreground">4.9 (450+ clients)</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <a
            href="tel:+918462097970"
            className="flex-1 text-center text-xs font-semibold bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition-colors"
          >
            📞 Call
          </a>
          <a
            href="https://wa.me/918462097970"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Trust badges */}
      <div className="bg-primary/5 rounded-2xl border border-primary/20 p-4">
        <div className="space-y-2">
          {[
            '✅ 100% Verified Property',
            '⚖️ Clear Legal Title',
            '🤝 No Hidden Charges',
            '📄 All Documents Ready',
          ].map((item) => (
            <div key={item} className="text-xs font-medium text-foreground flex items-center gap-2">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
