import clsx from "clsx";
import { Loader2 } from "lucide-react";

const Loader = ({ className }: { className?: string }) => {
  return <Loader2 className={clsx("mr-2 h-6 w-6 animate-spin", className)} />;
};

Loader.displayName = "Loader";

export { Loader };
