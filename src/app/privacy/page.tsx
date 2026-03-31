import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-charcoal">
      <div className="container-main max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-fog hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-amber-900/30 flex items-center justify-center text-amber-500 mb-6">
          <Shield className="w-8 h-8" />
        </div>
        <span className="section-label">Legal</span>
        <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-4 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-amber max-w-none text-fog">
          <p className="mb-4">
            Last updated: March 2026
          </p>
          <p className="mb-4">
            At TimberArt, we take your privacy seriously. This document outlines how we collect, process, and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and Latvian law.
          </p>
          <h3 className="text-cream text-xl font-serif mt-8 mb-4">Data Collection</h3>
          <p className="mb-4">
            We collect personal information such as your name, email address, and phone number when you submit a contact form, request a quote, or sign up for our newsletter. This data is strictly used to provide the requested services.
          </p>
          <h3 className="text-cream text-xl font-serif mt-8 mb-4">Cookies and Tracking</h3>
          <p className="mb-4">
            We use essential cookies to ensure our website functions correctly, and analytics cookies (such as Google Analytics 4) to understand how visitors interact with our site. You can manage your cookie preferences at any time using our cookie consent manager.
          </p>
        </div>
      </div>
    </main>
  );
}
