/**
 * L1 Builders — Hero Section
 * Design: Technical Modernism — split-column layout, charcoal overlay on NYC building photo,
 * white text on dark background, steel-blue CTA, bronze accent rule.
 * Hero image is dark/moody, so white text is used.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/EEIHq2rAnldOJ8OmTdEbVD-img-1_1771874157000_na1fn_bDEtaGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0VFSUhxMnJBbmxkT0o4T21UZEViVkQtaW1nLTFfMTc3MTg3NDE1NzAwMF9uYTFmbl9iREV0YUdWeWJ5MWlady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PxmMXZQzaPZRuC8VZUV58PpAWOlvAtlnFF0wT7a~T5KVu0Ad0wq3KN5j0b51~3tdgi6mz2JXTVo9ES0nK2pXcOFBXJaReCyk2hBf0baAQMYtXloZxBGYAApgO21fOW7vIgGjHtu9Ol7RZpI-rt6pZg2T6WdxOshQe9vKYWWvakxZAVSijG~6l3e-EpkIiOiL~U1qXevaIQdu1DvT9S6ussuYrb5T0yqHYEyhRk5ehEqPGSnr~uKqs9aIwIbg3VhjONx9MqL2r6YWA3CjR7oPzGnNWGzLeTgt6fsOevmAerjZXyJ~y7ZDuNGJwonPN~WT5xEkDL4I5PQSqMfKouFIhA__";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWhy = () => {
    document.querySelector("#why-l1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="NYC multifamily building"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.45)" }}
        />
        {/* Gradient overlay — heavier at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,17,23,0.3) 0%, rgba(13,17,23,0.5) 50%, rgba(13,17,23,0.92) 100%)"
          }}
        />
        {/* Left-side vignette for text area */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(13,17,23,0.7) 0%, rgba(13,17,23,0.1) 60%, transparent 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-8 h-px bg-[#4A7FA5]" />
            <span
              className="text-[#4A7FA5]"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
            >
              NYC &amp; LONG ISLAND — SINCE 2010
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-white mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            Build Smarter.
            <br />
            <span style={{ color: "#4A7FA5" }}>Renovate</span>
            <br />
            for Returns.
          </h1>

          {/* Subheadline */}
          <p
            className={`text-white/70 mb-8 max-w-xl transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.65, fontWeight: 300 }}
          >
            Vertically integrated construction firm led by investors and brokers
            specializing in value-add renovations that increase income and asset value.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight size={15} className="relative z-10" />
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline"
            >
              <span>Our Services</span>
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-8 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {[
              { value: "1,000+", label: "Homes Renovated" },
              { value: "40+", label: "Years Combined Experience" },
              { value: "NYC", label: "DOB Licensed" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-white font-bold leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", letterSpacing: "-0.01em" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white/50 mt-1"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToWhy}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", writingMode: "vertical-rl" }}>
          SCROLL
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
