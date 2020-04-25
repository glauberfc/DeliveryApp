import React from 'react'
import { View, StyleSheet, Text, ScrollView, Linking } from 'react-native'
import { Button, Input, CheckBox, Divider } from 'react-native-elements'
import { useFormik } from 'formik'

import layout from '../../styles/layout'
import { useBagState, useBagDispatch } from '../../contexts/bag-context'
import BagProductItem from '../../components/bag/BagProductItem'
import { CLEAR_BAG } from '../../constants/actions'
import getSendMessageLink from '../../utils/getSendMessageLik'

interface InitialValues {
  fullName: string
  deliveryMethod: 'PICKUP' | 'DELIVERY'
  address?: string
  paymentMethod: 'CREDIT' | 'DEBIT' | 'CASH'
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
        getSendMessageLink({
          company,
          products,
          values,
          subtotal,
          quantitiesById,
        }),
      )
    },
  })

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
        checked={values.deliveryMethod === 'PICKUP'}
        onPress={() => setFieldValue('deliveryMethod', 'PICKUP')}
      />
      <CheckBox
        title="Entregar no endereço abaixo"
        checked={values.deliveryMethod === 'DELIVERY'}
        onPress={() => setFieldValue('deliveryMethod', 'DELIVERY')}
      />
      <Text>Endereço completo</Text>
      <Input
        placeholder="Rua, número, bairro"
        value={values.address}
        disabled={values.deliveryMethod === 'PICKUP'}
        onChangeText={(text) => setFieldValue('address', text)}
      />

      <Text>Forma de pagamento</Text>
      <CheckBox
        title="Cartão de crédito"
        checked={values.paymentMethod === 'CREDIT'}
        onPress={() => setFieldValue('paymentMethod', 'CREDIT')}
      />
      <CheckBox
        title="Cartão de débito"
        checked={values.paymentMethod === 'DEBIT'}
        onPress={() => setFieldValue('paymentMethod', 'DEBIT')}
      />
      <CheckBox
        title="Dinheiro"
        checked={values.paymentMethod === 'CASH'}
        onPress={() => setFieldValue('paymentMethod', 'CASH')}
      />
      <Text>Troco para</Text>
      <Input
        placeholder="R$ 20,00"
        value={values.changeCache}
        disabled={values.paymentMethod !== 'CASH'}
        onChangeText={(text) => setFieldValue('changeCache', text)}
      />

      <Button
        containerStyle={{ marginTop: 16 }}
        title="Enviar pedido"
        disabled={
          subtotal < company.minDeliveryPrice ||
          !values.deliveryMethod ||
          !values.paymentMethod
        }
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
