/**
 * STEP Design System — Tailwind Theme Extension (v3)
 * Import this in your tailwind.config.js/ts
 *
 * Usage:
 *   import { stepTheme } from "@step/design-system/tailwind";
 *   export default { theme: { extend: stepTheme } }
 */

import type { Config } from "tailwindcss";

export const stepTheme: Partial<Config["theme"]> = {
  colors: {
    step: {
      "text-subtle": "#c3c3c6",
      "text-default": "#fafaf9",
      "text-on-bg": "#333234",
      "text-secondary": "#6e6d71",
      "text-disabled": "#fafaf9",
      "action-default": "#554ceb",
      "action-secondary-hover": "#45444a",
      "action-error-default": "#dc4736",
      "action-error-hover": "#b0392c",
      "border-secondary": "#bebebf",
      "border-outlined": "#59595d",
      "border-divider": "#bebebf",
      "border-error": "#842b21",
      "surface-subtle": "#eaeaeb",
      "surface-dark": "#322f37",
      "contrast-on-primary": "#fafaf9",
      "contrast-on-secondary": "#333234",
    },
  },
  fontFamily: {
    step: {
      body: ['"Manrope"', "sans-serif"],
      display: ['"Fredoka"', "sans-serif"],
    },
  },
  fontSize: {
    "step-xs": "10px",
    "step-sm": "11px",
    "step-body-small": "14px",
    "step-body": "16px",
    "step-h5": "24px",
    "step-h4": "32px",
    "step-h3": "40px",
  },
  spacing: {
    "step-1": "4px",
    "step-2": "8px",
    "step-3": "12px",
    "step-4": "16px",
    "step-5": "20px",
    "step-6": "24px",
    "step-8": "32px",
    "step-10": "40px",
    "step-12": "48px",
    "step-16": "64px",
  },
  borderRadius: {
    "step-sm": "4px",
    "step-md": "8px",
    "step-lg": "12px",
    "step-xl": "16px",
    "step-pill": "999px",
  },
};
