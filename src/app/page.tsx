import Hero from "@/components/sections/Hero";
import AccreditationBar from "@/components/layout/AccreditationBar";
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
        title="Specialist Environmental Services for Critical Infrastructure"
        description="Vegetation management, arboriculture, and grounds maintenance for utilities, local authorities, and infrastructure contractors. Delivered by directly employed, qualified teams with owned specialist equipment."
        primaryCta={{ label: "View Our Services", href: "/services" }}
        secondaryCta={{ label: "Work With Us", href: "/work-with-us" }}
      />
      <SectionDivider variant="wave" fillColor="var(--color-brand-white)" />
      <AccreditationBar />
      <SectionDivider variant="curve" fillColor="var(--color-brand-cream)" />
      <ServicesGrid />
      <SectionDivider variant="angle" fillColor="var(--color-brand-charcoal)" />
      <StatsBar />
      <SectionDivider variant="wave" fillColor="var(--color-brand-white)" flip />
      <SectorPathways />
      <SectionDivider variant="curve" fillColor="var(--color-brand-teal)" />
      <CTASection />
    </>
  );
}
