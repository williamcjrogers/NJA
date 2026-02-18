import Button from "@/components/ui/Button";
import { Phone } from "lucide-react";
import navigation from "@/data/navigation.json";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Discuss Your Project",
  description = "Whether you need a planned maintenance programme or reactive emergency response, our team is ready to help. Get in touch to discuss your requirements.",
}: CTASectionProps) {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-noise"
      style={{
        background: "linear-gradient(135deg, var(--color-brand-teal-dark) 0%, var(--color-brand-teal) 50%, var(--color-brand-teal-dark) 100%)",
      }}
      aria-label="Contact us"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Decorative floating circle */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/[0.06]"
        aria-hidden="true"
      />

      {/* Amber glow */}
      <div
        className="absolute top-0 left-1/3 w-80 h-80 rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, var(--color-brand-amber), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center" data-reveal="fade-up">
        <h2 className="text-fluid-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-fluid-base text-white/80 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="accent" size="lg">
            Get in Touch
          </Button>
          <a
            href={navigation.emergency.href}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/80 rounded-lg hover:bg-white hover:text-brand-teal transition-colors min-h-[44px] backdrop-blur-sm"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {navigation.emergency.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
