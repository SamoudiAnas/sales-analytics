import * as React from "react";

import clsx from "clsx";
import { Check, X } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  isValid?: boolean;
  withIconBefore?: boolean;
  withIconAfter?: boolean;
  IconBefore?: JSX.Element;
  IconAfter?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      hasError,
      isValid,
      withIconBefore,
      withIconAfter,
      IconBefore,
      IconAfter,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <div className="relative">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex gap-2">
            {withIconBefore && IconBefore}
          </div>
          <input
            placeholder=" "
            className={clsx(
              "default-input peer block rounded-2xl w-full border-2 border-gray-400 shadow-sm sm:text-sm p-4",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "focus:border-blue-700",
              { "!pl-10": withIconBefore }
            )}
            ref={ref}
            {...props}
          />
          <label
            htmlFor="input"
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 left-4 block transition-all duration-300 ease-out pointer-events-none text-gray-500 px-2",
              "peer-focus:text-blue-700",
              { "text-red-600": hasError },
              { "!left-10": withIconBefore }
            )}
          >
            {label}
          </label>{" "}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2">
            {!withIconAfter && isValid && <Check className="text-green-600" />}
            {withIconAfter && IconAfter}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
