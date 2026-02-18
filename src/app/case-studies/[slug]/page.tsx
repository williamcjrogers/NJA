import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { getContentBySlug, getAllSlugs } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("case-studies").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("case-studies", slug);
  if (!content) return {};

  const fm = content.frontmatter as Record<string, string>;
  return createMetadata({
    title: fm.title,
    description: fm.description,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("case-studies", slug);

  if (!content) notFound();

  const fm = content.frontmatter as Record<string, unknown>;
  const stats = fm.stats as Array<{ label: string; value: string }> | undefined;
  const services = fm.services as string[] | undefined;
  const client = fm.client as string | undefined;
  const sector = fm.sector as string | undefined;

  return (
    <>
      <Hero
        subtitle="Case Study"
        title={fm.title as string}
        description={fm.description as string}
        size="md"
      />

      {/* Stats bar */}
      {stats && stats.length > 0 && (
        <section className="bg-brand-charcoal py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap items-center justify-center gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-amber">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Meta info */}
      <section className="py-6 bg-white border-b border-brand-grey">
        <div className="mx-auto max-w-3xl px-4 flex flex-wrap gap-4 text-sm">
          {client && (
            <div>
              <span className="font-semibold text-brand-charcoal">Client:</span>{" "}
              <span className="text-brand-charcoal-light">{client}</span>
            </div>
          )}
          {sector && (
            <div>
              <span className="font-semibold text-brand-charcoal">Sector:</span>{" "}
              <span className="inline-block px-2 py-0.5 bg-brand-cream text-brand-teal text-xs font-semibold rounded">
                {sector.replace(/-/g, " ")}
              </span>
            </div>
          )}
          {services && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-brand-charcoal">Services:</span>
              {services.map((s) => (
                <span key={s} className="inline-block px-2 py-0.5 bg-brand-grey text-brand-charcoal text-xs font-semibold rounded">
                  {s.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 prose prose-lg prose-brand">
          <MDXRemote source={content.content} />
        </div>
      </section>

      <CTASection
        title="Similar Requirements?"
        description="If you have a similar project or challenge, get in touch to discuss how we can help."
      />
    </>
  );
}
