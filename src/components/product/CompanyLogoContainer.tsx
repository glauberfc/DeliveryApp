import React from 'react'

export default function CompanyLogoContainer({ companyLogo, className = '' }) {
  return (
    <div
      className={`w-full h-48 overflow-hidden bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${companyLogo})` }}
    />
  )
}

// CompanyLogoContainer.propTypes = {
//   companyLogo: string.isRequired,
//   className: string,
// }
