import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  tag?: string;
  className?: string;
}

export default function Card({ title, description, href, icon, tag, className }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block bg-white rounded-xl border border-brand-grey/80 p-6 pt-7",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-teal/8 hover:border-brand-teal/20",
        className
      )}
    >
      {/* Gradient accent bar */}
      <div
        className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full bg-gradient-to-r from-brand-teal to-brand-teal/30 group-hover:from-brand-teal group-hover:to-brand-amber transition-all duration-500"
        aria-hidden="true"
      />

      {tag && (
        <span className="inline-block px-2.5 py-1 bg-brand-cream text-brand-teal text-xs font-semibold rounded mb-4 tracking-wide uppercase">
          {tag}
        </span>
      )}

      {icon && (
        <div
          className="mb-4 w-12 h-12 rounded-lg bg-brand-teal/[0.08] flex items-center justify-center text-brand-teal group-hover:bg-brand-teal/[0.14] transition-colors duration-300"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-teal transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-brand-charcoal-light leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
