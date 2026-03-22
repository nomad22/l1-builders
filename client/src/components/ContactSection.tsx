/**
 * L1 Builders — Contact Section
 * Design: Dark charcoal background split layout. Left side: CTA copy + contact info.
 * Right side: contact form with steel-blue submit button.
 */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

function useInView(threshold = 0.15) {
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

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    projectType: "",
    message: "",
    referral: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      // Fire GA4 conversion event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: form.projectType || "general",
        });
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#151A20] py-24 lg:py-32" ref={ref}>
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
              — 07 / GET IN TOUCH
            </span>
          </div>
          <h2
            className={`text-white transition-all duration-600 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Start Your
            <br />
            <span style={{ color: "#4A7FA5" }}>Free Estimate.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div
            className={`transition-all duration-600 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p
              className="text-white/65 mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, fontWeight: 300 }}
            >
              Tell us about your property and investment goals. We'll provide a
              complimentary consultation and preliminary scope assessment — no obligation.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, label: "Phone", value: "(917) 593-9038" },
                { icon: Mail, label: "Email", value: "ben@upandup.co" },
                { icon: MapPin, label: "Service Area", value: "NYC & Long Island" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-[#4A7FA5]/15 border border-[#4A7FA5]/25 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#4A7FA5]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="text-white/35"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-white/80"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 400 }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="border border-white/10 p-6">
              <p
                className="text-[#4A7FA5] mb-4"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                What to Expect
              </p>
              {[
                "Free consultation within 24 hours",
                "On-site assessment at no charge",
                "Detailed scope & budget proposal",
                "ROI analysis for your project",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3 last:mb-0">
                  <CheckCircle2 size={13} className="text-[#A67C52] flex-shrink-0" strokeWidth={2} />
                  <span
                    className="text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 300 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-600 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {submitted ? (
              <div className="bg-[#1C2128] border border-[#4A7FA5]/30 p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle2 size={40} className="text-[#4A7FA5] mb-5" strokeWidth={1.5} />
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 600 }}
                >
                  Message Received
                </h3>
                <p
                  className="text-white/55"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, fontWeight: 300 }}
                >
                  Thank you for reaching out. A member of our team will contact you
                  within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#1C2128] p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-white/50 mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#151A20] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-white/50 mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#151A20] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-white/50 mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-[#151A20] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                      placeholder="(917) 593-9038"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-white/50 mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                    >
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={form.propertyType}
                      onChange={handleChange}
                      className="w-full bg-[#151A20] border border-white/10 text-white/80 px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                    >
                      <option value="">Select type</option>
                      <option value="sfr">Single Family</option>
                      <option value="2-4">2–4 Family</option>
                      <option value="multifamily">Multifamily (5–50 units)</option>
                      <option value="commercial">Commercial</option>
                      <option value="condo">Condo / Co-op</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-white/50 mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  >
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#151A20] border border-white/10 text-white/80 px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                  >
                    <option value="">Select project type</option>
                    <option value="value-add">Value-Add Renovation</option>
                    <option value="systems">Building Systems Upgrade</option>
                    <option value="capital">Capital Improvements</option>
                    <option value="turnover">Turnover / Repositioning</option>
                    <option value="gut">Gut Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-white/50 mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  >
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#151A20] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                    placeholder="Tell us about your property, investment goals, and project scope..."
                  />
                </div>

                <div>
                  <label
                    className="block text-white/50 mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  >
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    className="w-full bg-[#151A20] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                    placeholder="Agent name, Google, referral, etc."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{error}</p>
                )}

                <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50">
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <ArrowRight size={15} className="relative z-10" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
