/**
 * L1 Builders — Case Studies Data
 * Single source of truth for all case study content used in both
 * the homepage teaser section and the full /case-studies page.
 */

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  location: string;
  propertyType: string;
  units: string;
  projectDuration: string;
  completedYear: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  interiorImage?: string;
  teaserDescription: string;
  challenge: string;
  approach: string;
  outcome: string;
  scopeItems: string[];
  metrics: { label: string; value: string; sub?: string }[];
  tags: string[];
}

const BRONX_BEFORE =
  "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/BKiYuWaFuiyVJ9sB2GZWQy-img-1_1771878835000_na1fn_Y3MtYnJvbngtYmVmb3Jl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0JLaVl1V2FGdWl5Vko5c0IyR1pXUXktaW1nLTFfMTc3MTg3ODgzNTAwMF9uYTFmbl9ZM010WW5KdmJuZ3RZbVZtYjNKbC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vjpGIPJn814zDWEa9aFZ4VBizTqyEONHivEcx3Lkzbj6hlrVjTfXfYXZRx6amEIYgnwah4WzD~wRXl-4RYKpl1eg~eviVQceALhMl2zQYCFZoeAmyI--7OpPRsRTkgwti33DMSHFG55-BY5A5rQobQ9yumkJ7ty1D8onJD1qhekO8v-SMVNuadHUH56PhJDypWhkri8Sqhq8WZ9lLBLS1XwthkBwSKhMmJ4M0k77Ly2OhhXQVWeU36qWa4SlNTguUDBSc25oXJW-XFopbo114KA0E8yhA6Q8TRuyUCh2uReqQ2yMbmUwzgBaTe7li2I2CX35n7ffP6wtJ9Ixwq4fuw__";

const BRONX_AFTER =
  "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/BKiYuWaFuiyVJ9sB2GZWQy-img-2_1771878828000_na1fn_Y3MtYnJvbngtYWZ0ZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0JLaVl1V2FGdWl5Vko5c0IyR1pXUXktaW1nLTJfMTc3MTg3ODgyODAwMF9uYTFmbl9ZM010WW5KdmJuZ3RZV1owWlhJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OhfFqOL9kvvCcKR6uP3MyIHa6Aot6LiEY4MnZhPHKw6GFgzicp5uAHFSrq3gNMDODle~qlEuLaGgTFEpqhDG40h5MoDeXpQYFPNk0M6bYl7gILYFms~2mO9PCuB6bFdQUXcj1HHUu2vk4tOzzHG3e-9WgU7KL0muHQ9SmdcDdeh4UslF1bUIS9S-ZqvmH81naSIKY79VSj-C7yfdkcQe3R7jH65tC79~ahbAmWmlvtVJ7SxPI9yldJrmaicrbtdaNp9c6JEOZNeK0Y2wwZzMcpPdl-D5k8sHu9nsS15FRf1H9lWLerPqpQBfp6UxcFXZMZ280ZL~r1fyAcDYhJqUuA__";

const QUEENS_INTERIOR =
  "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/BKiYuWaFuiyVJ9sB2GZWQy-img-3_1771878835000_na1fn_Y3MtcXVlZW5zLWludGVyaW9y.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0JLaVl1V2FGdWl5Vko5c0IyR1pXUXktaW1nLTNfMTc3MTg3ODgzNTAwMF9uYTFmbl9ZM010Y1hWbFpXNXpMV2x1ZEdWeWFXOXkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sqX1bxE1UmRXt0neqTq4H12qp-pnikaL1EtMbcYId0blfkqyOkLsmxgq7UmWD4JjuOEzJeW3r57wfQginfy-V4wmguzCdWHx8An-59mLz7j3GU9R5uZa1OCWPV0mbyn1B8iG-zjF6lcPHjk9UmJimwmPmdfJSeo4A99aejYRm8GlrRFiRBY7luRgfxUP6F1x33YoQ7aP-u4wSpVb~uOhQ5W6cMjD3CaYhcgswbZHu8RPInsGJYelOVRQdWEJsJIqb549xsJhJSmLJJXT3hOiBqO6V6YlTxZOoErJFYWeKZn1bKoxQdlMAJZvdYGpupWeZnk6TRUcOGxsZ6s0lLw__";

