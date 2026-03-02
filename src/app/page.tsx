import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsBar from "@/components/sections/StatsBar";
import SectorPathways from "@/components/sections/SectorPathways";
import CTASection from "@/components/sections/CTASection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero
        subtitle="Nicolas James Environmental"
        title="Bridging the Gap"
        description="We bring reliable systems, proactive project management, and a highly trusted supply chain to the environment and construction sectors. Delivering certainty for clients and reliability for our long-standing partners."
        primaryCta={{ label: "View Our Services", href: "/services" }}
        secondaryCta={{ label: "Our Capabilities", href: "/services" }}
      />
      <SectionDivider variant="wave" fillColor="var(--color-brand-cream)" />
      <ServicesGrid compact />
      <SectionDivider variant="angle" fillColor="var(--color-brand-charcoal)" />
      <StatsBar />
      <SectionDivider variant="wave" fillColor="var(--color-brand-white)" flip />
      <SectorPathways />
      <SectionDivider variant="curve" fillColor="var(--color-brand-teal)" />
      <CTASection />
    </>
  );
}
