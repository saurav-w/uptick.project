"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose(
  props: React.ComponentProps<typeof SheetPrimitive.Close>
) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>
) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay asChild>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        data-slot="sheet-overlay"
        className={cn(
          [
            "fixed inset-0 z-50",
            "bg-black/40",
            "backdrop-blur-xl",
            "supports-[backdrop-filter]:bg-black/20",
          ].join(" "),
          className
        )}
        {...props}
      />
    </SheetPrimitive.Overlay>
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  const sideStyles = {
    top: [
      "inset-x-0 top-0 border-b",
      "rounded-b-3xl",
      "data-[state=open]:slide-in-from-top",
      "data-[state=closed]:slide-out-to-top",
    ].join(" "),

    bottom: [
      "inset-x-0 bottom-0 border-t",
      "rounded-t-3xl",
      "data-[state=open]:slide-in-from-bottom",
      "data-[state=closed]:slide-out-to-bottom",
    ].join(" "),

    left: [
      "inset-y-0 left-0 h-full w-[88%] sm:max-w-md border-r",
      "rounded-r-3xl",
      "data-[state=open]:slide-in-from-left",
      "data-[state=closed]:slide-out-to-left",
    ].join(" "),

    right: [
      "inset-y-0 right-0 h-full w-[88%] sm:max-w-md border-l",
      "rounded-l-3xl",
      "data-[state=open]:slide-in-from-right",
      "data-[state=closed]:slide-out-to-right",
    ].join(" "),
  };

  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          [
            "fixed z-50 flex flex-col",
            "border-border/60",
            "bg-background/90",
            "text-foreground",
            "backdrop-blur-3xl",
            "shadow-[0_10px_60px_rgba(0,0,0,0.18)]",
            "dark:border-white/10",
            "dark:bg-[#08110f]/95",

            "duration-300 ease-out",
            "animate-in fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",

            sideStyles[side],
          ].join(" "),
          className
        )}
        {...props}
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-inherit">
          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col">
          {children}
        </div>

        {/* Close */}
        {showCloseButton && (
          <SheetPrimitive.Close asChild>
            <Button
              size="icon-sm"
              variant="ghost"
              className={cn(
                [
                  "absolute right-4 top-4 z-50",
                  "rounded-xl",
                  "border border-border/50",
                  "bg-background/70",
                  "backdrop-blur-xl",
                  "hover:bg-primary/10",
                  "hover:text-primary",
                  "dark:border-white/10",
                  "dark:bg-white/[0.04]",
                ].join(" ")
              )}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        [
          "relative flex flex-col gap-2",
          "border-b border-border/50",
          "p-6",
          "dark:border-white/10",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        [
          "mt-auto flex flex-col gap-3",
          "border-t border-border/50",
          "p-6",
          "dark:border-white/10",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        [
          "text-xl font-semibold tracking-tight",
          "text-foreground dark:text-white",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        [
          "text-sm leading-relaxed",
          "text-muted-foreground",
          "dark:text-white/60",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};