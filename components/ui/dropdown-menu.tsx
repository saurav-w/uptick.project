"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Circle,
} from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return (
    <DropdownMenuPrimitive.Root
      data-slot="dropdown-menu"
      {...props}
    />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal
      data-slot="dropdown-menu-portal"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 10,
  align = "end",
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        asChild
        sideOffset={sideOffset}
        align={align}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          className={cn(
            [
              "z-50 min-w-[220px] overflow-hidden",
              "rounded-2xl border border-border/50",
              "bg-background/90 backdrop-blur-2xl",
              "shadow-[0_20px_60px_rgba(0,0,0,0.12)]",
              "dark:border-white/10",
              "dark:bg-[#091210]/90",
              "p-2",
            ].join(" "),
            className
          )}
        >
          {children}
        </motion.div>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPortal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group
      data-slot="dropdown-menu-group"
      {...props}
    />
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        [
          "px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]",
          "text-muted-foreground",
          inset && "pl-9",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuItem({
  className,
  inset,
  destructive = false,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  destructive?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      className={cn(
        [
          "relative flex cursor-pointer items-center gap-3",
          "rounded-xl px-3 py-2.5",
          "text-sm font-medium",
          "outline-none transition-all duration-200",
          "select-none",
          "focus:bg-primary/10",
          "focus:text-primary",
          "dark:focus:bg-white/10",
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
          "[&_svg]:size-4 [&_svg]:shrink-0",
          inset && "pl-9",
          destructive
            ? "text-red-500 focus:bg-red-500/10 focus:text-red-500"
            : "text-foreground/80 dark:text-white/80",
        ].join(" "),
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        [
          "relative flex cursor-pointer items-center gap-3",
          "rounded-xl py-2.5 pr-3 pl-9",
          "text-sm font-medium",
          "outline-none transition-all duration-200",
          "focus:bg-primary/10 focus:text-primary",
          "dark:focus:bg-white/10",
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
          inset && "pl-10",
        ].join(" "),
        className
      )}
      {...props}
    >
      <span className="absolute left-3 flex items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="size-4 text-primary" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        [
          "relative flex cursor-pointer items-center gap-3",
          "rounded-xl py-2.5 pr-3 pl-9",
          "text-sm font-medium",
          "outline-none transition-all duration-200",
          "focus:bg-primary/10 focus:text-primary",
          "dark:focus:bg-white/10",
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
          inset && "pl-10",
        ].join(" "),
        className
      )}
      {...props}
    >
      <span className="absolute left-3 flex items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="size-2 fill-current text-primary" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        "my-2 h-px bg-border/60 dark:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        [
          "ml-auto text-[10px]",
          "font-medium tracking-[0.2em]",
          "text-muted-foreground uppercase",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return (
    <DropdownMenuPrimitive.Sub
      data-slot="dropdown-menu-sub"
      {...props}
    />
  );
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cn(
        [
          "flex cursor-pointer items-center gap-3",
          "rounded-xl px-3 py-2.5",
          "text-sm font-medium",
          "outline-none transition-all duration-200",
          "focus:bg-primary/10 focus:text-primary",
          "dark:focus:bg-white/10",
          inset && "pl-9",
        ].join(" "),
        className
      )}
      {...props}
    >
      {children}

      <ChevronRight className="ml-auto size-4 opacity-60" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      asChild
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.16 }}
        className={cn(
          [
            "z-50 min-w-[200px] overflow-hidden",
            "rounded-2xl border border-border/50",
            "bg-background/95 backdrop-blur-2xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.14)]",
            "dark:border-white/10",
            "dark:bg-[#091210]/95",
            "p-2",
          ].join(" "),
          className
        )}
      >
        {children}
      </motion.div>
    </DropdownMenuPrimitive.SubContent>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};