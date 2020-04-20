import { useState, useEffect } from 'react'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { useFiltersState } from '../contexts/filters-context'
import {
  PromotionsByCategoryQuery as Query,
  PromotionsByCategoryQueryVariables as QueryVariables,
} from '../API'
import { promotionsByCategory } from '../graphql/queries'
import { Product } from '../models'

interface ReturnType {
  promotions: Product[]
  isLoading: boolean
  error: any
}

export default function usePromotions(): ReturnType {
  const [promotions, setPromotions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const { categoryId } = useFiltersState()

  useEffect(() => {
    async function fetchCompaniesPromotions() {
      try {
        setIsLoading(true)
        const promotions = await fetchPromotions(categoryId)
        setPromotions(promotions)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCompaniesPromotions()
  }, [categoryId])

  return { promotions, isLoading, error }
}

async function fetchPromotions(categoryId?: string) {
  const result = (await API.graphql(
    graphqlOperation(promotionsByCategory, {
      filter: {
        companyCategoryId: { eq: categoryId },
        isInPromotion: { eq: true },
      },
    } as QueryVariables),
  )) as GraphQLResult<Query>

  return result.data.promotionsByCategory.items
}
