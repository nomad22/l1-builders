/**
 * L1 Builders — How We Maximize ROI Section
 * Design: Dark charcoal background (#1C2128), white text, steel-blue numbered steps.
 * Asymmetric two-column layout: left side has the content, right side has a process list.
 */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Market-Based Finish Selection",
    description:
      "We analyze comparable rents and sales to determine the exact finish level that maximizes return without overcapitalizing.",
  },
  {
    number: "02",
    title: "Cost-Benefit Analysis",
    description:
      "Every scope item is evaluated against its projected return. We build budgets that align with your investment thesis.",
  },
  {
    number: "03",
    title: "Avoiding Overcapitalization",
    description:
      "We know when to stop. Over-improving beyond market comps destroys returns — we keep your scope aligned with comps.",
  },
  {
    number: "04",
    title: "Aligning Scope with Comps",
    description:
      "Your renovation scope is calibrated to the neighborhood's rental and sales comps, not to personal preference.",
  },
];

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
    <section id="how-we-work" className="bg-[#1C2128] py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span
              className="text-[#4A7FA5]"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
            >
              — 05 / HOW WE MAXIMIZE ROI
            </span>
          </div>
          <h2
            className={`text-white transition-all duration-600 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Every Dollar of Construction
            <br />
            <span style={{ color: "#4A7FA5" }}>Should Increase Value.</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Process steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex gap-5 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
              >
                {/* Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-10 h-10 border border-[#4A7FA5]/40 flex items-center justify-center"
                    style={{ background: "rgba(74,127,165,0.08)" }}
                  >
                    <span
                      className="text-[#4A7FA5]"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-[#4A7FA5]/20 min-h-[2rem]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.01em" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/55"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Principles list + pull quote */}
          <div
            className={`transition-all duration-600 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
          >
            {/* Pull quote */}
            <blockquote
              className="border-l-2 border-[#A67C52] pl-6 mb-10"
            >
              <p
                className="text-white/80"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.625rem", fontWeight: 500, lineHeight: 1.3, letterSpacing: "0.01em" }}
              >
                "We renovate as owners, not as vendors. Our financial background means
                we think about your returns before we pick a single tile."
              </p>
              <footer className="mt-4">
                <span
                  className="text-[#A67C52]"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
                >
                  — L1 BUILDERS TEAM
                </span>
              </footer>
            </blockquote>

            {/* Principles checklist */}
            <div
              className="bg-[#151A20] border border-white/8 p-7"
            >
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
