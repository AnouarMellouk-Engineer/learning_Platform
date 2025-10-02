import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all text-my-text-main",
  {
    variants: {
      variant: {
        default: "bg-my-primary  hover:bg-my-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          " text-my-primary border-my-primary/60 bg-background shadow-xs hover:bg-my-primary hover:text-my-text-main",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
