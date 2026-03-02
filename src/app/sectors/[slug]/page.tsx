import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import sectors from "@/data/sectors.json";
import services from "@/data/services.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return {};

  return createMetadata({
    title: `${sector.title} | Environmental Services`,
    description: sector.description,
    path: `/sectors/${slug}`,
  });
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);

  if (!sector) notFound();

  const relevantServices = services.filter((s) =>
    sector.relevantServices.includes(s.slug)
  );

  return (
    <>
      <Hero
        subtitle="Our Sectors"
        title={sector.title}
        description={sector.description}
        primaryCta={{ label: "Discuss Your Requirements", href: "/contact" }}
        secondaryCta={{ label: "View All Sectors", href: "/sectors" }}
        size="md"
      />

      {/* Pain Points */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-8">
              We Understand Your Challenges
            </h2>
            <ul className="space-y-4">
              {sector.painPoints.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-brand-charcoal-light">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-fluid-3xl font-bold text-brand-charcoal mb-8">
            How We Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-brand-cream rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-brand-charcoal-light mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
