/**
 * L1 Builders — Services Landing Page (/services)
 * Design: Technical Modernism — dark hero, cream grid, consistent with site design system.
 * Shows all 11 services as browsable cards linking to individual service pages.
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "@/lib/services";
import SiteHeader from "@/components/SiteHeader";

const HERO_BG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const ACCENT_COLORS = {
  blue: "#4A7FA5",
  gold: "#C8963E",
};

export default function ServicesLanding() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { ref: gridRef, inView: gridInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="commercial" />

      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <img src={HERO_BG} alt="L1 Builders Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,7,3,0.92) 0%, rgba(10,7,3,0.6) 60%, rgba(10,7,3,0.25) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.75) 0%, transparent 50%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pb-14 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/commercial">
              <span className="text-white/40 hover:text-white/70 transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>HOME</span>
            </Link>
            <ChevronRight size={10} className="text-white/25" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#4A7FA5" }}>SERVICES</span>
          </div>

          <p className="mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: "#4A7FA5" }}>
            — WHAT WE BUILD
          </p>
          <h1 className="text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
            Every Trade.<br />
            <span style={{ color: "#4A7FA5" }}>One Firm.</span>
          </h1>
          <p className="text-white/55 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.75, fontWeight: 300 }}>
            From demolition to final coat — L1 Builders self-performs across all major construction trades, eliminating the coordination overhead that costs investors time and money.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-[#1A1A0F] py-5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-8 lg:gap-16">
            {[["11", "Trades Self-Performed"], ["1,000+", "Projects Completed"], ["40+", "Years Experience"], ["NYC & LI", "Licensed & Insured"]].map(([val, label]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", color: "#4A7FA5" }}>{val}</span>
                <span className="text-white/40" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28" ref={gridRef}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: "#4A7FA5" }}>— 11 SERVICES</p>
            <h2 className="text-[#1A1A0F]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Our Full Scope of Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const accent = ACCENT_COLORS[svc.accentColor];
              return (
                <Link key={svc.slug} href={`/services/${svc.slug}`}>
                  <div
                    className={`group bg-white border border-[#EDE9E0] p-7 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${(i % 6) * 60}ms`, borderTop: `2px solid ${accent}` }}
                  >
                    {/* Number */}
                    <div className="flex items-start justify-between mb-5">
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em", color: `${accent}80` }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: accent }}
                      />
                    </div>

                    {/* Label */}
                    <h3
                      className="text-[#1A1A0F] mb-2 group-hover:text-[#0D0A05] transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 700, letterSpacing: "0.01em" }}
                    >
                      {svc.label}
                    </h3>

                    {/* Short desc */}
                    <p className="text-[#5C5040]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, fontWeight: 300 }}>
                      {svc.shortDesc}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 pt-4 border-t border-[#EDE9E0] flex items-center gap-1.5">
                      <span
                        className="transition-colors"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: accent }}
                      >
                        LEARN MORE
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#1A1A0F] py-20 lg:py-24" ref={ctaRef}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-all duration-600 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div>
              <p className="mb-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: "#4A7FA5" }}>— READY TO START?</p>
              <h2 className="text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
                Tell us about your project.<br />
                <span style={{ color: "#4A7FA5" }}>We'll handle the rest.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link href="/commercial#contact">
                <div
                  className="flex items-center gap-2.5 px-8 py-4 cursor-pointer transition-opacity hover:opacity-85"
                  style={{ background: "#4A7FA5", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  REQUEST A QUOTE <ArrowRight size={14} />
                </div>
              </Link>
              <Link href="/residential">
                <div
                  className="flex items-center gap-2.5 px-8 py-4 cursor-pointer border transition-colors hover:border-[#C8963E] hover:text-[#C8963E]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  RESIDENTIAL SERVICES
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
