import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog — Sauna Guides & Advice',
  description: 'Expert sauna buying guides, thermowood explainers, glamping ROI calculators, and outdoor living inspiration from TimberArt.',
};

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-charcoal">
      {/* Header */}
      <section className="py-20 text-center">
        <span className="section-label">Sauna knowledge</span>
        <h1 className="font-serif text-5xl text-cream mt-3">From the blog</h1>
        <p className="text-fog mt-4 max-w-lg mx-auto">Guides, inspiration and expert advice for sauna owners and aspiring buyers.</p>
      </section>

      {/* Featured Article */}
      <div className="container-main mb-16">
        <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group relative block rounded-3xl overflow-hidden aspect-[16/7]">
          <img src={BLOG_POSTS[0].imageUrl} alt={BLOG_POSTS[0].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
          <div className="relative h-full flex items-end p-10">
            <div className="max-w-xl">
              <span className="section-label">{BLOG_POSTS[0].category} · Featured</span>
              <h2 className="font-serif text-4xl text-cream mt-2 group-hover:text-amber-400 transition-colors leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-cream/70 mt-3 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
              <div className="flex items-center gap-2 mt-5 text-amber-500 font-semibold">
                Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Grid */}
      <div className="container-main pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group card-product overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={post.imageUrl} alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="section-label">{post.category}</span>
                <h3 className="font-serif text-xl text-cream mt-2 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-fog text-sm mt-2 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-fog text-xs">
                  <span>{post.date}</span><span>·</span><span>{post.readMin} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-bark rounded-3xl border border-amber-900/20">
          <h2 className="font-serif text-3xl text-cream">Ready to find your perfect sauna?</h2>
          <p className="text-fog mt-2">Get a personalised recommendation and free quote from our team.</p>
          <Link href="/kontakti" className="btn-amber mt-6 inline-flex">
            Get Free Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
