import * as React from "react";

import clsx from "clsx";
import { Check, X } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassNames?: string;
  hasError?: boolean;
  isValid?: boolean;
  withIconBefore?: boolean;
  withIconAfter?: boolean;
  IconBefore?: React.ElementType;
  IconAfter?: React.ElementType;
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
      containerClassNames,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx("relative w-full", containerClassNames)}>
        <div className="relative">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex gap-2">
            {withIconBefore && IconBefore && (
              <IconBefore className="text-gray-500 " />
            )}
          </div>
          <input
            placeholder=" "
            className={clsx(
              "default-input peer block rounded-2xl w-full border-2 border-gray-400 shadow-sm sm:text-sm p-4 py-3",
              "disabled:cursor-not-allowed disabled:opacity-50",
              { "focus:border-blue-700": !hasError },
              { "!pl-10": withIconBefore },
              { "border-red-100 focus:border-red-100": hasError }
            )}
            ref={ref}
            {...props}
          />
          <label
            htmlFor="input"
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 left-4",
              "block transition-all duration-300 ease-out text-gray-500 px-2",
              "pointer-events-none peer-focus:text-blue-700",
              { "text-red-100 peer-focus:!text-red-100": hasError },
              { "!left-10": withIconBefore }
            )}
          >
            {label}
          </label>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2">
            {!withIconAfter && isValid && <Check className="text-green-600" />}
            {withIconAfter && IconAfter && (
              <IconAfter className="text-gray-500" />
            )}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
