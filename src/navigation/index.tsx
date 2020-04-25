import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/main/HomeScreen'
import { RootStackParamList, PromotionsDetailsProps } from './types'
import { HOME, PROMOTION_DETAILS, BAG } from '../constants/navigation'
import PromotionDetailsScreen from '../screens/main/PromotionDetailsScreen'
import appInfo from '../../app.json'
import BagScreen from '../screens/bag/BagScreen'
import BagIcon from '../components/bag/BagIcon'

const Stack = createStackNavigator<RootStackParamList>()

export default function AppNavigation() {
  function defaultNavigationOptions(navigation) {
    return {
      headerBackTitleVisible: false,
      headerRight: () => <BagIcon navigation={navigation} />,
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={({ navigation }: PromotionsDetailsProps) => ({
            title: appInfo.displayName,
            ...defaultNavigationOptions(navigation),
          })}
        />
        <Stack.Screen
          name={PROMOTION_DETAILS}
          component={PromotionDetailsScreen}
          options={({ route, navigation }: PromotionsDetailsProps) => ({
            title: route.params.product.name,
            ...defaultNavigationOptions(navigation),
          })}
        />
        <Stack.Screen
          name={BAG}
          component={BagScreen}
          options={{ title: 'Sacola', headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// function BagIcon({ navigate }) => (
//   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//     <Icon
//       type="feather"
//       name="shopping-bag"
//       onPress={() => navigate(BAG)}
//     />
//     <Text style={{ marginRight: 8 }}>{state.products?.length || 0}</Text>
//   </View>
// ),
