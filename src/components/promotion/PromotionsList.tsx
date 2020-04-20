import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import usePromotions from '../../hooks/use-promotions'
import PromotionCard from './PromotionCard'
import { FlatList } from 'react-native-gesture-handler'
import layout from '../../styles/layout'

export default function PromotionsList() {
  const [promotions, isLoading, error] = usePromotions()

  if (isLoading) {
    return <Text accessibilityRole="text">Loading...</Text>
  }

  // if (status === 'error') {
  //   return <Text>Erro ao tentar carregar as promoções</Text>
  // }

  return (
    <View>
      <FlatList
        columnWrapperStyle={styles.container}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={promotions}
        renderItem={({ item }) => <PromotionCard product={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
})
