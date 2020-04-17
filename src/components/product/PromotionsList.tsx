import Link from 'next/link'

import usePromotions from '../../hooks/use-promotions'
import ProductCard from './ProductCard'
import PromotionCard from './PromotionCard'

export default function PromotionsList() {
  const [promotions, isLoading, error] = usePromotions()

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <>
      {promotions.map((product) => (
        // <Link href={`/empresa/[slug].tsx`} as={`empresa/${product.id}`}>
        //   <a>
        <PromotionCard key={product.id} product={product} />
        // </a>
        // </Link>
      ))}
    </>
  )
}
