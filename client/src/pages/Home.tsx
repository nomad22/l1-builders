/**
 * L1 Builders — Home Page
 * Design: Technical Modernism — charcoal/white alternating sections,
 * steel-blue (#4A7FA5) accent, bronze (#A67C52) secondary accent.
 * Fonts: Barlow Condensed (headlines), Inter (body), Space Mono (labels/eyebrows).
 *
 * Section order:
 * 01. Hero — full-bleed NYC building photo, dark overlay, white text
 * 02. Why L1 Builders — white bg, 3-col card grid
 * 03. Case Studies — white bg, 2x2 teaser cards linking to /case-studies
 * 04. Stats Bar — charcoal full-width, animated counters
 * 05. Services — light gray bg, 2x2 card grid with images
 * 06. How We Maximize ROI — dark charcoal, 2-col process + principles
 * 07. About — white bg, credentials + who we serve
 * 08. Contact — dark bg, split form layout
 * 09. Footer — deep charcoal
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
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
