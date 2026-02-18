import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve";
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export default function SectionDivider({
  variant = "wave",
  fillColor = "var(--color-brand-cream)",
  className,
  flip = false,
}: SectionDividerProps) {
  const paths: Record<string, string> = {
    wave: "M0,64 C320,0 640,128 960,64 C1280,0 1600,96 1920,64 L1920,160 L0,160 Z",
    angle: "M0,0 L1920,120 L1920,160 L0,160 Z",
    curve: "M0,128 Q960,0 1920,128 L1920,160 L0,160 Z",
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-[0] -mt-px",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20 lg:h-24"
        fill={fillColor}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
