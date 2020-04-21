import React from 'react'
import { Card, Text, Avatar } from 'react-native-elements'
import Router from 'next/router'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Product } from '../../models'
import { Platform } from 'react-native'
import { HomeNavigationProp } from '../../navigation/types'
import { PROMOTION_DETAILS } from '../../constants/navigation'

interface Props {
  product: Product
}

export default function PromotionCard({ product }: Props) {
  const navigation = useNavigation<HomeNavigationProp>()

  return (
    <TouchableOpacity
      containerStyle={{ width: '48%', marginHorizontal: 0 }}
      onPress={() => {
        if (Platform.OS === 'web') {
          return Router.push('/empresa/[slug]', '/empresa/big-burger')
        }

        return navigation.navigate(PROMOTION_DETAILS, {
          product,
        })
      }}
    >
      <Card
        image={{ uri: product.picture }}
        containerStyle={{ marginHorizontal: 0 }}
      >
        <Text style={{ marginBottom: 10 }}>{product.name}</Text>
        <Text style={{ marginBottom: 10 }}>{product.description}</Text>
        <Text style={{ marginBottom: 10 }}>R$ {product.price}</Text>
        <Text style={{ marginBottom: 10 }}>R$ {product.promotionalPrice}</Text>
        <Avatar
          rounded
          size="small"
          source={{ uri: product.company.logo }}
          icon={{
            type: 'font-awesome',
            name: 'building-o',
          }}
        />
        <Text style={{ marginBottom: 10 }}>{product.company.name}</Text>
      </Card>
    </TouchableOpacity>
  )
}
