import Card from "@/components/ui/Card";
import sectors from "@/data/sectors.json";
import { Droplets, Zap, Building2, Home, HardHat } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Zap,
  Building2,
  Home,
  HardHat,
};

export default function SectorPathways() {
  return (
    <section className="relative py-16 md:py-24 bg-[#F7F5F0] overflow-hidden" aria-labelledby="sectors-heading">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26, 92, 79, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 92, 79, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-12" data-reveal="fade-up">
          {/* Accent line */}
          <div className="flex justify-center mb-4" aria-hidden="true">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-teal to-brand-amber" />
          </div>
          <h2 id="sectors-heading" className="text-fluid-3xl font-bold text-brand-charcoal mb-4">
            Who We Work With
          </h2>
          <p className="text-fluid-base text-brand-charcoal-light max-w-2xl mx-auto">
            Trusted by infrastructure asset owners and principal contractors across the UK&apos;s critical sectors.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {sectors.map((sector, index) => {
            const IconComponent = iconMap[sector.icon];
            return (
              <div
                key={sector.slug}
                data-reveal="fade-up"
                data-reveal-delay={index + 1}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <Card
                  title={sector.title}
                  description={sector.description}
                  href={`/sectors/${sector.slug}`}
                  icon={IconComponent ? <IconComponent className="h-6 w-6" /> : null}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
