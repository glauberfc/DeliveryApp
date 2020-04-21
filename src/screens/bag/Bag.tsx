import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import layout from '../../styles/layout'

export default function BagScreen() {
  return (
    <View style={styles.container}>
      <Text>Sacola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
  },
})
