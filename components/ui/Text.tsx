import React from "react";
import clsx from "clsx";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small";
}

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ className, variant = "body", children, ...props }, ref) => {
    const styles = {
      h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
      h2: "text-3xl sm:text-4xl font-bold tracking-tight",
      h3: "text-2xl sm:text-3xl font-semibold tracking-tight",
      h4: "text-xl sm:text-2xl font-semibold",
      body: "text-base leading-relaxed",
      small: "text-sm text-secondary/70",
    };

    const Element = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      body: "p",
      small: "span",
    }[variant] as any;

    return (
      <Element
        ref={ref}
        className={clsx(styles[variant], className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Text.displayName = "Text";
export default Text;
