import { useBagDispatch } from '../contexts/bag-context'
import { ADD_PRODUCT } from '../constants/actions'
import { Product } from '../models'
import useCounter from '../hooks/use-counter'

interface Props {
  product: Product
}

export default function ProductItem({ product }: Props) {
  const [
    { counter },
    incrementCounter,
    decrementCounter,
    resetCounter,
  ] = useCounter(1)
  const bagDispatch = useBagDispatch()

  function addProductToBag() {
    if (counter < 1) {
      throw new Error(
        'Você não pode adicionar um produto com uma quantidade menor que 1',
      )
    }

    bagDispatch({ type: ADD_PRODUCT, product, quantity: counter })
    resetCounter()
  }

  return (
    <div>
      <div>{product.name}</div>
      {product.isInPromotion ? (
        <>
          <div>De: {product.price}</div>
          <div>Por: {product.promotionalPrice}</div>
        </>
      ) : (
        <div>Preço: {product.price}</div>
      )}
      <button
        className="p-4 font-bold"
        onClick={decrementCounter}
        disabled={counter === 1}
      >
        -
      </button>
      <label>{counter}</label>
      <button className="p-4 font-bold" onClick={incrementCounter}>
        +
      </button>
      <div>
        <button onClick={addProductToBag} disabled={counter < 1}>
          Adicionar à sacola
        </button>
      </div>
    </div>
  )
}
