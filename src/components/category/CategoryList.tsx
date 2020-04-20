import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import usePromotions from '../../hooks/use-promotions'
import { FlatList } from 'react-native-gesture-handler'
import CategoryCard from './CategoryCard'

export default function PromotionsList() {
  return null
  // const [promotions, isLoading, error] = usePromotions()

  // if (isLoading) {
  //   return <Text accessibilityRole="text">Loading...</Text>
  // }

  // return (
  //   <View>
  //     <FlatList
  //       horizontal
  //       keyExtractor={(item) => item.id}
  //       data={promotions}
  //       renderItem={({ item }) => <CategoryCard category={item} />}
  //     />
  //   </View>
  // )
}

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'space-between',
//     marginHorizontal: 16,
//   },
// })
