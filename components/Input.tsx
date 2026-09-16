import React from "react";
import { cn } from "../utils/cn.js";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error = false, className, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "border-2 rounded-[999px] px-4 py-3 flex items-center transition-colors",
        error
          ? "bg-step-action-secondary-hover border-step-border-error"
          : "bg-step-action-secondary-hover border-step-border-outlined",
        className
      )}
    >
      <input
        className="flex-1 bg-transparent text-step-body font-medium outline-none text-step-text-default placeholder:text-step-text-subtle"
        style={{ fontFamily: "var(--step-font-body, 'Manrope', sans-serif)" }}
        {...props}
      />
    </div>
  );
}
