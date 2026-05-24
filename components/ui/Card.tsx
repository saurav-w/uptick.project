import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  hover?: boolean;
  glass?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, size = "md", hover = true, glass = false, ...props }, ref) => {
    const sizeStyles = {
      sm: "card-sm",
      md: "card p-4 sm:p-6",
      lg: "card-lg",
    };

    return (
      <div
        ref={ref}
        className={clsx(
          sizeStyles[size],
          glass && "glass dark:glass-dark",
          hover && "hover:shadow-card-hover",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
export default Card;
