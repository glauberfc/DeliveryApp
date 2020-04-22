import React from 'react'
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import { Button, Input, CheckBox, Divider } from 'react-native-elements'
import { Formik, useFormik } from 'formik'

import layout from '../../styles/layout'
import { useBagState, useBagDispatch } from '../../contexts/bag-context'
import BagProductItem from '../../components/bag/BagProductItem'
import { CLEAR_BAG } from '../../constants/actions'

interface InitialValues {
  fullName: string
  pickUp: boolean
  deliver: boolean
  address?: string
  paymentMethod: 1 | 2 | 3
  changeCache: string
}

export default function BagScreen() {
  const { company, products, subtotal } = useBagState()
  const dispatch = useBagDispatch()
  const { handleChange, handleSubmit, setFieldValue, values } = useFormik<
    InitialValues
  >({
    initialValues: {
      fullName: undefined,
      pickUp: undefined,
      deliver: undefined,
      address: undefined,
      paymentMethod: undefined,
      changeCache: undefined,
    },
    onSubmit: (values) => {
      console.log(values)
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

      <CheckBox title="Retirar no local" checked={true} />
      <CheckBox title="Entregar no endereço abaixo" checked={true} />
      <Text>Endereço completo</Text>
      <Input
        placeholder=""
        value={values.address}
        onChangeText={(text) => setFieldValue('address', text)}
      />

      <Text>Forma de pagamento</Text>
      <CheckBox title="Cartão de crédito" checked={true} />
      <CheckBox title="Cartão de débito" checked={true} />
      <CheckBox title="Dinheiro" checked={true} />
      <Text>Troco para</Text>
      <Input
        placeholder=""
        value={values.changeCache}
        onChangeText={(text) => setFieldValue('changeCache', text)}
      />

      <Button
        containerStyle={{ marginTop: 16 }}
        title="Enviar pedido"
        disabled={subtotal < company.minDeliveryPrice}
        onPress={() => handleSubmit()}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
  },
})
