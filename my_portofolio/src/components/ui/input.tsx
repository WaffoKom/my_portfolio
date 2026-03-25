import React from "react";
import { cn } from "../../lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border",
        "focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all duration-300",
        "text-base sm:text-lg text-gray-800 dark:text-gray-100 shadow-lg focus:shadow-2xl",
        className
      )}
      {...props}
    />
  );
});
