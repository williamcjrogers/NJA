import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import fleet from "@/data/fleet.json";

export const metadata = createMetadata({
  title: "Fleet & Equipment",
  description: "Nicolas James Environmental owns specialist equipment including Baroness bank mowers, Chapter 8 vehicles, chainsaws, and full grounds maintenance kit for self-delivered environmental services.",
  path: "/about/fleet",
});

export default function FleetPage() {
  const categories = [...new Set(fleet.map((item) => item.category))];

  return (
    <>
      <Hero
        subtitle="Fleet & Equipment"
        title="Owned Equipment, Self-Delivered Capability"
        description="We own the core assets to deliver in-house. This means reliable, self-sufficient delivery for day-to-day operations, with the flexibility to hire in larger plant when required."
        size="md"
      />

      {categories.map((category) => (
        <section key={category} className="py-12 md:py-16 even:bg-white odd:bg-brand-cream">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-fluid-2xl font-bold text-brand-charcoal mb-8">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fleet
                .filter((item) => item.category === category)
                .map((item, i) => (
                  <div key={i} className="bg-white rounded-xl border border-brand-grey overflow-hidden">
                    <div className="aspect-[16/10] bg-brand-grey flex items-center justify-center">
                      <span className="text-brand-charcoal-light text-sm">Photo coming soon</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-brand-charcoal mb-2">{item.name}</h3>
                      <p className="text-sm text-brand-charcoal-light">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
