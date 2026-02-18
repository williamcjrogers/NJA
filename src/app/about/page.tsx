import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight, Users, Truck, ShieldCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "About Us",
  description: "Nicolas James Environmental delivers specialist environmental services for critical infrastructure. Directly employed teams, owned equipment, infrastructure-sector standards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Specialist Environmental Services, Built for Infrastructure"
        description="We deliver planned and reactive vegetation, tree, grounds, and associated site works in live environments. Our teams are directly employed, our equipment is owned, and our standards are infrastructure-grade."
        size="md"
      />
      <StatsBar />

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-brand-charcoal-light leading-relaxed">
              <p>
                Nicolas James Environmental was founded to deliver specialist environmental services with the rigour and reliability that infrastructure asset owners demand. We recognised a clear gap: clients needed a contractor that speaks the language of utilities and Tier 1 contractors, operates with infrastructure-sector standards, but delivers with the agility and accountability of an owner-managed business.
              </p>
              <p>
                Our capability includes large-scale vegetation and tree clearance, watercourse and drainage vegetation management, estate-wide grounds maintenance, soft dig, backfill and reinstatement, fencing installation and repair, and NRSWA-compliant traffic-managed works.
              </p>
              <p>
                We are set up to respond to emergency and storm-related incidents, including fallen trees, blocked watercourses, damaged fencing, and access clearance, while the core of the business is built around planned, repeatable maintenance programmes for asset owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The NJE Model */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-12">
            The NJE Delivery Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-cream rounded-xl p-8">
              <Users className="h-10 w-10 text-brand-teal mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Directly Employed Teams</h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                Our operatives are directly employed, not sub-contracted. This means consistent quality, direct accountability, and teams who know our standards and your sites.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-8">
              <Truck className="h-10 w-10 text-brand-teal mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Owned Equipment</h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                We own the core assets to deliver in-house: specialist mowers, Chapter 8 vehicles, chainsaws, grounds kit, and fencing tools. Where larger plant is required, we hire in as needed to remain flexible.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-8">
              <ShieldCheck className="h-10 w-10 text-brand-teal mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Infrastructure Standards</h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                CSCS, SMSTS, SSSTS, NRSWA, PA1/PA6, chainsaw certifications, Water Safety Level 2, and plant tickets. Our teams are qualified for live, regulated environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Further */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/about/team" className="group block bg-white rounded-xl p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                Meet the Team
              </h3>
              <p className="text-sm text-brand-charcoal-light mb-4">
                Our people, their qualifications, and the experience they bring to every project.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
                View team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
            <Link href="/about/fleet" className="group block bg-white rounded-xl p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                Fleet & Equipment
              </h3>
              <p className="text-sm text-brand-charcoal-light mb-4">
                The specialist equipment we own and operate, from Baroness bank mowers to Chapter 8 vehicles.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
                View fleet <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
