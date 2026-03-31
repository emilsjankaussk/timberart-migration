import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Check, Users, Calendar, Award } from 'lucide-react';
import { SITE_CONFIG, STATS, PARTNER_LOGOS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SIA Timber ART — founded 2019 in Latvia. LIAA-backed manufacturer of premium thermowood saunas with 311+ completed projects across Europe.',
};

export default function AboutPage() {
  const timeline = [
    { year: '2019', title: 'Founded', desc: 'SIA Timber ART established March 15, 2019. Team brings 10+ years of woodworking expertise.' },
    { year: '2020', title: 'LIAA Incubator', desc: 'Accepted into Latvia\'s Innovation Agency (LIAA) business incubator. EU ERAF project funding secured.' },
    { year: '2021', title: 'EU Export Launch', desc: 'First international deliveries to Germany and Scandinavia. EN site launched.' },
    { year: '2023', title: 'Product Expansion', desc: 'Micro homes and glamping pods added. Spiral series launched. 200+ projects milestone.' },
    { year: '2025', title: '300+ Projects', desc: 'Over 311 completed projects. Recognised quality across Europe.' },
    { year: '2026', title: 'New Platform', desc: 'Redesigned website, faster delivery, expanded EU reach.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&auto=format&fit=crop"
          alt="TimberArt workshop"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
        <div className="relative container-main text-center">
          <span className="section-label">About us</span>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-3">
            We are <span className="italic text-amber-500">TIMBER ART</span>
          </h1>
          <p className="text-fog mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Not just a manufacturer. Your dream, realised.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bark">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Check className="w-6 h-6" />, value: '311+', label: 'Completed Projects' },
              { icon: <Calendar className="w-6 h-6" />, value: '6+',   label: 'Years Experience' },
              { icon: <Users className="w-6 h-6" />,  value: '5',     label: 'Product Lines' },
              { icon: <Award className="w-6 h-6" />,  value: 'LIAA',  label: 'Innovation Partner' },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-charcoal rounded-2xl border border-amber-900/20">
                <div className="flex justify-center text-amber-600 mb-3">{s.icon}</div>
                <div className="font-serif text-3xl text-amber-500 font-bold">{s.value}</div>
                <div className="text-fog text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-py">
        <div className="container-main max-w-3xl mx-auto">
          <span className="section-label">Our story</span>
          <h2 className="font-serif text-4xl text-cream mt-3 mb-6">
            Built on wood,<br />driven by craft.
          </h2>
          <div className="space-y-4 text-fog leading-relaxed">
            <p>
              TIMBERART is a stable company that combines woodworking traditions with innovation — manufacturing barrel saunas, frame saunas, micro homes and more. Our values are honesty with ourselves and our clients.
            </p>
            <p>
              Our guiding principle: <em className="text-cream">we grow alongside our clients' needs</em> — to give them everything they need, and more. Choosing us means choosing a reliable, precise manufacturer with consistently high quality.
            </p>
            <p>
              Collaboration and team spirit are the keywords of our people and company growth. Our team's goal is to create a product that doesn't just excel in quality, design and functionality — it's a masterpiece. TimberArt's uniqueness, quality and design is recognised far beyond Latvia's borders.
            </p>
          </div>
          <div className="mt-8 p-6 bg-bark rounded-2xl border border-amber-900/20 text-sm text-fog">
            <p>SIA "Timber ART" has signed an agreement with LIAA for incubation support under ERAF Project No. 3.1.1.6/16/I/001 "Regional Business Incubators and Creative Industries Incubator".</p>
            <p className="mt-2">Supported by the Ministry of Agriculture (Zemkopības ministrija) and the Rural Support Service (Lauku atbalsta dienests).</p>
            <p className="mt-2 font-medium text-cream">Madona Municipality, Latvia · Founded: March 15, 2019</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-bark">
        <div className="container-main max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-cream mb-12 text-center">Our journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-amber-900/30" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-charcoal border-2 border-amber-700 flex items-center justify-center">
                    <span className="text-amber-500 font-bold text-xs">{item.year}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-serif text-xl text-cream">{item.title}</h3>
                    <p className="text-fog text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container-main text-center">
          <span className="section-label">Partners & suppliers</span>
          <h2 className="font-serif text-3xl text-cream mt-3 mb-10">Trusted brands in every product</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {PARTNER_LOGOS.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1">
                <span className="text-cream font-bold text-lg tracking-widest uppercase">{p.name}</span>
                <span className="text-fog text-xs">{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bark">
        <div className="container-main text-center">
          <h2 className="font-serif text-4xl text-cream">Like what you see?</h2>
          <p className="text-fog mt-2">Get in touch — we reply within 2 hours.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/kontakti" className="btn-amber">Get a Free Quote</Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-ghost flex items-center gap-2">
              <Phone className="w-4 h-4" /> {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="btn-ghost flex items-center gap-2">
              <Mail className="w-4 h-4" /> {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
