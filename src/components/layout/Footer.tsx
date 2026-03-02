import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import navigation from "@/data/navigation.json";
import accreditations from "@/data/accreditations.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #2D2D2D 0%, #1a1a1a 100%)",
      }}
      role="contentinfo"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Accreditation strip */}
      <div className="relative z-10 border-b border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {accreditations.map((acc) => (
              <span
                key={acc.id}
                className="text-xs font-semibold tracking-wide text-white/60 uppercase"
              >
                {acc.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <svg viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto" role="img" aria-label="Nicolas James Environmental">
                <text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="700" letterSpacing="3" fill="white">NICOLAS JAMES</text>
                <text x="0" y="42" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="500" letterSpacing="5.5" fill="rgba(255,255,255,0.7)">ENVIRONMENTAL</text>
              </svg>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Expert project management for environmental and construction services. Bridging the gap between clients and our trusted supply chain.
            </p>
            <div className="space-y-3">
              <a href={`tel:${navigation.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-amber" aria-hidden="true" />
                {navigation.contact.phone}
              </a>
              <a href={`mailto:${navigation.contact.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-brand-amber" aria-hidden="true" />
                {navigation.contact.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-gradient-to-r from-brand-amber to-transparent rounded-full" aria-hidden="true" />
              <h3 className="text-sm font-bold tracking-wide uppercase">Services</h3>
            </div>
            <ul className="space-y-2.5">
              {(navigation.main[0].children ?? []).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-gradient-to-r from-brand-amber to-transparent rounded-full" aria-hidden="true" />
              <h3 className="text-sm font-bold tracking-wide uppercase">Sectors</h3>
            </div>
            <ul className="space-y-2.5">
              {(navigation.main[1].children ?? []).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-gradient-to-r from-brand-amber to-transparent rounded-full" aria-hidden="true" />
              <h3 className="text-sm font-bold tracking-wide uppercase">Company</h3>
            </div>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about/team" className="text-sm text-white/70 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/accreditations" className="text-sm text-white/70 hover:text-white transition-colors">Accreditations</Link></li>
              <li><Link href="/work-with-us" className="text-sm text-white/70 hover:text-white transition-colors">Work With Us</Link></li>

              <li><Link href="/news" className="text-sm text-white/70 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {currentYear} Nicolas James Environmental. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/50 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="text-xs text-white/50 hover:text-white/70 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
