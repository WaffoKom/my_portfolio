import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

export type ButtonVariant = "solid" | "soft" | "outline" | "ghost" | "gradient";
export type ButtonTone = "primary" | "neutral" | "success" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";
export type ButtonRadius = "md" | "xl" | "full";

export type ButtonVariantOptions = {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  radius?: ButtonRadius;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 outline-none disabled:pointer-events-none disabled:opacity-50";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-sm sm:text-base",
  lg: "px-6 py-3 sm:py-4 text-base sm:text-lg",
  icon: "h-11 w-11 p-0",
};

const radiusStyles: Record<ButtonRadius, string> = {
  md: "rounded-md",
  xl: "rounded-xl",
  full: "rounded-full",
};

const toneStyles: Record<ButtonVariant, Record<ButtonTone, string>> = {
  solid: {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    neutral:
      "bg-white dark:bg-dark-card text-gray-800 dark:text-gray-100 border border-light-border dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-hover",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  },
  soft: {
    primary:
      "bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/20 dark:text-primary-200 dark:hover:bg-primary-900/30",
    neutral:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-bg dark:text-gray-200 dark:hover:bg-dark-hover",
    success:
      "bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-200",
    danger: "bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-200",
  },
  outline: {
    primary:
      "bg-transparent border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white",
    neutral:
      "bg-transparent border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-hover",
    success:
      "bg-transparent border border-green-600 text-green-700 hover:bg-green-600 hover:text-white",
    danger: "bg-transparent border border-red-600 text-red-700 hover:bg-red-600 hover:text-white",
  },
  ghost: {
    primary: "bg-transparent text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20",
    neutral: "bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-hover",
    success: "bg-transparent text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20",
    danger: "bg-transparent text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",
  },
  gradient: {
    primary:
      "text-white bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 hover:shadow-primary-500/40",
    neutral:
      "text-white bg-gradient-to-r from-slate-500 to-slate-700 hover:shadow-slate-500/40",
    success:
      "text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/40",
    danger: "text-white bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-red-500/40",
  },
};

export function buttonVariants({
  variant = "solid",
  tone = "primary",
  size = "md",
  radius = "xl",
  fullWidth = false,
}: ButtonVariantOptions = {}): string {
  return cn(
    baseStyles,
    sizeStyles[size],
    radiusStyles[radius],
    toneStyles[variant][tone],
    variant === "gradient" && "shadow-xl hover:shadow-2xl",
    fullWidth && "w-full"
  );
}

export type ButtonProps = HTMLMotionProps<"button"> & ButtonVariantOptions;

export const  Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, tone, size, radius, fullWidth, ...props },
  ref
) {
  return (
    <motion.button
      ref={ref}
      className={cn(buttonVariants({ variant, tone, size, radius, fullWidth }), className)}
      {...props}
    />
  );
});
