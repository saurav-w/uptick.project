"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Separator as SeparatorPrimitive } from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  glow?: boolean;
  label?: string;
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  glow = false,
  label,
  ...props
}: SeparatorProps) {
  if (label && orientation === "horizontal") {
    return (
      <div
        data-slot="separator-wrapper"
        className={cn("relative flex items-center py-2", className)}
      >
        <div className="h-px flex-1 bg-border/70 dark:bg-white/10" />

        <motion.span
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            [
              "mx-4 rounded-full border",
              "border-border/60 bg-background/80",
              "px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em]",
              "text-muted-foreground backdrop-blur-xl",
              "dark:border-white/10 dark:bg-white/[0.03]",
            ].join(" ")
          )}
        >
          {label}
        </motion.span>

        <div className="h-px flex-1 bg-border/70 dark:bg-white/10" />

        {glow && (
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="mx-auto h-px w-1/2 bg-primary/30 blur-xl" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          [
            "shrink-0 transition-colors duration-300",
            "bg-border/70 dark:bg-white/10",

            orientation === "horizontal"
              ? "h-px w-full"
              : "h-full w-px self-stretch",
          ].join(" "),
          glow && "bg-primary/30",
          className
        )}
        {...props}
      />

      {glow && (
        <div
          className={cn(
            [
              "pointer-events-none absolute inset-0",
              orientation === "horizontal"
                ? "h-px w-full blur-md"
                : "h-full w-px blur-md",
              "bg-primary/40",
            ].join(" ")
          )}
        />
      )}
    </div>
  );
}

export { Separator };