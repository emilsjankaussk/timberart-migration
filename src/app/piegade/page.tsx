import Link from 'next/link';
import { ArrowLeft, Truck } from 'lucide-react';

export default function PiegadePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="container-main max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-6">
          <Truck className="w-8 h-8" />
        </div>
        <span className="section-label">Logistics</span>
        <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 mb-8">
          Delivery & Installation
        </h1>
        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-xl text-cream/80 leading-relaxed mb-6">
            We deliver and install our saunas across Europe. Whether you're in Latvia, Germany, the UK, or Scandinavia, our logistics team ensures a seamless experience.
          </p>
          <p className="text-fog leading-relaxed">
            Detailed delivery zones, pricing, and crane requirements are calculated per project. For standard barrel saunas in Latvia, delivery typically takes 1-3 weeks.
          </p>
          <p className="text-fog leading-relaxed mt-4">
            Please contact us directly at <a href="mailto:timberart@timberart.lv" className="text-amber-500 hover:text-amber-400">timberart@timberart.lv</a> or call <a href="tel:+37127302050" className="text-amber-500 hover:text-amber-400">+371 27302050</a> for a precise logistics quote.
          </p>
        </div>
      </div>
    </main>
  );
}
