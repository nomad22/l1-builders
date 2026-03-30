/**
 * L1 Builders — Residential Homepage (/residential)
 * Design: Warm, elevated, editorial. Cream/off-white backgrounds, 
 * unlacquered brass/gold (#C8963E) accents, charcoal text.
 * Fonts: Barlow Condensed (headlines), Inter (body), Space Mono (labels).
 * Target: High-end homeowners on NYC suburbs.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, BadgeCheck, Landmark, PhoneCall, Hammer } from "lucide-react";
import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import Lightbox from "@/components/Lightbox";

const RES_HERO = "/res-hero-living.png";
const RES_LIVING = "/res-living-room.webp";

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
            NYC — LICENSED & INSURED
          </span>
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="text-white/35 hover:text-[#C8963E] transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>
                ← SWITCH TO INVESTOR
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link href="/">
            <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-8 w-auto" />
          </Link>
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {[["Services", "#res-services"], ["Our Work", "#res-work"], ["About", "#res-about"]].map(([label, href]) => (
              <button key={href} onClick={() => scroll(href)} className="text-white/65 hover:text-white transition-colors" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
                {label}
              </button>
            ))}
            <button onClick={() => scroll("#res-contact")} className="px-5 py-2.5 bg-[#C8963E] text-[#0D0A05] hover:bg-[#C49558] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em" }}>
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
            {[["Services", "#res-services"], ["Our Work", "#res-work"], ["About", "#res-about"], ["Contact", "#res-contact"]].map(([label, href], i) => (
              <button key={href} onClick={() => scroll(href)} className="text-left text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                <span className="text-[#C8963E] mr-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}>0{i + 1}</span>
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
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="text-[#C8963E] mb-5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.22em" }}>
            — RESIDENTIAL RENOVATIONS · NYC
          </p>
          <h1 className="text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
            Your Home,
            <br />
            <span style={{ color: "#C8963E" }}>Elevated.</span>
          </h1>
          <p className="text-white/65 mb-10 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, fontWeight: 300 }}>
            Kitchens, bathrooms, full gut renovations, and additions for homeowners on NYC. Done right, on time, and exactly as promised.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => document.querySelector("#res-contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2.5 px-8 py-4 bg-[#C8963E] text-[#0D0A05] hover:bg-[#C49558] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}>
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
    { title: "Bathroom Renovations", desc: "Master baths, guest baths, and powder rooms — steam showers, soaking tubs, radiant heat, and custom tile work. We'll make it feel like a hotel you never have to leave.", icon: "◈", slug: "tile-bathroom-renovations" },
    { title: "Full-Home Renovations", desc: "Complete gut renovations and whole-home transformations, from structural changes to finish selections — managed under one roof with a single point of contact.", icon: "◈", slug: "painting-drywall" },
    { title: "Additions & Extensions", desc: "Thoughtfully designed additions that expand your living space while maintaining architectural integrity — from changing bedroom counts to adding entire floors.", icon: "◈", slug: "windows-doors" },
    { title: "Exterior & Outdoor Living", desc: "Decks, patios, gardens, stoops, driveways, and façade work — we build outdoor spaces worth spending time in. We treat the outside of your home with the same care as the inside.", icon: "◈", slug: "roofing" },
    { title: "Basement Finishing & Waterproofing", desc: "From drainage systems and waterproofing to full finishing — we turn underused basements into dry, livable space. Home office, gym, or in-law suite, we handle it start to finish.", icon: "◈", slug: "basement" },
  ];
  return (
    <section id="res-services" className="bg-[#FAFAF7] py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          <h2 className="text-[#1A1A0F]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            What We Build
            <br />
            <span style={{ color: "#C8963E" }}>For You.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.title} href={`/services/${s.slug}`}>
              <div
                className={`group bg-white border border-[#EDE9E0] p-7 hover:shadow-lg hover:shadow-black/5 transition-all duration-400 hover:-translate-y-1 border-t-2 border-t-[#C8963E] cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-[#C8963E] text-2xl mb-4">{s.icon}</div>
                <h3 className="text-[#1A1A0F] mb-3 group-hover:text-[#0D0A05] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "0.01em" }}>{s.title}</h3>
                <p className="text-[#5C5040] mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                <div className="flex items-center gap-1.5 pt-4 border-t border-[#EDE9E0]">
                  <span className="transition-colors" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#C8963E" }}>LEARN MORE</span>
                  <ArrowRight size={10} style={{ color: "#C8963E" }} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
         </div>

        {/* See All Services CTA */}
        <div className={`mt-10 flex justify-center transition-all duration-600 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link href="/services">
            <div
              className="flex items-center gap-3 px-8 py-4 border-2 cursor-pointer group transition-all duration-300 hover:bg-[#C8963E] hover:border-[#C8963E]"
              style={{ borderColor: "#C8963E" }}
            >
              <span
                className="transition-colors group-hover:text-[#0D0A05]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.12em", color: "#C8963E" }}
              >
                SEE ALL SERVICES
              </span>
              <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0D0A05]" style={{ color: "#C8963E" }} />
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
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const projects = [
    { thumbnail: "/projects/midtown-east-condos/thumbnail.webp", images: ["/projects/midtown-east-condos/thumbnail.webp", ...Array.from({ length: 22 }, (_, i) => `/projects/midtown-east-condos/${String(i + 1).padStart(2, "0")}.webp`)], title: "Midtown East New Construction Condos", sub: "Open-plan layout · Custom cabinetry · Hardwood floors", tag: "Full Home" },
    { thumbnail: "/projects/long-island-full-home/thumbnail.jpg", images: ["/projects/long-island-full-home/thumbnail.jpg", ...Array.from({ length: 19 }, (_, i) => `/projects/long-island-full-home/${String(i + 1).padStart(2, "0")}.jpg`)], title: "Long Island Full Home Renovation", sub: "Full home renovation · Kitchen · 2 bathrooms", tag: "Full Home" },
    { thumbnail: "/projects/nassau-county-kitchen/thumbnail.jpg", images: ["/projects/nassau-county-kitchen/thumbnail.jpg", ...Array.from({ length: 25 }, (_, i) => `/projects/nassau-county-kitchen/${String(i + 1).padStart(2, "0")}.jpg`)], title: "Nassau County Kitchen Remodel", sub: "Custom cabinetry · New countertops · Full repaint", tag: "Kitchen" },
    { thumbnail: "/projects/brooklyn-loft/thumbnail.jpg", images: ["/projects/brooklyn-loft/thumbnail.jpg", ...Array.from({ length: 10 }, (_, i) => `/projects/brooklyn-loft/${String(i + 1).padStart(2, "0")}.jpg`)], title: "Brooklyn Loft", sub: "Open-plan loft · Custom kitchen · Polished concrete", tag: "Full Home" },
  ];
  return (
    <section id="res-work" className="bg-white py-[60px] lg:py-[120px]" ref={ref}>
      {lightbox && <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          <h2 className="text-[#1A1A0F]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            Crafted With
            <br />
            <span style={{ color: "#C8963E" }}>Intention.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden cursor-zoom-in transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox({ images: p.images, index: 0 })}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-107" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-black/50 px-3 py-1.5">
                    <span className="text-white" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.12em" }}>VIEW {p.images.length} PHOTOS</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C8963E] text-[#0D0A05] px-2.5 py-1" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>{p.tag.toUpperCase()}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.375rem", fontWeight: 600 }}>{p.title}</h3>
                  <p className="text-white/60" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>{p.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-10 flex justify-center transition-all duration-600 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link href="/our-work">
            <div className="flex items-center gap-3 px-8 py-4 border-2 cursor-pointer group transition-all duration-300 hover:bg-[#C8963E] hover:border-[#C8963E]" style={{ borderColor: "#C8963E" }}>
              <span className="transition-colors group-hover:text-[#0D0A05]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.12em", color: "#C8963E" }}>
                SEE ALL OUR WORK
              </span>
              <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0D0A05]" style={{ color: "#C8963E" }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Why L1 Residential ────────────────────────────────────────────────────────
function ResWhyUs() {
  const { ref, inView } = useInView();
  const points = [
    { num: "01", title: "The Price Is the Price", body: "What we quote is what you pay. No change orders, no surprises — even if something unexpected comes up on our end.", Icon: BadgeCheck },
    { num: "02", title: "Fair Payment Terms", body: "25% upfront, the rest paid only when milestones are completed to your satisfaction. You never pay for work that hasn't been done.", Icon: Landmark },
    { num: "03", title: "We Don't Disappear", body: "Real office. Real phone. A project manager who picks up — not just at the start and end, but throughout the entire job.", Icon: PhoneCall },
    { num: "04", title: "Craftsmanship, Not Just Construction", body: "We don't cut corners. We treat your home like our own, and our supplier relationships mean better materials at better prices.", Icon: Hammer },
  ];
  return (
    <section className="bg-[#F5F0E8] py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className={`mb-16 lg:mb-20 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em", color: "#1A1A0F" }}>
            The Difference
            <br />
            <span style={{ color: "#C8963E" }}>You'll Feel.</span>
          </h2>
        </div>

        {/* Points — 2×2 icon-led cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <div
              key={p.num}
              className={`p-5 lg:p-6 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ background: "#EDE8DF", transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-3">
                <p.Icon size={20} strokeWidth={1.75} style={{ color: "#C8963E", flexShrink: 0 }} />
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#1A1A0F" }}>
                  {p.title}
                </h3>
              </div>
              {/* Body */}
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300, color: "#5C5040" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className={`mt-16 transition-all duration-600 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <blockquote style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, lineHeight: 1.4, fontStyle: "italic", color: "#3A3020" }}>
            "Most contractors disappear after the deposit. We built L1 because we wanted to be the firm that actually shows up — on time, on budget, and proud of what we leave behind."
          </blockquote>
          <p className="mt-5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "1rem", letterSpacing: "0.14em", color: "#C8963E" }}>— Ben Wong, OWNER</p>
        </div>

      </div>
    </section>
  );
}


// ── About ─────────────────────────────────────────────────────────────────────
function ResAbout() {
  const { ref, inView } = useInView();
  return (
    <section id="res-about" className="bg-white py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            <h2 className="text-[#1A1A0F] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Built on a Foundation
              <br />
              <span style={{ color: "#C8963E" }}>of Accountability.</span>
            </h2>
            <p className="text-[#5C5040] mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
              We built L1 because we were tired of the same story — contractors who go quiet after the deposit, timelines that drift by months, and finishes that don't match what was promised. We wanted a firm we could trust with our own homes.
            </p>
            <p className="text-[#5C5040] mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
              Every project gets a dedicated manager, a fixed-price contract, and a crew that treats your home with the care it deserves. We're not done until you're proud of the result.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[["1,000+", "Homes Renovated"], ["40+", "Years Combined Experience"], ["NYC", "DOB Licensed"]].map(([val, label]) => (
                <div key={label} className="border-t-2 border-[#C8963E] pt-3">
                  <div className="text-[#1A1A0F] font-bold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem" }}>{val}</div>
                  <div className="text-[#5C5040]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <img src={RES_LIVING} alt="Luxury renovation" className="w-full h-80 lg:h-[480px] object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-[#C8963E] px-6 py-4">
              <p className="text-[#0D0A05] font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem" }}>Licensed & Insured</p>
              <p className="text-[#0D0A05]/70" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>NYC DOB LICENSED</p>
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "", message: "" });
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
        body: JSON.stringify(form),
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
    <section id="res-contact" className="bg-[#1A1A0F] py-[60px] lg:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

            <h2 className="text-white mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Start Your
              <br />
              <span style={{ color: "#C8963E" }}>Renovation.</span>
            </h2>
            <p className="text-white/55 mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.75, fontWeight: 300 }}>
              Tell us about your project. We'll schedule a free in-home consultation and provide a detailed proposal within one week.
            </p>
            <div className="space-y-5">
              {[
                { Icon: Phone, text: "(917) 593-9038", href: "tel:+19175939038" },
                { Icon: Mail, text: "ben@l1buildersny.com", href: "mailto:ben@l1buildersny.com" },
                { Icon: MapPin, text: "Serving NYC", href: null },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#C8963E]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#C8963E]" strokeWidth={1.5} />
                  </div>
                  {href ? (
                    <a href={href} className="text-white/55 hover:text-white/80 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>{text}</a>
                  ) : (
                    <span className="text-white/55" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 bg-[#C8963E] flex items-center justify-center mb-6">
                  <span className="text-[#0D0A05] text-2xl">✓</span>
                </div>
                <h3 className="text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem", fontWeight: 600 }}>Thank You!</h3>
                <p className="text-white/55 mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>We'll be in touch within one business day to schedule your free consultation.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", budget: "", message: "" }); }}
                  className="text-[#C8963E] hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>FULL NAME</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-white/25 px-4 py-3 focus:outline-none focus:border-[#C8963E]/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@email.com"
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-white/25 px-4 py-3 focus:outline-none focus:border-[#C8963E]/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>PHONE NUMBER</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="(212) 555-0100"
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-white/25 px-4 py-3 focus:outline-none focus:border-[#C8963E]/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>BUDGET</label>
                  <select
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-[#1A1A0F] border border-white/12 text-white px-4 py-3 focus:outline-none focus:border-[#C8963E]/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300, color: form.budget ? "white" : "rgba(255,255,255,0.25)" }}
                  >
                    <option value="" style={{ background: "#1A1A0F", color: "rgba(255,255,255,0.4)" }}>Select a budget range</option>
                    {["<$2,500", "$2,500 – $10,000", "$10,000 – $50,000", "$50,000 – $100,000", "$100,000 – $250,000", "$250,000+"].map(o => (
                      <option key={o} value={o} style={{ background: "#1A1A0F", color: "white" }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>TELL US ABOUT YOUR PROJECT</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-white/25 px-4 py-3 focus:outline-none focus:border-[#C8963E]/50 transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                    placeholder="e.g. Full kitchen gut renovation, ~400 sq ft, hoping to start this spring..."
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#C8963E] text-[#0D0A05] hover:bg-[#C49558] transition-colors disabled:opacity-50" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}>
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
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src="/Logo/l1_logo_warm_cream_transparent.png" alt="L1 Builders" className="h-22 w-auto" />
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
        { label: "Our Work", href: "/our-work" },
        { label: "About", href: "#res-about" },
        { label: "Contact", href: "#res-contact" },
      ]} />
      <ResHero />
      <ResServices />
      <ResWork />
      <ResWhyUs />
      <ResAbout />
      <ResContact />
      <ResFooter />
    </div>
  );
}
