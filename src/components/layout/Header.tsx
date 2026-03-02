"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { LogoFull } from "@/components/Logo";
import navigation from "@/data/navigation.json";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

function DesktopDropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-charcoal hover:text-brand-teal transition-colors"
      >
        {item.label}
        {item.children && (
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
        )}
      </Link>
      {item.children && (
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full pt-2 z-50">
          <div className="bg-white rounded-lg shadow-lg border border-brand-grey py-2 min-w-[240px]">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-brand-charcoal hover:bg-brand-teal/5 hover:text-brand-teal transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navItems = navigation.main as NavItem[];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-brand-grey">
      <div className="mx-auto w-[92%] max-w-[1300px] xl:w-[88%] lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <LogoFull />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4" aria-label="Main navigation">
            {navItems.map((item) => (
              <DesktopDropdown key={item.href} item={item} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={navigation.contact.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-lg hover:bg-brand-teal-light transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-charcoal hover:text-brand-teal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-brand-grey bg-white"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-brand-charcoal hover:text-brand-teal"
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        aria-hidden="true"
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-brand-charcoal-light hover:text-brand-teal"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-brand-charcoal-light hover:text-brand-teal"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-sm font-medium text-brand-charcoal hover:text-brand-teal"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-brand-grey">
              <a
                href={navigation.contact.href}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-teal text-white text-sm font-semibold rounded-lg"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Get in Touch
              </a>
              <a
                href={navigation.emergency.href}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 mt-2 bg-brand-amber text-white text-sm font-semibold rounded-lg"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergency: {navigation.emergency.phone}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
