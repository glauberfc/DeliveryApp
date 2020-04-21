import React from 'react'
import { StyleSheet, ScrollView, FlatList } from 'react-native'
import { Image, Avatar, Divider, Text, ListItem } from 'react-native-elements'

import layout from '../../styles/layout'
import { PromotionsDetailsProps } from '../../navigation/types'
import PromotionInfo from '../../components/promotion/PromotionInfo'

export default function PromotionDetailsScreen({
  route,
}: PromotionsDetailsProps) {
  const { product } = route.params

  return (
    <ScrollView style={styles.container}>
      <Image
        containerStyle={{ width: 200, height: 200 }}
        source={{ uri: product.picture }}
      />
      <PromotionInfo product={product} />

      <Divider />
      <Avatar
        rounded
        size="small"
        source={{ uri: product.company.logo }}
        icon={{
          type: 'font-awesome',
          name: 'building-o',
        }}
      />
      <Text>{product.company.name}</Text>
      <Text>{product.company.address}</Text>
      <Text>CEP: {product.company.zipCode}</Text>
      <Text>Aberto</Text>

      <Divider />
      <Text h4>Outros produtos</Text>
      {/**
       * Tab com cardápio
       */}
      <Text>Mais promoções</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={[
          {
            id: '1',
            name: 'Promo 1',
          },
          {
            id: '2',
            name: 'Promo 2',
          },
        ]}
        horizontal
        renderItem={({ item }) => (
          <ListItem
            leftAvatar={
              <Avatar
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774q=50',
                }}
              />
            }
            title={item.name}
          />
        )}
      />
      <Text>Refrigerantes</Text>
      <Text>Sucos</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
  },
})
