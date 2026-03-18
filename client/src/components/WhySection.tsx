/**
 * L1 Builders — Why L1 Section
 * Design: White background section, asymmetric layout with left-anchored eyebrow,
 * offset card grid with steel-blue top-border accents, bronze icon fills.
 * Uses scroll-triggered fade-up animations.
 */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Layers, DollarSign, Building2, ShieldCheck, Wrench } from "lucide-react";

const differentiators = [
  {
    icon: TrendingUp,
    title: "Investor Perspective",
    description:
      "We renovate as owners, not as vendors. Every decision is made through the lens of ROI, not just construction completion.",
    accent: "steel",
  },
  {
    icon: DollarSign,
    title: "ROI-Driven Planning",
    description:
      "Every dollar of construction should increase income or value. We apply value engineering and budget discipline to every project.",
    accent: "bronze",
  },
  {
    icon: Layers,
    title: "Integrated Expertise",
    description:
      "Licensed brokers, investors, and contractors under one roof. Acquisition to resale expertise informs every renovation decision.",
    accent: "steel",
  },
  {
    icon: Building2,
    title: "One-Stop Solution",
    description:
      "One contract. One team. Full accountability. Licensed trades for plumbing, electrical, HVAC, structural work, and interiors.",
    accent: "bronze",
  },
  {
    icon: ShieldCheck,
    title: "Deep Market Knowledge",
    description:
      "NYC DOB experience, Con Edison coordination, tenant-occupied renovation expertise, and City of New York project experience.",
    accent: "steel",
  },
  {
    icon: Wrench,
    title: "Vendor Pricing Advantage",
    description:
      "Contractor pricing on materials, access to premium brands, and custom fabrication relationships — passed directly to clients.",
    accent: "bronze",
  },
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
    <section id="why-l1" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section header — asymmetric left anchor */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span
                className="text-[#4A7FA5]"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
              >
                — 01 / WHY L1 BUILDERS
              </span>
            </div>
            <h2
              className={`text-[#0D1117] transition-all duration-600 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
              }}
            >
              We Renovate as Owners,
              <br />
              <span style={{ color: "#4A7FA5" }}>Not as Vendors.</span>
            </h2>
          </div>
          <p
            className={`text-[#52606D] max-w-sm transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, fontWeight: 300 }}
          >
            With over 1,000 homes renovated and sold nationwide, our team brings
            collective 40+ years of real estate and construction experience to every project.
          </p>
        </div>

        {/* Differentiator grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            const isSteel = item.accent === "steel";
            return (
              <div
                key={item.title}
                className={`group bg-white border border-[#E8ECF0] p-7 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 ${
                  isSteel ? "card-accent-top" : "card-accent-top-bronze"
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  transitionDelay: inView ? `${i * 80}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                  transitionDuration: "500ms",
                }}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${
                    isSteel ? "bg-[#4A7FA5]/10" : "bg-[#A67C52]/10"
                  }`}
                >
                  <Icon
                    size={20}
                    className={isSteel ? "text-[#4A7FA5]" : "text-[#A67C52]"}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-[#0D1117] mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.01em" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#52606D]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
