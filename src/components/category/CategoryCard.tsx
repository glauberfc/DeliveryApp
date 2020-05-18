import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text } from 'react-native-elements'

import { Category } from '../../models'
import { metrics } from '../../styles'

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  return (
    <View style={styles.container}>
      <Avatar
        size={metrics.categoryIconSize}
        rounded
        source={{ uri: category.icon }}
      />
      <Text style={styles.title}>{category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 20,
  },
  title: {
    marginTop: 8,
  },
})
