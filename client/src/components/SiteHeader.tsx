/**
 * L1 Builders — Shared Site Header
 * Design: Technical Modernism — transparent on load, solid charcoal on scroll.
 * Two primary nav items: Services (mega-dropdown with 11 children) + Request a Quote (CTA).
 * Used by both the residential (/residential) and commercial (/commercial) paths.
 *
 * Props:
 *  variant: "residential" | "commercial"
 *    - residential: gold (#D4A96A) accent, "RESIDENTIAL" sub-label
 *    - commercial:  steel-blue (#4A7FA5) accent, "BUILT BY INVESTORS" sub-label
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, X, ArrowRight, Menu } from "lucide-react";
import { services } from "@/lib/services";

interface SiteHeaderProps {
  variant: "residential" | "commercial";
  /** Anchor IDs to include in the inline nav (e.g. "#why-l1", "#services") */
  navLinks?: { label: string; href: string }[];
  /** Scroll-to-contact handler */
  onQuoteClick?: () => void;
}

const ACCENT = {
  residential: "#D4A96A",
  commercial: "#4A7FA5",
};

const SUBLABEL = {
  residential: "RESIDENTIAL",
  commercial: "BUILT BY INVESTORS",
};

const SWITCH_LABEL = {
  residential: "INVESTOR / COMMERCIAL →",
  commercial: "← RESIDENTIAL",
};

const SWITCH_HREF = {
  residential: "/commercial",
  commercial: "/residential",
};

export default function SiteHeader({ variant, navLinks = [], onQuoteClick }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const accent = ACCENT[variant];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuote = () => {
    setMobileOpen(false);
    if (onQuoteClick) { onQuoteClick(); return; }
    const el = document.querySelector("#contact") || document.querySelector("#res-contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Split services into two columns for the dropdown
  const col1 = services.slice(0, 6);
  const col2 = services.slice(6);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(20,16,10,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? `1px solid ${accent}18` : "none",
        }}
      >
        {/* Top strip */}
        <div
          className="hidden lg:flex items-center justify-between px-8 py-1.5"
          style={{ background: "rgba(0,0,0,0.35)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-white/30" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em" }}>
            NYC & LONG ISLAND — LICENSED & INSURED
          </span>
          <Link href={SWITCH_HREF[variant]}>
            <span
              className="transition-colors cursor-pointer"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: `${accent}80` }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = `${accent}80`)}
            >
              {SWITCH_LABEL[variant]}
            </span>
          </Link>
        </div>

        {/* Main nav bar */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

            {/* Logo */}
            <Link href={variant === "residential" ? "/residential" : "/commercial"}>
              <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="w-px h-4" style={{ background: `${accent}40` }} />

              {/* Inline anchor links */}
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative text-white/65 hover:text-white transition-colors group"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ background: accent }} />
                </button>
              ))}

              {/* Services dropdown trigger */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-1.5 text-white/65 hover:text-white transition-colors group"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
                  onClick={() => setServicesOpen(v => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ background: accent }} />
                </button>

                {/* Mega-dropdown */}
                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] shadow-2xl shadow-black/40 z-50"
                    style={{ background: "rgba(18,14,8,0.98)", border: `1px solid ${accent}20`, backdropFilter: "blur(16px)" }}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {/* Dropdown header */}
                    <div className="px-6 py-4 border-b" style={{ borderColor: `${accent}15` }}>
                      <p className="text-white/40" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.18em" }}>OUR SERVICES</p>
                    </div>
                    {/* Two-column grid */}
                    <div className="grid grid-cols-2 gap-0 p-2">
                      {[col1, col2].map((col, ci) => (
                        <div key={ci}>
                          {col.map(svc => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesOpen(false)}
                            >
                              <div
                                className="flex items-start gap-3 px-4 py-3 rounded-sm cursor-pointer transition-all duration-150 group/item"
                                style={{ background: "transparent" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${accent}10`; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                              >
                                <span className="mt-0.5 text-xs" style={{ color: accent }}>{svc.icon}</span>
                                <div>
                                  <p className="text-white/85 group-hover/item:text-white transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.01em" }}>{svc.label}</p>
                                  <p className="text-white/35 mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.4 }}>{svc.shortDesc}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    {/* Footer CTA */}
                    <div className="px-6 py-3 border-t flex items-center justify-between" style={{ borderColor: `${accent}15` }}>
                      <Link href="/services" onClick={() => setServicesOpen(false)}>
                        <span
                          className="transition-colors cursor-pointer hover:text-white/60"
                          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)" }}
                        >
                          VIEW ALL 11 SERVICES →
                        </span>
                      </Link>
                      <button
                        onClick={() => { setServicesOpen(false); handleQuote(); }}
                        className="flex items-center gap-1.5 transition-colors"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", color: accent }}
                      >
                        REQUEST A QUOTE <ArrowRight size={11} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Request a Quote CTA */}
              <button
                onClick={handleQuote}
                className="flex items-center gap-2 px-5 py-2.5 transition-all duration-300 ml-2"
                style={{
                  background: accent,
                  color: variant === "residential" ? "#0D0A05" : "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                REQUEST A QUOTE <ArrowRight size={12} />
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ background: "#0D0A05" }}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between h-16 px-6 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-7 w-auto" />
          <button className="text-white p-1" onClick={() => setMobileOpen(false)}><X size={22} /></button>
        </div>

        {/* Mobile links */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Inline anchor links */}
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left text-white/75 hover:text-white py-4 border-b transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "0.04em", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <span className="mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: accent }}>0{i + 1}</span>
              {link.label}
            </button>
          ))}

          {/* Services accordion */}
          <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <button
              className="w-full flex items-center justify-between text-white/75 hover:text-white py-4 transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "0.04em" }}
              onClick={() => setMobileServicesOpen(v => !v)}
            >
              <span>
                <span className="mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: accent }}>
                  0{navLinks.length + 1}
                </span>
                Services
              </span>
              <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} style={{ color: accent }} />
            </button>
            {mobileServicesOpen && (
              <div className="pb-2 pl-6 space-y-1">
                {services.map(svc => (
                  <Link key={svc.slug} href={`/services/${svc.slug}`} onClick={() => setMobileOpen(false)}>
                    <div className="flex items-center gap-2 py-2.5 text-white/55 hover:text-white transition-colors cursor-pointer">
                      <span style={{ color: accent, fontSize: "0.6rem" }}>✦</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>{svc.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Switch path */}
          <Link href={SWITCH_HREF[variant]} onClick={() => setMobileOpen(false)}>
            <div
              className="py-4 border-b transition-colors cursor-pointer"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "0.04em", borderColor: "rgba(255,255,255,0.08)", color: `${accent}80` }}
            >
              {SWITCH_LABEL[variant]}
            </div>
          </Link>

          {/* Quote CTA */}
          <button
            onClick={handleQuote}
            className="w-full flex items-center justify-center gap-2 py-4 mt-6 transition-opacity"
            style={{ background: accent, color: variant === "residential" ? "#0D0A05" : "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.1em" }}
          >
            REQUEST A QUOTE <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
