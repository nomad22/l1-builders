/**
 * L1 Builders — Case Studies Teaser Section (Homepage)
 * Design: White background, 4 horizontal cards with hero image, key metrics,
 * and a "Read Case Study" link. Full-width CTA at bottom links to /case-studies.
 * Consistent with Technical Modernism design system.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "@/lib/caseStudies";

function useInView(threshold = 0.1) {
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

export default function CaseStudiesTeaser() {
  const { ref, inView } = useInView();

  return (
    <section id="case-studies" className="bg-white py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
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
              Results That
              <br />
              <span style={{ color: "#4A7FA5" }}>Speak for Themselves.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className={`hidden lg:flex items-center gap-2 text-[#4A7FA5] hover:text-[#1C2128] transition-colors group transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.14em" }}
          >
            VIEW ALL CASE STUDIES
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((study, i) => (
            <Link key={study.id} href={`/case-studies/${study.id}`}>
              <div
                className={`group bg-white border border-[#E8ECF0] overflow-hidden hover:shadow-xl hover:shadow-black/8 transition-all duration-400 hover:-translate-y-1 cursor-pointer card-accent-top ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="bg-[#4A7FA5] text-white px-2.5 py-1"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}
                    >
                      {study.tag.toUpperCase()}
                    </span>
                  </div>
                  {/* Location */}
                  <div className="absolute bottom-4 left-4">
                    <p
                      className="text-white/80"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}
                    >
                      {study.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-[#0D1117] mb-2 group-hover:text-[#4A7FA5] transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "0.01em" }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-[#52606D] mb-5 line-clamp-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, fontWeight: 300 }}
                  >
                    {study.teaserDescription}
                  </p>

                  {/* Metrics row */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {study.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="bg-[#F5F7FA] px-3 py-2.5">
                        <div
                          className="text-[#4A7FA5] font-bold leading-none mb-0.5"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", letterSpacing: "-0.01em" }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="text-[#52606D]"
                          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Read more link */}
                  <div className="flex items-center gap-1.5 text-[#4A7FA5] group-hover:gap-2.5 transition-all">
                    <span
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
                    >
                      READ CASE STUDY
                    </span>
                    <ArrowUpRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex lg:hidden justify-center">
          <Link href="/case-studies">
            <button className="btn-primary">
              <span>View All Case Studies</span>
              <ArrowRight size={15} className="relative z-10" />
            </button>
          </Link>
        </div>

        {/* Full-width CTA banner */}
        <div className="hidden lg:flex items-center justify-between bg-[#1C2128] px-10 py-8 mt-4">
          <div>
            <p
              className="text-white font-semibold mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", letterSpacing: "0.01em" }}
            >
              Ready to see what L1 Builders can do for your portfolio?
            </p>
            <p
              className="text-white/50"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 300 }}
            >
              Browse all case studies or request a free project consultation.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/case-studies">
              <button className="btn-outline">
                <span>All Case Studies</span>
              </button>
            </Link>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight size={15} className="relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
