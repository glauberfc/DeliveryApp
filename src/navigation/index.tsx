import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/main/Home'
import { RootStackParamList, PromotionsDetailsProps } from './types'
import { HOME, PROMOTION_DETAILS } from './constants'
import PromotionDetails from '../screens/main/PromotionDetails'
import appInfo from '../../app.json'
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator<RootStackParamList>()

const defaultNavigationOptions = {
  headerBackTitleVisible: false,
  headerRight: () => (
    <Icon
      type="feather"
      name="shopping-bag"
      containerStyle={{ marginRight: 8 }}
    />
  ),
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{
            title: appInfo.displayName,
            ...defaultNavigationOptions,
          }}
        />
        <Stack.Screen
          name={PROMOTION_DETAILS}
          component={PromotionDetails}
          options={({ route }: PromotionsDetailsProps) => ({
            title: route.params.product.name,
            ...defaultNavigationOptions,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
