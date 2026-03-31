import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Barrel Saunas & Thermowood Sauna Houses | TimberArt.lv",
    template: "%s | TimberArt.lv",
  },
  description: "Premium thermowood barrel saunas, sauna houses, micro homes and hot tubs. Crafted in Latvia, delivered across Europe. 311+ completed projects. Get a free quote today.",
  keywords: ["barrel sauna", "thermowood sauna", "outdoor sauna", "sauna house", "hot tub", "timber art", "Latvia", "EU delivery"],
  authors: [{ name: "SIA Timber ART" }],
  openGraph: {
    title: "Barrel Saunas & Thermowood Sauna Houses | TimberArt.lv",
    description: "Premium thermowood barrel saunas, sauna houses, micro homes and hot tubs. 311+ completed projects.",
    url: "https://timberart.lv",
    siteName: "TimberArt",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://timberart.lv/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <head>
        {/* Schema.org Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SIA Timber ART",
          "url": "https://timberart.lv",
          "telephone": "+37127302050",
          "email": "timberart@timberart.lv",
          "address": { "@type": "PostalAddress", "addressCountry": "LV", "addressRegion": "Madona" },
          "sameAs": [
            "https://www.instagram.com/timberart_saunas/",
            "https://www.tiktok.com/@timberart_saunas",
            "https://www.facebook.com/timberartsia",
          ],
          "foundingDate": "2019-03-15",
        })}} />
      </head>
      <body className="bg-charcoal text-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
