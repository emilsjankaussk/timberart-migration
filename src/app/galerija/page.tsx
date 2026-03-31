'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const GALLERY_ITEMS = [
  { id: 1,  title: "Round Sauna 3.9m",           category: "Barrel",  img: "https://timberart.lv/wp-content/uploads/2021/04/Mucveida-pirts-e1617300486895.jpg" },
  { id: 2,  title: "Thermowood Sauna House 4.5m", category: "House",   img: "https://timberart.lv/wp-content/uploads/2022/10/DJI_0494-copy-scaled.jpg" },
  { id: 3,  title: "Hot Tub 225cm Outdoor",       category: "Hot Tub", img: "https://timberart.lv/wp-content/uploads/2021/04/koka-kubls-e1617300326884.jpg" },
  { id: 4,  title: "Spiral Glamping Pod",         category: "Micro",   img: "https://timberart.lv/wp-content/uploads/2022/07/ARTA-1-3-scaled.jpg" },
  { id: 5,  title: "Termo Kubs 6.0 Frame Sauna",  category: "Frame",   img: "https://timberart.lv/wp-content/uploads/2022/12/Pirts_ar_nojumi_01.jpg" },
  { id: 6,  title: "Oval Sauna LUX 4.0m",         category: "Barrel",  img: "https://timberart.lv/wp-content/uploads/2021/04/IMG_6047-scaled.jpg" },
  { id: 7,  title: "Sauna with Terrace 6.0m",     category: "Barrel",  img: "https://timberart.lv/wp-content/uploads/2022/01/20210609_200407-copy.jpg" },
  { id: 8,  title: "Micro House ARTA-4",          category: "Micro",   img: "https://timberart.lv/wp-content/uploads/2023/07/micro-pod.jpg" },
  { id: 9,  title: "Rectangular Sauna 5.4m",      category: "Barrel",  img: "https://timberart.lv/wp-content/uploads/2022/02/kvad_1.jpg" },
  { id: 10, title: "Thermowood Sauna House 5.4m", category: "House",   img: "https://timberart.lv/wp-content/uploads/2022/05/Pirts_5.4_4.jpg" },
  { id: 11, title: "Hot Tub 200cm — Integrated",  category: "Hot Tub", img: "https://timberart.lv/wp-content/uploads/2021/04/koka-kubls-e1617300326884.jpg" },
  { id: 12, title: "Termo Kubs 2.5 Compact",      category: "Frame",   img: "https://timberart.lv/wp-content/uploads/2022/03/Termo_Kubs_2.jpg" },
];

const CATEGORIES_FILTER = ["All", "Barrel", "House", "Frame", "Micro", "Hot Tub"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);
  const current = lightbox !== null ? GALLERY_ITEMS[lightbox] : null;

  return (
    <div className="pt-24 min-h-screen bg-charcoal">
      {/* Header */}
      <section className="py-16 text-center">
        <span className="section-label">Our work</span>
        <h1 className="font-serif text-5xl text-cream mt-3">Project Gallery</h1>
        <p className="text-fog mt-4 max-w-lg mx-auto">
          311+ completed projects across Latvia and Europe. Each one built with the same standard of craft.
        </p>
      </section>

      {/* Filter */}
      <div className="container-main mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES_FILTER.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-amber-700 text-charcoal'
                  : 'bg-bark border border-amber-900/30 text-fog hover:text-cream hover:border-amber-700'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container-main pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <button key={item.id} onClick={() => setLightbox(GALLERY_ITEMS.findIndex((g) => g.id === item.id))}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-zoom-in">
              <img src={item.img} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <span className="section-label">{item.category}</span>
                  <p className="text-cream font-serif text-sm mt-1">{item.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-fog mb-4">Inspired? Let's build yours.</p>
          <Link href="/kontakti" className="btn-amber">Get a Free Quote</Link>
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-fog hover:text-cream text-3xl font-light">×</button>
            <img src={current.img} alt={current.title} className="w-full rounded-2xl" />
            <div className="mt-4 text-center">
              <span className="section-label">{current.category}</span>
              <h3 className="font-serif text-xl text-cream mt-1">{current.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
