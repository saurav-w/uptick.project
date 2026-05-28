"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  stagger?: boolean;
}

const colStyles = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

const gapStyles = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      cols = 3,
      gap = "md",
      animated = false,
      stagger = false,
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <div
        ref={ref}
        data-slot="grid"
        className={cn(
          [
            "grid w-full",
            colStyles[cols],
            gapStyles[gap],
          ].join(" "),
          className
        )}
        {...props}
      >
        {animated && stagger
          ? React.Children.map(children, (child, index) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                {child}
              </motion.div>
            ))
          : children}
      </div>
    );

    if (!animated || stagger) {
      return content;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }
);

Grid.displayName = "Grid";

export default Grid;