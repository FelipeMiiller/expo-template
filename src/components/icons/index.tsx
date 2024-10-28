//https://github.com/Eronred/radix-ui-react-native-icons/blob/main/src/IconRegistry.tsx
//https://www.radix-ui.com/icons

import { Moon, Sun, type LucideProps as IconProps } from "lucide-react-native"
import React from "react"

export const Icons = {
  sun: ({ size = 24, color = "black", ...props }: IconProps) => {
    return <Sun size={size} color={color} {...props} />
  },
  moon: ({ size = 24, color = "black", ...props }: IconProps) => {
    return <Moon size={size} color={color} {...props} />
  },
}
