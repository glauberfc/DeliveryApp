import { useState, useEffect } from 'react'
// import { DataStore } from '@aws-amplify/datastore'
import API, { graphqlOperation } from '@aws-amplify/api'

// import { ListCategorysQuery } from '../API'
import { categories as mockedCategories } from '../mock'

export default function useCategories() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    try {
      //   // const categoriesResult = await DataStore.query(Category as any)
      //   const result = (await API.graphql(
      //     graphqlOperation(
      //       `query ListCategories {
      //           listCategories {
      //             items {
      //               id
      //               name
      //             }
      //           }
      //         }`,
      //     ),
      //   )) as { data: ListCategorysQuery }

      //   setCategories(result.data.listCategorys.items)

      setTimeout(() => {
        setCategories(mockedCategories)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  return [categories, isLoading, error]
}
