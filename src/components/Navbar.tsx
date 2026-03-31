'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/data';
import { Phone, Mail, ChevronDown, Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/98 backdrop-blur-md shadow-elevated border-b border-amber-900/20">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Language */}
            <div className="hidden lg:flex items-center gap-3 text-xs font-medium">
              <button className="text-amber-700 font-bold">LV</button>
              <span className="text-fog/40">|</span>
              <button className="text-fog hover:text-cream transition-colors">EN</button>
            </div>

            {/* Logo */}
            <Link href="/" className="text-xl lg:text-2xl font-serif font-bold tracking-wider text-cream hover:text-amber-600 transition-colors">
              TIMBER<span className="text-amber-700">ART</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-bold tracking-wide text-fog hover:text-cream transition-colors whitespace-nowrap">
                    {link.label}
                    {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 z-50 min-w-64">
                      <div className="bg-bark border border-amber-900/30 rounded-xl shadow-elevated p-2">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}
                            className="flex flex-col px-4 py-3 rounded-lg hover:bg-charcoal transition-colors group/item">
                            <span className="text-sm font-medium text-cream group-hover/item:text-amber-600 transition-colors">{child.label}</span>
                            {'desc' in child && child.desc && (
                              <span className="text-xs text-fog mt-0.5">{child.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Icons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/" className="p-2 border border-amber-900/30 rounded-lg text-fog hover:text-amber-600 hover:border-amber-700 transition-all">
                <Home className="w-4 h-4" />
              </Link>
              <a href={`tel:${SITE_CONFIG.phone}`} className="p-2 border border-amber-900/30 rounded-lg text-fog hover:text-amber-600 hover:border-amber-700 transition-all">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="p-2 border border-amber-900/30 rounded-lg text-fog hover:text-amber-600 hover:border-amber-700 transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <Link href="/kontakti" className="btn-amber text-xs px-4 py-2 pulse-amber">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden p-2 text-cream" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/98 flex flex-col pt-20 px-6 overflow-y-auto">
          <div className="flex gap-3 mb-6">
            <button className="text-amber-700 font-bold text-sm">LV</button>
            <span className="text-fog/40">|</span>
            <button className="text-fog text-sm">EN</button>
          </div>
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-bark py-4">
              <Link href={link.href} onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-cream hover:text-amber-600 transition-colors">
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-2 ml-4 flex flex-col gap-1">
                  {link.children.map((child) => (
                    <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)}
                      className="text-sm text-fog hover:text-cream py-1 transition-colors">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/kontakti" onClick={() => setMobileOpen(false)} className="btn-amber text-center">
              Get Free Quote
            </Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-ghost text-center">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
