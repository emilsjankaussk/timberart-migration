'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { CATEGORIES, FEATURED_PRODUCTS, TESTIMONIALS, BLOG_POSTS, SITE_CONFIG, STATS } from '@/lib/data';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

// ─── Shared Fade-In Wrapper ─────────────────────────────────────────────────
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

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const isNumeric = !!match;
  const numberPart = isNumeric ? parseInt(match[2], 10) : 0;
  const suffix = isNumeric ? value.slice((match[1] + match[2]).length) : value;

  const displayValue = useTransform(count, (latest) => isNumeric ? Math.floor(latest) + suffix : value);

  useEffect(() => {
    if (isInView && isNumeric) {
      animate(count, numberPart, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, isNumeric, numberPart, count]);

  return (
    <div ref={ref}>
      <motion.div className="text-amber-500 font-bold text-3xl font-serif">
        {isNumeric ? displayValue : value}
      </motion.div>
      <div className="text-fog text-xs uppercase tracking-widest mt-0.5">{label}</div>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        poster="https://timberart.lv/wp-content/uploads/2021/04/Mucveida-pirts-e1617300486895.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />

      {/* Content */}
      <div className="relative container-main w-full">
        <div className="max-w-3xl animate-fade-up">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="trust-badge">🇱🇻 Made in Latvia</span>
            <span className="trust-badge">🇪🇺 EU Certified</span>
            <span className="trust-badge">LIAA Partner</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-[0.95] tracking-tight drop-shadow-lg">
            Saunas crafted<br />
            <span className="italic text-amber-500">for a lifetime</span><br />
            of ritual.
          </h1>

          <p className="mt-6 text-cream/90 text-lg max-w-xl leading-relaxed drop-shadow">
            Premium thermowood barrel saunas, sauna houses, micro homes & hot tubs.
            Delivered across Europe from our craft workshop in Latvia.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/kontakti" className="btn-amber text-base px-8 py-4 pulse-amber">
              Get Your Free Quote
            </Link>
            <Link href="#collections" className="btn-ghost text-base px-8 py-4 bg-charcoal/20 backdrop-blur-sm">
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-10 flex flex-wrap gap-10">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PDF-Style Category Sections ──────────────────────────────────────────────
function CollectionSections() {
  // Map categories to alternating layouts based on the PDF flow
  return (
    <div id="collections" className="bg-charcoal">
      {CATEGORIES.map((cat, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={cat.slug} className={`py-16 md:py-32 ${isEven ? 'bg-bark' : 'bg-charcoal'}`}>
            <div className="container-main">
              <FadeInConfig>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>
                  {/* Image Block */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                      <img 
                        src={cat.imageUrl} 
                        alt={cat.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 border border-amber-900/20 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                  
                  {/* Copy Block */}
                  <div className="w-full lg:w-1/2">
                    <div className="max-w-md">
                      <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3 block">0{index + 1} // Collection</span>
                      <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4">{cat.name}</h2>
                      <p className="text-fog text-lg leading-relaxed mb-8">{cat.description}</p>
                      
                      <div className="flex items-center gap-6">
                        <Link href={cat.href} className="group flex items-center gap-2 text-cream font-medium hover:text-amber-500 transition-colors uppercase tracking-wide text-sm border-b border-amber-900 pb-1">
                          Read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                        <span className="text-fog text-sm bg-black/20 px-3 py-1 rounded-full">From €{cat.fromPrice.toLocaleString()}</span>
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
  );
}

// ─── About Info (from PDF) ────────────────────────────────────────────────────
function AboutExtra() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://timberart.lv/wp-content/uploads/2021/04/Mucveida-pirts-e1617300486895.jpg')] bg-cover bg-fixed opacity-5" />
      <div className="container-main relative z-10 text-center max-w-4xl">
        <FadeInConfig>
          <div className="w-16 h-16 mx-auto mb-8 bg-amber-900/40 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight italic">
            "We create saunas, camping pods, micro houses and summer cottages. Every detail is carefully considered for longevity."
          </h2>
          <Link href="/par-mums" className="btn-ghost mt-10 inline-block">Learn About TimberArt</Link>
        </FadeInConfig>
      </div>
    </section>
  );
}

// ─── PDF-Style Contact Form Section ───────────────────────────────────────────
function ContactFormSection() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section className="py-24 bg-bark border-t border-amber-900/10">
      <div className="container-main max-w-5xl">
        <FadeInConfig>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">Get in touch</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream mt-3 mb-6">Contact Us</h2>
              <p className="text-fog text-lg mb-8 leading-relaxed">
                Interested in our products or have a custom project in mind? Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-cream font-medium mb-1">Email</h4>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-amber-500 hover:text-amber-400 transition-colors">{SITE_CONFIG.email}</a>
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Phone</h4>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-amber-500 hover:text-amber-400 transition-colors">{SITE_CONFIG.phone}</a>
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Location</h4>
                  <p className="text-fog">Madona, Latvia (Delivery across Europe)</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal p-8 sm:p-10 rounded-2xl border border-amber-900/20 shadow-elevated">
              {status === 'submitted' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                  <div className="w-16 h-16 bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-cream">Message Sent</h3>
                  <p className="text-fog">Thank you for reaching out. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-fog mb-1.5">Your name *</label>
                    <input required type="text" className="w-full bg-bark border border-amber-900/30 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fog mb-1.5">Phone *</label>
                    <input required type="tel" className="w-full bg-bark border border-amber-900/30 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fog mb-1.5">E-Mail *</label>
                    <input required type="email" className="w-full bg-bark border border-amber-900/30 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fog mb-1.5">Message *</label>
                    <textarea required rows={4} className="w-full bg-bark border border-amber-900/30 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-600 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-amber w-full py-4 uppercase tracking-widest text-sm mt-4">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </FadeInConfig>
      </div>
    </section>
  );
}

// ─── Assembly ───────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <CollectionSections />
      <AboutExtra />
      <ContactFormSection />
    </>
  );
}
