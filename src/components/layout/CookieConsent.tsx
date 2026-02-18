"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4" role="dialog" aria-label="Cookie consent">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-2xl border border-brand-grey p-6">
        <p className="text-sm text-brand-charcoal mb-4">
          We use essential cookies to make this site work. We&apos;d also like to set analytics cookies to help us improve our website. You can manage your preferences below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="px-5 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-lg hover:bg-brand-teal-light transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="px-5 py-2.5 bg-brand-grey text-brand-charcoal text-sm font-semibold rounded-lg hover:bg-brand-grey-dark transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
