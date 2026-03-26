/**
 * L1 Builders — Persona Gateway Page (/)
 * Design: Full-screen split layout. Left panel = Residential (warm, light, elegant).
 * Right panel = Commercial/Investor (dark, architectural, technical).
 * On hover each panel expands. On click routes to the respective homepage.
 * Consistent with Technical Modernism design system.
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const RES_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-hero-bg-JoiFDmDNUK8sbBYFJ4ACi7.webp";

const COM_HERO = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80";

export default function Gateway() {
  const [, navigate] = useLocation();
  const [hovered, setHovered] = useState<"residential" | "commercial" | null>(null);

  const goResidential = () => navigate("/residential");
  const goCommercial = () => navigate("/commercial");

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      {/* Logo bar */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-center py-6"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#4A7FA5] flex items-center justify-center">
            <span
              className="text-white font-bold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.04em" }}
            >
              L1
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-white font-semibold leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", letterSpacing: "0.08em" }}
            >
              BUILDERS
            </span>
            <span
              className="text-[#4A7FA5] leading-none"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.18em" }}
            >
              NYC & LONG ISLAND
            </span>
          </div>
        </div>
      </div>

      {/* Split panels — stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row h-full">

        {/* ── RESIDENTIAL PANEL ── */}
        <div
          className="relative flex-1 cursor-pointer overflow-hidden group/res"
          style={{
            flex: hovered === "residential" ? "1.55" : hovered === "commercial" ? "0.55" : "1",
            transition: "flex 0.55s cubic-bezier(0.77,0,0.175,1)",
          }}
          onClick={goResidential}
          onMouseEnter={() => setHovered("residential")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background image */}
          <img
            src={RES_HERO}
            alt="Luxury residential renovation"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/res:scale-105"
          />
          {/* Overlay — warm, lighter on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(20,15,8,0.72) 0%, rgba(20,15,8,0.45) 60%, rgba(20,15,8,0.25) 100%)",
              opacity: hovered === "commercial" ? 0.9 : 1,
            }}
          />
          {/* Warm gold tint layer */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(to top, rgba(166,124,82,0.18) 0%, transparent 60%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-14">
            <div
              className="mb-3 transition-all duration-400"
              style={{ opacity: hovered === "commercial" ? 0.4 : 1 }}
            >
              <span
                className="text-[#D4A96A] tracking-widest"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.22em" }}
              >
                FOR HOMEOWNERS
              </span>
            </div>
            <h2
              className="text-white mb-4 transition-all duration-400"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                opacity: hovered === "commercial" ? 0.5 : 1,
              }}
            >
              Residential
              <br />
              <span style={{ color: "#D4A96A" }}>Renovations.</span>
            </h2>
            <p
              className="text-white/70 mb-8 max-w-xs transition-all duration-400"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: hovered === "commercial" ? 0.3 : 1,
              }}
            >
              Kitchens, bathrooms, full-home renovations, and additions — crafted to the highest standard for discerning homeowners on Long Island and in NYC.
            </p>
            <button
              className="self-start flex items-center gap-3 px-7 py-3.5 border border-[#D4A96A] text-[#D4A96A] hover:bg-[#D4A96A] hover:text-[#0D0A05] transition-all duration-300 group/btn"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em" }}
              onClick={(e) => { e.stopPropagation(); goResidential(); }}
            >
              EXPLORE RESIDENTIAL
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Right-edge divider line (desktop only) */}
          <div
            className="hidden lg:block absolute right-0 top-0 bottom-0 w-px z-20"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)" }}
          />
        </div>

        {/* ── COMMERCIAL / INVESTOR PANEL ── */}
        <div
          className="relative flex-1 cursor-pointer overflow-hidden group/com"
          style={{
            flex: hovered === "commercial" ? "1.55" : hovered === "residential" ? "0.55" : "1",
            transition: "flex 0.55s cubic-bezier(0.77,0,0.175,1)",
          }}
          onClick={goCommercial}
          onMouseEnter={() => setHovered("commercial")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover/com:scale-105"
            style={{
              backgroundImage: `url(${COM_HERO})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay — darker, cooler */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(13,17,23,0.85) 0%, rgba(13,17,23,0.6) 60%, rgba(13,17,23,0.35) 100%)",
              opacity: hovered === "residential" ? 0.95 : 1,
            }}
          />
          {/* Steel-blue tint layer */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(74,127,165,0.15) 0%, transparent 60%)" }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-14">
            <div
              className="mb-3 transition-all duration-400"
              style={{ opacity: hovered === "residential" ? 0.4 : 1 }}
            >
              <span
                className="text-[#4A7FA5] tracking-widest"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.22em" }}
              >
                FOR INVESTORS & DEVELOPERS
              </span>
            </div>
            <h2
              className="text-white mb-4 transition-all duration-400"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                opacity: hovered === "residential" ? 0.5 : 1,
              }}
            >
              Investment
              <br />
              <span style={{ color: "#4A7FA5" }}>Construction.</span>
            </h2>
            <p
              className="text-white/70 mb-8 max-w-xs transition-all duration-400"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: hovered === "residential" ? 0.3 : 1,
              }}
            >
              Value-add renovations, BRRR packages, multifamily repositioning, and capital improvements — built by investors, designed for ROI.
            </p>
            <button
              className="self-start flex items-center gap-3 px-7 py-3.5 border border-[#4A7FA5] text-[#4A7FA5] hover:bg-[#4A7FA5] hover:text-white transition-all duration-300 group/btn"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em" }}
              onClick={(e) => { e.stopPropagation(); goCommercial(); }}
            >
              EXPLORE INVESTOR
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center pointer-events-none">
        <span
          className="text-white/50 lg:text-white/30 animate-pulse lg:animate-none"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em" }}
        >
          TAP TO SELECT YOUR PATH
        </span>
      </div>
    </div>
  );
}
