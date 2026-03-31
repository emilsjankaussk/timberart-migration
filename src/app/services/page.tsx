import Link from 'next/link';
import { ArrowLeft, ArrowRight, Settings } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';

export default function ServicesIndex() {
  const serviceLinks = NAV_LINKS.find(l => l.label === "Services")?.children || [];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="container-main max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-6">
          <Settings className="w-8 h-8" />
        </div>
        <span className="section-label">Expertise</span>
        <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 mb-8">
          Our Services
        </h1>
        <p className="text-xl text-cream/80 leading-relaxed mb-10">
          Beyond our standard product lines, TimberArt offers professional services for custom builds, renovations, and premium woodcraft.
        </p>
        
        <div className="grid gap-4">
          {serviceLinks.map((service) => (
            <Link key={service.label} href={service.href} className="p-6 bg-bark border border-amber-900/20 rounded-2xl hover:border-amber-500/50 transition-all flex items-center justify-between group">
              <div>
                <h3 className="text-xl font-serif text-cream group-hover:text-amber-500 transition-colors">{service.label}</h3>
                {('desc' in service && service.desc) && <p className="text-fog mt-1 text-sm">{service.desc}</p>}
              </div>
              <ArrowRight className="w-5 h-5 text-amber-700 group-hover:text-amber-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
