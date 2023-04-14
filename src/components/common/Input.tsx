import * as React from "react";

import clsx from "clsx";
import { Check, X } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  isValid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, isValid = true, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={clsx(
            "flex w-full font-sans rounded-2xl h-12 bg-slate-200 bg-transparent py-2 px-5 text-sm  dark:border-slate-700 dark:text-slate-50",
            "placeholder:font-sans placeholder:text-slate-400 ",
            "focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600  dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
            { "valid:ring-2 valid:ring-blue-600": isValid },
            { "ring-2 ring-red-600": hasError },
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2">
          {isValid && <Check className="text-blue-600" />}
          {hasError && <X className="text-red-600" />}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
