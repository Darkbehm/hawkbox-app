import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { HomeTabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SettingsScreenProps extends HomeTabScreenProps<"SettingsScreen"> {}

export const SettingsScreen: FC<SettingsScreenProps> = observer(function SettingsScreen() {
  return (
    <Screen style={$root} preset="scroll">
      <Text text="settings" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.lg,
}
