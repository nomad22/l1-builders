/**
 * L1 Builders — Stats Bar
 * Design: Full-width charcoal (#1C2128) band between sections.
 * Animated counters on scroll-into-view. Space Mono labels.
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Homes Renovated & Sold" },
  { value: 40, suffix: "+", label: "Years Combined Experience" },
  { value: 5, suffix: "–50", label: "Unit Multifamily Specialists" },
  { value: 100, suffix: "%", label: "Licensed & Insured Trades" },
];

function useCounter(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, 1600, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0">
      <div className="flex items-baseline gap-1">
        <span
          className="text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1 }}
        >
          {count.toLocaleString()}
        </span>
        <span
          className="text-[#4A7FA5]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}
        >
          {suffix}
        </span>
      </div>
      <span
        className="text-white/50 mt-2"
        style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#1C2128]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </div>
  );
}
