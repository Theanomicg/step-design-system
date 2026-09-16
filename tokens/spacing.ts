/**
 * STEP Design System — Spacing Tokens
 * Extracted from Figma: STEP-Admin design system
 */

// ─── Content Spacing ───────────────────────────────────────
export const spaceContentGapLarge = "4px" as const;

// ─── Component Spacing ─────────────────────────────────────
export const spaceComponentPaddingSmall = "8px" as const;
export const spaceComponentPaddingLarge = "16px" as const;
export const spaceComponentPaddingHuge = "24px" as const;

// ─── Additional Scales (derived from Figma patterns) ───────
export const space0 = "0px" as const;
export const space1 = "4px" as const;
export const space2 = "8px" as const;
export const space3 = "12px" as const;
export const space4 = "16px" as const;
export const space5 = "20px" as const;
export const space6 = "24px" as const;
export const space8 = "32px" as const;
export const space10 = "40px" as const;
export const space12 = "48px" as const;
export const space16 = "64px" as const;

// ─── Semantic Spacing ──────────────────────────────────────
export const spacing = {
  "content-gap-large": spaceContentGapLarge,
  "component-padding-small": spaceComponentPaddingSmall,
  "component-padding-large": spaceComponentPaddingLarge,
  "component-padding-huge": spaceComponentPaddingHuge,
  0: space0,
  1: space1,
  2: space2,
  3: space3,
  4: space4,
  5: space5,
  6: space6,
  8: space8,
  10: space10,
  12: space12,
  16: space16,
} as const;

export type Spacing = typeof spacing;
