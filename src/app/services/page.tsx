import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Services",
  description: "Comprehensive environmental and site works including vegetation management, arboriculture, grounds maintenance, watercourse management, fencing, soft dig, traffic management, and emergency response.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        subtitle="Core Capabilities"
        title="Executing Complex Environmental Works"
        description="From rigorous multi-site maintenance programmes to dynamic 24/7 emergency response. We deliver uncompromising standards for the UK's most demanding asset owners."
        size="md"
      />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
