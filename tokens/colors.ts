/**
 * STEP Design System — Color Tokens
 * Extracted from Figma: STEP-Admin design system
 *
 * Naming convention: origin-* prefix from Figma variables
 */

// ─── Text Colors ───────────────────────────────────────────
export const textSubtle = "#c3c3c6" as const;
export const textDefault = "#fafaf9" as const;
export const textOnBg = "#333234" as const;
export const textSecondary = "#6e6d71" as const;
export const textDisabled = "#fafaf9" as const;

// ─── Action / Brand Colors ─────────────────────────────────
export const actionDefault = "#554ceb" as const;
export const actionSecondaryHover = "#45444a" as const;
export const actionErrorDefault = "#dc4736" as const;
export const actionErrorHover = "#b0392c" as const;

// ─── Border Colors ─────────────────────────────────────────
export const borderSecondary = "#bebebf" as const;
export const borderOutlined = "#59595d" as const;
export const borderDivider = "#bebebf" as const;
export const borderError = "#842b21" as const;

// ─── Surface Colors ────────────────────────────────────────
export const surfaceSubtle = "#eaeaeb" as const;

// ─── Contrast / Foreground ─────────────────────────────────
export const contrastOnPrimary = "#fafaf9" as const;
export const contrastOnSecondary = "#333234" as const;

// ─── Semantic Aliases ──────────────────────────────────────
export const colors = {
  text: {
    subtle: textSubtle,
    default: textDefault,
    "on-bg": textOnBg,
    secondary: textSecondary,
    disabled: textDisabled,
  },
  action: {
    default: actionDefault,
    "secondary-hover": actionSecondaryHover,
    "error-default": actionErrorDefault,
    "error-hover": actionErrorHover,
  },
  border: {
    secondary: borderSecondary,
    outlined: borderOutlined,
    divider: borderDivider,
    error: borderError,
  },
  surface: {
    subtle: surfaceSubtle,
  },
  contrast: {
    "on-primary": contrastOnPrimary,
    "on-secondary": contrastOnSecondary,
  },
} as const;

export type Colors = typeof colors;
