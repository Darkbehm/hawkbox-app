import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from "../screens/HomeScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { ProfileScreen, SettingsScreen } from "app/screens"
import { useHeader } from "app/utils/useHeader"
import { useStores } from "app/models"

export type HomeTabParamList = {
  HomeScreen: undefined
  ProfileScreen: undefined
  SettingsScreen: undefined
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function HomeNavigator() {
  const { bottom } = useSafeAreaInsets()
  const {
    authenticationStore: { logout },
  } = useStores()
  useHeader(
    {
      rightTx: "common.logOut",
      onRightPress: logout,
    },
    [ logout ],
  )
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [ $tabBar, { height: bottom + 70 } ],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <Icon name="account" color={focused && colors.palette.primary500} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => (
            <Icon name="home" color={focused && colors.palette.primary500} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Ajustes",
          tabBarIcon: ({ focused }) => (
            <Icon name="cog" color={focused && colors.palette.primary500} size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.sm,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
