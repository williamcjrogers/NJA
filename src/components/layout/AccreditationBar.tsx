import accreditations from "@/data/accreditations.json";

export default function AccreditationBar() {
  return (
    <section
      className="relative bg-white/80 backdrop-blur-sm py-6"
      aria-label="Accreditations"
      data-reveal="fade-up"
    >
      {/* Gradient border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {accreditations.map((acc) => (
            <div
              key={acc.id}
              className="flex items-center gap-2"
              title={acc.fullName}
            >
              <span className="inline-flex items-center justify-center h-8 px-3 bg-gradient-to-b from-white to-brand-cream rounded text-xs font-bold tracking-wide text-brand-teal border border-brand-grey shadow-sm">
                {acc.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
