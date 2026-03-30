/**
 * L1 Builders — Our Work Teaser (Commercial)
 * Same grid layout as residential ResWork, steel-blue color scheme.
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const projects = [
  {
    thumbnail: "/projects/midtown-east-condos/thumbnail.webp",
    images: ["/projects/midtown-east-condos/thumbnail.webp", ...Array.from({ length: 22 }, (_, i) => `/projects/midtown-east-condos/${String(i + 1).padStart(2, "0")}.webp`)],
    title: "Midtown East New Construction Condos",
    sub: "Open-plan layout · Custom cabinetry · Hardwood floors",
    tag: "Full Home",
  },
  {
    thumbnail: "/projects/long-island-full-home/thumbnail.jpg",
    images: ["/projects/long-island-full-home/thumbnail.jpg", ...Array.from({ length: 19 }, (_, i) => `/projects/long-island-full-home/${String(i + 1).padStart(2, "0")}.jpg`)],
    title: "Long Island Full Home Renovation",
    sub: "Full home renovation · Kitchen · 2 bathrooms",
    tag: "Full Home",
  },
  {
    thumbnail: "/projects/nassau-county-kitchen/thumbnail.jpg",
    images: ["/projects/nassau-county-kitchen/thumbnail.jpg", ...Array.from({ length: 25 }, (_, i) => `/projects/nassau-county-kitchen/${String(i + 1).padStart(2, "0")}.jpg`)],
    title: "Nassau County Kitchen Remodel",
    sub: "Custom cabinetry · New countertops · Full repaint",
    tag: "Kitchen",
  },
  {
    thumbnail: "/projects/utah-brooklyn-loft/thumbnail.jpg",
    images: ["/projects/utah-brooklyn-loft/thumbnail.jpg", ...Array.from({ length: 10 }, (_, i) => `/projects/utah-brooklyn-loft/${String(i + 1).padStart(2, "0")}.jpg`)],
    title: "Brooklyn Loft",
    sub: "Open-plan loft · Custom kitchen · Polished concrete",
    tag: "Full Home",
  },
];

export default function OurWorkTeaser() {
  const { ref, inView } = useInView();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <section id="our-work" className="bg-white py-[60px] lg:py-[120px]" ref={ref}>
      {lightbox && <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className={`mb-14 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: "#0D1117",
            }}
          >
            Results That
            <br />
            <span style={{ color: "#4A7FA5" }}>Speak for Themselves.</span>
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
                    <span className="text-white" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.12em" }}>
                      VIEW {p.images.length} PHOTOS
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#4A7FA5] text-white px-2.5 py-1" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>
                    {p.tag.toUpperCase()}
                  </span>
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
            <div
              className="flex items-center gap-3 px-8 py-4 border-2 cursor-pointer group transition-all duration-300 hover:bg-[#4A7FA5] hover:border-[#4A7FA5]"
              style={{ borderColor: "#4A7FA5" }}
            >
              <span
                className="transition-colors group-hover:text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.12em", color: "#4A7FA5" }}
              >
                SEE ALL OUR WORK
              </span>
              <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" style={{ color: "#4A7FA5" }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
