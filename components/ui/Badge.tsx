import React from "react";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "primary", size = "sm", children, ...props }, ref) => {
    const sizeStyles = {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
    };

    const variantStyles = {
      primary: "bg-primary/10 text-primary border border-primary/20",
      secondary: "bg-secondary/10 text-secondary border border-secondary/20",
      accent: "bg-accent/10 text-accent border border-accent/20",
      outline: "bg-transparent border border-border text-foreground",
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "inline-flex items-center rounded-full font-medium",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
export default Badge;