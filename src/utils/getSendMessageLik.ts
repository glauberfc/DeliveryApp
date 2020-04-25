import { Company, Product } from '../models'
import {
  PICKUP,
  DELIVERY_AT,
  CREDIT_CARD,
  DEBIT_CARD,
  CASH,
} from '../constants/commonText'
import { displayName } from '../../app.json'

interface Values {
  fullName: string
  deliveryMethod: 'PICKUP' | 'DELIVERY'
  address?: string
  paymentMethod: 'CREDIT' | 'DEBIT' | 'CASH'
  changeCache: string
}

interface Props {
  company: Company
  products: Product[]
  values: Values
  subtotal: number
  quantitiesById
}

export default function getSendMessageLink({
  company,
  products,
  values,
  subtotal,
  quantitiesById,
}: Props) {
  return `https://api.whatsapp.com/send?phone=${
    company.whatsapp
  }&text=${encodeURI(`
      *Pedido realizado através do app ${displayName}*
      ${values.fullName ? `*Nome:* ${values.fullName}` : ''}
      *Método de entrega:* ${
        values.deliveryMethod === 'PICKUP' ? PICKUP : DELIVERY_AT
      }
      ${
        values.deliveryMethod === 'DELIVERY'
          ? `*Endereço:* ${values.address}`
          : ''
      }
      ${
        values.paymentMethod === 'CREDIT'
          ? `*Forma de pagamento:* ${CREDIT_CARD}`
          : ''
      }
      ${
        values.paymentMethod === 'DEBIT'
          ? `*Forma de pagamento:* ${DEBIT_CARD}`
          : ''
      }
      ${values.paymentMethod === 'CASH' ? `*Forma de pagamento:* ${CASH}` : ''}
      ${
        values.paymentMethod === 'CASH'
          ? `*Troco para:* ${values.changeCache}`
          : ''
      }

      ${getFormatedProducts(products, quantitiesById)}
      
      *Subtotal:* R$ ${subtotal}
      *Taxa de entrega:* R$ ${company.deliveryTax}
      *Total:* R$ ${subtotal > 0 ? subtotal + company.deliveryTax : 0}
  `)}`
}

function getFormatedProducts(products: Product[], quantitiesById: []) {
  let productsData = ''

  products.forEach((item) => {
    productsData += `${item.name} | Qtd.: ${quantitiesById[item.id]} | R$ ${
      item.isInPromotion ? item.promotionalPrice : item.price
    }`
  })

  return productsData
}
