import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { HOME, PROMOTION_DETAILS } from '../constants/navigation'
import { Product } from '../models'

export type RootStackParamList = {
  [HOME]: undefined
  [PROMOTION_DETAILS]: {
    product: Product
  }
}

export type HomeNavigationProp = StackNavigationProp<RootStackParamList, HOME>

export type PromotionDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  HOME
>

type PromotionDetailsRouteProp = RouteProp<
  RootStackParamList,
  PROMOTION_DETAILS
>

export interface PromotionsDetailsProps {
  route: PromotionDetailsRouteProp
}
