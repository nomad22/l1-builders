/**
 * L1 Builders — Residential Homepage (/residential)
 * Design: Warm, elevated, editorial. Cream/off-white backgrounds, 
 * unlacquered brass/gold (#D4A96A) accents, charcoal text.
 * Fonts: Barlow Condensed (headlines), Inter (body), Space Mono (labels).
 * Target: High-end homeowners on Long Island and NYC suburbs.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";

const RES_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-hero-bg-JoiFDmDNUK8sbBYFJ4ACi7.webp";
const RES_KITCHEN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-kitchen-b8AhWyn2bbLQ28Zb5t8kxh.webp";
const RES_BATHROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-bathroom-oDaCSvdRpqxWX46kZFgWDF.webp";
const RES_LIVING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-living-room-fWG4rJeU2kLS7TA2NqiwiK.webp";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Navbar ──────────────────────────────────────────────────────────────────
function ResNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scroll = (id: string) => { setMobileOpen(false); document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{ background: scrolled ? "rgba(20,16,10,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(212,169,106,0.12)" : "none" }}
      >
        {/* Top strip */}
        <div className="hidden lg:flex items-center justify-between px-8 py-2 border-b border-white/8">
          <span className="text-white/35" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em" }}>
            LONG ISLAND & NYC — LICENSED & INSURED
          </span>
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="text-white/35 hover:text-[#D4A96A] transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>
                ← SWITCH TO INVESTOR
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 bg-[#D4A96A] flex items-center justify-center">
                <span className="text-[#0D0A05] font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>L1</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem", letterSpacing: "0.06em" }}>BUILDERS</span>
                <span className="text-[#D4A96A] leading-none" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.15em" }}>RESIDENTIAL</span>
              </div>
            </div>
          </Link>
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {[["Services", "#res-services"], ["Our Work", "#res-work"], ["Process", "#res-process"], ["About", "#res-about"]].map(([label, href]) => (
              <button key={href} onClick={() => scroll(href)} className="text-white/65 hover:text-white transition-colors" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
                {label}
              </button>
            ))}
            <button onClick={() => scroll("#res-contact")} className="px-5 py-2.5 bg-[#D4A96A] text-[#0D0A05] hover:bg-[#C49558] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em" }}>
              GET A QUOTE
            </button>
          </div>
          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px w-6 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0A05] pt-20 px-6">
          <div className="flex flex-col gap-1 mt-4">
            {[["Services", "#res-services"], ["Our Work", "#res-work"], ["Process", "#res-process"], ["About", "#res-about"], ["Contact", "#res-contact"]].map(([label, href], i) => (
              <button key={href} onClick={() => scroll(href)} className="text-left text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                <span className="text-[#D4A96A] mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}>0{i + 1}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function ResHero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      <img src={RES_HERO} alt="Luxury home renovation" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,7,3,0.82) 0%, rgba(10,7,3,0.5) 55%, rgba(10,7,3,0.15) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.7) 0%, transparent 50%)" }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="text-[#D4A96A] mb-5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.22em" }}>
            — RESIDENTIAL RENOVATIONS · NYC & LONG ISLAND
          </p>
          <h1 className="text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
            Your Home,
            <br />
            <span style={{ color: "#D4A96A" }}>Elevated.</span>
          </h1>
          <p className="text-white/65 mb-10 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, fontWeight: 300 }}>
            Premium renovations for discerning homeowners. From full-home transformations to bespoke kitchens and spa-quality bathrooms — crafted with the precision and care your home deserves.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => document.querySelector("#res-contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2.5 px-8 py-4 bg-[#D4A96A] text-[#0D0A05] hover:bg-[#C49558] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}>
              GET A FREE CONSULTATION <ArrowRight size={15} />
            </button>
            <button onClick={() => document.querySelector("#res-work")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2.5 px-8 py-4 border border-white/35 text-white hover:border-white/70 transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              SEE OUR WORK
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/20" style={{ animation: "pulse 2s infinite" }} />
        <span className="text-white/30 -rotate-90 origin-center" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em" }}>SCROLL</span>
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────
function ResServices() {
  const { ref, inView } = useInView();
  const services = [
    { title: "Kitchen Renovations", desc: "Custom cabinetry, premium stone countertops, professional-grade appliances, and architectural millwork — kitchens designed to be the heart of your home.", icon: "◈", slug: "kitchen-renovations" },
    { title: "Bathroom Renovations", desc: "Spa-quality master suites, steam showers, freestanding soaking tubs, radiant heat, and bespoke tile work — bathrooms that feel like a private retreat.", icon: "◈", slug: "tile-bathroom-renovations" },
    { title: "Full-Home Renovations", desc: "Complete gut renovations and whole-home transformations, from structural changes to finish selections — managed under one roof with a single point of contact.", icon: "◈", slug: "painting-drywall" },
    { title: "Additions & Extensions", desc: "Thoughtfully designed additions that expand your living space while maintaining architectural integrity — from sunrooms to full second-story additions.", icon: "◈", slug: "windows-doors" },
    { title: "Exterior & Curb Appeal", desc: "Facades, stoops, driveways, landscaping integration, and outdoor living spaces — first impressions that reflect the quality within.", icon: "◈", slug: "roofing" },
    { title: "Custom Millwork & Finishes", desc: "Built-in bookshelves, coffered ceilings, wainscoting, crown molding, and custom carpentry — the architectural details that define a truly finished home.", icon: "◈", slug: "flooring" },
  ];
  return (
    <section id="res-services" className="bg-[#FAFAF7] py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em" }}>— 01 / SERVICES</p>
          <h2 className="text-[#1A1208]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            What We Build
            <br />
            <span style={{ color: "#D4A96A" }}>For You.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.title} href={`/services/${s.slug}`}>
              <div
                className={`group bg-white border border-[#EDE9E0] p-7 hover:shadow-lg hover:shadow-black/5 transition-all duration-400 hover:-translate-y-1 border-t-2 border-t-[#D4A96A] cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-[#D4A96A] text-2xl mb-4">{s.icon}</div>
                <h3 className="text-[#1A1208] mb-3 group-hover:text-[#0D0A05] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "0.01em" }}>{s.title}</h3>
                <p className="text-[#5C5040] mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                <div className="flex items-center gap-1.5 pt-4 border-t border-[#EDE9E0]">
                  <span className="transition-colors" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#D4A96A" }}>LEARN MORE</span>
                  <ArrowRight size={10} style={{ color: "#D4A96A" }} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
         </div>

        {/* See All Services CTA */}
        <div className={`mt-10 flex justify-center transition-all duration-600 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link href="/services">
            <div
              className="flex items-center gap-3 px-8 py-4 border-2 cursor-pointer group transition-all duration-300 hover:bg-[#D4A96A] hover:border-[#D4A96A]"
              style={{ borderColor: "#D4A96A" }}
            >
              <span
                className="transition-colors group-hover:text-[#0D0A05]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.12em", color: "#D4A96A" }}
              >
                SEE ALL SERVICES
              </span>
              <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0D0A05]" style={{ color: "#D4A96A" }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
// ── Work Gallery ──────────────────────────────────────────────────────────────
function ResWork() {
  const { ref, inView } = useInView();
  const projects = [
    { img: RES_KITCHEN, title: "Hamptons Kitchen", sub: "Full gut renovation · Custom millwork · Marble island", tag: "Kitchen" },
    { img: RES_BATHROOM, title: "Garden City Master Bath", sub: "Freestanding tub · Carrara marble · Radiant heat", tag: "Bathroom" },
    { img: RES_LIVING, title: "Manhasset Living Room", sub: "Coffered ceilings · Custom built-ins · Marble fireplace", tag: "Full Home" },
    { img: RES_HERO, title: "Oyster Bay Colonial", sub: "Full exterior renovation · Shingle siding · Stone columns", tag: "Exterior" },
  ];
  return (
    <section id="res-work" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em" }}>— 02 / OUR WORK</p>
          <h2 className="text-[#1A1208]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            Crafted With
            <br />
            <span style={{ color: "#D4A96A" }}>Intention.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-107" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4A96A] text-[#0D0A05] px-2.5 py-1" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>{p.tag.toUpperCase()}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600 }}>{p.title}</h3>
                  <p className="text-white/60" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>{p.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why L1 Residential ────────────────────────────────────────────────────────
function ResWhyUs() {
  const { ref, inView } = useInView();
  const points = [
    { num: "01", title: "Investor-Grade Precision", body: "Our roots in investment construction mean we bring a level of project management discipline and budget accountability that most residential contractors simply don't." },
    { num: "02", title: "Single Point of Contact", body: "Your dedicated project manager is your one contact from first meeting to final walkthrough — no handoffs, no confusion, no surprises." },
    { num: "03", title: "Premium Material Sourcing", body: "Our preferred vendor relationships give us access to premium materials at contractor pricing — better finishes at better value than you'd find on your own." },
    { num: "04", title: "On Time. On Budget.", body: "We set realistic timelines, communicate proactively, and hold our subcontractors accountable. Your project finishes when we say it will." },
  ];
  return (
    <section className="bg-[#1A1208] py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em" }}>— 03 / WHY L1 BUILDERS</p>
          <h2 className="text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            The Difference
            <br />
            <span style={{ color: "#D4A96A" }}>You'll Feel.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <div
              key={p.num}
              className={`border-l-2 border-[#D4A96A] pl-6 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-[#D4A96A] mb-2" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>{p.num}</p>
              <h3 className="text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600 }}>{p.title}</h3>
              <p className="text-white/55" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, fontWeight: 300 }}>{p.body}</p>
            </div>
          ))}
        </div>
        {/* Pull quote */}
        <div className={`mt-16 border border-[#D4A96A]/25 p-8 lg:p-10 transition-all duration-600 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <blockquote className="text-white/80" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.4, fontStyle: "italic" }}>
            "We don't just build renovations. We build the home you've been envisioning — with the accountability of a firm that treats your budget like an investment."
          </blockquote>
          <p className="text-[#D4A96A] mt-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>— L1 BUILDERS, RESIDENTIAL DIVISION</p>
        </div>
      </div>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────────
function ResProcess() {
  const { ref, inView } = useInView();
  const steps = [
    { num: "01", title: "Free Consultation", desc: "We visit your home, listen to your vision, and assess the scope. No obligation, no pressure." },
    { num: "02", title: "Detailed Proposal", desc: "You receive a line-item scope of work, material specifications, timeline, and fixed-price contract within one week." },
    { num: "03", title: "Design & Selection", desc: "Our team guides you through material and finish selections, ensuring every choice aligns with your vision and budget." },
    { num: "04", title: "Construction", desc: "Your dedicated project manager oversees every trade, provides weekly updates, and keeps the job site clean and organized." },
    { num: "05", title: "Final Walkthrough", desc: "We walk through every detail together. Nothing is considered complete until you are fully satisfied." },
  ];
  return (
    <section id="res-process" className="bg-[#FAFAF7] py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em" }}>— 04 / OUR PROCESS</p>
          <h2 className="text-[#1A1208]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            How We
            <br />
            <span style={{ color: "#D4A96A" }}>Work Together.</span>
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-[2.25rem] top-4 bottom-4 w-px bg-[#EDE9E0]" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`flex gap-6 lg:gap-10 transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-[4.5rem] h-[4.5rem] bg-[#D4A96A] flex items-center justify-center relative z-10">
                  <span className="text-[#0D0A05] font-bold" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.08em" }}>{s.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-[#1A1208] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600 }}>{s.title}</h3>
                  <p className="text-[#5C5040]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function ResAbout() {
  const { ref, inView } = useInView();
  return (
    <section id="res-about" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em" }}>— 05 / ABOUT L1 BUILDERS</p>
            <h2 className="text-[#1A1208] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Built on a Foundation
              <br />
              <span style={{ color: "#D4A96A" }}>of Accountability.</span>
            </h2>
            <p className="text-[#5C5040] mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
              L1 Builders was founded by real estate investors and licensed brokers who grew frustrated with contractors who didn't understand how quality construction translates to real value. We built the firm we wished existed.
            </p>
            <p className="text-[#5C5040] mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
              Our residential division brings that same discipline to homeowners who want a contractor they can trust — one who shows up, communicates clearly, and delivers exactly what was promised.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[["1,000+", "Homes Renovated"], ["40+", "Years Combined Experience"], ["NYC & LI", "DOB Licensed"]].map(([val, label]) => (
                <div key={label} className="border-t-2 border-[#D4A96A] pt-3">
                  <div className="text-[#1A1208] font-bold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem" }}>{val}</div>
                  <div className="text-[#5C5040]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <img src={RES_LIVING} alt="Luxury renovation" className="w-full h-80 lg:h-[480px] object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-[#D4A96A] px-6 py-4">
              <p className="text-[#0D0A05] font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem" }}>Licensed & Insured</p>
              <p className="text-[#0D0A05]/70" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>NYC DOB · NASSAU · SUFFOLK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function ResContact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, referral: "" }),
      });
      if (!res.ok) throw new Error("Failed to send");
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", { event_category: "contact", event_label: form.projectType || "residential" });
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="res-contact" className="bg-[#1A1208] py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em" }}>— 06 / GET IN TOUCH</p>
            <h2 className="text-white mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Start Your
              <br />
              <span style={{ color: "#D4A96A" }}>Renovation.</span>
            </h2>
            <p className="text-white/55 mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.75, fontWeight: 300 }}>
              Tell us about your project. We'll schedule a free in-home consultation and provide a detailed proposal within one week.
            </p>
            <div className="space-y-5">
              {[[Phone, "(917) 593-9038"], [Mail, "ben@l1buildersny.com"], [MapPin, "Serving Long Island & NYC"]].map(([Icon, text]) => (
                <div key={text as string} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#D4A96A]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#D4A96A]" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/55" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>{text as string}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 bg-[#D4A96A] flex items-center justify-center mb-6">
                  <span className="text-[#0D0A05] text-2xl">✓</span>
                </div>
                <h3 className="text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem", fontWeight: 600 }}>Thank You!</h3>
                <p className="text-white/55" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>We'll be in touch within one business day to schedule your free consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[["Full Name", "name", "text"], ["Email Address", "email", "email"], ["Phone Number", "phone", "tel"]].map(([label, field, type]) => (
                  <div key={field as string}>
                    <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>{(label as string).toUpperCase()}</label>
                    <input
                      type={type as string}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field as string]: e.target.value })}
                      className="w-full bg-white/5 border border-white/12 text-white px-4 py-3 focus:outline-none focus:border-[#D4A96A]/50 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                      required={field === "name" || field === "email"}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>PROJECT TYPE</label>
                  <select
                    value={form.projectType}
                    onChange={e => setForm({ ...form, projectType: e.target.value })}
                    className="w-full bg-white/5 border border-white/12 text-white px-4 py-3 focus:outline-none focus:border-[#D4A96A]/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                  >
                    <option value="" style={{ background: "#1A1208" }}>Select a project type</option>
                    {["Kitchen Renovation", "Bathroom Renovation", "Full-Home Renovation", "Addition / Extension", "Exterior Renovation", "Custom Millwork", "Other"].map(o => (
                      <option key={o} value={o} style={{ background: "#1A1208" }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>TELL US ABOUT YOUR PROJECT</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/12 text-white px-4 py-3 focus:outline-none focus:border-[#D4A96A]/50 transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                    placeholder="Describe your vision, scope, and timeline..."
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#D4A96A] text-[#0D0A05] hover:bg-[#C49558] transition-colors disabled:opacity-50" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                  {loading ? "SENDING..." : <>{`REQUEST FREE CONSULTATION`} <ArrowRight size={15} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function ResFooter() {
  return (
    <footer className="bg-[#0D0A05] border-t border-white/8 py-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#D4A96A] flex items-center justify-center">
            <span className="text-[#0D0A05] font-bold text-xs" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>L1</span>
          </div>
          <span className="text-white/50" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.06em" }}>BUILDERS · RESIDENTIAL</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/commercial">
            <span className="text-white/30 hover:text-[#4A7FA5] transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>
              INVESTOR / COMMERCIAL →
            </span>
          </Link>
          <span className="text-white/25" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>
            © {new Date().getFullYear()} L1 BUILDERS
          </span>
        </div>
      </div>
    </footer>
  );
}

// ── Page Assembly ─────────────────────────────────────────────────────────────
export default function HomeResidential() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen">
      <SiteHeader variant="residential" navLinks={[
        { label: "Services", href: "#res-services" },
        { label: "Our Work", href: "#res-work" },
        { label: "Process", href: "#res-process" },
        { label: "About", href: "#res-about" },
        { label: "Contact", href: "#res-contact" },
      ]} />
      <ResHero />
      <ResServices />
      <ResWork />
      <ResWhyUs />
      <ResProcess />
      <ResAbout />
      <ResContact />
      <ResFooter />
    </div>
  );
}
