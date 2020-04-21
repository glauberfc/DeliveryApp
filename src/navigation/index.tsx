import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon, Text } from 'react-native-elements'
import { View } from 'react-native'

import HomeScreen from '../screens/main/Home'
import { RootStackParamList, PromotionsDetailsProps } from './types'
import { HOME, PROMOTION_DETAILS } from '../constants/navigation'
import PromotionDetails from '../screens/main/PromotionDetails'
import appInfo from '../../app.json'
import { useBagState } from '../contexts/bag-context'

const Stack = createStackNavigator<RootStackParamList>()

export default function AppNavigation() {
  const state = useBagState()

  const defaultNavigationOptions = {
    headerBackTitleVisible: false,
    headerRight: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon type="feather" name="shopping-bag" />
        <Text style={{ marginRight: 8 }}>{state.products?.length || 0}</Text>
      </View>
    ),
  }

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