const BROOKLYN_EXTERIOR =
  "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/BKiYuWaFuiyVJ9sB2GZWQy-img-4_1771878837000_na1fn_Y3MtYnJvb2tseW4tbXVsdGlmYW1pbHk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0JLaVl1V2FGdWl5Vko5c0IyR1pXUXktaW1nLTRfMTc3MTg3ODgzNzAwMF9uYTFmbl9ZM010WW5KdmIydHNlVzR0YlhWc2RHbG1ZVzFwYkhrLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=j6IcgBn-upwlISm9PrXiNLsxuNMTE4-YYDSri3yVWGyivNTauQnERBzB-SFcVT8L6IfvZCY5NZR--CC9ATYu-zwoYT0eCuOvwZt07~nV6AEGUTnXt991Mp3nlRxPin8aIV7AQChVtVE80jsBMV6~SlbfKMj89DhbvrHThBWy0z4shfGbuVe77R9avJcs4uoEYuwDjkXgfSIdylhNV1nklREGlSa34mUKrPk8Hjhrh9osb8MkxgyeJOWG-7DFtkz-DEH4R22SQm7T0MOIfYgxMP8SpsKzGCfXbUw92I1MJPU6tr3sFb7FdbCauNljCtHqdgrycCrKEbjjiGJ8uGAcew__";

// Also reuse the original site images
const CONSTRUCTION_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/EEIHq2rAnldOJ8OmTdEbVD-img-3_1771874160000_na1fn_bDEtY29uc3RydWN0aW9uLXByb2Nlc3M.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0VFSUhxMnJBbmxkT0o4T21UZEViVkQtaW1nLTNfMTc3MTg3NDE2MDAwMF9uYTFmbl9iREV0WTI5dWMzUnlkV04wYVc5dUxYQnliMk5sYzNNLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V5ltsOnx2p8RzyMIufdtL6d4oDA7N0jwppNzUoFIMUKlzKaNTQzcAMFeh6tN-fcHRiqQ02AfjjuUwlbLO~9hUQnUxK1QBZH78g~SfJqClTJUWN7vb4QkJt5-9Zd6z1SDRxkfHw4F0d~~M9WtuM0Cjzieifo0PcnK1XOfLBYjCYy5N6EUW1irvxveialBmOhaCK-dTcTJMPF9iYsm1OY~aPMFcvI8kICEE0R0wggHKSCBRmoiOilU3~Pdn1k~yN71~E48EdGlk6qTiMtMBERNF9GyL3RebQDVagutkMVn6xcmFGhBRT5ZPF3nZmKPnJTnsU3QmYYiSkWijSSFofdSrA__";

const KITCHEN_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/OdumqcUzZmJJLmO8aCf2hn/sandbox/EEIHq2rAnldOJ8OmTdEbVD-img-2_1771874168000_na1fn_bDEtaW50ZXJpb3Ita2l0Y2hlbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2R1bXFjVXpabUpKTG1POGFDZjJobi9zYW5kYm94L0VFSUhxMnJBbmxkT0o4T21UZEViVkQtaW1nLTJfMTc3MTg3NDE2ODAwMF9uYTFmbl9iREV0YVc1MFpYSnBiM0l0YTJsMFkyaGxiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jUSMVqx1MGkUvVKWkQKH9ZChQ26qkeF-CVdg-Re3ibUJeTf9xQARVejtNNAhpDVxXezOiU8IMK6wwaESaUlVGIO4uJ0SyrxExR1G9tr1r8mLy3rEp2KZ1JUvLi6vDWaKKt7pBIgpvGhn9OQqq~Tc1dJ1JnoDK0EYJfC1g5J9xTqg-oE0q-1dHqvSYGvSnxiuC2tG2saQqjEo-KrYsE~t4SstAdsgY7cW1e1xVytXPOSxsaMsc1rM93fWy12IP9sCoBCgN5ggfQpOo4UCFK6M~TktWp~v3hRgy2vfCrS75vYtvBW7bGV-nTR-lcQyr2FfDS8JMk2Bc7JpUzeym6qLEQ__";

