import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import layout from '../../styles/layout'
import PromotionsList from '../../components/promotion/PromotionsList'
import CategoryList from '../../components/category/CategoryList'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Selecione uma categoria e aproveite as promoções</Text>

      <CategoryList />
      <PromotionsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
  },
})
