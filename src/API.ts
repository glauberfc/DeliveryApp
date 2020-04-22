/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  cityId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  _cityId?: ModelStringInput | null,
  _categoryId?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  name?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  cover?: ModelStringInput | null,
  address?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  whatsapp?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCityInput = {
  id?: string | null,
  name: string,
  uf: string,
  _version?: number | null,
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null,
  uf?: ModelStringInput | null,
  and?: Array< ModelCityConditionInput | null > | null,
  or?: Array< ModelCityConditionInput | null > | null,
  not?: ModelCityConditionInput | null,
};

export type UpdateCityInput = {
  id: string,
  name?: string | null,
  uf?: string | null,
  _version?: number | null,
};

export type DeleteCityInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCompanyInput = {
  id?: string | null,
  cityId: string,
  categoryId: string,
  _cityId: string,
  _categoryId: string,
  slug: string,
  name: string,
  tagline: string,
  logo: string,
  cover?: string | null,
  category?: CategoryInput | null,
  city?: CityInput | null,
  address: string,
  zipCode: string,
  whatsapp: string,
  _version?: number | null,
};

export type CategoryInput = {
  id: string,
  name: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type CityInput = {
  id: string,
  name: string,
  uf: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCompanyConditionInput = {
  cityId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  _cityId?: ModelStringInput | null,
  _categoryId?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  name?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  cover?: ModelStringInput | null,
  address?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  whatsapp?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyInput = {
  id: string,
  cityId?: string | null,
  categoryId?: string | null,
  _cityId?: string | null,
  _categoryId?: string | null,
  slug?: string | null,
  name?: string | null,
  tagline?: string | null,
  logo?: string | null,
  cover?: string | null,
  category?: CategoryInput | null,
  city?: CityInput | null,
  address?: string | null,
  zipCode?: string | null,
  whatsapp?: string | null,
  _version?: number | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  companyId: string,
  companyCategoryId: string,
  menuSection?: string | null,
  company?: CompanyInput | null,
  name: string,
  description: string,
  picture: string,
  price: number,
  isInPromotion: boolean,
  promotionalPrice?: number | null,
  promotionDueDate?: string | null,
  _version?: number | null,
};

export type CompanyInput = {
  id: string,
  cityId: string,
  categoryId: string,
  _cityId: string,
  _categoryId: string,
  slug: string,
  name: string,
  tagline: string,
  logo: string,
  cover?: string | null,
  category?: CategoryInput | null,
  city?: CityInput | null,
  address: string,
  zipCode: string,
  whatsapp: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductConditionInput = {
  companyId?: ModelIDInput | null,
  companyCategoryId?: ModelIDInput | null,
  menuSection?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isInPromotion?: ModelBooleanInput | null,
  promotionalPrice?: ModelFloatInput | null,
  promotionDueDate?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  companyId?: string | null,
  companyCategoryId?: string | null,
  menuSection?: string | null,
  company?: CompanyInput | null,
  name?: string | null,
  description?: string | null,
  picture?: string | null,
  price?: number | null,
  isInPromotion?: boolean | null,
  promotionalPrice?: number | null,
  promotionDueDate?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  uf?: ModelStringInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  companyId?: ModelIDInput | null,
  companyCategoryId?: ModelIDInput | null,
  menuSection?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isInPromotion?: ModelBooleanInput | null,
  promotionalPrice?: ModelFloatInput | null,
  promotionDueDate?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CustomCompaniesBySlugQueryVariables = {
  slug?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomCompaniesBySlugQuery = {
  companiesBySlug:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      products:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          name: string,
          isInPromotion: boolean,
          price: number,
          promotionalPrice: number | null,
        } | null > | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type CreateCityMutation = {
  createCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type UpdateCityMutation = {
  updateCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
  condition?: ModelCityConditionInput | null,
};

export type DeleteCityMutation = {
  deleteCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCitiesQuery = {
  syncCities:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCitysQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitysQuery = {
  listCitys:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCompaniesQuery = {
  syncCompanies:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCompanysQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanysQuery = {
  listCompanys:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      companyId: string,
      companyCategoryId: string,
      menuSection: string | null,
      company:  {
        __typename: "Company",
        id: string,
        cityId: string,
        categoryId: string,
        _cityId: string,
        _categoryId: string,
        slug: string,
        name: string,
        tagline: string,
        logo: string,
        cover: string | null,
        address: string,
        zipCode: string,
        whatsapp: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      name: string,
      description: string,
      picture: string,
      price: number,
      isInPromotion: boolean,
      promotionalPrice: number | null,
      promotionDueDate: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      companyId: string,
      companyCategoryId: string,
      menuSection: string | null,
      company:  {
        __typename: "Company",
        id: string,
        cityId: string,
        categoryId: string,
        _cityId: string,
        _categoryId: string,
        slug: string,
        name: string,
        tagline: string,
        logo: string,
        cover: string | null,
        address: string,
        zipCode: string,
        whatsapp: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      name: string,
      description: string,
      picture: string,
      price: number,
      isInPromotion: boolean,
      promotionalPrice: number | null,
      promotionDueDate: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type CompaniesBySlugQueryVariables = {
  slug?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CompaniesBySlugQuery = {
  companiesBySlug:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type CompaniesByCityByCategoryQueryVariables = {
  cityId?: string | null,
  categoryId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CompaniesByCityByCategoryQuery = {
  companiesByCityByCategory:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type PromotionsByCategoryQueryVariables = {
  companyCategoryId?: string | null,
  promotionalPrice?: ModelFloatKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PromotionsByCategoryQuery = {
  promotionsByCategory:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      companyId: string,
      companyCategoryId: string,
      menuSection: string | null,
      company:  {
        __typename: "Company",
        id: string,
        cityId: string,
        categoryId: string,
        _cityId: string,
        _categoryId: string,
        slug: string,
        name: string,
        tagline: string,
        logo: string,
        cover: string | null,
        address: string,
        zipCode: string,
        whatsapp: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      name: string,
      description: string,
      picture: string,
      price: number,
      isInPromotion: boolean,
      promotionalPrice: number | null,
      promotionDueDate: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCitySubscription = {
  onCreateCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity:  {
    __typename: "City",
    id: string,
    name: string,
    uf: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany:  {
    __typename: "Company",
    id: string,
    cityId: string,
    categoryId: string,
    _cityId: string,
    _categoryId: string,
    slug: string,
    name: string,
    tagline: string,
    logo: string,
    cover: string | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      uf: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    address: string,
    zipCode: string,
    whatsapp: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        companyId: string,
        companyCategoryId: string,
        menuSection: string | null,
        name: string,
        description: string,
        picture: string,
        price: number,
        isInPromotion: boolean,
        promotionalPrice: number | null,
        promotionDueDate: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct:  {
    __typename: "Product",
    id: string,
    companyId: string,
    companyCategoryId: string,
    menuSection: string | null,
    company:  {
      __typename: "Company",
      id: string,
      cityId: string,
      categoryId: string,
      _cityId: string,
      _categoryId: string,
      slug: string,
      name: string,
      tagline: string,
      logo: string,
      cover: string | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      city:  {
        __typename: "City",
        id: string,
        name: string,
        uf: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      address: string,
      zipCode: string,
      whatsapp: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    name: string,
    description: string,
    picture: string,
    price: number,
    isInPromotion: boolean,
    promotionalPrice: number | null,
    promotionDueDate: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};
