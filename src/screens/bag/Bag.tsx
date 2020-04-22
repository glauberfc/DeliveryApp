import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import layout from '../../styles/layout'
import { useBagState } from '../../contexts/bag-context'
import BagProductItem from '../../components/bag/BagProductItem'
import { Button, Input, CheckBox, Divider } from 'react-native-elements'

export default function BagScreen() {
  const { products } = useBagState()

  return (
    <ScrollView style={styles.container}>
      <Text>Nome da Empresa</Text>

      <Divider />

      {products.map((item) => (
        <BagProductItem key={item.id} product={item} />
      ))}
      {products.length > 0 && (
        <Button containerStyle={{ marginTop: 8 }} title="Esvaziar sacola" />
      )}

      <Text>Subtotal</Text>
      <Text>Taxa de entrega</Text>
      <Text>Total</Text>

      <Text>Entrega feita apenas para pedidos mínimos de R$ 10,00</Text>

      <Divider />
      <Text>Seu nome</Text>
      <Input placeholder="" />

      <CheckBox title="Retirar no local" checked={true} />
      <CheckBox title="Entregar no endereço abaixo" checked={true} />
      <Text>Endereço completo</Text>
      <Input placeholder="" />

      <Text>Forma de pagamento</Text>
      <CheckBox title="Cartão de crédito" checked={true} />
      <CheckBox title="Cartão de débito" checked={true} />
      <CheckBox title="Dinheiro" checked={true} />
      <Text>Troco para</Text>
      <Input placeholder="" />

      <Button containerStyle={{ marginTop: 16 }} title="Enviar pedido" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
  },
})
