/**
 * L1 Builders — How We Maximize ROI Section
 * Design: Dark charcoal background (#1C2128), white text, steel-blue numbered steps.
 * Asymmetric two-column layout: left side has the content, right side has a process list.
 */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Value engineering on every project",
  "Budget discipline from day one",
  "Strategic finish selection",
  "No scope creep — change orders managed proactively",
  "Tenant-occupied renovation expertise",
  "NYC DOB permit management",
  "Con Edison & utility coordination",
  "Performance-driven milestone tracking",
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

export default function HowWeWorkSection() {
  const { ref, inView } = useInView();

  return (
    <section id="how-we-work" className="bg-[#1C2128] py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div
            className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: "#fff",
              }}
            >
              Every Dollar of Construction
              <br />
              <span style={{ color: "#4A7FA5" }}>Should Increase Value.</span>
            </h2>
          </div>
          <div
            className={`transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="bg-[#151A20] border border-white/8 p-7">
              <p
                className="text-white/50 mb-5"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                Our Operating Principles
              </p>
              <ul className="space-y-3">
                {principles.map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#4A7FA5] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span
                      className="text-white/70"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", lineHeight: 1.5, fontWeight: 300 }}
                    >
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
