/**
 * L1 Builders — Persona Gateway Page (/)
 * Design: Full-screen split layout. Left panel = Residential (warm, light, elegant).
 * Right panel = Commercial/Investor (dark, architectural, technical).
 * On hover each panel expands. On click: selected panel fills screen → fade out → navigate.
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const RES_HERO = "/highResKitchen.png";
const COM_HERO = "/heroBrownstone.jpg";

export default function Gateway() {
  const [, navigate] = useLocation();
  const [hovered, setHovered] = useState<"residential" | "commercial" | null>(null);
  const [exiting, setExiting] = useState<"residential" | "commercial" | null>(null);

  const handleNav = (side: "residential" | "commercial", path: string) => {
    if (exiting) return;
    setExiting(side);
    setHovered(side);
    // Navigate as the panel expansion peaks
    setTimeout(() => navigate(path), 600);
  };

  // Flex values: during exit, winner fills screen, loser collapses
  const resFlex = exiting === "residential" ? "3" : exiting === "commercial" ? "0" : hovered === "residential" ? "1.55" : hovered === "commercial" ? "0.55" : "1";
  const comFlex = exiting === "commercial" ? "3" : exiting === "residential" ? "0" : hovered === "commercial" ? "1.55" : hovered === "residential" ? "0.55" : "1";
  const flexTransition = exiting
    ? "flex 0.65s cubic-bezier(0.77,0,0.175,1)"
    : "flex 0.55s cubic-bezier(0.77,0,0.175,1)";

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col relative">

      {/* Logo bar */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-center py-6"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
      >
        <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-22 w-auto" />
      </div>

      {/* Split panels — stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row h-full">

        {/* ── RESIDENTIAL PANEL ── */}
        <div
          className="relative flex-1 cursor-pointer overflow-hidden group/res"
          style={{ flex: resFlex, transition: flexTransition }}
          onClick={() => handleNav("residential", "/residential")}
          onMouseEnter={() => { if (!exiting) setHovered("residential"); }}
          onMouseLeave={() => { if (!exiting) setHovered(null); }}
        >
          {/* Background image */}
          <img
            src={RES_HERO}
            alt="Luxury residential renovation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "right center",
              filter: "brightness(1.25)",
              transform: exiting === "residential" ? "scale(1.08)" : hovered === "residential" ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s ease",
            }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(20,15,8,0.72) 0%, rgba(20,15,8,0.45) 60%, rgba(20,15,8,0.25) 100%)",
              opacity: hovered === "commercial" ? 0.9 : 1,
            }}
          />
          {/* Warm gold tint */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(166,124,82,0.18) 0%, transparent 60%)" }}
          />

          {/* Content */}
          <div
            className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-14 transition-opacity duration-300"
            style={{ opacity: exiting === "commercial" ? 0 : 1 }}
          >
            <div className="mb-3" style={{ opacity: hovered === "commercial" ? 0.4 : 1, transition: "opacity 0.4s" }}>
              <span className="text-[#C8963E]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.22em" }}>
                FOR HOMEOWNERS
              </span>
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                opacity: hovered === "commercial" ? 0.5 : 1,
                transition: "opacity 0.4s",
              }}
            >
              Residential
              <br />
              <span style={{ color: "#C8963E" }}>Renovations.</span>
            </h2>
            <p
              className="text-white/70 mb-8 max-w-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: hovered === "commercial" ? 0.3 : 1,
                transition: "opacity 0.4s",
              }}
            >
              Kitchens, bathrooms, full-home renovations, ADUs and more — done right, on budget, and on time.
            </p>
            <button
              className="self-start flex items-center gap-3 px-7 py-3.5 border border-[#C8963E] text-[#C8963E] hover:bg-[#C8963E] hover:text-[#0D0A05] transition-all duration-300 group/btn"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em" }}
              onClick={(e) => { e.stopPropagation(); handleNav("residential", "/residential"); }}
            >
              EXPLORE RESIDENTIAL
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Right-edge divider line */}
          <div
            className="hidden lg:block absolute right-0 top-0 bottom-0 w-px z-20"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)" }}
          />
        </div>

        {/* ── COMMERCIAL / INVESTOR PANEL ── */}
        <div
          className="relative flex-1 cursor-pointer overflow-hidden group/com"
          style={{ flex: comFlex, transition: flexTransition }}
          onClick={() => handleNav("commercial", "/commercial")}
          onMouseEnter={() => { if (!exiting) setHovered("commercial"); }}
          onMouseLeave={() => { if (!exiting) setHovered(null); }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${COM_HERO})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: exiting === "commercial" ? "scale(1.08)" : hovered === "commercial" ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s ease",
            }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(13,17,23,0.85) 0%, rgba(13,17,23,0.6) 60%, rgba(13,17,23,0.35) 100%)",
              opacity: hovered === "residential" ? 0.95 : 1,
            }}
          />
          {/* Steel-blue tint */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(74,127,165,0.15) 0%, transparent 60%)" }}
          />

          {/* Content */}
          <div
            className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-14 transition-opacity duration-300"
            style={{ opacity: exiting === "residential" ? 0 : 1 }}
          >
            <div className="mb-3" style={{ opacity: hovered === "residential" ? 0.4 : 1, transition: "opacity 0.4s" }}>
              <span className="text-[#4A7FA5]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.22em" }}>
                FOR INVESTORS
              </span>
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                opacity: hovered === "residential" ? 0.5 : 1,
                transition: "opacity 0.4s",
              }}
            >
              Investment
              <br />
              <span style={{ color: "#4A7FA5" }}>Construction.</span>
            </h2>
            <p
              className="text-white/70 mb-8 max-w-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: hovered === "residential" ? 0.3 : 1,
                transition: "opacity 0.4s",
              }}
            >
              Value-add renovations, BRRR packages, multifamily repositioning, and capital improvements — built by investors, designed for ROI.
            </p>
            <button
              className="self-start flex items-center gap-3 px-7 py-3.5 border border-[#4A7FA5] text-[#4A7FA5] hover:bg-[#4A7FA5] hover:text-white transition-all duration-300 group/btn"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em" }}
              onClick={(e) => { e.stopPropagation(); handleNav("commercial", "/commercial"); }}
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
