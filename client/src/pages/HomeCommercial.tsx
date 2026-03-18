/**
 * L1 Builders — Commercial/Investor Homepage (/commercial)
 * Uses the shared SiteHeader with commercial variant.
 */

import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomeCommercial() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader
        variant="commercial"
        navLinks={[
          { label: "Why L1", href: "#why-l1" },
          { label: "Case Studies", href: "#case-studies" },
          { label: "How We Work", href: "#how-we-work" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
      />
      <HeroSection />
      <WhySection />
      <CaseStudiesTeaser />
      <StatsBar />
      <ServicesSection />
      <HowWeWorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
