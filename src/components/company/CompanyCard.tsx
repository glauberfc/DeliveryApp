import React from 'react'
import Link from 'next/link'

import PrimaryButton from '../PrimaryButton'
import CompanyLogoContainer from './CompanyLogoContainer'

export default function CompanyCard({ company }: { company: any }) {
  return (
    <Link href={`/empresa/[slug].tsx`} as={`empresa/${company.slug}`}>
      <a>
        <div className="rounded-lg overflow-hidden shadow-md">
          <CompanyLogoContainer companyLogo="/burger-king.png" />
          <div className="my-4 mx-4">
            <h1 className="w-full text-2xl font-bold text-gray-dark">
              {company.name}
            </h1>
            <h2 className="text-gray text-base">{company.tagline}</h2>

            <div className="mt-3">
              <span className="px-2 py-2 rounded-sm text-gray-dark text-base sm:text-sm italic bg-gray-light">
                2 promoções
              </span>
            </div>

            <PrimaryButton title="Pedir agora" href="https://google.com" />
          </div>
        </div>
      </a>
    </Link>
  )
}

// CompanyCard.propTypes = {
//   company: object,
// }
