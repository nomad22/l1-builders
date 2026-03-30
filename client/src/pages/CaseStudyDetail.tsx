/**
 * L1 Builders — Individual Case Study Detail Page (/case-studies/:id)
 * Design: Full-length write-up with before/after image comparison,
 * challenge/approach/outcome narrative, scope list, and metrics panel.
 * Consistent with Technical Modernism design system.
 */

import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, MapPin, Clock, Building2, Calendar, ChevronRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);
  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#52606D] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem" }}>
            CASE STUDY NOT FOUND
          </p>
          <Link href="/case-studies">
            <button className="btn-primary"><span>Back to Case Studies</span></button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0D1117] pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.3)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.4) 0%, rgba(13,17,23,0.9) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pb-16 pt-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/">
              <button className="text-white/40 hover:text-white/70 transition-colors" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}>
                HOME
              </button>
            </Link>
            <ChevronRight size={10} className="text-white/30" />
            <Link href="/case-studies">
              <button className="text-white/40 hover:text-white/70 transition-colors" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}>
                CASE STUDIES
              </button>
            </Link>
            <ChevronRight size={10} className="text-white/30" />
            <span className="text-[#4A7FA5]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}>
              {study.tag.toUpperCase()}
            </span>
          </div>

          {/* Tag */}
          <div className="mb-4">
            <span
              className="bg-[#4A7FA5] text-white px-3 py-1"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
            >
              {study.tag.toUpperCase()}
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              maxWidth: "800px",
            }}
          >
            {study.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { icon: MapPin, value: study.location },
              { icon: Building2, value: study.propertyType },
              { icon: Clock, value: study.projectDuration },
              { icon: Calendar, value: `Completed ${study.completedYear}` },
            ].map(({ icon: Icon, value }) => (
              <div key={value} className="flex items-center gap-2 text-white/55">
                <Icon size={12} strokeWidth={1.5} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Narrative (2/3) */}
          <div className="lg:col-span-2 space-y-12">

            {/* Before / After images */}
            {study.beforeImage && study.afterImage && (
              <div>
                <p
                  className="text-[#4A7FA5] mb-4"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
                >
                  Before &amp; After
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <img src={study.beforeImage} alt="Before renovation" className="w-full h-52 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-1.5 px-3">
                      <span className="text-white/80" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>
                        BEFORE
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <img src={study.afterImage} alt="After renovation" className="w-full h-52 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#4A7FA5]/80 py-1.5 px-3">
                      <span className="text-white" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Interior image (if available) */}
            {study.interiorImage && (
              <div>
                <img src={study.interiorImage} alt="Interior renovation" className="w-full h-72 object-cover" />
              </div>
            )}

            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-[#4A7FA5] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem" }}>01</span>
                </div>
                <h2
                  className="text-[#0D1117]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.625rem", fontWeight: 600, letterSpacing: "0.01em" }}
                >
                  The Challenge
                </h2>
              </div>
              <p
                className="text-[#3D4A5C]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}
              >
                {study.challenge}
              </p>
            </div>

            {/* Approach */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-[#A67C52] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem" }}>02</span>
                </div>
                <h2
                  className="text-[#0D1117]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.625rem", fontWeight: 600, letterSpacing: "0.01em" }}
                >
                  Our Approach
                </h2>
              </div>
              <p
                className="text-[#3D4A5C]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}
              >
                {study.approach}
              </p>
            </div>

            {/* Outcome */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-[#4A7FA5] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem" }}>03</span>
                </div>
                <h2
                  className="text-[#0D1117]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.625rem", fontWeight: 600, letterSpacing: "0.01em" }}
                >
                  The Outcome
                </h2>
              </div>
              <p
                className="text-[#3D4A5C]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}
              >
                {study.outcome}
              </p>
            </div>

            {/* Scope of Work */}
            <div>
              <h2
                className="text-[#0D1117] mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.625rem", fontWeight: 600, letterSpacing: "0.01em" }}
              >
                Scope of Work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {study.scopeItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-[#E8ECF0]">
                    <ChevronRight size={12} className="text-[#4A7FA5] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span
                      className="text-[#3D4A5C]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.5 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F5F7FA] text-[#52606D] px-3 py-1.5"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Sticky metrics sidebar (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Key metrics */}
              <div className="bg-[#1C2128] p-6">
                <p
                  className="text-[#4A7FA5] mb-5"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
                >
                  Key Results
                </p>
                <div className="space-y-5">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="border-b border-white/8 pb-5 last:border-0 last:pb-0">
                      <div
                        className="text-white font-bold leading-none mb-1"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", letterSpacing: "-0.01em" }}
                      >
                        {m.value}
                      </div>
                      <div
                        className="text-[#4A7FA5]"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}
                      >
                        {m.label}
                      </div>
                      {m.sub && (
                        <div
                          className="text-white/35 mt-0.5"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300 }}
                        >
                          {m.sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <div className="bg-[#F5F7FA] p-6 border-t-2 border-[#A67C52]">
                <p
                  className="text-[#A67C52] mb-4"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
                >
                  Project Details
                </p>
                {[
                  { label: "Location", value: study.location },
                  { label: "Property Type", value: study.propertyType },
                  { label: "Units", value: study.units },
                  { label: "Duration", value: study.projectDuration },
                  { label: "Completed", value: study.completedYear },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start py-2 border-b border-[#E8ECF0] last:border-0">
                    <span
                      className="text-[#52606D]"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em" }}
                    >
                      {label.toUpperCase()}
                    </span>
                    <span
                      className="text-[#0D1117] text-right ml-4"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500 }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-white border border-[#E8ECF0] p-6">
                <p
                  className="text-[#0D1117] font-semibold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem" }}
                >
                  Have a Similar Property?
                </p>
                <p
                  className="text-[#52606D] mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", lineHeight: 1.6, fontWeight: 300 }}
                >
                  Get a free consultation and preliminary scope assessment.
                </p>
                <Link href="/#contact">
                  <button className="btn-primary w-full justify-center" style={{ fontSize: "0.75rem", padding: "0.625rem 1rem" }}>
                    <span>Get a Free Estimate</span>
                    <ArrowRight size={13} className="relative z-10" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next case study */}
      <div className="border-t border-[#E8ECF0] bg-[#F5F7FA] py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <Link href="/case-studies">
              <button className="flex items-center gap-2 text-[#52606D] hover:text-[#0D1117] transition-colors">
                <ArrowLeft size={14} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
                  ALL CASE STUDIES
                </span>
              </button>
            </Link>
            <Link href={`/case-studies/${nextStudy.id}`}>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-right">
                  <p
                    className="text-[#52606D] mb-0.5"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}
                  >
                    NEXT CASE STUDY
                  </p>
                  <p
                    className="text-[#0D1117] group-hover:text-[#4A7FA5] transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem", fontWeight: 600 }}
                  >
                    {nextStudy.title}
                  </p>
                </div>
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img src={nextStudy.heroImage} alt={nextStudy.title} className="w-full h-full object-cover" />
                </div>
                <ArrowRight size={16} className="text-[#4A7FA5] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
