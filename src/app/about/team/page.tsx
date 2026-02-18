import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import team from "@/data/team.json";

export const metadata = createMetadata({
  title: "Our Team",
  description: "Meet the qualified team at Nicolas James Environmental. CSCS, SMSTS, SSSTS, NPTC, PA1/PA6, NRSWA, and Water Safety certified operatives.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <Hero
        subtitle="Our Team"
        title="Qualified People, Proven Competence"
        description="Every member of our team holds the qualifications and certifications required for safe, compliant delivery in live, regulated environments."
        size="md"
      />

      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-brand-grey">
                <div className="aspect-[4/3] bg-brand-grey flex items-center justify-center">
                  <span className="text-brand-charcoal-light text-sm">Photo coming soon</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-charcoal">{member.name}</h3>
                  <p className="text-sm text-brand-teal font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-brand-charcoal-light mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.qualifications.map((q) => (
                      <span key={q} className="inline-block px-2.5 py-1 bg-brand-cream text-brand-teal text-xs font-bold rounded tracking-wide">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
