import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight, Users, Truck, ShieldCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "About Us",
  description: "Founded by industry veterans who bring systems, processes, and robust project management to a supply chain we have trusted for years.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Bridging the Gap in Environmental & Construction Services"
        description="Founded by industry veterans who bring systems, processes, and robust project management to a supply chain we have trusted for years."
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
                Nicolas James Environmental was built by a group of industry veterans who have spent years working in the construction and environmental sectors. Looking closely at how the industry operates, we noticed a frequent, damaging gap between client relations and the manual works on the ground.
              </p>
              <p>
                Too often, this disconnect leads to unreliable clients for suppliers, and an unreliable supply chain for clients. Projects stall, communication breaks down, and quality suffers because the project management systems aren&apos;t there to support the individuals doing the hard work.
              </p>
              <p>
                We decided to change that. We bring rigorous systems, professional processes, and robust project management to suppliers we have worked with for years and trust implicitly. By bridging this gap, we deliver certainty for our clients and consistent, reliable work for our supply chain partners.
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
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Trusted Supply Chain</h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                We don&apos;t just hire anyone. We work exclusively with the best suppliers and subcontractors who we have known and trusted for years in the industry.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-8">
              <ShieldCheck className="h-10 w-10 text-brand-teal mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Robust Project Management</h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                We bring the systems, processes, and oversight to ensure that manual construction works are delivered smoothly, on time, and safely for all parties.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-8">
              <Truck className="h-10 w-10 text-brand-teal mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Industry-Leading Reliability</h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                By bridging the gap between client expectations and on-the-ground delivery, we create a reliable environment for both clients and our supply chain.
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
