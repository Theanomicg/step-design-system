import React from "react";
import { cn } from "../utils/cn.js";
import { FooterLogo } from "../icons/index.js";

export interface FooterProps {
  onSignOut?: () => void;
  className?: string;
}

export function Footer({ onSignOut, className }: FooterProps) {
  return (
    <div
      className={cn(
        "bg-step-contrast-on-secondary border-t-2 border-step-action-secondary-hover flex h-16 items-center justify-between overflow-clip px-8 py-4",
        className
      )}
    >
      <FooterLogo size={28} className="text-step-text-default" />
      <button
        onClick={onSignOut}
        className="text-[17px] text-step-action-error-default hover:opacity-80 transition-opacity cursor-pointer"
        style={{
          fontFamily: "var(--step-font-display, 'Fredoka', sans-serif)",
          fontWeight: 500,
          letterSpacing: "-0.68px",
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
