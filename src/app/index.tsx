import { ThemeToggle, Text } from "@components/index"
import { BadgeUi, ButtonUi, CardUi, DialogUi, DropDownUi } from "@components/ui"
import { CircleUser, CreditCard, Settings } from "lucide-react-native"
import { TouchableOpacity, View } from "react-native"

export default function Index() {
  return (
    <View className="flex items-center flex-1 pt-6 bg-background">
      <View className="flex gap-4">
        <Text.text className="text-3xl">Dark Mode</Text.text>

        <View className="flex-row items-center justify-between gap-2">
          <ThemeToggle.button />
          <ThemeToggle.switch />

          <ButtonUi.button label="Button" variant="default" />
        </View>
        <View className="flex flex-row items-center justify-between gap-2">
          <BadgeUi.Badge label="New" />
          <BadgeUi.Badge label="Archived" variant="secondary" />
          <BadgeUi.Badge label="Error" variant="destructive" />
          <BadgeUi.Badge label="Accepted" variant="success" />
        </View>

        <View className="flex gap-2">
          <Text.text className="text-xl font-semibold text-primary">Card</Text.text>
          <CardUi.Card>
            <CardUi.CardHeader>
              <CardUi.CardTitle>Accelerate UI</CardUi.CardTitle>
              <CardUi.CardDescription>Enter a new development experience</CardUi.CardDescription>
            </CardUi.CardHeader>
            <CardUi.CardContent>
              <Text.text className="text-base text-primary">
                Sleek, easy to use components to build your next app faster.
              </Text.text>
            </CardUi.CardContent>
            <CardUi.CardFooter>
              <Text.text className="text-sm text-muted-foreground">Inspired by shadcn/ui</Text.text>
            </CardUi.CardFooter>
          </CardUi.Card>
        </View>

        <View className="flex gap-2 pt-2">
          <Text.text className="text-xl font-semibold text-primary">Dialog</Text.text>
          <DialogUi.Dialog>
            <DialogUi.DialogTrigger>
              <ButtonUi.button label="Open Dialog" />
            </DialogUi.DialogTrigger>
            <DialogUi.DialogContent>
              <View className="flex gap-4">
                <Text.text className="text-xl font-semibold text-primary">Dialog Content</Text.text>
                <Text.text className="text-primary">Tap outside the dialog to close it.</Text.text>
              </View>
            </DialogUi.DialogContent>
          </DialogUi.Dialog>
        </View>

        <DropDownUi.DropDown>
          <DropDownUi.DropDownTrigger>
            <ButtonUi.button label="Open Dropdown" />
          </DropDownUi.DropDownTrigger>
          <DropDownUi.DropDownContent>
            <DropDownUi.DropDownLabel labelTitle="My Account" />
            <DropDownUi.DropDownItemSeparator />
            <DropDownUi.DropDownItem>
              <TouchableOpacity className="flex flex-row items-center gap-2">
                <CircleUser size={18} color="#fff" />
                <Text.text className="text-xl text-primary">Profile</Text.text>
              </TouchableOpacity>
            </DropDownUi.DropDownItem>
            <DropDownUi.DropDownItem>
              <TouchableOpacity className="flex flex-row items-center gap-2">
                <Settings size={18} color="#fff" />
                <Text.text className="text-xl text-primary">Settings</Text.text>
              </TouchableOpacity>
            </DropDownUi.DropDownItem>
            <DropDownUi.DropDownItem>
              <TouchableOpacity className="flex flex-row items-center gap-2">
                <CreditCard size={18} color="#fff" />
                <Text.text className="text-xl text-primary">Billing</Text.text>
              </TouchableOpacity>
            </DropDownUi.DropDownItem>
            <DropDownUi.DropDownLabel labelTitle="Team" />
            <DropDownUi.DropDownItemSeparator />
            <DropDownUi.DropDownItem>
              <TouchableOpacity className="flex flex-row items-center gap-2">
                <CreditCard size={18} color="#fff" />
                <Text.text className="text-xl text-primary">Billing</Text.text>
              </TouchableOpacity>
            </DropDownUi.DropDownItem>
          </DropDownUi.DropDownContent>
        </DropDownUi.DropDown>
      </View>
    </View>
  )
}
