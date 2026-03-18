/**
 * L1 Builders — Services Section
 * Design: Light gray background (#F5F7FA), 2x2 card grid with offset vertical positioning.
 * Each service category has an icon, numbered label, and expandable service list.
 * Steel-blue and bronze accents alternate.
 */

import { useEffect, useRef, useState } from "react";
import { Home, Zap, Building, RefreshCw, ChevronRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Home,
    title: "Value-Add Renovations",
    tagline: "Maximize rent and resale value.",
    description:
      "Strategic renovations designed to increase rental income and asset value. We select finishes based on market comps, not personal taste.",
    items: [
      "Unit upgrades & modernization",
      "Kitchen & bath remodels",
      "Gut renovations",
      "Layout optimization",
      "Market-appropriate finish selection",
    ],
    accent: "steel",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/EEIHq2rAnldOJ8OmTdEbVD-img-2_1771874168000_na1fn_bDEtaW50ZXJpb3Ita2l0Y2hlbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0VFSUhxMnJBbmxkT0o4T21UZEViVkQtaW1nLTJfMTc3MTg3NDE2ODAwMF9uYTFmbl9iREV0YVc1MFpYSnBiM0l0YTJsMFkyaGxiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jUSMVqx1MGkUvVKWkQKH9ZChQ26qkeF-CVdg-Re3ibUJeTf9xQARVejtNNAhpDVxXezOiU8IMK6wwaESaUlVGIO4uJ0SyrxExR1G9tr1r8mLy3rEp2KZ1JUvLi6vDWaKKt7pBIgpvGhn9OQqq~Tc1dJ1JnoDK0EYJfC1g5J9xTqg-oE0q-1dHqvSYGvSnxiuC2tG2saQqjEo-KrYsE~t4SstAdsgY7cW1e1xVytXPOSxsaMsc1rM93fWy12IP9sCoBCgN5ggfQpOo4UCFK6M~TktWp~v3hRgy2vfCrS75vYtvBW7bGV-nTR-lcQyr2FfDS8JMk2Bc7JpUzeym6qLEQ__",
  },
  {
    number: "02",
    icon: Zap,
    title: "Building Systems Upgrades",
    tagline: "Infrastructure that protects your investment.",
    description:
      "Full-scope mechanical, electrical, and plumbing upgrades. We coordinate with NYC DOB and Con Edison to ensure compliant, durable systems.",
    items: [
      "Electrical panel upgrades & rewiring",
      "Plumbing replacement & rerouting",
      "HVAC installation & replacement",
      "Elevator modernization",
      "Con Edison coordination",
    ],
    accent: "bronze",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/EEIHq2rAnldOJ8OmTdEbVD-img-3_1771874160000_na1fn_bDEtY29uc3RydWN0aW9uLXByb2Nlc3M.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0VFSUhxMnJBbmxkT0o4T21UZEViVkQtaW1nLTNfMTc3MTg3NDE2MDAwMF9uYTFmbl9iREV0WTI5dWMzUnlkV04wYVc5dUxYQnliMk5sYzNNLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V5ltsOnx2p8RzyMIufdtL6d4oDA7N0jwppNzUoFIMUKlzKaNTQzcAMFeh6tN-fcHRiqQ02AfjjuUwlbLO~9hUQnUxK1QBZH78g~SfJqClTJUWN7vb4QkJt5-9Zd6z1SDRxkfHw4F0d~~M9WtuM0Cjzieifo0PcnK1XOfLBYjCYy5N6EUW1irvxveialBmOhaCK-dTcTJMPF9iYsm1OY~aPMFcvI8kICEE0R0wggHKSCBRmoiOilU3~Pdn1k~yN71~E48EdGlk6qTiMtMBERNF9GyL3RebQDVagutkMVn6xcmFGhBRT5ZPF3nZmKPnJTnsU3QmYYiSkWijSSFofdSrA__",
  },
  {
    number: "03",
    icon: Building,
    title: "Capital Improvements",
    tagline: "Building-wide upgrades that command premium rents.",
    description:
      "Comprehensive capital improvement projects that enhance the entire asset — from curb appeal to mechanical efficiency.",
    items: [
      "Common area renovations",
      "Facade restoration & repair",
      "Roof replacement",
      "Energy efficiency upgrades",
      "Structural improvements",
    ],
    accent: "steel",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/EEIHq2rAnldOJ8OmTdEbVD-img-4_1771874164000_na1fn_bDEtbXVsdGlmYW1pbHktZXh0ZXJpb3I.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0VFSUhxMnJBbmxkT0o4T21UZEViVkQtaW1nLTRfMTc3MTg3NDE2NDAwMF9uYTFmbl9iREV0YlhWc2RHbG1ZVzFwYkhrdFpYaDBaWEpwYjNJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KS9gc58uhiUCEBmZgDHenZJqqDcLaRZftYrZ3soj2xOm7zxVAiWstyy9pvOog81i0gEXrahrFWi7OowFdoZ2PC~3bhW3TA8jgSJNjELgTbfz3WhmtoeD5skrIN6iVSCZ1N90QPjrhL0E7qvf0ct8z4QRWvfrzE-vDAv~1SqTAxaDbKPeF6T9TG4iuG~KM7FL1o7L-HXEHPbvlcn9gnC3ZczKRmrgLMY5xcvrtGXwMcH0kiI2FjeLZsrQt3nZApd-iV6sN6a7YSFxLPijpK3p~2Zo-xqZRKoyq1-NaDDvx7u1TjCfR6Dkprk0skyO7TxumRRv-Uj9x01tmnTrEp1XMA__",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Turnover & Repositioning",
    tagline: "Fast, strategic vacancy renovations.",
    description:
      "Rapid turnover renovations and strategic repositioning to minimize vacancy loss and maximize rental income on every unit.",
    items: [
      "Vacancy renovations",
      "Rent-ready upgrades",
      "Condo conversion preparation",
      "BRRR renovation packages",
      "Out-of-state investor programs",
    ],
    accent: "bronze",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

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

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="bg-[#F5F7FA] py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span
              className="text-[#4A7FA5]"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
            >
              — 04 / SERVICES
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className={`text-[#0D1117] transition-all duration-600 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
              }}
            >
              Full-Scope Construction
              <br />
              <span style={{ color: "#4A7FA5" }}>for Property Investors.</span>
            </h2>
            <p
              className={`text-[#52606D] max-w-sm transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, fontWeight: 300 }}
            >
              From single-unit turnover to full building repositioning — one contract,
              one team, full accountability.
            </p>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isSteel = service.accent === "steel";
            return (
              <div
                key={service.title}
                className={`group bg-white overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 ${
                  isSteel ? "card-accent-top" : "card-accent-top-bronze"
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-white/60"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.14em" }}
                    >
                      {service.number}
                    </span>
                  </div>
                  {/* Icon on image */}
                  <div className="absolute bottom-4 left-5">
                    <div className={`w-9 h-9 flex items-center justify-center ${isSteel ? "bg-[#4A7FA5]" : "bg-[#A67C52]"}`}>
                      <Icon size={17} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p
                    className={`mb-1 ${isSteel ? "text-[#4A7FA5]" : "text-[#A67C52]"}`}
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  >
                    {service.tagline}
                  </p>
                  <h3
                    className="text-[#0D1117] mb-3"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.01em" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#52606D] mb-5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <ChevronRight
                          size={12}
                          className={isSteel ? "text-[#4A7FA5]" : "text-[#A67C52]"}
                          strokeWidth={2.5}
                        />
                        <span
                          className="text-[#3D4A5C]"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 400 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
