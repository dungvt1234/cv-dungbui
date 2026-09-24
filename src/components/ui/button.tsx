import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "liquid-glass inline-flex items-center justify-center whitespace-nowrap rounded-full text-text-primary transition-transform hover:scale-[1.03] cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "px-6 py-2.5 text-sm",
        lg: "px-14 py-5 text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
