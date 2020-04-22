// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
      id
      name
      uf
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
      id
      name
      uf
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
      id
      name
      uf
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
        _version
        _deleted
        _lastChangedAt
      }
      city {
        id
        name
        uf
        _version
        _deleted
        _lastChangedAt
      }
      address
      zipCode
      whatsapp
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
        _version
        _deleted
        _lastChangedAt
      }
      city {
        id
        name
        uf
        _version
        _deleted
        _lastChangedAt
      }
      address
      zipCode
      whatsapp
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
        _version
        _deleted
        _lastChangedAt
      }
      city {
        id
        name
        uf
        _version
        _deleted
        _lastChangedAt
      }
      address
      zipCode
      whatsapp
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
          _version
          _deleted
          _lastChangedAt
        }
        city {
          id
          name
          uf
          _version
          _deleted
          _lastChangedAt
        }
        address
        zipCode
        whatsapp
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      name
      description
      picture
      price
      isInPromotion
      promotionalPrice
      promotionDueDate
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
          _version
          _deleted
          _lastChangedAt
        }
        city {
          id
          name
          uf
          _version
          _deleted
          _lastChangedAt
        }
        address
        zipCode
        whatsapp
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      name
      description
      picture
      price
      isInPromotion
      promotionalPrice
      promotionDueDate
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
          _version
          _deleted
          _lastChangedAt
        }
        city {
          id
          name
          uf
          _version
          _deleted
          _lastChangedAt
        }
        address
        zipCode
        whatsapp
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      name
      description
      picture
      price
      isInPromotion
      promotionalPrice
      promotionDueDate
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
