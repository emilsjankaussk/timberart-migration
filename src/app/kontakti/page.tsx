'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Check, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls = "w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3.5 text-cream placeholder:text-fog text-sm focus:outline-none focus:border-amber-600 transition-colors";

  return (
    <div className="pt-24 min-h-screen bg-charcoal">
      {/* Header */}
      <section className="py-16 text-center">
        <span className="section-label">Get in touch</span>
        <h1 className="font-serif text-5xl text-cream mt-3">Let's start your project</h1>
        <p className="text-fog mt-4 max-w-lg mx-auto">
          Free consultation. Personal price quote. We reply within 2 hours — often within minutes.
        </p>
      </section>

      <div className="container-main pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-bark rounded-3xl p-8 sm:p-10 border border-amber-900/20">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-900/30 flex items-center justify-center">
                  <Check className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-serif text-3xl text-cream">Message sent!</h3>
                <p className="text-fog">We'll reply to <strong className="text-cream">{form.email}</strong> within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-serif text-2xl text-cream mb-6">Send us a message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label block mb-2">Your Name *</label>
                    <input type="text" required value={form.name} onChange={update('name')}
                      placeholder="Jānis Bērziņš" className={inputCls} />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={update('phone')}
                      placeholder="+371 XX XXX XXX" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="section-label block mb-2">Email *</label>
                  <input type="email" required value={form.email} onChange={update('email')}
                    placeholder="you@example.com" className={inputCls} />
                </div>
                <div>
                  <label className="section-label block mb-2">Your Message *</label>
                  <textarea required rows={5} value={form.message} onChange={update('message')}
                    placeholder="Tell us about your project — size, location, preferences, budget..."
                    className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" className="btn-amber w-full py-4 text-base pulse-amber">
                  Send Message — Free Quote Included
                </button>
                <p className="text-fog text-xs text-center">
                  We reply within 2 hours. Your data is processed per our{' '}
                  <a href="/privacy" className="text-amber-500 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Contact details */}
            <div className="bg-bark rounded-2xl p-7 border border-amber-900/20">
              <h3 className="font-serif text-2xl text-cream mb-5">Contact Details</h3>
              <div className="space-y-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-700/40 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-fog text-xs uppercase tracking-wider">Phone</p>
                    <p className="text-cream font-medium group-hover:text-amber-500 transition-colors">{SITE_CONFIG.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-700/40 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-fog text-xs uppercase tracking-wider">Email</p>
                    <p className="text-cream font-medium group-hover:text-amber-500 transition-colors">{SITE_CONFIG.email}</p>
                  </div>
                </a>
                <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-500 shrink-0 group-hover:bg-green-700/30 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-fog text-xs uppercase tracking-wider">WhatsApp</p>
                    <p className="text-cream font-medium group-hover:text-green-400 transition-colors">Chat instantly</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-fog text-xs uppercase tracking-wider">Location</p>
                    <p className="text-cream">Madona Municipality, Latvia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-fog text-xs uppercase tracking-wider">Response time</p>
                    <p className="text-cream flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                      Within 2 hours (Mon–Sat)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-bark rounded-2xl p-7 border border-amber-900/20">
              <h3 className="font-serif text-xl text-cream mb-4">Common Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "Do you deliver abroad?", a: "Yes — we deliver across the EU by flatbed truck. Contact us for a shipping quote." },
                  { q: "What's the lead time?", a: "Typically 2–6 weeks from confirmed order, depending on model and season." },
                  { q: "Is installation included?", a: "Installation is available in Latvia. For EU deliveries, we provide full assembly guides." },
                  { q: "Can I get leasing?", a: "Yes. We work with leasing partners — from €69/month. See our Leasing page." },
                ].map((faq) => (
                  <div key={faq.q}>
                    <p className="text-cream text-sm font-semibold">{faq.q}</p>
                    <p className="text-fog text-sm mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
