import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";
import { getAllContent } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = createMetadata({
  title: "News",
  description: "Latest news and updates from Nicolas James Environmental. Industry insights, project completions, and company announcements.",
  path: "/news",
});

export default function NewsPage() {
  const posts = getAllContent("news").sort((a, b) => {
    const dateA = (a.frontmatter.date as string) || "";
    const dateB = (b.frontmatter.date as string) || "";
    return dateB.localeCompare(dateA);
  });

  return (
    <>
      <Hero
        subtitle="News"
        title="Latest News & Updates"
        description="Industry insights, project completions, and company announcements from Nicolas James Environmental."
        size="md"
      />

      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-charcoal-light">News articles coming soon.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const fm = post.frontmatter as Record<string, string>;
                return (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="group block bg-white rounded-xl p-6 md:p-8 border border-brand-grey hover:shadow-lg transition-all"
                  >
                    {fm.date && (
                      <div className="flex items-center gap-2 text-sm text-brand-charcoal-light mb-3">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {new Date(fm.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    )}
                    <h2 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                      {fm.title}
                    </h2>
                    <p className="text-brand-charcoal-light mb-4">
                      {fm.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
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
