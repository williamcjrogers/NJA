import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  dark = false,
  size = "lg",
  className,
}: HeroProps) {
  const heights = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32 lg:py-36",
  };

  const gradient = dark
    ? "linear-gradient(160deg, #1a1a1a 0%, #2D2D2D 40%, #1a1a1a 100%)"
    : "linear-gradient(160deg, #0d3b32 0%, #134840 20%, #1A5C4F 50%, #237A6A 80%, #134840 100%)";

  const isHomepage = size === "lg";

  return (
    <section
      className={cn(
        heights[size],
        "relative overflow-hidden bg-noise text-white",
        className
      )}
      style={{ background: gradient }}
    >
      {/* Topographic contour lines - environmental themed */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <path d="M-100,300 C100,200 300,350 500,250 C700,150 900,300 1100,200 C1300,100 1400,250 1500,200" stroke="white" strokeWidth="1" pathLength="1" className="hero-draw-line" />
        <path d="M-100,350 C150,250 350,400 550,300 C750,200 950,350 1150,250 C1350,150 1450,300 1500,280" stroke="white" strokeWidth="0.8" pathLength="1" className="hero-draw-line-delayed" />
        <path d="M-100,400 C200,300 400,450 600,350 C800,250 1000,400 1200,300 C1400,200 1500,350 1600,320" stroke="white" strokeWidth="0.6" pathLength="1" className="hero-draw-line-delayed" style={{ animationDelay: "0.8s" }} />
        <path d="M-100,250 C50,150 250,300 450,200 C650,100 850,250 1050,150 C1250,50 1350,200 1500,160" stroke="white" strokeWidth="0.5" pathLength="1" className="hero-draw-line-delayed" style={{ animationDelay: "1.1s" }} />
        <path d="M-100,450 C250,350 450,500 650,400 C850,300 1050,450 1250,350 C1450,250 1550,400 1600,380" stroke="white" strokeWidth="0.4" pathLength="1" className="hero-draw-line-delayed" style={{ animationDelay: "1.4s" }} />
      </svg>

      {/* Radial amber glow - larger and more prominent */}
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-[0.15]"
        style={{
          background: "radial-gradient(circle, rgba(232,115,26,0.4) 0%, rgba(232,115,26,0.1) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Secondary teal glow bottom-left */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.1]"
        style={{
          background: "radial-gradient(circle, rgba(35,122,106,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className={cn(
          "flex items-center gap-12 lg:gap-20",
          isHomepage ? "flex-col lg:flex-row" : "flex-col"
        )}>
          {/* Text content */}
          <div className={cn(isHomepage ? "lg:flex-1 lg:max-w-[55%]" : "max-w-3xl")}>
            {subtitle && (
              <div className="hero-fade-in flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-gradient-to-r from-brand-amber to-brand-amber/0 rounded-full" aria-hidden="true" />
                <p className="text-sm font-semibold tracking-[0.25em] uppercase text-brand-amber-light">
                  {subtitle}
                </p>
              </div>
            )}
            <h1
              className={cn(
                "font-bold leading-[1.05] mb-6 hero-fade-in-d1",
                size === "lg"
                  ? "text-fluid-4xl md:text-fluid-5xl"
                  : "text-fluid-3xl md:text-fluid-4xl",
                isHomepage ? "hero-title-shimmer" : "text-white"
              )}
            >
              {title}
            </h1>
            {description && (
              <p className="hero-fade-in-d2 text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-light">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="hero-fade-in-d3 flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="accent"
                    size="lg"
                    className="shadow-lg shadow-brand-amber/30 hover:shadow-xl hover:shadow-brand-amber/40 transition-shadow"
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white hover:text-brand-teal backdrop-blur-sm"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {/* Trust indicators - homepage only */}
            {isHomepage && (
              <div className="hero-fade-in-d4 mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Vetted Supply Chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Emergency Response</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Rigorous Project Management</span>
                </div>
              </div>
            )}
          </div>

          {/* Environmental themed illustration - homepage only */}
          {isHomepage && (
            <div className="hero-illustration hidden lg:block lg:flex-1 lg:max-w-[45%]" aria-hidden="true">
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[420px] mx-auto"
              >
                {/* Outer ring - represents ecosystem */}
                <circle cx="250" cy="250" r="220" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                {/* Stylized tree trunk */}
                <path
                  d="M250,380 L250,220"
                  stroke="rgba(242,140,58,0.6)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line"
                  style={{ transformOrigin: "250px 380px" }}
                />

                {/* Main branches */}
                <path
                  d="M250,280 C230,250 190,230 160,210"
                  stroke="rgba(242,140,58,0.5)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                />
                <path
                  d="M250,260 C270,230 310,215 340,200"
                  stroke="rgba(242,140,58,0.5)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "0.7s" }}
                />
                <path
                  d="M250,240 C235,210 215,190 195,170"
                  stroke="rgba(242,140,58,0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "0.9s" }}
                />
                <path
                  d="M250,230 C265,200 290,180 310,160"
                  stroke="rgba(242,140,58,0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "1.1s" }}
                />

                {/* Canopy - abstract breathing circles */}
                <circle cx="160" cy="200" r="35" fill="rgba(35,122,106,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="340" cy="190" r="30" fill="rgba(35,122,106,0.12)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="195" cy="160" r="25" fill="rgba(35,122,106,0.1)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <circle cx="310" cy="150" r="28" fill="rgba(35,122,106,0.1)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <circle cx="250" cy="140" r="32" fill="rgba(35,122,106,0.13)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Leaf accent shapes */}
                <ellipse cx="140" cy="175" rx="12" ry="6" fill="rgba(242,140,58,0.2)" transform="rotate(-30 140 175)" />
                <ellipse cx="355" cy="170" rx="10" ry="5" fill="rgba(242,140,58,0.18)" transform="rotate(25 355 170)" />
                <ellipse cx="230" cy="125" rx="11" ry="5" fill="rgba(242,140,58,0.15)" transform="rotate(-15 230 125)" />

                {/* Root system below */}
                <path
                  d="M250,380 C240,400 220,420 190,440"
                  stroke="rgba(242,140,58,0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "1.3s" }}
                />
                <path
                  d="M250,380 C260,400 280,420 310,435"
                  stroke="rgba(242,140,58,0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "1.5s" }}
                />
                <path
                  d="M250,385 C245,410 235,430 225,450"
                  stroke="rgba(242,140,58,0.2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "1.7s" }}
                />
                <path
                  d="M250,385 C255,410 270,430 280,450"
                  stroke="rgba(242,140,58,0.2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  pathLength="1"
                  className="hero-draw-line-delayed"
                  style={{ animationDelay: "1.9s" }}
                />

                {/* Detail dots */}
                <circle cx="175" cy="230" r="2" fill="rgba(242,140,58,0.4)" />
                <circle cx="320" cy="225" r="2.5" fill="rgba(242,140,58,0.35)" />
                <circle cx="270" cy="165" r="1.5" fill="rgba(255,255,255,0.3)" />
                <circle cx="210" cy="195" r="2" fill="rgba(255,255,255,0.25)" />

                {/* Growth rings at base */}
                <ellipse cx="250" cy="385" rx="40" ry="8" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
                <ellipse cx="250" cy="385" rx="60" ry="12" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" fill="none" />
                <ellipse cx="250" cy="385" rx="80" ry="16" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" fill="none" />

                {/* Water/infrastructure line */}
                <path
                  d="M80,430 Q165,410 250,430 Q335,450 420,430"
                  stroke="rgba(35,122,106,0.3)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4,6"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Decorative ring */}
      <div
        className="absolute top-16 right-[12%] w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/[0.04]"
        aria-hidden="true"
      />
    </section>
  );
}
