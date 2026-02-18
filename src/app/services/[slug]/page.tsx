import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import AccreditationBar from "@/components/layout/AccreditationBar";
import { getContentBySlug, getAllSlugs } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import services from "@/data/services.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("services").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const content = getContentBySlug("services", slug);
  const frontmatter = content?.frontmatter as Record<string, string> | undefined;

  return createMetadata({
    title: frontmatter?.seoTitle || service.title,
    description: frontmatter?.seoDescription || service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("services", slug);
  const service = services.find((s) => s.slug === slug);

  if (!content || !service) notFound();

  const frontmatter = content.frontmatter as Record<string, string>;

  return (
    <>
      <Hero
        subtitle={frontmatter.heroSubtitle || "Our Services"}
        title={service.title}
        description={service.description}
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
        size="md"
      />
      <AccreditationBar />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 prose prose-lg prose-brand">
          <MDXRemote source={content.content} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
