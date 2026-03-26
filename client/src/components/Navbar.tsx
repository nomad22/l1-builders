/**
 * L1 Builders — Navbar Component
 * Design: Technical Modernism — charcoal bg, steel-blue accent, Space Mono eyebrow
 * Behavior: Transparent on hero, solid charcoal on scroll. Mobile hamburger menu.
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Why L1", href: "#why-l1" },
  { label: "Case Studies", href: "/case-studies", external: true },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [location] = useLocation();

  const handleNavClick = (href: string, external?: boolean) => {
    setMobileOpen(false);
    if (external) return; // handled by Link component
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1C2128] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center gap-2">
                {/* L1 mark */}
                <div className="w-8 h-8 bg-[#4A7FA5] flex items-center justify-center">
                  <span
                    className="text-white font-bold text-sm leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
                  >
                    L1
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-white font-semibold leading-none tracking-wide"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem", letterSpacing: "0.06em" }}
                  >
                    BUILDERS
                  </span>
                  <span
                    className="text-[#4A7FA5] leading-none"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.15em" }}
                  >
                    BUILT BY INVESTORS
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Back to gateway */}
              <Link href="/">
                <span className="text-white/35 hover:text-[#4A7FA5] transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
                  ← HOME
                </span>
              </Link>
              {/* Vertical rule separator */}
              <div className="w-px h-5 bg-[#4A7FA5]/40" />
              {navLinks.map((link) => (
                link.external ? (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="relative text-white/70 hover:text-white transition-colors duration-200 group cursor-pointer"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.14em" }}
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4A7FA5] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-white/70 hover:text-white transition-colors duration-200 group"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.14em" }}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4A7FA5] transition-all duration-300 group-hover:w-full" />
                  </button>
                )
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary ml-2"
                style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}
              >
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1C2128] flex flex-col transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#4A7FA5] flex items-center justify-center">
              <span className="text-white font-bold text-xs" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>L1</span>
            </div>
            <span className="text-white font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}>BUILDERS</span>
          </div>
          <button className="text-white p-1" onClick={() => setMobileOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-6 mt-4">
          {navLinks.map((link, i) => (
            link.external ? (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                <div className="text-left text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors cursor-pointer"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}
                >
                  <span className="text-[#4A7FA5] mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}>
                    0{i + 1}
                  </span>
                  {link.label}
                </div>
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}
              >
                <span className="text-[#4A7FA5] mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}>
                  0{i + 1}
                </span>
                {link.label}
              </button>
            )
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-primary mt-6 justify-center"
          >
            <span>Get a Quote</span>
          </button>
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <div className="text-center mt-4 text-white/35 hover:text-white/60 transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
              ← BACK TO HOME
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
