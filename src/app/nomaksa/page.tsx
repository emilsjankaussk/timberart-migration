import Link from 'next/link';
import { ArrowLeft, Calculator } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export default function NomaksaPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="container-main max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-6">
          <Calculator className="w-8 h-8" />
        </div>
        <span className="section-label">Flexible Financing</span>
        <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 mb-8">
          Leasing & Payment Plans
        </h1>
        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-xl text-cream/80 leading-relaxed mb-6">
            Own a premium TimberArt structure from just <strong>€{SITE_CONFIG.leasingMonthly}/month</strong>. We partner with leading financial institutions to offer flexible terms for private and corporate clients.
          </p>
          <div className="bg-bark border border-amber-900/20 p-8 rounded-2xl my-8">
             <h3 className="font-serif text-2xl text-cream mb-4">Request a Quote & Financing Check</h3>
             <p className="text-fog mb-6">Our standard financing process is fast and entirely digital. Contact us to receive a personalized calculation based on your chosen sauna or pod.</p>
             <Link href="/kontakti" className="btn-amber inline-block">Contact Sales Team</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
