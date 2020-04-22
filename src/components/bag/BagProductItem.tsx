import React from 'react'
import { Button } from 'react-native-elements'
import { View, Text } from 'react-native'

import { useBagDispatch, useBagState } from '../../contexts/bag-context'
import { Product } from '../../models'
import {
  REMOVE_PRODUCT,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../../constants/actions'

interface Props {
  product: Product
}

export default function CheckoutItem({ product }: Props) {
  const { quantitiesById } = useBagState()
  const dispatch = useBagDispatch()

  function removeFromBag() {
    dispatch({ type: REMOVE_PRODUCT, productId: product.id })
  }

  function incrementQuantity() {
    dispatch({
      type: INCREMENT_QUANTITY,
      productId: product.id,
    })
  }

  function decrementQuantity() {
    if (quantitiesById[product.id] === 1) {
      return removeFromBag()
    }

    dispatch({
      type: DECREMENT_QUANTITY,
      productId: product.id,
    })
  }

  return (
    <View>
      <Text>{product.name}</Text>
      {product.isInPromotion && <Text>R$ {product.promotionalPrice}</Text>}
      {!product.isInPromotion && <Text>R$ {product.price}</Text>}

      <Button
        title="-"
        disabled={quantitiesById[product.id] === 1}
        onPress={decrementQuantity}
      />
      <Text>{quantitiesById[product.id]}</Text>
      <Button title="+" onPress={incrementQuantity} />
      <Button
        icon={{
          name: 'trash',
          type: 'font-awesome',
        }}
        onPress={removeFromBag}
      />
    </View>
  )
}
