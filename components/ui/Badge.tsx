"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "rounded-full border text-xs font-semibold",
    "transition-all duration-300",
    "whitespace-nowrap select-none",
    "backdrop-blur-xl",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-primary/30",
    "[&_svg]:size-3.5 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-primary/20",
          "bg-primary/10",
          "text-primary",
          "shadow-[0_0_20px_rgba(0,75,68,0.08)]",
          "hover:border-primary/40",
          "hover:bg-primary/15",
        ].join(" "),

        secondary: [
          "border-border",
          "bg-background/70",
          "text-foreground/80",
          "dark:border-white/10",
          "dark:bg-white/[0.04]",
          "dark:text-white/80",
          "hover:border-primary/20",
        ].join(" "),

        success: [
          "border-emerald-500/20",
          "bg-emerald-500/10",
          "text-emerald-600",
          "dark:text-emerald-400",
        ].join(" "),

        warning: [
          "border-amber-500/20",
          "bg-amber-500/10",
          "text-amber-600",
          "dark:text-amber-400",
        ].join(" "),

        destructive: [
          "border-red-500/20",
          "bg-red-500/10",
          "text-red-600",
          "dark:text-red-400",
        ].join(" "),

        outline: [
          "border-border",
          "bg-transparent",
          "text-foreground",
          "dark:border-white/10",
          "dark:text-white",
        ].join(" "),

        glass: [
          "border-white/10",
          "bg-white/10",
          "text-white",
          "backdrop-blur-2xl",
          "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
        ].join(" "),
      },

      size: {
        sm: "h-6 px-2.5 text-[10px]",
        default: "h-7 px-3 text-xs",
        lg: "h-8 px-4 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  pulse?: boolean;
}

export function Badge({
  asChild = false,
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const variant = props.variant || "default";
  const size = props.size || "default";
  const className = props.className || "";

  if (asChild) {
    return (
      <Slot
        data-slot="badge"
        data-variant={variant}
        className={cn(
          badgeVariants({ variant, size }),
          pulse && "relative overflow-hidden",
          className
        )}
        {...props}
      >
        {pulse && <span className="absolute inset-0 animate-pulse rounded-full bg-white/10" />}
        <span className="relative z-10 flex items-center gap-1.5">{children}</span>
      </Slot>
    );
  }

  return (
    <motion.span
      data-slot="badge"
      data-variant={variant}
      whileHover={{ y: -1 }}
      className={cn(
        badgeVariants({ variant, size }),
        pulse && "relative overflow-hidden",
        className
      )}
      {...(props as unknown as HTMLMotionProps<"span">)}
    >
      {pulse && <span className="absolute inset-0 animate-pulse rounded-full bg-white/10" />}
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
    </motion.span>
  );
}

export { badgeVariants };