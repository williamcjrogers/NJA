import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
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

  interface Frontmatter {
    heroSubtitle?: string;
    capabilities?: string | string[];
    [key: string]: unknown;
  }

  const frontmatter = content.frontmatter as Frontmatter;
  const capabilities = Array.isArray(frontmatter.capabilities)
    ? frontmatter.capabilities
    : (typeof frontmatter.capabilities === 'string' ? frontmatter.capabilities.split(',').map((s: string) => s.trim()) : []);

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

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-brand max-w-none">
                <MDXRemote source={content.content} />
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">

                {/* Core Capabilities Box */}
                {capabilities.length > 0 && (
                  <div className="bg-brand-cream rounded-xl p-8 border border-brand-teal/10 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-amber" />
                      Core Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {capabilities.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3 text-brand-charcoal-light leading-snug">
                          <span className="text-brand-teal font-bold select-none">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Speak to an Expert CTA */}
                <div className="bg-gradient-to-br from-brand-charcoal to-brand-teal text-white rounded-xl p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-brand-cream">
                      Speak to an Expert
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Discuss your specific operational requirements with our technical delivery team.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-amber hover:bg-white text-brand-charcoal font-bold py-3 px-6 rounded transition-colors duration-300 w-full justify-center"
                    >
                      Contact Us
                      <span className="text-xl leading-none">→</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
