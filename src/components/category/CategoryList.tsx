import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import CategoryCard from './CategoryCard'
import useCategories from '../../hooks/use-categories'

export default function CategoryList() {
  const [categories, isLoading, error] = useCategories()

  if (isLoading) {
    return <Text accessibilityRole="text">Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        keyExtractor={({ id }) => id.toString()}
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // marginHorizontal: 16,
  },
})
