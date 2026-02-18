"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="relative text-center px-4">
      {/* Amber glow behind number */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-brand-amber blur-2xl opacity-[0.15]"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="text-fluid-4xl font-bold text-brand-amber tracking-tight">
          {count}
          {suffix}
        </div>
        <div className="text-sm font-medium text-white/70 mt-1 tracking-wide uppercase">
          {label}
        </div>
      </div>
    </div>
  );
}
