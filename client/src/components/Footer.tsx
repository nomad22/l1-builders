/**
 * L1 Builders — Footer
 * Design: Deep charcoal (#0D1117), minimal layout with logo, nav links, tagline.
 * Steel-blue accent on logo mark. Space Mono for all labels.
 */

import { Link } from "wouter";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D1117] border-t border-white/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-8 w-auto" />
            </div>
            <p
              className="text-white/40 max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}
            >
              Vertically integrated construction firm specializing in value-add
              renovations for property investors in NYC and Long Island.
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-white/30 mb-4"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              Services
            </p>
            <ul className="space-y-2.5">
              {[
                "Value-Add Renovations",
                "Building Systems Upgrades",
                "Capital Improvements",
                "Turnover & Repositioning",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-white/50 hover:text-white/80 transition-colors text-left"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 300 }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-white/30 mb-4"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Why L1 Builders", href: "#why-l1" },
                { label: "How We Work", href: "#how-we-work" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-white/50 hover:text-white/80 transition-colors text-left"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 300 }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}
          >
            © {new Date().getFullYear()} L1 BUILDERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/residential">
              <span
                className="text-white/25 hover:text-[#D4A96A] transition-colors cursor-pointer"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}
              >
                RESIDENTIAL ↗
              </span>
            </Link>
            <p
              className="text-white/25"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}
            >
              NYC & LONG ISLAND · LICENSED & INSURED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
