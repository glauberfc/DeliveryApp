import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  STORAGE_KEY,
  UPDATE_INITIAL_STATE,
  CLEAR_BAG,
  SEND_ORDER,
} from '../constants/actions'
import {
  ERROR_PRODUCT_QUANTITY,
  ERROR_DUPLICATE_PRODUCT,
} from '../constants/messages'
import { Product, Company } from '../models'

interface BagState {
  company?: Company
  products: Product[]
  quantitiesById: QuantitiesById
  subtotal: number
  status: 'IDLE' | 'SENDING'
}

type QuantitiesById = {
  [id: string]: number
}

interface Action {
  type: string
  product?: Product
  productId?: string
  quantity?: number
  initialState?: BagState
}

type Dispatch = (action: Action) => void

interface BagProviderProps {
  children: React.ReactNode
}

const initialBagState: BagState = {
  company: null,
  products: [],
  quantitiesById: {},
  subtotal: 0,
  status: 'IDLE',
}

const BagStateContext = React.createContext<BagState | undefined>(undefined)
const BagDispatchContext = React.createContext<Dispatch | undefined>(undefined)

function bagReducer(state: BagState, action: Action): BagState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const company = addCompany(state.company, action)
      const products = addProduct(state.products, action)
      const quantitiesById = setQuantity(state.quantitiesById, action)
      const subtotal = calculateTotal(products, quantitiesById)

      return {
        ...state,
        company,
        products,
        quantitiesById,
        subtotal,
      }
    }

    case REMOVE_PRODUCT: {
      const products = removeProduct(state.products, action)
      const quantitiesById = removeQuantityById(state.quantitiesById, action)
      const subtotal = calculateTotal(products, quantitiesById)

      return {
        ...state,
        company: products.length > 0 ? state.company : null,
        products,
        quantitiesById,
        subtotal,
      }
    }

    case UPDATE_QUANTITY: {
      const quantitiesById = setQuantity(state.quantitiesById, action)
      const subtotal = calculateTotal(state.products, quantitiesById)

      return {
        ...state,
        company: state.products.length > 0 ? state.company : null,
        quantitiesById,
        subtotal,
      }
    }

    case INCREMENT_QUANTITY: {
      const quantitiesById = incrementProductQuantity(
        state.quantitiesById,
        action,
      )
      const subtotal = calculateTotal(state.products, quantitiesById)

      return {
        ...state,
        quantitiesById,
        subtotal,
      }
    }

    case DECREMENT_QUANTITY: {
      const quantitiesById = decrementProductQuantity(
        state.quantitiesById,
        action,
      )
      const subtotal = calculateTotal(state.products, quantitiesById)

      return {
        ...state,
        company: state.products.length > 0 ? state.company : null,
        quantitiesById,
        subtotal,
      }
    }

    case CLEAR_BAG: {
      return { ...initialBagState }
    }

    case UPDATE_INITIAL_STATE: {
      return action.initialState
    }

    case SEND_ORDER: {
      return {
        ...state,
        status: 'SENDING',
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function addCompany(company: Company, action: Action) {
  if (!company) {
    const { product } = action

    return product.company
  }

  return company
}

function addProduct(products: Product[], action: Action) {
  const { product, quantity } = action

  if (quantity < 1) {
    throw new Error(ERROR_PRODUCT_QUANTITY)
  }

  products.forEach((item) => {
    if (item.id === product.id) {
      throw new Error(ERROR_DUPLICATE_PRODUCT)
    }

    return item
  })

  return [...products, product]
}

function removeProduct(products: Product[], action: Action) {
  const { productId } = action

  return products.filter((item) => item.id !== productId)
}

function setQuantity(quantities: QuantitiesById, action: Action) {
  const { product, quantity } = action

  return {
    ...quantities,
    [product.id]: quantity,
  }
}

function calculateTotal(products: Product[], quantitiesById: QuantitiesById) {
  const subtotalAmount = products.reduce((prevValue, currProduct) => {
    prevValue += currProduct.isInPromotion
      ? currProduct.promotionalPrice * quantitiesById[currProduct.id]
      : currProduct.price * quantitiesById[currProduct.id]

    return prevValue
  }, 0)

  return subtotalAmount
}

function incrementProductQuantity(quantities: QuantitiesById, action: Action) {
  const { productId } = action

  return {
    ...quantities,
    [productId]: quantities[productId] + 1,
  }
}

function decrementProductQuantity(quantities: QuantitiesById, action: Action) {
  const { productId } = action

  if (quantities[productId] === 1) {
    const quantitiesById = { ...quantities }
    delete quantitiesById[productId]
    return quantitiesById
  }

  return {
    ...quantities,
    [productId]: quantities[productId] - 1,
  }
}

function removeQuantityById(quantities: QuantitiesById, action: Action) {
  const { productId } = action

  const quantitiesById = { ...quantities }
  delete quantitiesById[productId]
  return quantitiesById
}

function BagProvider({ children }: BagProviderProps) {
  const [state, dispatch] = React.useReducer(bagReducer, initialBagState)

  useEffect(() => {
    async function getStorageItem() {
      const initialState = await AsyncStorage.getItem(STORAGE_KEY)

      if (initialState) {
        dispatch({
          type: UPDATE_INITIAL_STATE,
          initialState: JSON.parse(initialState),
        })
      }
    }

    getStorageItem()
  }, [])

  useEffect(() => {
    async function setStorageItem() {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }

    setStorageItem()
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
