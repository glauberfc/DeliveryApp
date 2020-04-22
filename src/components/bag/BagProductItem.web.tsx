import { FaTrash } from 'react-icons/fa'

import { useBagDispatch, useBagState } from '../../contexts/bag-context'
import { Product } from '../../models'
import {
  REMOVE_PRODUCT,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../../constants/actions'

interface Props {
  product: Product
}

export default function CheckoutItem({ product }: Props) {
  const { quantitiesById } = useBagState()
  const dispatch = useBagDispatch()

  function removeFromBag() {
    dispatch({ type: REMOVE_PRODUCT, productId: product.id })
  }

  function incrementQuantity() {
    dispatch({
      type: INCREMENT_QUANTITY,
      productId: product.id,
    })
  }

  function decrementQuantity() {
    if (quantitiesById[product.id] === 1) {
      return removeFromBag()
    }

    dispatch({
      type: DECREMENT_QUANTITY,
      productId: product.id,
    })
  }

  return (
    <li>
      <span>{product.name}</span>
      <button
        className="p-4 font-bold"
        disabled={quantitiesById[product.id] === 1}
        onClick={decrementQuantity}
      >
        -
      </button>
      <span className="mr-4 ml-4">{quantitiesById[product.id]}</span>
      <button className="p-4 font-bold" onClick={incrementQuantity}>
        +
      </button>
      <button onClick={removeFromBag}>
        <FaTrash />
      </button>
    </li>
  )
}
