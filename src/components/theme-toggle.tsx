import { cva } from "class-variance-authority"
import { useColorScheme } from "nativewind"
import { TouchableOpacity } from "react-native"

import { Icons } from "./icons"
import { Text } from "./text"
import { ButtonUi, SwitchUi } from "./ui"
import { cn } from "../lib/utils"
import { theme } from "../styles/theme"

function Button({ text = null }: { text?: string | null }) {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <TouchableOpacity
      className={cn(
        ButtonUi.Variants({
          size: "sm",

          className: cn(
            text !== null ? "flex flex-row items-center justify-between flex-1  px-6 " : "  "
          ),
        })
      )}
      onPress={() => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark")
      }}
    >
      <Text.text variant="ghost">{text}</Text.text>
      {colorScheme === "dark" ? (
        <Icons.sun
          className={cn(ButtonUi.TextVariants({ size: "sm" }))}
          color={theme.dark.foreground}
        />
      ) : (
        <Icons.moon
          className={cn(ButtonUi.TextVariants({ size: "sm" }))}
          color={theme.light.foreground}
        />
      )}
    </TouchableOpacity>
  )
}

export function Switch() {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <SwitchUi
      onValueChange={(value: boolean) => setColorScheme(value === true ? "light" : "dark")}
      value={colorScheme !== "dark"}
    />
  )
}

export const ThemeToggle = {
  button: Button,
  switch: Switch,
}
