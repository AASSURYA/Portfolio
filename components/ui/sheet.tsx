"use client"

import * as React from "react"
import { Drawer } from "vaul"
import { cn } from "@/lib/utils"

const Sheet = Drawer.Root

const SheetTrigger = Drawer.Trigger

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Drawer.Content>,
  React.ComponentPropsWithoutRef<typeof Drawer.Content>
>(({ className, children, ...props }, ref) => (
  <Drawer.Content
    ref={ref}
    className={cn(
      "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-[96%] flex-col rounded-t-[10px] border bg-background",
      className
    )}
    {...props}
  >
    <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
    {children}
  </Drawer.Content>
))
SheetContent.displayName = "SheetContent"

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
SheetHeader.displayName = "SheetHeader"

const SheetTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6", className)}
    {...props}
  />
))
SheetFooter.displayName = "SheetFooter"

const SheetClose = Drawer.Close

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
}
