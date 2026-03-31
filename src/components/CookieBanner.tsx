'use client';
import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ta_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = (all: boolean) => {
    localStorage.setItem('ta_cookie_consent', all ? 'all' : 'essential');
    setVisible(false);
    if (all) {
      // Fire GA4 and Facebook Pixel after consent
      // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-bark border border-amber-900/40 rounded-2xl shadow-elevated p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <Cookie className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-cream text-sm mb-1">Cookie Preferences</h3>
            <p className="text-fog text-xs leading-relaxed">
              We use cookies to improve your experience and analyse traffic (GA4). Under EU GDPR, we need your consent before enabling analytics. Essential cookies are always active.{' '}
              <a href="/privacy" className="text-amber-500 hover:underline">Privacy Policy</a>
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button onClick={() => accept(true)} className="btn-amber text-xs px-4 py-2">
                Accept All Cookies
              </button>
              <button onClick={() => accept(false)} className="btn-ghost text-xs px-4 py-2">
                Essential Only
              </button>
            </div>
          </div>
          <button onClick={() => setVisible(false)} className="text-fog hover:text-cream transition-colors shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
