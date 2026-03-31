'use client';
import { SITE_CONFIG } from '@/lib/data';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-full shadow-elevated transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(34,197,94,0.4)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
