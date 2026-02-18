import Hero from "@/components/sections/Hero";
import SectorPathways from "@/components/sections/SectorPathways";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sectors We Serve",
  description: "Specialist environmental services for water utilities, energy and telecoms, local authorities, housing associations, and Tier 1 infrastructure contractors.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <Hero
        subtitle="Our Sectors"
        title="Who We Work With"
        description="We serve infrastructure asset owners and principal contractors who need qualified, reliable environmental services delivered to sector-specific standards."
        size="md"
      />
      <SectorPathways />
      <CTASection />
    </>
  );
}
