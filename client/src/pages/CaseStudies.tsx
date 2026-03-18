/**
 * L1 Builders — Case Studies Listing Page (/case-studies)
 * Design: Consistent with Technical Modernism system.
 * Dark hero banner, then white/gray alternating card layout.
 * Each card links to the individual case study detail page.
 */

import { Link } from "wouter";
import { ArrowRight, ArrowLeft, MapPin, Clock, Building2 } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function CaseStudiesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page hero */}
      <div className="bg-[#1C2128] pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-8">
              <ArrowLeft size={14} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
                BACK TO HOME
              </span>
            </button>
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[#4A7FA5]"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
            >
              — CASE STUDIES
            </span>
          </div>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            Project Results &
            <br />
            <span style={{ color: "#4A7FA5" }}>ROI Outcomes.</span>
          </h1>
          <p
            className="text-white/55 max-w-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7, fontWeight: 300 }}
          >
            Real projects. Real numbers. Every case study below reflects an actual
            renovation executed by L1 Builders — with documented financial outcomes
            for the property owner.
          </p>
        </div>
      </div>

      {/* Stats summary bar */}
      <div className="bg-[#0D1117] border-b border-white/8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
            {[
              { value: `${caseStudies.length}`, label: "Case Studies" },
              { value: "4", label: "Property Types" },
              { value: "NYC + LI", label: "Markets Covered" },
              { value: "100%", label: "On-Budget Delivery" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-6 text-center">
                <div
                  className="text-white font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white/35 mt-0.5"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case study cards */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <Link key={study.id} href={`/case-studies/${study.id}`}>
              <div className="group bg-white border border-[#E8ECF0] overflow-hidden hover:shadow-xl hover:shadow-black/6 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer card-accent-top mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image — 2/5 width on desktop */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={study.heroImage}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 hidden lg:block" />
                    <div className="absolute top-4 left-4">
                      <span
                        className="bg-[#4A7FA5] text-white px-2.5 py-1"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}
                      >
                        {study.tag.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content — 3/5 width on desktop */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-[#52606D]">
                          <MapPin size={11} strokeWidth={2} />
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                            {study.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#52606D]">
                          <Building2 size={11} strokeWidth={2} />
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                            {study.propertyType}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#52606D]">
                          <Clock size={11} strokeWidth={2} />
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                            {study.projectDuration}
                          </span>
                        </div>
                      </div>

                      <h2
                        className="text-[#0D1117] mb-3 group-hover:text-[#4A7FA5] transition-colors"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem", fontWeight: 600, letterSpacing: "0.01em" }}
                      >
                        {study.title}
                      </h2>
                      <p
                        className="text-[#52606D] mb-6"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, fontWeight: 300 }}
                      >
                        {study.teaserDescription}
                      </p>
                    </div>

                    {/* Metrics + CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {study.metrics.map((m) => (
                          <div key={m.label} className="bg-[#F5F7FA] px-3 py-2.5">
                            <div
                              className="text-[#4A7FA5] font-bold leading-none mb-0.5"
                              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", letterSpacing: "-0.01em" }}
                            >
                              {m.value}
                            </div>
                            <div
                              className="text-[#52606D] leading-tight"
                              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em" }}
                            >
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#4A7FA5] group-hover:gap-3 transition-all flex-shrink-0">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
                          READ FULL CASE STUDY
                        </span>
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1C2128] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-[#4A7FA5] mb-4"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
          >
            — START YOUR PROJECT
          </p>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0 }}
          >
            Ready to Add Your Property
            <br />
            <span style={{ color: "#4A7FA5" }}>to This List?</span>
          </h2>
          <p
            className="text-white/50 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, fontWeight: 300 }}
          >
            Get a free consultation and preliminary scope assessment for your property.
          </p>
          <Link href="/#contact">
            <button className="btn-primary">
              <span>Get a Free Estimate</span>
              <ArrowRight size={15} className="relative z-10" />
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
