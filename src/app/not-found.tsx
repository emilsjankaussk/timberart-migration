import Link from 'next/link';
import { ArrowLeft, HardHat } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal flex items-center justify-center text-center">
      <div className="container-main max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-8 border border-amber-900/40">
          <HardHat className="w-10 h-10" />
        </div>
        <span className="section-label">Coming Soon</span>
        <h1 className="font-serif text-5xl lg:text-7xl text-cream mt-4 mb-6">
          In Development
        </h1>
        <p className="text-xl text-cream/80 leading-relaxed mb-10">
          This premium page is currently being updated for our new digital experience. Please check back later or explore our available products in the meantime, or contact our team if you need immediate assistance.
        </p>
        <Link href="/" className="btn-amber inline-flex items-center gap-2 px-8 py-4">
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </main>
  );
}
