import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { getContentBySlug, getAllSlugs } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("news").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("news", slug);
  if (!content) return {};

  const fm = content.frontmatter as Record<string, string>;
  return createMetadata({
    title: fm.title,
    description: fm.description,
    path: `/news/${slug}`,
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("news", slug);

  if (!content) notFound();

  const fm = content.frontmatter as Record<string, string>;

  return (
    <>
      <Hero
        subtitle="News"
        title={fm.title}
        size="sm"
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          {fm.date && (
            <div className="flex items-center gap-2 text-sm text-brand-charcoal-light mb-8">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {new Date(fm.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          )}
          <div className="prose prose-lg prose-brand">
            <MDXRemote source={content.content} />
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
