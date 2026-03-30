/**
 * L1 Builders — Service Detail Page (/services/:slug)
 * Design: Technical Modernism — consistent with site design system.
 * Dynamically renders content from services.ts for all 11 service pages.
 * Gold accent for residential-leaning services, steel-blue for investment-leaning.
 */

import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { serviceBySlug, services } from "@/lib/services";
import SiteHeader from "@/components/SiteHeader";

// Unsplash images keyed by slug for hero backgrounds
const SERVICE_IMAGES: Record<string, string> = {
  "cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
  "demolition": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
  "painting-drywall": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80",
  "electrical": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80",
  "hvac": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80",
  "plumbing": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  "flooring": "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&q=80",
  "tile-bathroom-renovations": "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-bathroom-oDaCSvdRpqxWX46kZFgWDF.webp",
  "kitchen-renovations": "https://d2xsxph8kpxj0f.cloudfront.net/310519663284622640/3uXyTKuuEVEiZ2zueCT5gX/res-kitchen-b8AhWyn2bbLQ28Zb5t8kxh.webp",
  "windows-doors": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  "roofing": "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=1600&q=80",
};

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

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceBySlug(slug);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0A05]">
        <div className="text-center">
          <p className="text-white/40 mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.18em" }}>SERVICE NOT FOUND</p>
          <Link href="/commercial"><span className="text-[#4A7FA5] cursor-pointer hover:underline">← Back to Home</span></Link>
        </div>
      </div>
    );
  }

  const accent = service.accentColor === "gold" ? "#C8963E" : "#4A7FA5";
  const accentDark = service.accentColor === "gold" ? "#0D0A05" : "#fff";
  const heroImg = SERVICE_IMAGES[service.slug] || SERVICE_IMAGES["cleaning"];

  // Find adjacent services for navigation
  const currentIdx = services.findIndex(s => s.slug === service.slug);
  const prevService = currentIdx > 0 ? services[currentIdx - 1] : null;
  const nextService = currentIdx < services.length - 1 ? services[currentIdx + 1] : null;

  const { ref: highlightsRef, inView: highlightsInView } = useInView();
  const { ref: scopeRef, inView: scopeInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setContactSubmitted(true); };

  return (
    <div className="min-h-screen bg-white">
      {/* Shared header */}
      <SiteHeader
        variant={service.accentColor === "gold" ? "residential" : "commercial"}
      />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={heroImg} alt={service.label} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,7,3,0.88) 0%, rgba(10,7,3,0.55) 55%, rgba(10,7,3,0.2) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,7,3,0.7) 0%, transparent 50%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pb-14 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/commercial">
              <span className="text-white/40 hover:text-white/70 transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>HOME</span>
            </Link>
            <ChevronRight size={10} className="text-white/25" />
            <span className="text-white/40" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>SERVICES</span>
            <ChevronRight size={10} className="text-white/25" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: accent }}>{service.label.toUpperCase()}</span>
          </div>

          <p className="mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: accent }}>
            — L1 BUILDERS · {service.label.toUpperCase()}
          </p>
          <h1 className="text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em", whiteSpace: "pre-line" }}>
            {service.heroTagline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <span style={{ color: accent }}>{line}</span> : line}
                {i < service.heroTagline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-white/60 max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.75, fontWeight: 300 }}>
            {service.heroDesc}
          </p>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28" ref={highlightsRef}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-600 ${highlightsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="mb-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: accent }}>— WHAT WE OFFER</p>
            <h2 className="text-[#1A1A0F]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Our {service.label} Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.highlights.map((h, i) => (
              <div
                key={h.title}
                className={`bg-white p-7 border border-[#EDE9E0] hover:shadow-md transition-all duration-400 ${highlightsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms`, borderTop: `2px solid ${accent}` }}
              >
                <h3 className="text-[#1A1A0F] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", fontWeight: 600 }}>{h.title}</h3>
                <p className="text-[#5C5040]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope of Work ── */}
      <section className="bg-white py-20 lg:py-28" ref={scopeRef}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`transition-all duration-600 ${scopeInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <p className="mb-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: accent }}>— SCOPE OF WORK</p>
              <h2 className="text-[#1A1A0F] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
                What's Included
              </h2>
              <p className="text-[#5C5040] mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
                Every {service.label.toLowerCase()} project is scoped in detail before work begins. Here's a representative list of what our crews handle:
              </p>
              <ul className="space-y-3">
                {service.scope.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 transition-all duration-400 ${scopeInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                    <span className="text-[#3A3020]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.6, fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why L1 panel */}
            <div
              className={`p-8 lg:p-10 transition-all duration-600 delay-200 ${scopeInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{ background: "#1A1A0F" }}
            >
              <p className="mb-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", color: accent }}>— WHY L1 BUILDERS</p>
              <h3 className="text-white mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.1 }}>
                The L1 Difference
              </h3>
              <p className="text-white/60 mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.8, fontWeight: 300 }}>
                {service.whyL1}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[["1,000+", "Projects Completed"], ["40+", "Years Experience"], ["NYC & LI", "Licensed"], ["On Time", "Guaranteed"]].map(([val, label]) => (
                  <div key={label} className="border-t pt-3" style={{ borderColor: `${accent}30` }}>
                    <div className="font-bold mb-0.5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", color: accent }}>{val}</div>
                    <div className="text-white/40" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.1em" }}>{label}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => document.querySelector("#svc-contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full flex items-center justify-center gap-2 py-3.5 transition-opacity"
                style={{ background: accent, color: accentDark, fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                GET A FREE ESTIMATE <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Quote Form ── */}
      <section id="svc-contact" className="bg-[#1A1A0F] py-20 lg:py-28" ref={contactRef}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`transition-all duration-600 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.2em", color: accent }}>— REQUEST A QUOTE</p>
              <h2 className="text-white mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
                Start Your<br />
                <span style={{ color: accent }}>{service.label} Project.</span>
              </h2>
              <p className="text-white/50 mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, fontWeight: 300 }}>
                Tell us about your project and we'll get back to you within one business day with a free estimate.
              </p>

              {/* Direct contact info */}
              <div className="flex flex-col gap-3 mb-8 p-5 border" style={{ borderColor: `${accent}25`, background: `${accent}08` }}>
                <p className="text-white/30 mb-1" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em" }}>REACH US DIRECTLY</p>
                <a
                  href="tel:+19175939038"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: `${accent}20` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-white/80 group-hover:text-white transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem", fontWeight: 600, letterSpacing: "0.02em" }}>(917) 593-9038</p>
                    <p className="text-white/30" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.1em" }}>MON–FRI 8AM–6PM</p>
                  </div>
                </a>
                <a
                  href="mailto:ben@l1buildersny.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: `${accent}20` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-white/80 group-hover:text-white transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem", fontWeight: 600, letterSpacing: "0.02em" }}>ben@l1buildersny.com</p>
                    <p className="text-white/30" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.1em" }}>REPLY WITHIN 1 BUSINESS DAY</p>
                  </div>
                </a>
              </div>

              {/* Other services */}
              <div>
                <p className="text-white/30 mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em" }}>OTHER SERVICES</p>
                <div className="flex flex-wrap gap-2">
                  {services.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      <span
                        className="px-3 py-1.5 border text-white/40 hover:text-white/70 transition-colors cursor-pointer text-xs"
                        style={{ borderColor: "rgba(255,255,255,0.1)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                      >
                        {s.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className={`transition-all duration-600 delay-200 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {contactSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ background: accent }}>
                    <span className="text-2xl" style={{ color: accentDark }}>✓</span>
                  </div>
                  <h3 className="text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem", fontWeight: 600 }}>Request Received!</h3>
                  <p className="text-white/50" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}>We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[["Full Name", "name", "text"], ["Email Address", "email", "email"], ["Phone Number", "phone", "tel"]].map(([label, field, type]) => (
                    <div key={field as string}>
                      <label className="block text-white/35 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>{(label as string).toUpperCase()}</label>
                      <input
                        type={type as string}
                        value={form[field as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field as string]: e.target.value })}
                        className="w-full bg-white/5 border text-white px-4 py-3 focus:outline-none transition-colors"
                        style={{ borderColor: "rgba(255,255,255,0.1)", fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                        onFocus={e => { (e.target as HTMLElement).style.borderColor = `${accent}50`; }}
                        onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                        required={field === "name" || field === "email"}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/35 mb-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>TELL US ABOUT YOUR PROJECT</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border text-white px-4 py-3 focus:outline-none transition-colors resize-none"
                      style={{ borderColor: "rgba(255,255,255,0.1)", fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 300 }}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = `${accent}50`; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                      placeholder={`Describe your ${service.label.toLowerCase()} project...`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 transition-opacity"
                    style={{ background: accent, color: accentDark, fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    REQUEST FREE ESTIMATE <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Navigation ── */}
      <section className="bg-[#0D0A05] py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {prevService ? (
            <Link href={`/services/${prevService.slug}`}>
              <div className="flex items-center gap-3 cursor-pointer group">
                <ArrowLeft size={14} className="text-white/30 group-hover:text-white/70 transition-colors" />
                <div>
                  <p className="text-white/25" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.14em" }}>PREVIOUS</p>
                  <p className="text-white/60 group-hover:text-white transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 600 }}>{prevService.label}</p>
                </div>
              </div>
            </Link>
          ) : <div />}

          <Link href="/services">
            <span className="text-white/25 hover:text-white/50 transition-colors cursor-pointer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>
              ALL SERVICES
            </span>
          </Link>

          {nextService ? (
            <Link href={`/services/${nextService.slug}`}>
              <div className="flex items-center gap-3 cursor-pointer group text-right">
                <div>
                  <p className="text-white/25" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.14em" }}>NEXT</p>
                  <p className="text-white/60 group-hover:text-white transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 600 }}>{nextService.label}</p>
                </div>
                <ArrowRight size={14} className="text-white/30 group-hover:text-white/70 transition-colors" />
              </div>
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
}
