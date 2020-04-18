import usePromotions from '../../hooks/use-promotions'
import PromotionCard from './PromotionCard'

export default function PromotionsList() {
  const [promotions, isLoading, error] = usePromotions()

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <>
      {promotions.map((product) => (
        <PromotionCard key={product.id} product={product} />
      ))}
    </>
  )
}
