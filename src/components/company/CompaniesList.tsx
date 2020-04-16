import React from 'react'

import CompanyCard from './CompanyCard'
import useCompanies from '../../hooks/use-companies'

export default function CompaniesList() {
  const [companies, isLoading, error] = useCompanies()

  if (isLoading) {
    return 'Loading...'
  }

  return companies.map((companyItem) => (
    <CompanyCard key={companyItem.id} company={companyItem} />
  ))
}
