/**
 * L1 Builders — Our Work page (/our-work)
 * Blog-style list view. 5 projects per page with pagination.
 * Each entry: image carousel on left, project description on right.
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import Lightbox from "@/components/Lightbox";

const PROJECTS_PER_PAGE = 5;

interface Project {
  title: string;
  location: string;
  tag: string;
  year: string;
  thumbnail: string;
  images: string[];
  description: string;
  scope: string[];
}

const projects: Project[] = [
  {
    title: "Midtown East New Construction Condos",
    location: "New York, NY",
    tag: "Full Home",
    year: "2024",
    thumbnail: "/projects/midtown-east-condos/thumbnail.webp",
    images: Array.from({ length: 22 }, (_, i) => `/projects/midtown-east-condos/${String(i + 1).padStart(2, "0")}.webp`),
    description: "The owners of this Midtown East condo wanted a complete transformation — open the layout, modernize every finish, and make the space feel twice as large. We gutted the kitchen and living area, removed the wall separating them, and rebuilt from scratch. New hardwood floors, custom cabinetry, and a redesigned kitchen island now anchor the space.",
    scope: ["Full gut renovation", "Open-plan layout", "Custom kitchen cabinetry", "Hardwood floor installation", "New plumbing & electrical", "Full repaint"],
  },
  {
    title: "Long Island Full Home Renovation",
    location: "Long Island, NY",
    tag: "Full Home",
    year: "2024",
    thumbnail: "/projects/long-island-full-home/thumbnail.jpg",
    images: Array.from({ length: 19 }, (_, i) => `/projects/long-island-full-home/${String(i + 1).padStart(2, "0")}.jpg`),
    description: "A complete whole-home renovation that transformed every room. The owners wanted a clean, contemporary feel while preserving the character of the original structure. We handled all trades in-house under a single schedule — kitchen, bathrooms, living areas, and exterior — delivering a fully updated home on time.",
    scope: ["Full home renovation", "Kitchen remodel", "2 bathroom renovations", "New flooring throughout", "Exterior work", "Full repaint"],
  },
  {
    title: "Nassau County Kitchen Remodel",
    location: "Nassau County, NY",
    tag: "Kitchen",
    year: "2023",
    thumbnail: "/projects/nassau-county-kitchen/thumbnail.jpg",
    images: Array.from({ length: 25 }, (_, i) => `/projects/nassau-county-kitchen/${String(i + 1).padStart(2, "0")}.jpg`),
    description: "A full kitchen renovation that transformed the heart of this Nassau County home. The owners wanted a cohesive, updated look with modern finishes and better flow. We coordinated all trades under one project manager, delivering a move-in ready kitchen on schedule.",
    scope: ["Full kitchen renovation", "Custom cabinetry", "New countertops", "Appliance installation", "Plumbing & electrical", "Full repaint"],
  },
  {
    title: "Queens Kitchen Remodel",
    location: "Queens, NY",
    tag: "Kitchen",
    year: "2023",
    thumbnail: "/projects/queens-kitchen/thumbnail.jpg",
    images: Array.from({ length: 4 }, (_, i) => `/projects/queens-kitchen/${String(i + 1).padStart(2, "0")}.jpg`),
    description: "A focused kitchen renovation completed efficiently while the owners continued living in the home. We phased the project to minimize disruption and delivered updated finishes throughout, on schedule.",
    scope: ["Kitchen renovation", "New flooring", "Lighting upgrade", "Full repaint", "Trim & millwork", "Custom cabinetry"],
  },
  {
    title: "Brooklyn Loft",
    location: "Brooklyn, NY",
    tag: "Full Home",
    year: "2024",
    thumbnail: "/projects/utah-brooklyn-loft/thumbnail.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/projects/utah-brooklyn-loft/${String(i + 1).padStart(2, "0")}.jpg`),
    description: "A full loft renovation in Brooklyn's neighborhood. The owners wanted an open, airy space that preserved the industrial character of the building while bringing in warmth and functionality. We reconfigured the layout, installed polished concrete floors, and built out a custom kitchen and living space.",
    scope: ["Full loft renovation", "Open-plan layout", "Custom kitchen", "Polished concrete floors", "Industrial fixtures", "Custom built-ins"],
  },
];

// ── Carousel ─────────────────────────────────────────────────────────────────
function Carousel({ images, onOpenLightbox }: { images: string[]; onOpenLightbox: (i: number) => void }) {
  const [current, setCurrent] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length); };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-[#1A1A0F] group cursor-zoom-in"
      onClick={() => onOpenLightbox(current)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* Expand hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black/50 px-3 py-1.5">
          <span className="text-white" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.12em" }}>EXPAND</span>
        </div>
      </div>
      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/75 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/75 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" onClick={e => e.stopPropagation()}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setCurrent(i); }}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === current ? "#C8963E" : "rgba(255,255,255,0.4)" }}
              />
            ))}
          </div>
        </>
      )}
      {/* Image count */}
      {images.length > 1 && (
        <div className="absolute top-3 left-3 bg-black/50 px-2 py-1">
          <span className="text-white" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.1em" }}>
            {current + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Project Entry ─────────────────────────────────────────────────────────────
function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Thumbnail first, then the rest of the images
  const allImages = [project.thumbnail, ...project.images];
  return (
    <article className="border-b border-[#EDE9E0] pb-16 mb-16 last:border-0 last:mb-0">
      {lightboxIndex !== null && (
        <Lightbox images={allImages} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Carousel */}
        <div className="w-full h-72 lg:h-96 relative flex-shrink-0">
          <Carousel images={allImages} onOpenLightbox={setLightboxIndex} />
        </div>

        {/* Text */}
        <div>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-[#C8963E] text-[#0D0A05]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em" }}>
              {project.tag.toUpperCase()}
            </span>
            <span className="text-[#888]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em" }}>
              {project.location} · {project.year}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#1A1A0F] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-[#5C5040] mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.8, fontWeight: 300 }}>
            {project.description}
          </p>

          {/* Scope */}
          <div>
            <p className="text-[#C8963E] mb-3" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.16em" }}>
              SCOPE OF WORK
            </p>
            <div className="flex flex-wrap gap-2">
              {project.scope.map(item => (
                <span
                  key={item}
                  className="px-3 py-1.5 border border-[#EDE9E0] text-[#5C5040]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 300 }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function OurWork() {
  const [tab, setTab] = useState<"residential" | "commercial">("residential");
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginated = projects.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const handleTabChange = (t: "residential" | "commercial") => {
    setTab(t);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <SiteHeader
        variant="residential"
        navLinks={[
          { label: "Our Work", href: "/our-work" },
          { label: "About", href: "/residential#res-about" },
          { label: "Contact", href: "/residential#res-contact" },
        ]}
      />

      {/* Page header */}
      <div className="bg-[#1A1A0F] pt-[88px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[#C8963E] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.22em" }}>
            — OUR WORK
          </p>
          <h1 className="text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
            Projects We're
            <br />
            <span style={{ color: "#C8963E" }}>Proud Of.</span>
          </h1>
          <p className="text-white/60 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, fontWeight: 300 }}>
            Every project is different. Every owner has a vision. Here's a look at some of the work we've done across NYC.
          </p>
        </div>

      </div>

      {/* Toggle + Content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-[60px] lg:py-[120px]">
        {/* Toggle */}
        <div className="flex gap-3 mb-14">
          {(["residential", "commercial"] as const).map((t) => (
            <button
              key={t}
              onClick={() => handleTabChange(t)}
              className="px-6 py-2.5 border transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: tab === t ? "#1A1A0F" : "transparent",
                color: tab === t ? "#fff" : "#5C5040",
                borderColor: tab === t ? "#1A1A0F" : "#EDE9E0",
              }}
            >
              {t}
            </button>
          ))}
        </div>

      {tab === "residential" ? (
        <>
          {paginated.map((project, i) => (
            <ProjectEntry key={project.title} project={project} index={i} />
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-8 border-t border-[#EDE9E0]">
              <button
                onClick={() => setPage(p => p - 1)}
                disabled={page === 1}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#EDE9E0] text-[#5C5040] disabled:opacity-30 hover:border-[#C8963E] hover:text-[#C8963E] transition-all"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}
              >
                <ArrowLeft size={12} /> PREV
              </button>
              <span className="text-[#888]" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}>
                PAGE {page} OF {totalPages}
              </span>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page === totalPages}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#EDE9E0] text-[#5C5040] disabled:opacity-30 hover:border-[#C8963E] hover:text-[#C8963E] transition-all"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em" }}
              >
                NEXT <ArrowRight size={12} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="py-[40px] lg:py-[80px] flex flex-col items-center text-center">
          <p className="text-[#C8963E] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em" }}>
            COMING SOON
          </p>
          <h2 className="text-[#1A1A0F] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            Commercial Portfolio
            <br />
            <span style={{ color: "#C8963E" }}>In Progress.</span>
          </h2>
          <p className="text-[#5C5040] max-w-sm" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, fontWeight: 300 }}>
            We're documenting our commercial and investment property projects. Check back soon.
          </p>
        </div>
      )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1A1A0F] py-[60px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#C8963E] mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.22em" }}>— LET'S TALK</p>
          <h2 className="text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
            Ready to Start
            <br />
            <span style={{ color: "#C8963E" }}>Your Project?</span>
          </h2>
          <p className="text-white/55 mb-10 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.75, fontWeight: 300 }}>
            We'll come to your home, listen to your vision, and give you a free, no-pressure consultation.
          </p>
          <Link href="/residential#res-contact">
            <button className="flex items-center gap-2.5 px-8 py-4 mx-auto" style={{ background: "#C8963E", color: "#0D0A05", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.1em" }}>
              GET A FREE CONSULTATION <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
