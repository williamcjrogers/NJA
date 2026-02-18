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
        subtitle="Our Services"
        title="Comprehensive Environmental & Site Works"
        description="From planned maintenance programmes to emergency response, we deliver the full scope of environmental and site works for infrastructure asset owners."
        size="md"
      />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
