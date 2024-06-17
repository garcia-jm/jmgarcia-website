import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
