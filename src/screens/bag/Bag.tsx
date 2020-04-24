import React from 'react'
import { View, StyleSheet, Text, ScrollView, Linking } from 'react-native'
import { Button, Input, CheckBox, Divider } from 'react-native-elements'
import { Formik, useFormik } from 'formik'

import layout from '../../styles/layout'
import { useBagState, useBagDispatch } from '../../contexts/bag-context'
import BagProductItem from '../../components/bag/BagProductItem'
import { CLEAR_BAG } from '../../constants/actions'
import { displayName } from '../../../app.json'

interface InitialValues {
  fullName: string
  deliveryMethod: 'pickup' | 'delivery'
  address?: string
  paymentMethod: 'credit' | 'debit' | 'cash'
  changeCache: string
}

export default function BagScreen() {
  const { company, products, subtotal, quantitiesById } = useBagState()
  const dispatch = useBagDispatch()

  const { handleSubmit, setFieldValue, values } = useFormik<InitialValues>({
    initialValues: {
      fullName: undefined,
      deliveryMethod: undefined,
      address: undefined,
      paymentMethod: undefined,
      changeCache: undefined,
    },
    onSubmit: async (values) => {
      await Linking.openURL(
        `https://api.whatsapp.com/send?phone=${
          company.whatsapp
        }&text=${encodeURI(`
            *Pedido realizado através do app ${displayName}*

            ${getFormatedProducts()}
            
            Subtotal: R$ ${subtotal}
            Taxa de entrega: R$ ${company.deliveryTax}
            Total: R$ ${subtotal > 0 ? subtotal + company.deliveryTax : 0}
        `)}`,
      )
    },
  })

  function getFormatedProducts() {
    let productsData = ''

    products.forEach((item) => {
      productsData += `${quantitiesById[item.id]} - ${item.name}: R$ ${
        item.isInPromotion ? item.promotionalPrice : item.price
      }`
    })

    return productsData
  }

  function clearBag() {
    dispatch({ type: CLEAR_BAG })
  }

  if (!company) {
    return (
      <View style={styles.container}>
        <Text>Sua sacola está vazia</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text>{company.name}</Text>

      <Divider />

      {products.map((item) => (
        <BagProductItem key={item.id} product={item} />
      ))}
      {products.length > 0 && (
        <Button
          containerStyle={{ marginTop: 8 }}
          title="Esvaziar sacola"
          onPress={clearBag}
        />
      )}

      <Text>Subtotal: R$ {subtotal}</Text>
      <Text>Taxa de entrega: R$ {company.deliveryTax}</Text>
      <Text>Total: R$ {subtotal > 0 ? subtotal + company.deliveryTax : 0}</Text>

      <Text>Entrega feita apenas para pedidos mínimos de R$ 10,00</Text>

      <Divider />
      <Text>Seu nome</Text>
      <Input
        placeholder=""
        value={values.fullName}
        onChangeText={(text) => setFieldValue('fullName', text)}
      />

      <CheckBox
        title="Retirar no local"
        checked={values.deliveryMethod === 'pickup'}
        onPress={() => setFieldValue('deliveryMethod', 'pickup')}
      />
      <CheckBox
        title="Entregar no endereço abaixo"
        checked={values.deliveryMethod === 'delivery'}
        onPress={() => setFieldValue('deliveryMethod', 'delivery')}
      />
      <Text>Endereço completo</Text>
      <Input
        placeholder="Rua, número, bairro"
        value={values.address}
        disabled={values.deliveryMethod === 'pickup'}
        onChangeText={(text) => setFieldValue('address', text)}
      />

      <Text>Forma de pagamento</Text>
      <CheckBox
        title="Cartão de crédito"
        checked={values.paymentMethod === 'credit'}
        onPress={() => setFieldValue('paymentMethod', 'credit')}
      />
      <CheckBox
        title="Cartão de débito"
        checked={values.paymentMethod === 'debit'}
        onPress={() => setFieldValue('paymentMethod', 'debit')}
      />
      <CheckBox
        title="Dinheiro"
        checked={values.paymentMethod === 'cash'}
        onPress={() => setFieldValue('paymentMethod', 'cash')}
      />
      <Text>Troco para</Text>
      <Input
        placeholder="R$ 20,00"
        value={values.changeCache}
        disabled={values.paymentMethod !== 'cash'}
        onChangeText={(text) => setFieldValue('changeCache', text)}
      />

      <Button
        containerStyle={{ marginTop: 16 }}
        title="Enviar pedido"
        disabled={subtotal < company.minDeliveryPrice}
        onPress={handleSubmit}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
  },
})
