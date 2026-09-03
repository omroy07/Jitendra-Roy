'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
  propertyType: string;
  location: string;
  message: string;
}

const propertyTypes = [
  'Residential Plot',
  'Commercial Land',
  'Agricultural Land',
  'Farm House Land',
  'Investment Property',
  'Other',
];

const budgets = [
  'Under ₹5 Lakh',
  '₹5 – ₹10 Lakh',
  '₹10 – ₹25 Lakh',
  '₹25 – ₹50 Lakh',
  '₹50 Lakh – ₹1 Cr',
  'Above ₹1 Cr',
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    budget: '',
    propertyType: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const waMessage = `Hello Jitendra Roy Land Brokers,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProperty Type: ${form.propertyType}\nBudget: ${form.budget}\nLocation: ${form.location}\n\nMessage:\n${form.message}`;
    const waUrl = `https://wa.me/918462097970?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-3">
            📞 Contact Us
          </span>
          <h2 className="text-section-title font-extrabold text-foreground">
            Get in Touch —{' '}
            <span className="text-gradient-emerald">We Reply in Minutes</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Fill the form below and we&apos;ll connect you via WhatsApp instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-primary rounded-2xl p-6 text-white shadow-xl shadow-primary/25">
              <h3 className="font-bold text-lg mb-4">Office Details</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      Shop No.7, Infront of Dhawari Stadium Gate No.1, Dhawari, Satna, Madhya Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-sm">Phone / WhatsApp</p>
                    <a href="tel:+918462097970" className="text-primary-foreground/90 text-sm hover:text-white transition-colors">
                      +91 84620 97970
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p className="font-semibold text-sm">Business Hours</p>
                    <p className="text-primary-foreground/80 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-primary-foreground/60 text-xs">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+918462097970"
                className="bg-card border border-border rounded-2xl p-4 text-center hover:border-primary/30 transition-colors group"
              >
                <div className="text-2xl mb-2">📞</div>
                <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Call Now</div>
                <div className="text-xs text-muted-foreground">+91 84620 97970</div>
              </a>
              <a
                href="https://wa.me/918462097970"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center hover:border-green-400 transition-colors group"
              >
                <div className="text-2xl mb-2">💬</div>
                <div className="font-semibold text-green-700 text-sm">WhatsApp</div>
                <div className="text-xs text-green-600">Chat Instantly</div>
              </a>
            </div>

            {/* Map placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-sm font-semibold text-foreground">Dhawari, Satna</p>
                  <p className="text-xs text-muted-foreground">Madhya Pradesh, India</p>
                  <a
                    href="https://maps.google.com/?q=Dhawari+Satna+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-primary font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-bold text-xl text-green-800 mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-green-700 mb-4">WhatsApp has opened with your details. We&apos;ll respond within minutes.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-sm space-y-4">
                <h3 className="font-bold text-foreground text-lg mb-2">Send Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm placeholder:text-muted-foreground/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Budget *</label>
                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    >
                      <option value="">Select Budget</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Property Type *</label>
                    <select
                      name="propertyType"
                      required
                      value={form.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    >
                      <option value="">Select Type</option>
                      {propertyTypes.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Preferred Location</label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Dhawari, Satna, Maihar Road..."
                    className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm placeholder:text-muted-foreground/60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us your requirements..."
                    className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="submit" className="btn-primary flex-1 text-center">
                    📤 Submit Inquiry
                  </button>
                  <a
                    href="https://wa.me/918462097970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1 text-center"
                  >
                    💬 Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+918462097970"
                    className="btn-outline-white flex-1 text-center !text-foreground !border-border hover:!bg-muted"
                  >
                    📞 Call Now
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
