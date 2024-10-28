import { type VariantProps, cva } from "class-variance-authority"
import { Text as TXT } from "react-native"

import { cn } from "../lib/utils"

const TextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary ",
      outline: "hover:text-accent border-input ",
      destructive: "text-destructive ",
      ghost: "text-primary ",
      link: "text-primary  underline",
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

interface TextProps
  extends React.ComponentPropsWithoutRef<typeof TXT>,
    VariantProps<typeof TextVariants> {}
function Textt({ className, variant, size, ...props }: TextProps) {
  return (
    <TXT className={cn(TextVariants({ variant, size, className }))} {...props}>
      {props.children}
    </TXT>
  )
}

export const Text = {
  text: Textt,
  Variants: TextVariants,
}
