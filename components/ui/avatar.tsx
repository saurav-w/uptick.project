"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const avatarSizes = {
  xs: "size-7",
  sm: "size-9",
  default: "size-11",
  lg: "size-14",
  xl: "size-20",
};

type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  size?: keyof typeof avatarSizes;
  glow?: boolean;
  bordered?: boolean;
  online?: boolean;
};

function Avatar({
  className,
  size = "default",
  glow = false,
  bordered = true,
  online = false,
  children,
  ...props
}: AvatarProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative inline-flex"
    >
      {/* Glow Effect */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
      )}

      <AvatarPrimitive.Root
        data-slot="avatar"
        data-size={size}
        className={cn(
          "relative inline-flex shrink-0 overflow-hidden rounded-full",
          "bg-muted",
          "backdrop-blur-xl",
          "transition-all duration-300",
          "select-none",
          avatarSizes[size],

          bordered &&
            "ring-2 ring-background dark:ring-[#091210] border border-border/50 dark:border-white/10",

          glow &&
            "shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.22)]",

          className
        )}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>

      {/* Online Indicator */}
      {online && (
        <span
          className={cn(
            "absolute bottom-0 right-0 z-20 rounded-full border-2 border-background bg-accent dark:border-[#091210]",

            size === "xs" && "size-2",
            size === "sm" && "size-2.5",
            size === "default" && "size-3",
            size === "lg" && "size-4",
            size === "xl" && "size-5"
          )}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
        </span>
      )}
    </motion.div>
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full object-cover",
        "transition-transform duration-500",
        "group-hover/avatar:scale-105",
        className
      )}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center",
        "bg-gradient-to-br from-primary to-accent",
        "font-semibold text-white",
        "uppercase",
        "tracking-wide",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
}

function AvatarBadge({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute -bottom-1 -right-1 z-20",
        "flex items-center justify-center",
        "rounded-full border border-white/10",
        "bg-primary text-white",
        "shadow-lg backdrop-blur-xl",
        "size-5",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function AvatarGroup({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "flex items-center -space-x-4",
        "[&_[data-slot=avatar]]:ring-2",
        "[&_[data-slot=avatar]]:ring-background",
        "dark:[&_[data-slot=avatar]]:ring-[#091210]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function AvatarGroupCount({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "flex size-11 items-center justify-center rounded-full",
        "border border-border/50 dark:border-white/10",
        "bg-white/80 dark:bg-white/5",
        "text-sm font-medium text-foreground dark:text-white",
        "backdrop-blur-xl",
        "ring-2 ring-background dark:ring-[#091210]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};