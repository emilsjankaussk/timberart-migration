import { CATEGORIES } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'All Products | TimberArt',
  description: 'Browse our full range of 31 thermowood products: barrel saunas, sauna houses, frame saunas, micro homes and hot tubs. Prices from €1,850.',
};

function FadeInConfig({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-charcoal">
      <div className="container-main">
        {/* Header */}
        <FadeInConfig>
          <div className="text-center pb-20">
            <span className="section-label">All collections</span>
            <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-3">
              31 models.<br />
              <span className="italic text-amber-500">One standard of craft.</span>
            </h1>
            <p className="text-fog mt-4 max-w-xl mx-auto text-lg">
              Every product built from heat-treated thermowood. Choose your category below.
            </p>
            {/* Leasing note */}
            <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-800/30 text-amber-500 text-sm px-4 py-2 rounded-full mt-6">
              🔥 All models available on leasing — from €69/month.{' '}
              <Link href="/nomaksa" className="underline hover:text-amber-400">Learn more</Link>
            </div>
          </div>
        </FadeInConfig>
      </div>

      {/* Categories as alternating PDF-style blocks */}
      <div>
        {CATEGORIES.map((cat, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={cat.slug} className={`py-16 md:py-24 ${isEven ? 'bg-bark' : 'bg-charcoal'}`}>
              <div className="container-main">
                <FadeInConfig>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>
                    {/* Image Block */}
                    <div className="w-full lg:w-1/2">
                      <Link href={cat.href} className="block relative aspect-[4/3] rounded-2xl overflow-hidden group">
                        <img 
                          src={cat.imageUrl} 
                          alt={cat.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-amber-900/20 rounded-2xl pointer-events-none" />
                        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                           <div className="bg-charcoal/80 text-cream px-6 py-3 rounded-full backdrop-blur-sm border border-amber-900/40 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              View {cat.count} models
                           </div>
                        </div>
                      </Link>
                    </div>
                    
                    {/* Copy Block */}
                    <div className="w-full lg:w-1/2">
                      <div className="max-w-md">
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3 block">0{index + 1} // Collection</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4">{cat.name}</h2>
                        <p className="text-fog text-lg leading-relaxed mb-8">{cat.description}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                          <Link href={cat.href} className="btn-amber inline-block text-center text-sm px-8 py-3.5">
                            Explore models
                          </Link>
                          <span className="text-fog text-sm border border-amber-900/30 px-4 py-3 rounded-xl text-center">
                            From €{cat.fromPrice.toLocaleString()} ex. VAT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInConfig>
              </div>
            </section>
          );
        })}
      </div>

      <div className="container-main">
        {/* Additional CTA */}
        <FadeInConfig>
          <div className="mt-24 text-center p-12 bg-gradient-to-br from-amber-900/20 to-bark rounded-3xl border border-amber-900/30 shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
            <h2 className="font-serif text-3xl md:text-4xl text-cream relative">Don't see what you need?</h2>
            <p className="text-fog mt-3 text-lg relative max-w-xl mx-auto">We engineer and build custom projects to any architectural specification. Bring us your idea.</p>
            <Link href="/services/individualie" className="btn-ghost mt-8 inline-flex relative bg-charcoal/50 backdrop-blur-md">
              Discuss Custom Project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </FadeInConfig>
      </div>
    </div>
  );
}
