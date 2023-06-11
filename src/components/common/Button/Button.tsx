import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import clsx from "clsx";
import { Loader } from "../Loader";

const buttonVariants = cva(
  [
    "inline-flex items-center gap-2 justify-center font-medium transition-colors min-h-[3rem]",
    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
    "dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 ",
    "disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  ],
  {
    variants: {
      variant: {
        default: "bg-blue-700 text-white hover:bg-blue-800",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "py-3 px-5",
        sm: "px-2",
        lg: "px-8",
      },
      rounded: {
        default: "rounded-md",
        inputSize: "rounded-2xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonVariantProps
  extends VariantProps<typeof buttonVariants> {}

export interface ButtonProps
  extends Omit<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      "disabled" | "children"
    >,
    ButtonVariantProps {
  children: React.ReactNode;
  withIcon?: boolean;
  Icon?: JSX.Element;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      rounded,
      size,
      fullWidth,
      children,
      withIcon,
      Icon,
      isLoading,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={clsx(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...rest}
      >
        {!isLoading && withIcon && Icon}
        {isLoading && <Loader className="text-white" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
