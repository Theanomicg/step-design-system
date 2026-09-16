import React from "react";
import { cn } from "../utils/cn.js";
import { StepLogo, AdminsLogo, CaretLogo } from "../icons/index.js";

export interface TopMenuProps {
  showContactSupport?: boolean;
  className?: string;
}

export function TopMenu({ showContactSupport = true, className }: TopMenuProps) {
  return (
    <div
      className={cn(
        "bg-step-contrast-on-secondary border-b-2 border-step-action-secondary-hover flex h-16 items-center justify-between overflow-clip px-8 py-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <StepLogo size={70} className="text-step-text-default" />
        <AdminsLogo size={74} className="text-step-text-default" />
        <CaretLogo size={16} className="text-step-text-default" />
      </div>
      {showContactSupport && (
        <span
          className="text-[17px] text-step-text-subtle"
          style={{
            fontFamily: "var(--step-font-display, 'Fredoka', sans-serif)",
            fontWeight: 400,
            letterSpacing: "-0.68px",
          }}
        >
          Contact Support
        </span>
      )}
    </div>
  );
}
