/**
 * STEP Design System — Utility: cn()
 * Merges class names with clsx + tailwind-merge for conflict-free Tailwind classes.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
