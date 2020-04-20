// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
      }
      nextToken
      startedAt
    }
  }
`
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
    }
  }
`
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
      startedAt
    }
  }
`
export const syncCities = /* GraphQL */ `
  query SyncCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        uf
      }
      nextToken
      startedAt
    }
  }
`
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      name
      uf
    }
  }
`
export const listCitys = /* GraphQL */ `
  query ListCitys(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        uf
      }
      nextToken
      startedAt
    }
  }
`
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        logo
        cover
        category {
          id
          name
        }
        city {
          id
          name
          uf
        }
        address
        zipCode
        products {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      cityId
      categoryId
      _cityId
      _categoryId
      slug
      name
      tagline
      logo
      cover
      category {
        id
        name
      }
      city {
        id
        name
        uf
      }
      address
      zipCode
      products {
        items {
          id
          companyId
          companyCategoryId
          menuSection
          name
          description
          picture
          price
          isInPromotion
          promotionalPrice
          promotionDueDate
        }
        nextToken
        startedAt
      }
    }
  }
`
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cityId
        categoryId
        _cityId
        _categoryId
        slug
        name
        tagline
        logo
        cover
        category {
          id
          name
        }
        city {
          id
          name
          uf
        }
        address
        zipCode
        products {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        companyId
        companyCategoryId
        menuSection
        company {
          id
          cityId
          categoryId
          _cityId
          _categoryId
          slug
          name
          tagline
          logo
          cover
          address
          zipCode
        }
        name
        description
        picture
        price
        isInPromotion
        promotionalPrice
        promotionDueDate
      }
      nextToken
      startedAt
    }
  }
`
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      companyId
      companyCategoryId
      menuSection
      company {
        id
        cityId
        categoryId
        _cityId
        _categoryId
        slug
        name
        tagline
        logo
        cover
        category {
          id
          name
        }
        city {
          id
          name
          uf
        }
        address
        zipCode
        products {
          nextToken
          startedAt
        }
      }
      name
      description
      picture
      price
      isInPromotion
      promotionalPrice
      promotionDueDate
    }
  }
`
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyId
        companyCategoryId
        menuSection
        company {
          id
          cityId
          categoryId
          _cityId
          _categoryId
          slug
          name
          tagline
          logo
          cover
          address
          zipCode
        }
        name
        description
        picture
        price
        isInPromotion
        promotionalPrice
        promotionDueDate
      }
      nextToken
      startedAt
    }
  }
`
export const companiesBySlug = /* GraphQL */ `
  query CompaniesBySlug(
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
        logo
        cover
        category {
          id
          name
        }
        city {
          id
          name
          uf
        }
        address
        zipCode
        products {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`
export const companiesByCityByCategory = /* GraphQL */ `
  query CompaniesByCityByCategory(
    $cityId: ID
    $categoryId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companiesByCityByCategory(
      cityId: $cityId
      categoryId: $categoryId
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
        logo
        cover
        category {
          id
          name
        }
        city {
          id
          name
          uf
        }
        address
        zipCode
        products {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`
export const promotionsByCategory = /* GraphQL */ `
  query PromotionsByCategory(
    $companyCategoryId: ID
    $promotionalPrice: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promotionsByCategory(
      companyCategoryId: $companyCategoryId
      promotionalPrice: $promotionalPrice
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        companyCategoryId
        menuSection
        company {
          id
          cityId
          categoryId
          _cityId
          _categoryId
          slug
          name
          tagline
          logo
          cover
          address
          zipCode
        }
        name
        description
        picture
        price
        isInPromotion
        promotionalPrice
        promotionDueDate
      }
      nextToken
      startedAt
    }
  }
`
