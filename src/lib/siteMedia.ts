/**
 * Energy Guard imagery — sourced from energyguard.com uploads during revamp.
 * Replace paths under `public/brand/` when final assets are delivered in revamp-input/brand/.
 */
const cdn = "https://energyguard.com/wp-content/uploads";

export const brandImagery = {
  heroEverGuard: `${cdn}/2025/09/EverGuard-Homepage-Banner-9.png`,
  heroFleet: `${cdn}/2025/03/thisisengineering-f4pUuCc3M0g-unsplash.webp`,
  heroCompliance: `${cdn}/2025/03/AdobeStock_453159011.webp`,
  heroWind: `${cdn}/2025/03/aerodynamic-wind-graphic.webp`,
  aboutStory: `${cdn}/2025/03/david-iskander-iWTamkU5kiI-unsplash-scaled.jpg`,
  solutionsMax: `${cdn}/2025/09/energyguardmax_2025-scaled.webp`,
  solutionsSkirt: `${cdn}/2025/09/rendered_full_22ft-skirt.webp`,
  solutionsMudflaps: `${cdn}/2025/02/Energy-Guard-Mudflaps-720x720.webp`,
  solutionsLite: `${cdn}/2025/02/Energy-Guard-Pup-Lite.webp`,
  solutionsEnd: `${cdn}/2025/02/parts.png`,
  solutionsWheel: `${cdn}/2025/05/wheel-cover-kits.webp`,
  testimonialPortrait: `${cdn}/2025/03/Daryl-Bear-720x720.png`,
  salesSheet: `${cdn}/2025/03/Energy-Guard-Sales-Sheet-1.png`,
  visitBackdrop: `${cdn}/2025/03/aerodynamic-wind-graphic.webp`,
} as const;

/** @deprecated Use brandImagery — kept for any stale imports during refactor */
export const stockImagery = brandImagery;

export const supplementalPhotoCredit =
  "Product and fleet photography © Energy Guard. Replace with licensed assets from revamp-input/brand/ before launch if required.";