export const caseStudies: CaseStudy[] = [
  {
    id: "bronx-6-unit-repositioning",
    tag: "Value-Add Repositioning",
    title: "Bronx 6-Unit Full Repositioning",
    location: "South Bronx, NY",
    propertyType: "6-Unit Multifamily",
    units: "6",
    projectDuration: "5 months",
    completedYear: "2023",
    heroImage: BRONX_AFTER,
    beforeImage: BRONX_BEFORE,
    afterImage: BRONX_AFTER,
    interiorImage: QUEENS_INTERIOR,
    teaserDescription:
      "A distressed 6-unit building acquired off-market. Full gut renovation of all units, new building systems, and facade restoration delivered a 68% rent increase and a refinance at 2.1× the acquisition price.",
    challenge:
      "The investor acquired this 6-unit Bronx walk-up at a significant discount due to deferred maintenance, outdated electrical and plumbing systems, and below-market rents averaging $850/month. Three units were vacant, two had month-to-month tenants, and the building had multiple open DOB violations. The owner needed a construction partner who could manage the regulatory complexity, execute the renovation while navigating occupied units, and deliver a scope calibrated to the neighborhood's rental ceiling — not over-improve beyond what the market would support.",
    approach:
      "L1 Builders began with a comprehensive market analysis to establish the optimal finish level for the submarket. We identified that the neighborhood's rental ceiling for renovated 1BR units was $1,650–$1,750/month, which informed every finish selection decision. We sequenced the work to renovate vacant units first, generating rental income to offset carrying costs while occupied units were transitioned. Our DOB team resolved all open violations and pulled permits for the full electrical and plumbing scope. We leveraged our preferred vendor relationships to source kitchen cabinets, tile, and fixtures at contractor pricing — reducing material costs by approximately 22% versus retail.",
    outcome:
      "The project was completed in 5 months, on budget. All six units were fully renovated and leased within 30 days of completion. Average rents increased from $850 to $1,700/month — a 100% increase per unit. The stabilized NOI supported a cash-out refinance at $1.42M, representing a 2.1× multiple on the $680K acquisition price. The investor retained the asset with significant equity extraction and a strong cash-on-cash return.",
    scopeItems: [
      "Full gut renovation of all 6 units",
      "New 200A electrical service + unit rewiring",
      "Full plumbing replacement (supply & drain)",
      "New kitchens with shaker cabinets & quartz countertops",
      "Bathroom renovations with tile surrounds",
      "White oak LVP flooring throughout",
      "Facade repointing & window replacement",
      "DOB violation resolution & permit management",
      "Common area renovation (lobby & hallways)",
      "New intercom & security system",
    ],
    metrics: [
      { label: "Rent Increase", value: "100%", sub: "$850 → $1,700/mo avg" },
      { label: "Project Budget", value: "$310K", sub: "All 6 units + systems" },
      { label: "Refinance Value", value: "$1.42M", sub: "vs $680K acquisition" },
      { label: "Equity Multiple", value: "2.1×", sub: "on acquisition price" },
    ],
    tags: ["Value-Add", "Multifamily", "Bronx", "BRRR", "DOB Permits"],
  },
  {
    id: "queens-brrr-package",
    tag: "BRRR Renovation",
    title: "Queens 3-Family BRRR Package",
    location: "Jackson Heights, Queens, NY",
    propertyType: "3-Family Townhouse",
    units: "3",
    projectDuration: "3 months",
    completedYear: "2023",
    heroImage: QUEENS_INTERIOR,
    beforeImage: CONSTRUCTION_IMG,
    afterImage: QUEENS_INTERIOR,
    teaserDescription:
      "An out-of-state investor's first NYC acquisition. L1 Builders delivered a full 3-unit renovation in 90 days — on time, on budget — enabling a refinance that returned 94% of the investor's capital.",
    challenge:
      "An out-of-state investor purchased a 3-family townhouse in Jackson Heights as their first NYC acquisition. The property had original 1960s kitchens and bathrooms, outdated electrical panels, and deferred maintenance throughout. The investor's BRRR strategy required a fast, budget-disciplined renovation to maximize the after-repair value (ARV) for a refinance. Being remote, they needed a construction partner who could operate with minimal oversight and provide transparent, regular reporting.",
    approach:
      "L1 Builders provided a detailed pre-construction scope and budget within one week of the initial site visit, giving the investor the clarity needed to finalize their financing. We assigned a dedicated project manager who provided weekly photo updates and budget tracking. Our team coordinated directly with the investor's lender to ensure the draw schedule aligned with construction milestones. Finish selections were made by our team based on Jackson Heights rental comps — we recommended mid-grade finishes that would achieve market rents without overcapitalizing. The project was sequenced to complete all three units simultaneously, minimizing the total renovation timeline.",
    outcome:
      "All three units were completed in 91 days and leased within three weeks at rents ranging from $2,100 to $2,400/month. The stabilized property appraised at $1.28M against a total all-in cost (acquisition + renovation) of $980K. The investor's cash-out refinance at 75% LTV returned $960K — recovering 94% of their invested capital while retaining a fully renovated, income-producing asset.",
    scopeItems: [
      "Full kitchen renovation in all 3 units",
      "Bathroom renovation in all 3 units",
      "New LVP flooring throughout",
      "200A electrical panel upgrades",
      "Fresh paint throughout all units",
      "New interior doors & hardware",
      "Exterior painting & landscaping",
      "New appliance packages (all units)",
      "Basement waterproofing",
      "New roof (flat section)",
    ],
    metrics: [
      { label: "Timeline", value: "91 days", sub: "All 3 units complete" },
      { label: "ARV", value: "$1.28M", sub: "Post-renovation appraisal" },
      { label: "Capital Returned", value: "94%", sub: "Via cash-out refinance" },
      { label: "Avg Monthly Rent", value: "$2,250", sub: "Per unit, all 3 leased" },
    ],
    tags: ["BRRR", "Out-of-State Investor", "Queens", "3-Family", "Fast Turnaround"],
  },
  {
    id: "brooklyn-brownstone-repositioning",
    tag: "Capital Improvement",
    title: "Brooklyn Brownstone — 12-Unit Repositioning",
    location: "Crown Heights, Brooklyn, NY",
    propertyType: "12-Unit Brownstone",
    units: "12",
    projectDuration: "8 months",
    completedYear: "2022",
    heroImage: BROOKLYN_EXTERIOR,
    beforeImage: CONSTRUCTION_IMG,
    afterImage: BROOKLYN_EXTERIOR,
    interiorImage: KITCHEN_IMG,
    teaserDescription:
      "A 12-unit Crown Heights brownstone repositioned from Class C to Class B+. Full building systems overhaul, common area renovation, and phased unit upgrades increased NOI by 74% and positioned the asset for a premium sale.",
    challenge:
      "A small developer acquired a 12-unit Crown Heights brownstone with the intention of repositioning it from Class C to Class B+ and executing a sale within 24 months. The building had aging boiler and plumbing systems, a deteriorating facade, outdated common areas, and a mix of long-term tenants at significantly below-market rents. The challenge was executing a comprehensive capital improvement plan while managing occupied units, maintaining heat and hot water throughout, and staying within a budget that preserved the projected return on investment.",
    approach:
      "L1 Builders developed a phased renovation plan that prioritized building systems first — replacing the boiler, upgrading the electrical service to 400A, and relining the main drain stack — before moving to cosmetic improvements. This sequencing ensured tenant comfort was maintained throughout the project. We coordinated with Con Edison for the electrical service upgrade and managed all DOB filings. The facade restoration was executed in a single mobilization to minimize scaffolding costs. Unit renovations were phased as tenants vacated naturally, with L1 Builders providing turnover renovation services within 2 weeks of each vacancy to minimize lost rent.",
    outcome:
      "The full repositioning was completed in 8 months. Building systems were fully modernized, the facade was restored, and 7 of 12 units were renovated. Average rents on renovated units increased from $1,200 to $2,100/month. The stabilized NOI increased by 74%, and the property was sold 18 months after acquisition at a price that delivered a 31% IRR to the developer.",
    scopeItems: [
      "New high-efficiency boiler & heating system",
      "400A electrical service upgrade",
      "Main drain stack relining",
      "Full facade restoration & repointing",
      "Roof replacement (full building)",
      "Lobby & common hallway renovation",
      "Mailbox & intercom system replacement",
      "7-unit interior renovations (phased)",
      "Con Edison service coordination",
      "DOB permit management & violation resolution",
      "Elevator modernization",
      "Rear yard landscaping",
    ],
    metrics: [
      { label: "NOI Increase", value: "74%", sub: "Stabilized vs acquisition" },
      { label: "Rent Increase", value: "75%", sub: "$1,200 → $2,100/mo avg" },
      { label: "Developer IRR", value: "31%", sub: "18-month hold" },
      { label: "Units Renovated", value: "7 of 12", sub: "Phased as vacated" },
    ],
    tags: ["Capital Improvement", "Brooklyn", "Brownstone", "12-Unit", "Disposition"],
  },
  {
    id: "long-island-sfr-flip",
    tag: "Value-Add Renovation",
    title: "Long Island SFR — Investor Flip",
    location: "Hempstead, Long Island, NY",
    propertyType: "Single Family Residence",
    units: "1",
    projectDuration: "6 weeks",
    completedYear: "2024",
    heroImage: BRONX_AFTER,
    beforeImage: BRONX_BEFORE,
    afterImage: BRONX_AFTER,
    interiorImage: QUEENS_INTERIOR,
    teaserDescription:
      "A 6-week renovation on a distressed Long Island SFR. Strategic finish selection and value engineering delivered a $94K gross profit on a $58K renovation budget — a 162% return on renovation spend.",
    challenge:
      "A local investor purchased a distressed single-family home in Hempstead at a significant discount. The property needed a full cosmetic renovation — kitchen, bathrooms, flooring, paint, and exterior — to be competitive with comparable sales in the neighborhood. The investor's flip model required a fast timeline (under 8 weeks) and a renovation budget that would maximize the spread between all-in cost and sale price. Over-improving was a real risk given the neighborhood's price ceiling.",
    approach:
      "L1 Builders conducted a detailed comparable sales analysis before finalizing the scope. We identified that the neighborhood's sale ceiling for renovated homes was approximately $520K–$540K, which informed every finish decision. We recommended against a full kitchen gut renovation (which would have added $25K to the budget) in favor of a cabinet refacing and countertop replacement that achieved the same visual impact at one-third the cost. Our preferred vendor relationships allowed us to source materials at contractor pricing. We mobilized a dedicated crew and completed the full renovation in 41 days.",
    outcome:
      "The property was listed 3 days after renovation completion and received multiple offers within the first week. It sold for $528,000 — $8K above list price. Against a total all-in cost of $434K (acquisition + renovation + carrying costs), the investor realized a gross profit of $94K and a net profit of approximately $76K after closing costs. The 162% return on renovation spend validated the strategic finish selection approach.",
    scopeItems: [
      "Kitchen cabinet refacing & new countertops",
      "Full bathroom renovation (2 baths)",
      "New LVP flooring throughout",
      "Full interior paint",
      "New light fixtures & hardware throughout",
      "Exterior paint & shutters",
      "Landscaping & curb appeal",
      "New front door & garage door",
      "Basement cleanup & waterproofing",
      "HVAC service & tune-up",
    ],
    metrics: [
      { label: "Timeline", value: "41 days", sub: "Full renovation" },
      { label: "Sale Price", value: "$528K", sub: "$8K over asking" },
      { label: "Renovation Budget", value: "$58K", sub: "On budget" },
      { label: "Gross Profit", value: "$94K", sub: "162% ROI on reno spend" },
    ],
    tags: ["SFR Flip", "Long Island", "Value Engineering", "Fast Turnaround"],
  },
];
