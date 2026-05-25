import React from "react";
import clsx from "clsx";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "small";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: React.ElementType;
}

const variantStyles: Record<TextVariant, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl sm:text-4xl font-bold tracking-tight",
  h3: "text-2xl sm:text-3xl font-semibold tracking-tight",
  h4: "text-xl sm:text-2xl font-semibold",
  body: "text-base leading-relaxed",
  small: "text-sm text-secondary/70",
};

const defaultElements: Record<TextVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  small: "span",
};

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      variant = "body",
      as,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultElements[variant];

    return (
      <Component
        ref={ref}
        className={clsx(
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export default Text;