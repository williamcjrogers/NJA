"use client";

import { Phone } from "lucide-react";
import navigation from "@/data/navigation.json";

export default function EmergencyBanner() {
  return (
    <div className="bg-brand-amber text-white">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold">
        <Phone className="h-4 w-4" aria-hidden="true" />
        <span>24/7 Emergency Response:</span>
        <a
          href={navigation.emergency.href}
          className="underline underline-offset-2 hover:no-underline"
        >
          {navigation.emergency.phone}
        </a>
      </div>
    </div>
  );
}
