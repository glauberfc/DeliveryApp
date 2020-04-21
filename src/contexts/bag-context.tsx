import React, { useEffect } from 'react'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  STORAGE_KEY,
} from '../constants/actions'
import { DUPLICATE_PRODUCT } from '../constants/messages'
import { Product } from '../../next-env'

interface BagState {
  products: Product[]
  quantitiesById: QuantitiesById
  numberOfItemsInCart: number
  total: number
}

type QuantitiesById = {
  [id: string]: number
}

interface Action {
  type: string
  product?: Product
  productId?: string
  quantity?: number
}

type Dispatch = (action: Action) => void

const BagStateContext = React.createContext<BagState | undefined>(undefined)
const BagDispatchContext = React.createContext<Dispatch | undefined>(undefined)

function bagReducer(state: BagState, action: Action): BagState {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: addProduct(state.products, action),
        quantitiesById: setQuantity(state.quantitiesById, action),
      }
    }

    case REMOVE_PRODUCT: {
      return {
        ...state,
        products: removeProduct(state.products, action),
        quantitiesById: removeQuantityById(state.quantitiesById, action),
      }
    }

    case UPDATE_QUANTITY: {
      return {
        ...state,
        quantitiesById: setQuantity(state.quantitiesById, action),
      }
    }

    case INCREMENT_QUANTITY: {
      return {
        ...state,
        quantitiesById: incrementProductQuantity(state.quantitiesById, action),
      }
    }

    case DECREMENT_QUANTITY: {
      return {
        ...state,
        quantitiesById: decrementProductQuantity(state.quantitiesById, action),
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function addProduct(state: Product[], action: Action) {
  const { product } = action

  state.forEach((item) => {
    if (item.id === product.id) {
      throw new Error(DUPLICATE_PRODUCT)
    }

    return item
  })

  return [...state, product]
}

function removeProduct(state: Product[], action: Action) {
  const { productId } = action

  return state.filter((item) => item.id !== productId)
}

function setQuantity(state: QuantitiesById, action: Action) {
  const { product, quantity } = action

  return {
    ...state,
    [product.id]: quantity,
  }
}

function incrementProductQuantity(state: QuantitiesById, action: Action) {
  const { productId } = action

  return {
    ...state,
    [productId]: state[productId] + 1,
  }
}

function decrementProductQuantity(state: QuantitiesById, action: Action) {
  const { productId } = action

  if (state[productId] === 1) {
    const quantitiesById = { ...state }
    delete quantitiesById[productId]
    return quantitiesById
  }

  return {
    ...state,
    [productId]: state[productId] <= 1 ? 0 : state[productId] - 1,
  }
}

function removeQuantityById(state: QuantitiesById, action: Action) {
  const { productId } = action

  const quantitiesById = { ...state }
  delete quantitiesById[productId]
  return quantitiesById
}

const initialBagState = {
  products: [],
  quantitiesById: {},
  numberOfItemsInCart: 0,
  total: 0,
}

interface BagProviderProps {
  children: React.ReactNode
}

function BagProvider({ children }: BagProviderProps) {
  const bagState = Cache.getItem(STORAGE_KEY) || initialBagState
  const [state, dispatch] = React.useReducer(bagReducer, bagState)

  useEffect(() => {
    Cache.setItem(STORAGE_KEY, state)
  }, [state])

  return (
    <BagStateContext.Provider value={state}>
      <BagDispatchContext.Provider value={dispatch}>
        {children}
      </BagDispatchContext.Provider>
    </BagStateContext.Provider>
  )
}

function useBagState() {
  const context = React.useContext(BagStateContext)

  if (context === undefined) {
    throw new Error('useBagState must be used within a BagProvider')
  }

  return context
}

function useBagDispatch() {
  const context = React.useContext(BagDispatchContext)

  if (context === undefined) {
    throw new Error('useBagDispatch must be used within a BagProvider')
  }

  return context
}

export { BagProvider, useBagState, useBagDispatch }
