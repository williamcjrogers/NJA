import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import accreditations from "@/data/accreditations.json";

export const metadata = createMetadata({
  title: "Accreditations & Compliance",
  description: "Nicolas James Environmental holds CSCS, SMSTS, SSSTS, NRSWA, PA1/PA6, chainsaw certifications, Water Safety Level 2, CHAS, SafeContractor, and Constructionline accreditations.",
  path: "/accreditations",
});

const categoryLabels: Record<string, string> = {
  "health-safety": "Health & Safety Schemes",
  "supply-chain": "Supply Chain Verification",
  "staff-qualifications": "Staff Qualifications & Certifications",
  "operational": "Operational Standards",
};

const categoryOrder = ["health-safety", "supply-chain", "operational", "staff-qualifications"];

export default function AccreditationsPage() {
  return (
    <>
      <Hero
        subtitle="Accreditations"
        title="Accreditations, Compliance & Qualifications"
        description="Our accreditations, certifications, and staff qualifications demonstrate the competence and compliance that procurement teams require. Every qualification listed is current and verifiable."
        size="md"
      />

      {categoryOrder.map((category) => {
        const items = accreditations.filter((a) => a.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="py-12 md:py-16 even:bg-white odd:bg-brand-cream">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-fluid-2xl font-bold text-brand-charcoal mb-8">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((acc) => (
                  <div key={acc.id} className="bg-white rounded-xl p-6 border border-brand-grey">
                    <span className="inline-block px-3 py-1.5 bg-brand-teal text-white text-xs font-bold rounded mb-4 tracking-wide">
                      {acc.name}
                    </span>
                    <h3 className="text-base font-bold text-brand-charcoal mb-2">
                      {acc.fullName}
                    </h3>
                    <p className="text-sm text-brand-charcoal-light leading-relaxed">
                      {acc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
