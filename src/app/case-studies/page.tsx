import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import { getAllContent } from "@/lib/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = createMetadata({
  title: "Case Studies",
  description: "Case studies demonstrating Nicolas James Environmental's capability in vegetation management, arboriculture, grounds maintenance, and emergency response across UK infrastructure sectors.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = getAllContent("case-studies");

  return (
    <>
      <Hero
        subtitle="Case Studies"
        title="Proven Delivery, Measurable Outcomes"
        description="Every project follows our Challenge, Solution, Outcome methodology. These case studies demonstrate our capability across services and sectors."
        size="md"
      />

      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-charcoal-light">Case studies coming soon. Contact us to discuss our project experience.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => {
                const fm = study.frontmatter as Record<string, unknown>;
                const stats = fm.stats as Array<{ label: string; value: string }> | undefined;
                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden border border-brand-grey hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/9] bg-brand-grey flex items-center justify-center">
                      <span className="text-brand-charcoal-light text-sm">Project photography coming soon</span>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-block px-2.5 py-1 bg-brand-cream text-brand-teal text-xs font-semibold rounded tracking-wide uppercase">
                          {fm.sector as string}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                        {fm.title as string}
                      </h3>
                      <p className="text-sm text-brand-charcoal-light mb-4">
                        {fm.description as string}
                      </p>
                      {stats && (
                        <div className="flex gap-6 mb-4">
                          {stats.map((stat, i) => (
                            <div key={i}>
                              <div className="text-lg font-bold text-brand-teal">{stat.value}</div>
                              <div className="text-xs text-brand-charcoal-light">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
                        Read case study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
