import React from "react";
import { cn } from "../utils/cn.js";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "error" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Radius: pill by default (matching Figma 999px)
        "rounded-[999px]",
        // Sizes
        size === "sm" && "h-8 px-4 text-step-sm",
        size === "md" && "h-12 px-6 text-step-body",
        size === "lg" && "h-14 px-8 text-step-body",
        // Variants
        variant === "primary" && "bg-step-contrast-on-secondary text-step-text-default hover:opacity-90 border-b-2 border-step-border-secondary",
        variant === "secondary" && "bg-step-action-secondary-hover text-step-text-default hover:bg-step-action-secondary-hover/80",
        variant === "error" && "bg-step-action-error-default text-white hover:bg-step-action-error-hover",
        variant === "ghost" && "bg-transparent text-step-text-subtle hover:bg-step-action-secondary-hover/20",
        className
      )}
      disabled={disabled || loading}
      style={{ fontFamily: "var(--step-font-display, 'Fredoka', sans-serif)" }}
      {...props}
    >
      {loading ? (
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:300ms]" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}
