import Link from 'next/link';
import { ArrowLeft, Settings } from 'lucide-react';

export function generateStaticParams() {
  return [
    { slug: 'koka-logu-durvis' },
    { slug: 'remonts' },
    { slug: 'telpu-izbuve' },
    { slug: 'individualie' },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // Simple Title Case formatter for the slug
  const serviceName = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="container-main max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-6">
          <Settings className="w-8 h-8" />
        </div>
        <span className="section-label">TimberArt Services</span>
        <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 mb-8">
          {serviceName}
        </h1>
        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-xl text-cream/80 leading-relaxed mb-6">
            We provide comprehensive services from custom design and architectural planning to complete turnkey installation.
          </p>
          <p className="text-fog leading-relaxed">
            The dedicated page for this specific service is currently being updated with our latest project portfolios and pricing guidelines.
          </p>
          <div className="bg-bark border border-amber-900/20 p-8 rounded-2xl my-8">
             <h3 className="font-serif text-2xl text-cream mb-4">Discuss Your Project</h3>
             <p className="text-fog mb-6">Our specialists are available to discuss your specific requirements today.</p>
             <Link href="/kontakti" className="btn-amber inline-block">Contact Support Team</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
