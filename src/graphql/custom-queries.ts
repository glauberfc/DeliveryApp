export const customCompaniesBySlug = /* GraphQL */ `
  query CustomCompaniesBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companiesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cityId
        categoryId
        _cityId
        _categoryId
        slug
        name
        tagline
        products {
          items {
            id
            name
            isInPromotion
            price
            promotionalPrice
          }
        }
      }
      nextToken
      startedAt
    }
  }
`
