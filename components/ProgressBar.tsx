import React from "react";
import { cn } from "../utils/cn.js";

export interface ProgressBarProps {
  value?: number;
  label?: string;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value = 69,
  label = "Term 1 Completion",
  showLabel = true,
  className,
}: ProgressBarProps) {
  return (
    <div
      className={cn(
        "bg-step-action-secondary-hover h-[10px] overflow-clip relative w-full",
        className
      )}
    >
      <div
        className="absolute bg-step-action-default inset-y-0 left-0 overflow-clip rounded-r-[999px]"
        style={{ width: `${value}%` }}
      >
        {showLabel && (
          <p
            className="absolute text-step-xs text-step-text-disabled top-1/2 -translate-y-1/2 whitespace-nowrap"
            style={{
              fontFamily: "var(--step-font-display, 'Fredoka', sans-serif)",
              fontWeight: 500,
              right: "8px",
              transform: "translateX(100%) translateY(-50%)",
              letterSpacing: "-0.24px",
            }}
          >
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
