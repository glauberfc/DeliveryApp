import React from 'react'
import { View, Text } from 'react-native'

import { Category } from '../../models'
import { Avatar } from 'react-native-elements'

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  return (
    <View>
      <Avatar
        rounded
        icon={{
          name: 'restaurant',
          type: 'ionicons',
        }}
      />
      <Text>Comida</Text>
    </View>
  )
}
