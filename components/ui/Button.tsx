"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center overflow-hidden",
    "whitespace-nowrap rounded-2xl font-medium",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "backdrop-blur-xl",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-white",
          "border border-primary/80",
          "shadow-[0_10px_30px_rgba(0,75,68,0.18)]",
          "hover:bg-primary/90",
          "hover:shadow-[0_20px_40px_rgba(0,75,68,0.28)]",
          "hover:-translate-y-0.5",
        ].join(" "),

        secondary: [
          "bg-secondary text-white",
          "border border-secondary/80",
          "hover:bg-secondary/90",
          "hover:shadow-xl",
        ].join(" "),

        outline: [
          "border border-border",
          "bg-white/70 dark:bg-white/5",
          "text-foreground dark:text-white",
          "hover:border-accent/40",
          "hover:bg-accent/5",
          "hover:text-accent",
          "dark:border-white/10",
          "backdrop-blur-2xl",
        ].join(" "),

        ghost: [
          "bg-transparent",
          "text-foreground dark:text-white",
          "hover:bg-muted/80 dark:hover:bg-white/10",
          "hover:text-primary dark:hover:text-accent",
        ].join(" "),

        destructive: [
          "bg-destructive text-white",
          "hover:bg-destructive/90",
          "shadow-[0_10px_30px_rgba(220,38,38,0.18)]",
        ].join(" "),

        link: [
          "h-auto rounded-none p-0",
          "text-primary underline-offset-4",
          "hover:text-accent hover:underline",
        ].join(" "),

        glass: [
          "border border-white/20",
          "bg-white/10 dark:bg-white/5",
          "text-foreground dark:text-white",
          "backdrop-blur-2xl",
          "hover:border-accent/30",
          "hover:bg-white/20 dark:hover:bg-white/10",
          "hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)]",
        ].join(" "),

        gradient: [
          "border border-transparent",
          "bg-gradient-to-r from-primary via-[#00695c] to-accent",
          "text-white",
          "shadow-[0_15px_35px_rgba(0,75,68,0.25)]",
          "hover:scale-[1.02]",
          "hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)]",
        ].join(" "),
      },

      size: {
        xs: "h-8 px-3 text-xs gap-1.5",
        sm: "h-10 px-4 text-sm gap-2",
        default: "h-11 px-5 text-sm gap-2",
        lg: "h-12 px-6 text-base gap-2.5",
        xl: "h-14 px-8 text-base gap-3",

        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-14",
      },

      rounded: {
        default: "rounded-2xl",
        full: "rounded-full",
        square: "rounded-xl",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

type ButtonProps = Omit<React.ComponentProps<"button">, "onDrag"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    onDrag?: HTMLMotionProps<"button">["onDrag"];
  };

function Button({
  asChild = false,
  disabled,
  loading,
  className,
  variant,
  size,
  rounded,
  children,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <Slot
        className={cn(
          buttonVariants({ variant, size, rounded }),
          className
        )}
        {...(disabled || loading ? { disabled: true } : {})}
        {...props}
      >
        {/* Animated Glow */}
        {children}
      </Slot>
    );
  }

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      whileHover={!disabled ? { y: -1 } : undefined}
      className={cn(
        buttonVariants({
          variant,
          size,
          rounded,
        }),
        className
      )}
      disabled={disabled || loading}
      {...(props as unknown as HTMLMotionProps<"button">)}
    >
      {/* Animated Glow */}
      {children}
    </motion.button>
  );
}

export { Button, buttonVariants };