import { useState, useEffect } from 'react'
import API, { graphqlOperation } from '@aws-amplify/api'

import { useFiltersState } from '../contexts/filters-context'
import {
  ListCompanysQuery,
  CompaniesByCityByCategoryQuery as CBCBCQuery,
  CompaniesByCityByCategoryQueryVariables as CBCBCQueryVariables,
} from '../API'
import { listCompanys, companiesByCityByCategory } from '../graphql/queries'

export default function useCompanies() {
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const { cityId } = useFiltersState()

  useEffect(() => {
    async function fetchCompanies() {
      try {
        setIsLoading(true)
        const companies = await fetchCompaniesByCity(cityId)
        setCompanies(companies)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }

    fetchCompanies()
  }, [cityId])

  return [companies, isLoading, error]
}

async function fetchCompaniesByCity(cityId?: string) {
  if (!cityId) {
    const result = (await API.graphql(graphqlOperation(listCompanys))) as {
      data: ListCompanysQuery
    }

    return result.data.listCompanys.items
  }

  const result = (await API.graphql(
    graphqlOperation(companiesByCityByCategory, {
      cityId,
    } as CBCBCQueryVariables),
  )) as {
    data: CBCBCQuery
  }

  return result.data.companiesByCityByCategory.items
}
