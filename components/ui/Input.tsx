"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Search } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
  glass?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error = false,
      icon,
      glass = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === "password";

    return (
      <div className="relative w-full">
        {/* Left Icon */}
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}

        {/* Search Default Icon */}
        {!icon && type === "search" && (
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
        )}

        <motion.input
          ref={ref}
          whileFocus={{ scale: 1.005 }}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          data-slot="input"
          disabled={disabled}
          className={cn(
            [
              "flex h-12 w-full rounded-2xl",
              "border px-4 text-sm",
              "transition-all duration-300",
              "outline-none",
              "placeholder:text-muted-foreground/70",
              "disabled:pointer-events-none",
              "disabled:opacity-50",
              "disabled:cursor-not-allowed",

              glass
                ? [
                    "border-border/60",
                    "bg-background/70",
                    "backdrop-blur-xl",
                    "dark:border-white/10",
                    "dark:bg-white/[0.04]",
                  ].join(" ")
                : "bg-background border-border",

              "focus:border-primary/40",
              "focus:ring-4",
              "focus:ring-primary/10",

              error &&
                [
                  "border-red-500/40",
                  "focus:border-red-500/40",
                  "focus:ring-red-500/10",
                ].join(" "),

              (icon || type === "search") && "pl-11",

              isPassword && "pr-12",
            ].join(" "),
            className
          )}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword(!showPassword)}
            className={cn(
              [
                "absolute right-4 top-1/2 z-10",
                "-translate-y-1/2",
                "text-muted-foreground",
                "transition-colors duration-200",
                "hover:text-foreground",
              ].join(" ")
            )}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}

        {/* Glow Effect */}
        {!error && !disabled && (
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 focus-within:opacity-100">
            <div className="absolute inset-0 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(0,75,68,0.08)]" />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };