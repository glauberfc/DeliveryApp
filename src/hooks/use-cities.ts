import { useState, useEffect } from 'react'
// import { DataStore } from '@aws-amplify/datastore'
import API, { graphqlOperation } from '@aws-amplify/api'

import { ListCitysQuery } from '../API'

export default function useCities() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetchCities()
  }, [])

  async function fetchCities() {
    try {
      // const citiesResult = await DataStore.query(City as any)
      const result = (await API.graphql(
        graphqlOperation(
          `query ListCities {
              listCitys {
                items {
                  id
                  name
                }
              }
            }`,
        ),
      )) as { data: ListCitysQuery }

      setCities(result.data.listCitys.items)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  return [cities, isLoading, error]
}
