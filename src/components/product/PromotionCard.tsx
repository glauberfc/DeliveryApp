import React from 'react'
import Link from 'next/link'
import { Card, Text, Button, Icon } from 'react-native-elements'

import PrimaryButton from '../PrimaryButton'
// import CompanyLogoContainer from './CompanyLogoContainer'
import { Product } from '../../models'

interface Props {
  product: Product
}

export default function PromotionCard({ product }: Props) {
  return (
    // <Link href={`/empresa/[slug].tsx`} as={`empresa/${product.id}`}>
    //   <a>
    //     <div className="rounded-lg overflow-hidden shadow-md">
    //       {/* <CompanyLogoContainer companyLogo="/burger-king.png" /> */}
    //       <div className="my-4 mx-4">
    //         <h1 className="w-full text-2xl font-bold text-gray-dark">
    //           {product.name}
    //         </h1>
    //         {/* <h2 className="text-gray text-base">{product.tagline}</h2> */}

    //         <div className="mt-3">
    //           <span className="px-2 py-2 rounded-sm text-gray-dark text-base sm:text-sm italic bg-gray-light">
    //             {/* 2 promoções */}
    //           </span>
    //         </div>

    //         <PrimaryButton title="Pedir agora" href="https://google.com" />
    //       </div>
    //     </div>
    //   </a>
    // </Link>
    <Card image={{ uri: '/burger-king.png' }}>
      <Text style={{ marginBottom: 10 }}>{product.name}</Text>
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Button
        title="VIEW NOW"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
      />
    </Card>
  )
}
