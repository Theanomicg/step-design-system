/**
 * STEP Design System — Border Tokens
 * Extracted from Figma: STEP-Admin design system
 */

// ─── Border Radius ─────────────────────────────────────────
export const radiusNone = "0px" as const;
export const radiusSm = "4px" as const;
export const radiusMd = "8px" as const;
export const radiusLg = "12px" as const;
export const radiusXl = "16px" as const;
export const radiusPill = "999px" as const;

// ─── Stroke Widths ─────────────────────────────────────────
export const strokeWidthEmphasized = "2px" as const;
export const strokeWidthDropper = "4px" as const;

// ─── Semantic Border Tokens ─────────────────────────────────
export const borders = {
  "radius-none": radiusNone,
  "radius-sm": radiusSm,
  "radius-md": radiusMd,
  "radius-lg": radiusLg,
  "radius-xl": radiusXl,
  "radius-pill": radiusPill,
  "stroke-emphasized": strokeWidthEmphasized,
  "stroke-dropper": strokeWidthDropper,
} as const;

export type Borders = typeof borders;
