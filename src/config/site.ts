export const siteConfig = {
  name: "EndureLuxe",
  legalName: "EndureLuxe Limited",
  canonicalOrigin: "https://endureluxe.com",
  tagline: "Fitness that survives real life.",
  statement: "Stay capable.",
  description:
    "EndureLuxe builds durable fitness practice through movement, strength, recovery and consistency. Join The 45, a structured 45-day practice for busy adults.",
  routes: {
    home: "/",
    the45: "/the-45",
    standard: "/standard",
    journal: "/journal",
    about: "/about",
    join: "/join",
    privacy: "/privacy",
    terms: "/terms",
    health: "/health-disclaimer",
  },
} as const;

export const offerConfig = {
  name: "The 45",
  days: 45,
  priceGbp: 99,
  priceLabel: "£99",
  priceQualifier: "Founding cohort · one-off introductory price",
  pillars: ["Move", "Strengthen", "Recover", "Return", "Continue"],
} as const;

export function isCanonicalProductionHost(hostname = window.location.hostname): boolean {
  return hostname === "endureluxe.com" || hostname === "www.endureluxe.com";
}
