import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { HomeTabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { spacing } from "app/theme"

interface ProfileScreenProps extends HomeTabScreenProps<"ProfileScreen"> {}

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  return (
    <Screen style={$root} preset="scroll">
      <Text text="profile" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.lg,
}
