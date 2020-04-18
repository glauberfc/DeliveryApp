import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {
  Image,
  Avatar,
  Divider,
  Button,
  Text,
  ListItem,
} from 'react-native-elements'

import layout from '../../styles/layout'
import { PromotionsDetailsProps } from '../../navigation/types'
import { FlatList } from 'react-native-gesture-handler'
import PromotionCard from '../../components/promotion/PromotionCard'

export default function PromotionDetails({ route }: PromotionsDetailsProps) {
  const { product } = route.params
  return (
    <ScrollView style={styles.container}>
      <Image
        containerStyle={{ width: 200, height: 200 }}
        source={{
          uri:
            'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774q=50',
        }}
      />
      <Text h4>{product.name}</Text>
      <Text>O melhor da cidade pelo menor preço</Text>
      <Text>Selectione a quantidade</Text>
      <Text>De {product.price}</Text>
      <Text>Por {product.promotionalPrice}</Text>
      <Button title="+" />
      <Text>1</Text>
      <Button title="-" />
      <Button title="Comprar agora" />

      <Divider />
      <Avatar
        rounded
        size="small"
        icon={{
          type: 'font-awesome',
          name: 'building-o',
        }}
      />
      <Text>Cantinho Paulista</Text>
      <Text>R. João Cachoeira, 1593, Itaim Bibi São Paulo SP 04531-013</Text>
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
