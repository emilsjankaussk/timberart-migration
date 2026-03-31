import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Building2, Users, BarChart3, Check, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export const metadata: Metadata = {
  title: 'B2B & Trade Orders',
  description: 'Wholesale and trade orders for glamping sites, hotels, campgrounds and real estate developers. Volume pricing, technical drawings, EU-wide delivery.',
};

export default function B2BPage() {
  const segments = [
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Glamping Sites & Eco-Resorts",
      desc: "Our Spiral pods and ARTA micro-homes are purpose-built for glamping operators. Book full weekends year-round.",
      roi: "Avg. ROI: 16–20 months",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Airbnb & Short-Term Rental",
      desc: "Differentiate your listing with a premium barrel sauna or hot tub. Data shows sauna listings earn 40%+ more per night.",
      roi: "€800–€1,500/month per unit",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Real Estate Developers",
      desc: "Premium thermowood sauna annexes add significant property value. Fully customisable to architectural specifications.",
      roi: "15–25% property premium",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Hotels & Wellness Centres",
      desc: "From rooftop barrel saunas to full outdoor spa installations. We handle all technical documentation.",
      roi: "Bespoke pricing available",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562602834-b81b5b1e665e?w=1600&auto=format&fit=crop"
          alt="Glamping pod"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal" />
        <div className="relative container-main">
          <span className="section-label">Trade & Wholesale</span>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 max-w-3xl leading-tight">
            Build a revenue-generating<br />
            <span className="italic text-amber-500">sauna business</span> with us.
          </h1>
          <p className="text-fog mt-6 max-w-2xl text-lg leading-relaxed">
            We supply glamping operators, Airbnb hosts, boutique hotels and real estate developers across Europe. Volume pricing, custom specs, and full project support.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#b2b-form" className="btn-amber text-base py-4 px-8">Get Trade Pricing</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-ghost text-base py-4 px-8">
              <Phone className="w-5 h-5" /> Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Revenue stat */}
      <div className="bg-amber-700 py-8">
        <div className="container-main grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { value: '€800–1,500', label: 'Monthly income per glamping pod (Airbnb)' },
            { value: '< 18 months', label: 'Average payback period for operators' },
            { value: '3–10 units', label: 'Typical first B2B order size' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl font-bold text-charcoal">{s.value}</div>
              <div className="text-charcoal/70 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Segments */}
      <section className="section-py">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="section-label">Who we work with</span>
            <h2 className="font-serif text-4xl text-cream mt-3">Built for your business model</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {segments.map((s) => (
              <div key={s.title} className="p-7 bg-bark rounded-2xl border border-amber-900/20 hover:border-amber-700/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-600 mb-4">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl text-cream mb-2">{s.title}</h3>
                <p className="text-fog text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="bg-amber-900/40 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {s.roi}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What B2B gets */}
      <section className="section-py bg-bark">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Trade benefits</span>
              <h2 className="font-serif text-4xl text-cream mt-3 mb-6">
                Everything you need<br />for a smooth project.
              </h2>
              <ul className="space-y-4">
                {[
                  "Volume pricing tiers for 3+ units",
                  "Technical drawings & 3D renders",
                  "Custom dimensions & specifications",
                  "Full project portfolio for references",
                  "Dedicated project manager",
                  "EU-wide flatbed truck delivery",
                  "Latvia-based installation team available",
                  "Leasing support for client financing",
                  "Downloadable product specification PDF",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/80 text-sm">
                    <Check className="w-5 h-5 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1648219476756-00bfbbe38f79?w=800&auto=format&fit=crop"
                alt="Frame sauna exterior"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="b2b-form" className="section-py">
        <div className="container-main max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Get started</span>
            <h2 className="font-serif text-4xl text-cream mt-3">Trade Inquiry</h2>
            <p className="text-fog mt-2">We reply with volume pricing within 24 hours.</p>
          </div>
          <form className="space-y-4 bg-bark p-8 rounded-3xl border border-amber-900/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-fog text-xs uppercase tracking-wider block mb-2">Company Name *</label>
                <input type="text" required className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors" />
              </div>
              <div>
                <label className="text-fog text-xs uppercase tracking-wider block mb-2">Business Type *</label>
                <select className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors">
                  <option>Glamping Site</option>
                  <option>Hotel / Wellness</option>
                  <option>Real Estate Developer</option>
                  <option>Airbnb Host</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-fog text-xs uppercase tracking-wider block mb-2">Email *</label>
                <input type="email" required className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors" />
              </div>
              <div>
                <label className="text-fog text-xs uppercase tracking-wider block mb-2">Phone</label>
                <input type="tel" className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors" />
              </div>
              <div>
                <label className="text-fog text-xs uppercase tracking-wider block mb-2">Units Required</label>
                <input type="number" min="1" placeholder="e.g. 5" className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors" />
              </div>
              <div>
                <label className="text-fog text-xs uppercase tracking-wider block mb-2">Country</label>
                <input type="text" placeholder="e.g. Germany" className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-fog text-xs uppercase tracking-wider block mb-2">Project Description</label>
              <textarea rows={4} placeholder="Tell us about your project, timeline, and products of interest..."
                className="w-full bg-charcoal border border-amber-900/30 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none" />
            </div>
            <button type="submit" className="btn-amber w-full py-4 text-base">
              Submit Trade Inquiry <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-fog text-xs text-center">We reply within 24 hours. Your data is handled per our privacy policy.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
