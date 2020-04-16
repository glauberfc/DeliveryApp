import { useState, useEffect } from 'react'
import API, { graphqlOperation } from '@aws-amplify/api'

import { useFiltersState } from '../contexts/filters-context'
import {
  ListCompanysQuery,
  ListProductsQuery,
  ListProductsQueryVariables,
  ListCompanysQueryVariables,
} from '../API'
import { listCompanys, listProducts } from '../graphql/queries'
import { Product } from '../../next-env'

export default function usePromotions(): [Product[], boolean, any] {
  const [promotions, setPromotions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  // const { cityId } = useFiltersState()

  useEffect(() => {
    async function fetchCompaniesPromotions() {
      try {
        setIsLoading(true)
        const promotions = await fetchPromotions()
        setPromotions(promotions)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }

    fetchCompaniesPromotions()
  }, [])

  return [promotions, isLoading, error]
}

async function fetchPromotions(cityId?: string) {
  if (!cityId) {
    const result = (await API.graphql(
      graphqlOperation(listProducts, {
        filter: {
          companyCategoryId: { eq: '090683e5-b4ac-4ef5-b6a7-ff40b53cdc46' },
          and: { isInPromotion: { eq: true } },
        },
      }),
    )) as {
      data: ListProductsQuery
    }

    return result.data.listProducts.items
  }

  // const result = (await API.graphql(
  //   graphqlOperation(promotionsByCityByCategory, {
  //     cityId,
  //   } as ListCompanysQueryVariables),
  // )) as {
  //   data: ListCompanysQuery
  // }

  // return result.data.promotionsByCityByCategory.items
}
