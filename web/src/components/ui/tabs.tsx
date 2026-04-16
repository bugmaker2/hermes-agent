import { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  defaultValue,
  children,
  className,
}: {
  defaultValue: string;
  children: (active: string, setActive: (v: string) => void) => React.ReactNode;
  className?: string;
}) {
  const [active, setActive] = useState(defaultValue);
  return <div className={cn("flex flex-col gap-4", className)}>{children(active, setActive)}</div>;
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-start border-b border-glass-border text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  active,
  value,
  onClick,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean; value: string }) {
  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 font-display text-xs tracking-[0.1em] uppercase transition-all cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        active
          ? "text-foreground"
          : "hover:text-foreground",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warning to-transparent" />
      )}
    </button>
  );
}
