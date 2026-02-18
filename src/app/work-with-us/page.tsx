import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import AccreditationBar from "@/components/layout/AccreditationBar";
import { createMetadata } from "@/lib/metadata";
import { CheckCircle, Download, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import navigation from "@/data/navigation.json";

export const metadata = createMetadata({
  title: "Work With Us",
  description: "Why choose Nicolas James Environmental. Self-delivery model, qualified teams, owned equipment, and infrastructure-sector standards. Download our capability statement.",
  path: "/work-with-us",
});

export default function WorkWithUsPage() {
  return (
    <>
      <Hero
        subtitle="Work With Us"
        title="Your Next Environmental Services Partner"
        description="We deliver specialist environmental services with the rigour of infrastructure-sector standards and the agility of an owner-managed business. Here's why procurement teams choose NJE."
        primaryCta={{ label: "Discuss Your Requirements", href: "/contact" }}
        size="md"
      />
      <AccreditationBar />

      {/* Why Choose NJE */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-12">
            Why Choose NJE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Self-Delivery Model",
                description: "Our operatives are directly employed and our equipment is owned. This means consistent quality, direct accountability, and no reliance on sub-contractors for day-to-day operations.",
              },
              {
                title: "Qualified Teams",
                description: "CSCS, SMSTS, SSSTS, NPTC, PA1/PA6, NRSWA, Water Safety Level 2, and plant tickets across the team. Every operative is qualified for the live, regulated environments we work in.",
              },
              {
                title: "Scalable Capacity",
                description: "We own the core assets for reliable self-delivery and scale rapidly through hired plant and labour when larger programmes demand it. You get agility without heavy fixed overheads.",
              },
              {
                title: "Integrated Capability",
                description: "Vegetation management, arboriculture, grounds maintenance, watercourse management, fencing, soft dig, traffic management, and emergency response — from a single contractor.",
              },
              {
                title: "Emergency Response",
                description: "24/7 emergency and reactive capability for fallen trees, blocked watercourses, damaged fencing, and access clearance. Self-contained teams mobilise at short notice.",
              },
              {
                title: "Infrastructure Experience",
                description: "We operate in live environments for utilities, local authorities, housing associations, and Tier 1 contractors. Our teams understand the compliance, safety, and operational requirements of your sector.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Statement Download */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-4">
            Capability Statement
          </h2>
          <p className="text-brand-charcoal-light max-w-2xl mx-auto mb-8">
            Download our capability statement for a concise overview of our services, accreditations, equipment, and geographic coverage. No form required — it&apos;s yours immediately.
          </p>
          <Button href="/documents/capability-statement.pdf" variant="primary" size="lg">
            <Download className="h-5 w-5" aria-hidden="true" />
            Download Capability Statement (PDF)
          </Button>
        </div>
      </section>

      {/* How to Engage */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-6">
              How to Engage
            </h2>
            <p className="text-brand-charcoal-light leading-relaxed mb-8">
              Whether you&apos;re tendering a new contract, seeking a reliable sub-contractor, or need an emergency response partner, we&apos;re ready to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
              <a
                href={navigation.emergency.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-amber text-white text-base font-semibold rounded-lg hover:bg-brand-amber-light transition-colors min-h-[44px]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Emergency: {navigation.emergency.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
