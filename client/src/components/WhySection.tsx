/**
 * L1 Builders — Why L1 Section (Commercial)
 * 4-point icon-led card grid. Steel-blue accent.
 */

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Landmark, PhoneCall, Hammer } from "lucide-react";

const points = [
  { Icon: BadgeCheck, title: "The Price Is the Price", body: "What we quote is what you pay. No change orders, no surprises — even if something unexpected comes up on our end." },
  { Icon: Landmark,  title: "Fair Payment Terms",    body: "25% upfront, the rest paid only when milestones are completed to your satisfaction. You never pay for work that hasn't been done." },
  { Icon: PhoneCall, title: "We Don't Disappear",    body: "Real office. Real phone. A project manager who picks up — not just at the start and end, but throughout the entire job." },
  { Icon: Hammer,    title: "Craftsmanship, Not Just Construction", body: "We don't cut corners. We treat your property like we own it, and our supplier relationships mean better materials at better prices." },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function WhySection() {
  const { ref, inView } = useInView();

  return (
    <section id="why-l1" className="bg-white py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em", color: "#0D1117" }}
          >
            We Renovate as Owners,
            <br />
            <span style={{ color: "#4A7FA5" }}>Not as Vendors.</span>
          </h2>
        </div>

        {/* 2×2 icon-led cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`p-5 lg:p-6 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ background: "#F5F7FA", transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <p.Icon size={20} strokeWidth={1.75} style={{ color: "#4A7FA5", flexShrink: 0 }} />
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#0D1117" }}>
                  {p.title}
                </h3>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.75, fontWeight: 300, color: "#52606D" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
