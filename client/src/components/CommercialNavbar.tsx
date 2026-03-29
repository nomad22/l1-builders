/**
 * L1 Builders — Commercial/Investor Navbar
 * Extends the existing Navbar with a top strip that includes a "Switch to Residential" link.
 * Design: Technical Modernism — charcoal bg, steel-blue accent, Space Mono eyebrow.
 */

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "wouter";

const navLinks = [
  { label: "Why L1", href: "#why-l1" },
  { label: "Case Studies", href: "/case-studies", external: true },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function CommercialNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    setMobileOpen(false);
    if (external) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1C2128] shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        {/* Top strip — only visible when scrolled or on desktop */}
        <div className="hidden lg:flex items-center justify-between px-8 py-2 border-b border-white/8" style={{ background: "rgba(13,17,23,0.6)" }}>
          <span className="text-white/30" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em" }}>
            NYC & LONG ISLAND — SINCE 2010
          </span>
          <Link href="/residential">
            <span
              className="text-white/35 hover:text-[#D4A96A] transition-colors cursor-pointer"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}
            >
              ← SWITCH TO RESIDENTIAL
            </span>
          </Link>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="w-px h-5 bg-[#4A7FA5]/40" />
              {navLinks.map((link) =>
                link.external ? (
                  <Link key={link.href} href={link.href}>
                    <span className="relative text-white/70 hover:text-white transition-colors duration-200 group cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.14em" }}>
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4A7FA5] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                ) : (
                  <button key={link.href} onClick={() => handleNavClick(link.href)} className="relative text-white/70 hover:text-white transition-colors duration-200 group" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.14em" }}>
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4A7FA5] transition-all duration-300 group-hover:w-full" />
                  </button>
                )
              )}
              <button onClick={() => handleNavClick("#contact")} className="btn-primary ml-2" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}>
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              <div className="space-y-1.5">
                <span className={`block h-px w-6 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-px w-6 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-6 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[#1C2128] flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
          <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-7 w-auto" />
          <button className="text-white p-1" onClick={() => setMobileOpen(false)}><X size={22} /></button>
        </div>
        <div className="flex flex-col gap-1 p-6 mt-4">
          {navLinks.map((link, i) =>
            link.external ? (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                <div className="text-left text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                  <span className="text-[#4A7FA5] mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}>0{i + 1}</span>
                  {link.label}
                </div>
              </Link>
            ) : (
              <button key={link.href} onClick={() => handleNavClick(link.href)} className="text-left text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                <span className="text-[#4A7FA5] mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}>0{i + 1}</span>
                {link.label}
              </button>
            )
          )}
          <Link href="/residential" onClick={() => setMobileOpen(false)}>
            <div className="text-left text-[#D4A96A]/70 hover:text-[#D4A96A] py-4 border-b border-white/10 transition-colors cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}>
              ← Residential
            </div>
          </Link>
          <button onClick={() => handleNavClick("#contact")} className="btn-primary mt-6 justify-center"><span>Get a Quote</span></button>
        </div>
      </div>
    </>
  );
}
