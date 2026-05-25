"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      {...props}
    />
  );
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return (
    <DialogPrimitive.Portal
      data-slot="dialog-portal"
      {...props}
    />
  );
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      {...props}
    />
  );
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay asChild {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          [
            "fixed inset-0 z-50",
            "bg-black/50",
            "backdrop-blur-md",
            "supports-[backdrop-filter]:bg-black/30",
          ].join(" "),
          className
        )}
      />
    </DialogPrimitive.Overlay>
  );
}

interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean;
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <AnimatePresence>
      <DialogPortal forceMount>
        <DialogOverlay />

        <DialogPrimitive.Content asChild forceMount {...props}>
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 12,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={cn(
              [
                "fixed left-1/2 top-1/2 z-50",
                "w-full max-w-lg",
                "-translate-x-1/2 -translate-y-1/2",
                "overflow-hidden rounded-3xl",
                "border border-border/60",
                "bg-background/95",
                "p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]",
                "backdrop-blur-3xl",
                "outline-none",
                "dark:border-white/10",
                "dark:bg-[#091210]/95",
              ].join(" "),
              className
            )}
          >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {children}
            </div>

            {/* Close Button */}
            {showCloseButton && (
              <DialogPrimitive.Close asChild>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="absolute right-4 top-4 rounded-xl border border-transparent hover:border-border dark:hover:border-white/10"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">
                    Close
                  </span>
                </Button>
              </DialogPrimitive.Close>
            )}
          </motion.div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </AnimatePresence>
  );
}

function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "mb-6 flex flex-col gap-2 text-left",
        className
      )}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        [
          "text-2xl font-semibold tracking-tight",
          "text-foreground",
          "dark:text-white",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
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
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};