/**
 * L1 Builders — Lightbox Modal
 * Full-screen image carousel overlay. Keyboard navigable.
 */

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  startIndex?: number;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex = 0, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.93)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.08)" }}
        onClick={onClose}
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-white/50" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center px-16 py-14"
        onClick={e => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute max-w-full max-h-full object-contain transition-opacity duration-300"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 text-white/70 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 text-white/70 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div
          className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto"
          onClick={e => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              className="flex-shrink-0 w-14 h-10 overflow-hidden transition-all duration-200"
              style={{ opacity: i === current ? 1 : 0.4, outline: i === current ? "2px solid #C8963E" : "none", outlineOffset: "2px" }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
