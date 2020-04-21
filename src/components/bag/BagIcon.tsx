import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import { BAG } from '../../constants/navigation'
import { useBagState } from '../../contexts/bag-context'

export default function BagIcon({ navigation }) {
  const state = useBagState()

  function goToBagScreen() {
    navigation.navigate(BAG)
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon type="feather" name="shopping-bag" onPress={goToBagScreen} />
      <Text style={{ marginRight: 8 }}>{state.products?.length || 0}</Text>
    </View>
  )
}
