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

      {/* Subtle static background accents */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,92,79,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,115,26,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Pull content up into the SectionDivider's solid color space to eliminate deadspace */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-16" data-reveal="fade-up">
          {/* Accent line */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-brand-teal to-brand-amber" />
          </div>
          <h2 id="services-heading" className="text-fluid-3xl font-bold text-brand-charcoal mb-6">
            Core Capabilities
          </h2>
          <p className="text-fluid-lg text-brand-charcoal-light max-w-3xl mx-auto leading-relaxed">
            Delivering self-executed environmental and site works for critical infrastructure. We deploy our own highly qualified personnel and specialist machinery to guarantee absolute compliance, safety, and operational excellence.
          </p>
        </div>

        {/* Changed grid to max 2 columns for a more spacious, premium feel (or 3-4 if compact, but assuming standard here) */}
        <div className={compact ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"}>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.slug} data-reveal="fade-up" data-reveal-delay={index + 1}>
                <Card
                  title={compact ? service.shortTitle : service.title}
                  description={compact ? undefined : service.description}
                  href={`/services/${service.slug}`}
                  icon={IconComponent ? <IconComponent className={compact ? "h-8 w-8" : "h-7 w-7"} /> : null}
                  compact={compact}
                  index={index}
                  className={compact ? "" : "h-full py-8"} // Extra padding for the spacious 2-col layout
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
