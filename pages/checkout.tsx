import Router from 'next/router'
import { IoMdArrowRoundBack } from 'react-icons/io'

import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'
import { useBagState } from '../src/contexts/bag-context'
import BagProductItem from '../src/components/bag/BagProductItem'

export default function CheckoutPage() {
  const { products } = useBagState()

  return (
    <Layout>
      <SEO title="Checkout" />
      <div
        className="w-auto text-xl text-gray cursor-pointer"
        onClick={Router.back}
      >
        <IoMdArrowRoundBack className="inline-block text-3xl" /> Voltar
      </div>
      <h1 className="font-bold">Checkout:</h1>
      <ul>
        {products.map((item) => (
          <BagProductItem key={item.id} product={item} />
        ))}
      </ul>
      <div>
        <a
          href={`https://api.whatsapp.com/send?phone=888&text=${encodeURI(
            '*Hello World*',
          )}`}
        >
          Finalizar pedido
        </a>
      </div>
    </Layout>
  )
}
