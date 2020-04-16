/// <reference types="next" />
/// <reference types="next/types/global" />

import { CategoryInput, CityInput, CreateProductInput } from './src/API'

type CustomCompany = {
  id: string
  cityId: string
  categoryId: string
  _cityId: string
  _categoryId: string
  slug: string
  name: string
  tagline: string
  category?: CategoryInput | null
  city?: CityInput | null
  products?: {
    items: Products | null
  }
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

type Products = Array<{
  __typename: 'Product'
  id: string
  companyId: string
  name: string
  isInPromotion: boolean
  price: number
  promotionalPrice: number | null
} | null>

type Product = {
  __typename: 'Product'
  id: string
  companyId: string
  name: string
  isInPromotion: boolean
  price: number
  promotionalPrice: number | null
}
