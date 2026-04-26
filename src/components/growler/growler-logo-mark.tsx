import { cn } from "@/lib/utils";
import logoSrc from "@/assets/growler-filter-logo.png";

export function GrowlerLogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Growler Filter"
      className={cn("h-auto w-full object-contain", className)}
      draggable={false}
    />
  );
}
