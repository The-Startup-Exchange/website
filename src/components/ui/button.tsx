import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useTheme } from '../../context/ThemeContext';
import { messina_semibold } from '../../app/fonts';
import Link from "next/link";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm ${messina_semibold.className} ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-[#242424] bg-transparent hover:bg-white hover:bg-opacity-10 hover:text-accent-white",
        outline: {
          light: "border-black text-black hover:bg-white hover:bg-opacity-10",
          dark: "border-[#242424] text-white hover:bg-gray-900 hover:bg-opacity-10"
        },
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        light: "bg-black text-white hover:bg-gray-100",
        dark: "bg-white text-black hover:bg-gray-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href = "", ...props }, ref) => {
    const { theme } = useTheme();
    const Comp = asChild ? Slot : "button";
    const themeVariant = theme === 'light' ? 'light' : 'dark';
    const button = (
      <Comp
        className={cn(buttonVariants({ variant: themeVariant, size, className }))}
        ref={ref}
        {...props}
      />
    );

    return (
      <Link href={href} passHref>
        {button}
      </Link>
    );
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }