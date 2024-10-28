import { type VariantProps, cva } from "class-variance-authority"
import { Text, TouchableOpacity } from "react-native"

import { cn } from "../../lib/utils"

const buttonVariants = cva("flex flex-row items-center justify-center rounded-md", {
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent",
      ghost: "bg-slate-700",
      link: "text-primary underline-offset-4",
    },
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-2",
      lg: "h-12 px-8",
      icon: "h-4 px-2 ",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      outline: "hover:text-accent-foreground border-input  ",
      destructive: "text-destructive-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
      icon: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
}
function Button({ label, labelClasses, className, variant, size, ...props }: ButtonProps) {
  return (
    <TouchableOpacity className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <Text className={cn(buttonTextVariants({ variant, size, className: labelClasses }))}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export const ButtonUi = {
  button: Button,
  Variants: buttonVariants,
  TextVariants: buttonTextVariants,
}
