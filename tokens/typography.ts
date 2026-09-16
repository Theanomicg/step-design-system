/**
 * STEP Design System — Typography Tokens
 * Fonts: Manrope (body), Fredoka (display/headings)
 * Extracted from Figma: STEP-Admin design system
 */

// ─── Font Families ─────────────────────────────────────────
export const fontBody = "Manrope, sans-serif" as const;
export const fontDisplay = "Fredoka, sans-serif" as const;

// ─── Font Weights ──────────────────────────────────────────
export const fontWeightWeak = 400 as const;
export const fontWeightDefault = 500 as const;
export const fontWeightMedium = 500 as const;
export const fontWeightSemibold = 600 as const;
export const fontWeightBold = 700 as const;
export const fontWeightHeading = 700 as const;

// ─── Font Sizes ────────────────────────────────────────────
export const fontSizeXs = "10px" as const;
export const fontSizeSm = "11px" as const;
export const fontSizeBodySmall = "14px" as const;
export const fontSizeBody = "16px" as const;
export const fontSizeH5 = "24px" as const;
export const fontSizeH4 = "32px" as const;
export const fontSizeH3 = "40px" as const;

// ─── Line Heights ──────────────────────────────────────────
export const lineHeightBodySmall = "16px" as const;
export const lineHeightBody = "24px" as const;
export const lineHeightH5 = "32px" as const;
export const lineHeightH4 = "40px" as const;
export const lineHeightH3 = "48px" as const;

// ─── Letter Spacing ────────────────────────────────────────
export const letterSpacingTight = "-1.2px" as const;
export const letterSpacingBody = "0px" as const;
export const letterSpacingSmall = "-0.42px" as const;
export const letterSpacingMicro = "-0.24px" as const;
export const letterSpacingWide = "-0.32px" as const;

// ─── Paragraph Spacing ─────────────────────────────────────
export const paragraphSpacingBody = "20px" as const;

// ─── Semantic Typography Presets ────────────────────────────
export const typography = {
  "font-body": fontBody,
  "font-display": fontDisplay,
  "weight-weak": fontWeightWeak,
  "weight-default": fontWeightDefault,
  "weight-medium": fontWeightMedium,
  "weight-semibold": fontWeightSemibold,
  "weight-bold": fontWeightBold,
  "weight-heading": fontWeightHeading,
  "size-xs": fontSizeXs,
  "size-sm": fontSizeSm,
  "size-body-small": fontSizeBodySmall,
  "size-body": fontSizeBody,
  "size-h5": fontSizeH5,
  "size-h4": fontSizeH4,
  "size-h3": fontSizeH3,
  "line-height-body-small": lineHeightBodySmall,
  "line-height-body": lineHeightBody,
  "line-height-h5": lineHeightH5,
  "line-height-h4": lineHeightH4,
  "line-height-h3": lineHeightH3,
  "tracking-tight": letterSpacingTight,
  "tracking-body": letterSpacingBody,
  "tracking-small": letterSpacingSmall,
  "tracking-micro": letterSpacingMicro,
  "tracking-wide": letterSpacingWide,
  "paragraph-spacing-body": paragraphSpacingBody,
} as const;

export type Typography = typeof typography;
