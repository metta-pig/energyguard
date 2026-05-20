/**
 * Energy Guard marketing site configuration.
 */
export const siteConfig = {
  name: "Energy Guard",
  tagline: "Trailer aerodynamic solutions that cut drag, fuel spend, and downtime.",
  logoUrl: "/brand/logo.webp" as string | null,

  storeUrl: null as string | null,

  headerCta: {
    label: "Request estimate",
    href: "/contact",
  } as const,

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    youtube: "https://www.youtube.com/@EnergyGuard" as string | null,
  },
  contact: {
    phoneDisplay: null as string | null,
    phoneTel: null as string | null,
    email: "sales@energyguard.com",
    emailMailto: "mailto:sales@energyguard.com",
    supportEmail: "support@energyguard.com",
    supportMailto: "mailto:support@energyguard.com",
  },
  address: {
    lines: ["United States — fleet programs nationwide"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Energy+Guard+aerodynamic+solutions",
  },
  legal: {
    privacyUrl: "https://energyguard.com/privacy-policy/",
    termsUrl: "https://energyguard.com/terms-of-service/",
  },
} as const;

export function isAbsoluteUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
