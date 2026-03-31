'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS, CATEGORIES } from '@/lib/data';
import { Phone, Mail, SendHorizonal } from 'lucide-react';

// Social icons as SVGs (not available in this lucide-react version)
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.92a8.15 8.15 0 004.77 1.53V7.01a4.85 4.85 0 01-1-.32z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <footer className="bg-bark border-t border-amber-900/20">

      {/* CTA Band */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 py-10">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-cream">Ready to start your project?</h3>
            <p className="text-cream/70 mt-1 text-sm">Our team replies within 24 hours. Free consultation included.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/kontakti" className="btn-amber whitespace-nowrap">Get Free Quote</Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-ghost whitespace-nowrap hidden sm:flex">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="text-2xl font-serif font-bold text-cream">
              TIMBER<span className="text-amber-700">ART</span>
            </Link>
            <p className="mt-4 text-fog text-sm leading-relaxed">
              We create premium thermowood saunas, micro houses and glamping pods. Crafted in Latvia, delivered across Europe.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener"
                className="p-2.5 bg-charcoal rounded-lg text-fog hover:text-amber-600 transition-colors">
                <InstagramIcon />
              </a>
              <a href={SITE_CONFIG.tiktok} target="_blank" rel="noopener"
                className="p-2.5 bg-charcoal rounded-lg text-fog hover:text-amber-600 transition-colors">
                <TikTokIcon />
              </a>
              <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener"
                className="p-2.5 bg-charcoal rounded-lg text-fog hover:text-amber-600 transition-colors">
                <FacebookIcon />
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="trust-badge">🇪🇺 EU Certified</span>
              <span className="trust-badge">LIAA Partner</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={cat.href} className="text-fog hover:text-amber-500 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-800 group-hover:bg-amber-500 transition-colors" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us",     href: "/par-mums" },
                { label: "Gallery",      href: "/galerija" },
                { label: "Thermowood",   href: "/termokoksne" },
                { label: "B2B / Trade",  href: "/b2b" },
                { label: "Blog",         href: "/blog" },
                { label: "Leasing",      href: "/nomaksa" },
                { label: "Delivery",     href: "/piegade" },
                { label: "Privacy",      href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-fog hover:text-amber-500 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-800 group-hover:bg-amber-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Email */}
          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-3 mb-6">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-fog hover:text-amber-500 text-sm transition-colors">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-fog hover:text-amber-500 text-sm transition-colors">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-2 text-fog text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                Replies within 2 hours
              </div>
            </div>

            {/* Email capture */}
            <div className="bg-charcoal rounded-xl p-4 border border-amber-900/20">
              <p className="text-cream text-xs font-semibold mb-1">📖 Free Sauna Buyer's Guide</p>
              <p className="text-fog text-xs mb-3">Get our 2026 product catalogue + price list.</p>
              {submitted ? (
                <p className="text-amber-500 text-xs font-medium">✅ Check your inbox!</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-bark border border-amber-900/30 rounded-lg px-3 py-2 text-xs text-cream placeholder:text-fog focus:outline-none focus:border-amber-700 transition-colors" />
                  <button type="submit" className="p-2 bg-amber-700 hover:bg-amber-600 rounded-lg transition-colors">
                    <SendHorizonal className="w-4 h-4 text-charcoal" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="border-t border-amber-900/10 py-6">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Tikkurila", "Remmers", "Würth", "Skamet", "LIAA"].map((brand) => (
              <span key={brand} className="text-cream text-xs font-semibold tracking-widest uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber-900/10 py-5">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-fog">
          <p>© 2026 SIA Timber ART. All rights reserved.</p>
          <p>
            Crafted by{' '}
            <a href="https://aleksale.lv" target="_blank" rel="noopener" className="hover:text-amber-500 transition-colors">
              Aleksale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
