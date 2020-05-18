import { useEffect, useReducer } from 'react'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { useFiltersState } from '../contexts/filters-context'
import {
  PromotionsByCategoryQuery as Query1,
  PromotionsByCategoryQueryVariables as QueryVariables1,
  ListProductsQuery as Query2,
  ListProductsQueryVariables as QueryVariables2,
} from '../API'
import { promotionsByCategory, listProducts } from '../graphql/queries'
import { Product } from '../models'
import { IDLE, LOADING, RESOLVED, REJECTED } from '../constants/status'
import { promotions } from '../mock'

interface State {
  promotions: Product[]
  status: Status
  error: any
}

enum Status {
  IDLE,
  LOADING,
  RESOLVED,
  REJECTED,
}

interface Action {
  type: string
  categoryId?: string
  promotions?: Product[]
  error?: any
}

function promotionsReducer(state: State, action: Action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        status: LOADING,
      }
    }

    case RESOLVED: {
      return {
        ...state,
        status: RESOLVED,
        promotions: action.promotions,
      }
    }

    case REJECTED: {
      return {
        ...state,
        status: REJECTED,
        error: action.error,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

interface UsePromotionsReturn extends State {
  isLoading: boolean
  isResolved: boolean
  isRejected: boolean
}

export default function usePromotions(): UsePromotionsReturn {
  const { categoryId } = useFiltersState()
  const [state, dispatch] = useReducer(promotionsReducer, {
    promotions: [],
    status: IDLE,
    error: null,
  })

  useEffect(() => {
    async function fetchCompaniesPromotions() {
      try {
        dispatch({ type: LOADING })
        const promotions = await fetchPromotions(categoryId)
        console.log(promotions)
        dispatch({ type: RESOLVED, promotions })
      } catch (error) {
        console.log(error)
        dispatch({ type: REJECTED, error })
      }
    }

    fetchCompaniesPromotions()
  }, [categoryId])

  return {
    isLoading: state.status === IDLE || state.status === LOADING,
    isResolved: state.status === RESOLVED,
    isRejected: state.status === REJECTED,
    ...state,
  }
}

async function fetchPromotions(categoryId?: string) {
  if (categoryId) {
    // const { data } = (await API.graphql(
    //   graphqlOperation(promotionsByCategory, {
    //     companyCategoryId: categoryId,
    //     filter: {
    //       isInPromotion: { eq: true },
    //     },
    //   } as QueryVariables1),
    // )) as GraphQLResult<Query1>

    // return data.promotionsByCategory.items
    console.log('promotions', promotions)
    let p = []
    setTimeout(() => (p = promotions), 1000)
    return p
  }

  // const { data } = (await API.graphql(
  //   graphqlOperation(listProducts, {
  //     filter: {
  //       isInPromotion: { eq: true },
  //     },
  //   } as QueryVariables2),
  // )) as GraphQLResult<Query2>

  // return data.listProducts.items
  let p = []
  setTimeout(() => (p = promotions), 1000)
  return p
}
