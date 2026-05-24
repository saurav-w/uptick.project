import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  hover?: boolean;
  glass?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
        className,
        size = "md",
        hover = true,
        glass = false,
        children,
        ...props
    },
    ref
  ) => {
    const sizeStyles = {
        sm: "p-3",
        md: "p-4 sm:p-6",
        lg: "p-6 sm:p-8",
    };

    return (
      <div
        ref={ref}
        className={clsx(
            "card",
            sizeStyles[size],
            glass && "glass dark:glass-dark",
            hover && "transition-shadow hover:shadow-card-hover",
            className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;