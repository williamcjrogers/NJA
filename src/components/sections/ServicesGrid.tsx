import Card from "@/components/ui/Card";
import services from "@/data/services.json";
import { Trees, TreeDeciduous, Landmark, Waves, Fence, Shovel, TrafficCone, Siren } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trees,
  TreeDeciduous,
  Landmark,
  Waves,
  Fence,
  Shovel,
  TrafficCone,
  Siren,
};

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative pt-0 pb-16 md:pt-2 md:pb-24 bg-brand-cream overflow-hidden" aria-labelledby="services-heading">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-brand-charcoal) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Subtle animated background shapes */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-teal/[0.03] rounded-full blur-3xl mix-blend-multiply pointer-events-none"
        style={{ animation: "float 15s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-amber/[0.03] rounded-full blur-3xl mix-blend-multiply pointer-events-none"
        style={{ animation: "float 18s ease-in-out infinite reverse" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-12" data-reveal="fade-up">
          {/* Accent line */}
          <div className="flex justify-center mb-4" aria-hidden="true">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-teal to-brand-amber" />
          </div>
          <h2 id="services-heading" className="text-fluid-3xl font-bold text-brand-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-fluid-base text-brand-charcoal-light max-w-2xl mx-auto">
            Comprehensive environmental and site works, coordinated through robust project management and delivered by our highly vetted, trusted supply chain.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.slug} data-reveal="fade-up" data-reveal-delay={index + 1}>
                <Card
                  title={compact ? service.shortTitle : service.title}
                  description={compact ? undefined : service.description}
                  href={`/services/${service.slug}`}
                  icon={IconComponent ? <IconComponent className={compact ? "h-8 w-8" : "h-6 w-6"} /> : null}
                  compact={compact}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
