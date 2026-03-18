/**
 * L1 Builders — Shared Services Data
 * Used by the header dropdown and all 11 individual service pages.
 */

export interface Service {
  slug: string;
  label: string;
  shortDesc: string;
  icon: string;
  heroTagline: string;
  heroDesc: string;
  highlights: { title: string; body: string }[];
  scope: string[];
  whyL1: string;
  accentColor: "blue" | "gold";
}

export const services: Service[] = [
  {
    slug: "cleaning",
    label: "Cleaning",
    shortDesc: "Post-construction & deep cleaning for move-in ready results.",
    icon: "✦",
    heroTagline: "Move-In Ready,\nEvery Time.",
    heroDesc:
      "From post-construction debris removal to deep cleaning before tenant turnover, we leave every property spotless and ready for occupancy — on schedule.",
    highlights: [
      { title: "Post-Construction Cleanup", body: "Complete removal of construction dust, debris, adhesive residue, and protective films after every renovation project." },
      { title: "Turnover Cleaning", body: "Full unit cleaning between tenants — appliances, fixtures, floors, windows, and all surfaces — to maximize first impressions and minimize vacancy." },
      { title: "Deep Cleaning Packages", body: "Comprehensive deep cleans for occupied or vacant properties, including HVAC vents, grout lines, and hard-to-reach areas." },
    ],
    scope: [
      "Post-construction debris removal",
      "Interior deep cleaning (all surfaces)",
      "Appliance cleaning (interior & exterior)",
      "Window and sill cleaning",
      "Grout and tile scrubbing",
      "HVAC vent and register cleaning",
      "Trash and material haul-out",
      "Final walkthrough inspection",
    ],
    whyL1:
      "We coordinate cleaning as part of the overall project schedule — not as an afterthought. Our crews work alongside construction trades to ensure every project is delivered clean, inspected, and ready for occupancy without delays.",
    accentColor: "blue",
  },
  {
    slug: "demolition",
    label: "Demolition",
    shortDesc: "Selective & full demolition with clean haul-out and site prep.",
    icon: "✦",
    heroTagline: "Clear the Way\nfor What's Next.",
    heroDesc:
      "Precise selective demolition or full gut-outs — executed safely, efficiently, and with complete debris removal so your renovation can start on day one.",
    highlights: [
      { title: "Selective Demolition", body: "Surgical removal of specific elements — walls, ceilings, flooring, fixtures — while protecting adjacent structures and finishes." },
      { title: "Full Gut Renovations", body: "Complete interior strip-outs down to the studs, including removal of all finishes, fixtures, plumbing rough-in, and electrical." },
      { title: "Debris Haul-Out", body: "Full removal and disposal of all demolition materials, with recycling where possible. Site left clean and ready for the next trade." },
    ],
    scope: [
      "Selective wall and ceiling removal",
      "Full interior gut-outs",
      "Kitchen and bathroom strip-outs",
      "Flooring removal (all types)",
      "Window and door removal",
      "Fixture and appliance disconnection",
      "Debris removal and haul-out",
      "Dumpster coordination",
    ],
    whyL1:
      "Demolition sets the pace for the entire project. Our crews are experienced in NYC and Long Island building stock — including older buildings with lead paint, asbestos, and complex structural configurations — and we handle all required notifications and safe work practices.",
    accentColor: "blue",
  },
  {
    slug: "painting-drywall",
    label: "Painting & Drywall",
    shortDesc: "Flawless finishes from new drywall installation to final coat.",
    icon: "✦",
    heroTagline: "The Finish That\nDefines the Space.",
    heroDesc:
      "From new drywall installation and skim coating to premium paint applications — we deliver the smooth, durable finishes that make a renovation look complete.",
    highlights: [
      { title: "Drywall Installation & Repair", body: "New drywall hanging, taping, mudding, and sanding — plus seamless patching and repair of existing walls and ceilings." },
      { title: "Skim Coating", body: "Full-room skim coating over existing walls for a perfectly smooth, Level 5 finish — the standard for high-end residential and commercial spaces." },
      { title: "Interior & Exterior Painting", body: "Premium paint applications using professional-grade materials. Proper surface prep, priming, and multiple coats for a lasting, beautiful result." },
    ],
    scope: [
      "Drywall hanging and finishing",
      "Taping, mudding, and sanding",
      "Level 5 skim coat finishing",
      "Ceiling texture and repair",
      "Interior painting (walls, ceilings, trim)",
      "Exterior painting and staining",
      "Primer application",
      "Color consultation and coordination",
    ],
    whyL1:
      "Paint and drywall are the most visible elements of any renovation. We don't cut corners on prep — because the quality of the finish is entirely determined by the quality of the surface beneath it. Our crews are trained to deliver Level 5 finishes on every project.",
    accentColor: "gold",
  },
  {
    slug: "electrical",
    label: "Electrical",
    shortDesc: "Licensed electrical work from panel upgrades to full rewires.",
    icon: "✦",
    heroTagline: "Power Your\nProperty Right.",
    heroDesc:
      "Licensed electrical contractors handling everything from panel upgrades and full rewires to EV charger installation and smart home integration — safely, to code.",
    highlights: [
      { title: "Panel Upgrades & Service Increases", body: "200A and 400A service upgrades, panel replacements, and subpanel installations to support modern electrical loads." },
      { title: "Full Rewires & Rough-In", body: "Complete electrical rough-in for new construction and gut renovations, including new circuits, outlets, switches, and lighting." },
      { title: "Specialty Installations", body: "EV charger installation, smart home wiring, recessed lighting, under-cabinet lighting, and dedicated circuits for appliances." },
    ],
    scope: [
      "Panel upgrades (100A, 200A, 400A)",
      "Full apartment and house rewires",
      "New circuit installation",
      "Outlet and switch installation",
      "Recessed and fixture lighting",
      "EV charger installation",
      "Smart home wiring",
      "DOB permit filing and inspection",
    ],
    whyL1:
      "All electrical work is performed by our licensed master electricians and filed with the NYC DOB or local municipality where required. We coordinate electrical rough-in with all other trades to keep the project on schedule and avoid costly rework.",
    accentColor: "blue",
  },
  {
    slug: "hvac",
    label: "HVAC",
    shortDesc: "Heating, cooling & ventilation systems for comfort and efficiency.",
    icon: "✦",
    heroTagline: "Climate Control\nDone Right.",
    heroDesc:
      "Full HVAC installation, replacement, and maintenance — from mini-split systems and central air to boiler replacements and ventilation upgrades — for residential and multifamily properties.",
    highlights: [
      { title: "Mini-Split & Central Air", body: "Ductless mini-split installation and central HVAC system replacement for maximum comfort and energy efficiency." },
      { title: "Boiler & Heating Systems", body: "Boiler replacement, steam and hot water heating system upgrades, and hydronic radiant floor heating installation." },
      { title: "Ventilation & Air Quality", body: "Bathroom and kitchen exhaust fan installation, ERV/HRV systems, and ductwork cleaning and replacement." },
    ],
    scope: [
      "Mini-split system installation",
      "Central HVAC replacement",
      "Boiler replacement and repair",
      "Radiant floor heating",
      "Ductwork installation and replacement",
      "Exhaust fan installation",
      "Thermostat and smart controls",
      "Annual maintenance contracts",
    ],
    whyL1:
      "HVAC is one of the highest-impact systems for tenant comfort and property value. We specify and install systems that are appropriately sized for the space, energy-efficient, and easy to maintain — with a focus on long-term reliability over short-term cost savings.",
    accentColor: "blue",
  },
  {
    slug: "plumbing",
    label: "Plumbing",
    shortDesc: "Licensed plumbing from rough-in to fixture installation.",
    icon: "✦",
    heroTagline: "Plumbing That\nPerforms.",
    heroDesc:
      "Licensed plumbers handling full rough-in, drain and water line replacement, fixture installation, and emergency repairs — for single-family homes and multifamily buildings.",
    highlights: [
      { title: "Rough-In & Repipe", body: "Complete plumbing rough-in for renovations, full repiping in copper or PEX, and drain line replacement." },
      { title: "Fixture Installation", body: "Toilets, sinks, tubs, showers, faucets, and all plumbing fixtures — installed correctly the first time." },
      { title: "Water Heater & Boiler", body: "Tankless and traditional water heater installation and replacement, plus boiler connections and hydronic system work." },
    ],
    scope: [
      "Full plumbing rough-in",
      "Repipe (copper and PEX)",
      "Drain line replacement",
      "Fixture installation (all types)",
      "Water heater replacement",
      "Bathroom and kitchen plumbing",
      "Leak detection and repair",
      "DOB permit filing",
    ],
    whyL1:
      "Plumbing mistakes are expensive. Our licensed plumbers work from detailed plans, coordinate with tile and drywall trades, and pressure-test all work before closing up walls. We file all required permits and handle DOB inspections.",
    accentColor: "blue",
  },
  {
    slug: "flooring",
    label: "Flooring",
    shortDesc: "Hardwood, LVP, tile, and carpet installation and refinishing.",
    icon: "✦",
    heroTagline: "Floors That\nSet the Tone.",
    heroDesc:
      "From wide-plank hardwood and luxury vinyl plank to porcelain tile and carpet — we install and refinish flooring that elevates every space and stands up to real use.",
    highlights: [
      { title: "Hardwood Installation & Refinishing", body: "Solid and engineered hardwood installation, plus sanding and refinishing of existing floors to restore their original beauty." },
      { title: "Luxury Vinyl Plank (LVP)", body: "Waterproof LVP installation — the preferred choice for rental properties and high-traffic areas. Durable, attractive, and cost-effective." },
      { title: "Tile & Stone Flooring", body: "Porcelain, ceramic, and natural stone tile installation for kitchens, bathrooms, entryways, and outdoor spaces." },
    ],
    scope: [
      "Hardwood installation (solid & engineered)",
      "Hardwood sanding and refinishing",
      "LVP and laminate installation",
      "Porcelain and ceramic tile",
      "Natural stone installation",
      "Subfloor repair and leveling",
      "Carpet installation",
      "Transition strips and moldings",
    ],
    whyL1:
      "Flooring is one of the first things tenants and buyers notice. We help clients select the right product for their budget, use case, and aesthetic — and we install it properly, starting with a level subfloor and ending with clean, tight transitions.",
    accentColor: "gold",
  },
  {
    slug: "tile-bathroom-renovations",
    label: "Tile & Bathroom Renovations",
    shortDesc: "Full bathroom gut renovations and custom tile work.",
    icon: "✦",
    heroTagline: "Bathrooms Built\nto Impress.",
    heroDesc:
      "Complete bathroom renovations from gut to finish — custom tile work, waterproofing, fixtures, and vanities — for everything from rental unit upgrades to spa-quality master baths.",
    highlights: [
      { title: "Full Bathroom Gut Renovations", body: "Complete bathroom strip-outs and rebuilds — new plumbing rough-in, waterproofing, tile, fixtures, vanity, and accessories." },
      { title: "Custom Tile Work", body: "Large-format porcelain, subway tile, mosaic, and natural stone — installed with precision, including niche and accent details." },
      { title: "Waterproofing & Wet Areas", body: "Proper shower pan and wall waterproofing using industry-standard systems — the critical step most contractors skip." },
    ],
    scope: [
      "Full bathroom gut and rebuild",
      "Shower and tub surround tile",
      "Floor tile installation",
      "Waterproofing (shower pan & walls)",
      "Vanity and mirror installation",
      "Toilet and fixture installation",
      "Niche and accent tile details",
      "Exhaust fan installation",
    ],
    whyL1:
      "Bathrooms are the most failure-prone room in any renovation when done incorrectly. We use proper waterproofing membranes, back-butter every tile, and inspect every wet area before closing up — because a bathroom leak discovered after the fact costs far more than doing it right the first time.",
    accentColor: "gold",
  },
  {
    slug: "kitchen-renovations",
    label: "Kitchen Renovations",
    shortDesc: "Custom kitchen renovations from layout to final hardware.",
    icon: "✦",
    heroTagline: "Kitchens That\nAdd Real Value.",
    heroDesc:
      "Full kitchen renovations — from layout reconfiguration and custom cabinetry to countertops, appliances, and backsplash — designed to maximize both function and return on investment.",
    highlights: [
      { title: "Custom Cabinetry & Layout", body: "Semi-custom and custom cabinet installation, layout optimization, and island design — for both rental-grade and high-end residential kitchens." },
      { title: "Countertops & Backsplash", body: "Quartz, granite, marble, and butcher block countertop installation, plus tile and stone backsplash work." },
      { title: "Appliance & Fixture Integration", body: "Appliance installation, under-cabinet lighting, plumbing connections, and all finish work to complete the kitchen." },
    ],
    scope: [
      "Cabinet installation (all grades)",
      "Countertop fabrication and installation",
      "Backsplash tile installation",
      "Appliance installation",
      "Sink and faucet installation",
      "Under-cabinet lighting",
      "Island construction",
      "Pantry and storage solutions",
    ],
    whyL1:
      "Kitchens drive more value per dollar than almost any other renovation. We've completed hundreds of kitchens across the full spectrum — from $15,000 rental upgrades to $150,000 custom residential kitchens — and we know how to spec the right product for the right project.",
    accentColor: "gold",
  },
  {
    slug: "windows-doors",
    label: "Windows & Doors",
    shortDesc: "Window and door replacement for efficiency, security & curb appeal.",
    icon: "✦",
    heroTagline: "Every Opening,\nPerfectly Fitted.",
    heroDesc:
      "Window and door replacement that improves energy efficiency, security, and curb appeal — with proper installation, flashing, and finishing that protects the building envelope.",
    highlights: [
      { title: "Window Replacement", body: "Double and triple-pane window replacement in all styles — double-hung, casement, picture, and bay — with proper flashing and interior trim." },
      { title: "Exterior Door Replacement", body: "Entry door, patio door, and French door replacement — including new frames, weatherstripping, hardware, and locksets." },
      { title: "Interior Doors & Hardware", body: "Interior door installation, prehung door replacement, barn doors, pocket doors, and all associated hardware and trim." },
    ],
    scope: [
      "Window replacement (all types)",
      "Exterior door replacement",
      "Sliding and French door installation",
      "Interior door installation",
      "Pocket and barn door installation",
      "Window and door trim and casing",
      "Weatherstripping and sealing",
      "Hardware and lockset installation",
    ],
    whyL1:
      "Improper window and door installation is one of the leading causes of water infiltration and energy loss in NYC-area buildings. We flash every opening correctly, use the right sealants, and finish the interior trim to a standard that holds up for decades.",
    accentColor: "blue",
  },
  {
    slug: "roofing",
    label: "Roofing",
    shortDesc: "Flat and pitched roof installation, repair & waterproofing.",
    icon: "✦",
    heroTagline: "A Roof That\nProtects Your Investment.",
    heroDesc:
      "Flat roof replacement, pitched roof installation, and targeted repairs — using quality materials and proper installation techniques to protect your building for decades.",
    highlights: [
      { title: "Flat Roof Replacement", body: "TPO, EPDM, and modified bitumen flat roof installation for NYC rowhouses, commercial buildings, and multifamily properties." },
      { title: "Pitched Roof Installation", body: "Asphalt shingle, architectural shingle, and metal roofing installation for Long Island and suburban properties." },
      { title: "Roof Repair & Waterproofing", body: "Targeted leak repairs, flashing replacement, parapet waterproofing, and roof coating to extend the life of existing roofs." },
    ],
    scope: [
      "Flat roof replacement (TPO, EPDM, mod-bit)",
      "Pitched roof installation",
      "Architectural shingle installation",
      "Metal roofing",
      "Flashing replacement",
      "Parapet and coping waterproofing",
      "Skylight installation",
      "Gutter installation and replacement",
    ],
    whyL1:
      "A failed roof is the most expensive emergency a property owner can face. We use quality materials, proper underlayment, and experienced installers — and we back our work with a written warranty. Every roofing project includes a thorough inspection of the existing structure before work begins.",
    accentColor: "blue",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
