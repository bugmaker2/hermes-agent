import { cn } from "@/lib/utils";

export function Switch({
  checked,
  onCheckedChange,
  className,
  disabled,
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center border border-glass-border transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-foreground/15 border-foreground/30" : "bg-background/40",
        className,
      )}
      onClick={() => onCheckedChange(!checked)}
    >
      <span
        className={cn(
          "pointer-events-none block h-3.5 w-3.5 rounded-sm transition-all duration-300",
          checked ? "translate-x-4 bg-gradient-to-r from-warning to-foreground" : "translate-x-0.5 bg-muted-foreground",
        )}
      />
    </button>
  );
}
