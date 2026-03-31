'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/data';

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    category: string;
    description: string;
    price: number;
    priceLabel: string;
    imageUrl: string;
  };
  href?: string;
}

export function ProductCard({ product, href }: ProductCardProps) {
  const link = href ?? `/products/${product.slug}`;
  const monthly = Math.round((product.price * 0.024 * Math.pow(1.024, 60)) / (Math.pow(1.024, 60) - 1));

  return (
    <Link href={link} className="card-product group flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 section-label bg-charcoal/70 px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg text-cream group-hover:text-amber-500 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-fog text-sm mt-2 leading-relaxed flex-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-amber-600 font-bold text-xl">
              €{product.price.toLocaleString()}
            </p>
            <p className="text-fog text-xs">{product.priceLabel} · from €{monthly}/mo</p>
          </div>
          <span className="flex items-center gap-1 text-amber-600 text-sm font-medium">
            View <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

interface CategoryCardProps {
  category: {
    slug: string;
    name: string;
    nameLv: string;
    description: string;
    fromPrice: number;
    count: number;
    imageUrl: string;
    href: string;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.href} className="card-product group relative overflow-hidden flex flex-col min-h-72">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative mt-auto p-6">
        <span className="section-label">{category.nameLv}</span>
        <h3 className="font-serif text-2xl text-cream mt-1 group-hover:text-amber-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-cream/70 text-sm mt-1">{category.count} models</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-amber-500 font-bold text-lg">From €{category.fromPrice.toLocaleString()}</span>
            <span className="text-fog text-xs ml-1">ex. VAT</span>
          </div>
          <span className="flex items-center gap-1.5 text-amber-500 text-sm font-medium">
            Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
