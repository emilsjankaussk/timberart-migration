import { CATEGORIES, FEATURED_PRODUCTS } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function generateStaticParams() {
  const categorySlugs = CATEGORIES.map(c => ({ slug: c.href.split('/').pop() || '' }));
  const productSlugs = FEATURED_PRODUCTS.map(p => ({ slug: p.slug }));
  
  // Deduplicate and filter empty
  const paths = [...categorySlugs, ...productSlugs].filter(p => p.slug);
  const unique = Array.from(new Set(paths.map(p => p.slug))).map(slug => ({ slug }));
  return unique;
}

function FadeInConfig({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    >
      {children}
    </motion.div>
  );
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // Try to find if this slug matches a broad category
  const category = CATEGORIES.find(c => c.href.includes(resolvedParams.slug)) || CATEGORIES[0];
  
  // Use all featured products for this demo collection
  const products = FEATURED_PRODUCTS;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-charcoal">
      <div className="container-main">
        {/* Collection Header */}
        <FadeInConfig>
          <div className="text-center pb-20 border-b border-amber-900/20 mb-10">
            <Link href="/products" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8 text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Back to Categories
            </Link>
            <h1 className="font-serif text-5xl lg:text-7xl text-cream mb-6">
              {category.name}
            </h1>
            <p className="text-fog max-w-2xl mx-auto text-lg leading-relaxed">
              {category.description} Built exclusively from premium thermowood to ensure a lifetime of joy and zero maintenance.
            </p>
          </div>
        </FadeInConfig>
      </div>

      {/* Sequential Product Blocks (PDF Style) */}
      <div>
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={product.slug} className={`py-16 md:py-24 ${isEven ? 'bg-charcoal' : 'bg-bark'}`}>
              <div className="container-main">
                <FadeInConfig>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-amber-900/20 rounded-2xl pointer-events-none" />
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="w-full lg:w-1/2">
                      <div className="max-w-md">
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3 block">{product.category}</span>
                        <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-4">{product.name}</h2>
                        <p className="text-fog leading-relaxed mb-6">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                           {product.specs.slice(0, 4).map(spec => (
                             <div key={spec.label} className="bg-amber-900/10 rounded-lg p-3 border border-amber-900/20">
                                <p className="text-fog text-[10px] uppercase tracking-wider">{spec.label}</p>
                                <p className="text-cream text-sm mt-0.5">{spec.value}</p>
                             </div>
                           ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                          <Link href="/kontakti" className="btn-amber inline-flex justify-center text-sm px-8 py-3.5">
                            Request Quote
                          </Link>
                          <div className="flex flex-col">
                             <span className="text-amber-500 font-serif text-xl border-b border-amber-900/30 pb-0.5 inline-block w-max">
                               €{product.price.toLocaleString()}
                             </span>
                             <span className="text-fog text-[11px] uppercase tracking-wider mt-1">{product.priceLabel}</span>
                          </div>
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

      <div className="container-main mt-24">
        {/* Global CTA */}
        <FadeInConfig>
          <div className="bg-gradient-to-br from-amber-900/30 to-charcoal p-12 text-center rounded-3xl border border-amber-900/40">
            <h2 className="font-serif text-3xl text-cream">Need assistance choosing?</h2>
            <p className="text-fog mt-2 mb-6">Our experts are available to guide you through materials, heating options, and delivery.</p>
            <Link href="/kontakti" className="btn-ghost inline-flex">Contact our experts</Link>
          </div>
        </FadeInConfig>
      </div>
    </div>
  );
}
