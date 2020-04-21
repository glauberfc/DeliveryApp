import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import usePromotions from '../../hooks/use-promotions'
import PromotionCard from './PromotionCard'
import layout from '../../styles/layout'

export default function PromotionsList() {
  const { promotions, isLoading, isResolved, isRejected } = usePromotions()

  if (isLoading) {
    return <Text accessibilityRole="text">Loading...</Text>
  }

  if (isRejected) {
    return <Text>Erro ao tentar carregar as promoções</Text>
  }

  if (isResolved) {
    return (
      <View>
        <FlatList
          columnWrapperStyle={styles.container}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={promotions}
          renderItem={({ item }) => <PromotionCard product={item} />}
          ListEmptyComponent={
            <View>
              <Text>Nenhuma promoção encontrada</Text>
            </View>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
})
