"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "relative overflow-hidden rounded-3xl",
    "border transition-all duration-500",
    "backdrop-blur-2xl",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-border/60",
          "bg-background/80",
          "shadow-[0_10px_40px_rgba(0,0,0,0.04)]",
          "dark:border-white/10",
          "dark:bg-white/[0.03]",
        ].join(" "),

        glass: [
          "border-white/10",
          "bg-white/[0.05]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
          "backdrop-blur-3xl",
        ].join(" "),

        gradient: [
          "border-primary/10",
          "bg-gradient-to-br from-primary/[0.08] via-background to-accent/[0.06]",
          "dark:from-primary/[0.12]",
          "dark:to-accent/[0.08]",
        ].join(" "),

        dark: [
          "border-white/10",
          "bg-[#07110f]",
          "text-white",
          "shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
        ].join(" "),
      },

      size: {
        sm: "p-5",
        default: "p-6 sm:p-7",
        lg: "p-8 sm:p-10",
      },

      hover: {
        true: [
          "hover:-translate-y-1",
          "hover:border-primary/20",
          "hover:shadow-[0_20px_60px_rgba(0,75,68,0.10)]",
          "dark:hover:border-primary/30",
          "dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      hover: true,
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<"div">, "children">,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  glow?: boolean;
  blur?: boolean;
}

function Card({
  className,
  variant,
  size,
  hover,
  glow = false,
  blur = true,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      data-slot="card"
      whileHover={{
        y: hover ? -4 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={cn(
        cardVariants({
          variant,
          size,
          hover,
        }),
        blur && "backdrop-blur-2xl",
        className
      )}
      {...props}
    >
      {/* Glow Effect */}
      {glow && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,75,68,0.15),transparent_70%)]" />
        </div>
      )}

      {/* Border Gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.03]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("mb-6 flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-xl font-semibold tracking-tight text-foreground dark:text-white",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "text-sm leading-relaxed text-muted-foreground dark:text-white/60",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "mt-6 flex items-center justify-between gap-4",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};