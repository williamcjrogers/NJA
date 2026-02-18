import StatCounter from "@/components/ui/StatCounter";
import stats from "@/data/stats.json";

export default function StatsBar() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2D2D2D 50%, #1a1a1a 100%)",
      }}
      aria-label="Company statistics"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow spots */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, var(--color-brand-amber), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, var(--color-brand-teal-light), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4" data-reveal="fade-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index > 0 ? "md:border-l md:border-white/10" : ""}
            >
              <StatCounter
                value={stat.numericValue}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
