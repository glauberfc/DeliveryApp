import React from 'react'
import { Button, Text } from 'react-native-elements'
import { View } from 'react-native'

import { useBagDispatch } from '../../contexts/bag-context'
import { ADD_PRODUCT } from '../../constants/actions'
import { Product } from '../../models'
import useCounter from '../../hooks/use-counter'

interface Props {
  product: Product
}

export default function PromotionInfo({ product }: Props) {
  const [
    { counter },
    incrementCounter,
    decrementCounter,
    resetCounter,
  ] = useCounter(1)
  const bagDispatch = useBagDispatch()

  function addProductToBag() {
    bagDispatch({ type: ADD_PRODUCT, product, quantity: counter })
    resetCounter()
  }

  return (
    <View>
      <Text>{product.name}</Text>
      {product.isInPromotion ? (
        <>
          <Text>De: {product.price}</Text>
          <Text>Por: {product.promotionalPrice}</Text>
        </>
      ) : (
        <Text>Preço: {product.price}</Text>
      )}
      <Button title="-" onPress={decrementCounter} disabled={counter === 1} />

      <Text>{counter}</Text>
      <Button title="+" onPress={incrementCounter} />
      <Button
        title="Adicionar à sacola"
        onPress={addProductToBag}
        disabled={counter < 1}
      />
    </View>
  )
}
