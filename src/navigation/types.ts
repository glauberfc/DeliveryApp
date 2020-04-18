import { StackNavigationProp } from '@react-navigation/stack'
import { HOME, PROMOTION_DETAILS } from './constants'
import { RouteProp } from '@react-navigation/native'
import { Product } from '../../next-env'

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
