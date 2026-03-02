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
        "group relative block bg-white rounded-xl border border-brand-grey/80 p-6 pt-7 overflow-hidden",
        "transition-all duration-500 ease-out z-10",
        "hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-teal/10 hover:border-brand-teal/30 hover:z-20",
        className
      )}
    >
      {/* Subtle hover background sweep */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10"
        aria-hidden="true"
      />
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
          className="mb-5 w-14 h-14 rounded-xl bg-brand-teal/[0.06] flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-teal/20"
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
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal group-hover:text-brand-amber transition-colors duration-300">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-2"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
