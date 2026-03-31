import Link from 'next/link';
import { ArrowLeft, Flame } from 'lucide-react';

export default function ThermowoodPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="container-main max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-6">
          <Flame className="w-8 h-8" />
        </div>
        <span className="section-label">Material Science</span>
        <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 mb-8">
          Thermowood Guide
        </h1>
        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-xl text-cream/80 leading-relaxed mb-6">
            Thermowood is wood that has been modified by a heat treatment at high temperatures (180–220 °C) in a kiln. 
          </p>
          <p className="text-fog leading-relaxed mb-4">
            By applying heat and steam, the chemical and physical properties of the wood are permanently altered. This creates a superior building material for saunas and outdoor structures, with enhanced resistance to rot, dimensional stability, and a beautiful dark hue. No chemicals are used in this process.
          </p>
          <div className="bg-bark p-6 rounded-xl border border-amber-900/20 my-8">
            <h4 className="text-cream font-bold mb-2">Key Benefits:</h4>
            <ul className="text-fog space-y-2 list-disc pl-5">
               <li>Exceptional durability (Class 1-2 decay resistance)</li>
               <li>Up to 50% better dimensional stability than untreated wood</li>
               <li>Chemical-free and environmentally friendly</li>
               <li>Naturally improved thermal insulation properties</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
