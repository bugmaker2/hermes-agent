import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-xs tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer rounded-sm"
  + " disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-foreground/90 text-background hover:bg-foreground hover-lift shadow-sm",
        destructive:
          "bg-destructive/90 text-destructive-foreground hover:bg-destructive hover-lift shadow-sm",
        outline:
          "border border-glass-border bg-transparent hover:bg-foreground/10 hover:text-foreground hover-lift glass-highlight",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary hover-lift",
        ghost:
          "hover:bg-foreground/10 hover:text-foreground",
        link:
          "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-[0.65rem]",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
