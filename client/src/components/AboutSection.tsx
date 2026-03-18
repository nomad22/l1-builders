/**
 * L1 Builders — About / Authority Section
 * Design: White background, split layout with authority credentials on left,
 * target customer personas on right. Bronze accents for credential badges.
 */

import { useEffect, useRef, useState } from "react";
import { MapPin, Award, Users, Briefcase } from "lucide-react";

const credentials = [
  {
    icon: Award,
    label: "1,000+ Homes",
    sub: "Renovated & sold nationwide",
  },
  {
    icon: Briefcase,
    label: "40+ Years",
    sub: "Collective real estate & construction experience",
  },
  {
    icon: MapPin,
    label: "NYC & Long Island",
    sub: "Projects across all five boroughs",
  },
  {
    icon: Users,
    label: "City of New York",
    sub: "Municipal project experience",
  },
];

const personas = [
  { label: "SFR Landlords", desc: "Single-family rental owners looking to increase rents and value." },
  { label: "2–4 Family Owners", desc: "Small multifamily owners repositioning for higher income." },
  { label: "Multifamily Investors", desc: "5–50 unit building owners executing capital improvement plans." },
  { label: "BRRR Investors", desc: "Buy-Renovate-Rent-Refinance investors needing fast, budget-disciplined execution." },
  { label: "Out-of-State Investors", desc: "Remote buyers in the NYC market who need a trusted local operator." },
  { label: "Small Developers", desc: "Developers executing value-add and condo conversion projects." },
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

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="bg-white py-24 lg:py-32" ref={ref}>
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
              — 06 / ABOUT L1 BUILDERS
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
            Contractor + Developer +
            <br />
            <span style={{ color: "#4A7FA5" }}>Broker + Investor.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Positioning statement + credentials */}
          <div
            className={`transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p
              className="text-[#3D4A5C] mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, fontWeight: 300 }}
            >
              L1 Builders is a vertically integrated construction firm led by experienced
              real estate operators. With over 1,000 homes renovated and sold nationwide,
              we specialize in value-add renovations that increase income, resale value,
              and long-term asset performance for property owners.
            </p>
            <p
              className="text-[#3D4A5C] mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, fontWeight: 300 }}
            >
              Our team brings together licensed brokers, experienced investors, and
              skilled tradespeople under one roof — giving you a construction partner
              who understands your financial objectives, not just your blueprints.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, i) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className={`bg-[#F5F7FA] p-5 card-accent-top-bronze transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: inView ? `${300 + i * 80}ms` : "0ms" }}
                  >
                    <Icon size={18} className="text-[#A67C52] mb-3" strokeWidth={1.5} />
                    <div
                      className="text-[#0D1117] font-semibold mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem", letterSpacing: "0.01em" }}
                    >
                      {cred.label}
                    </div>
                    <div
                      className="text-[#52606D]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, fontWeight: 300 }}
                    >
                      {cred.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Who we serve */}
          <div
            className={`transition-all duration-600 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="bg-[#1C2128] p-8 h-full">
              <p
                className="text-[#4A7FA5] mb-6"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Who We Serve
              </p>
              <div className="space-y-5">
                {personas.map((persona, i) => (
                  <div
                    key={persona.label}
                    className={`border-b border-white/8 pb-5 last:border-0 last:pb-0 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    style={{ transitionDelay: inView ? `${400 + i * 70}ms` : "0ms" }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 bg-[#4A7FA5]" />
                      <span
                        className="text-white font-semibold"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.0625rem", letterSpacing: "0.02em" }}
                      >
                        {persona.label}
                      </span>
                    </div>
                    <p
                      className="text-white/50 pl-3.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", lineHeight: 1.6, fontWeight: 300 }}
                    >
                      {persona.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
