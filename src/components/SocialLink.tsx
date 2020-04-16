import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function SocialLink({
  type = '',
  href = '',
  title = '',
  titleClassName = '',
  className = '',
  iconClassName = '',
}) {
  let icon
  let textTypeClass
  const iconClasses = `mr-6 md:mr-3  text-3xl ${iconClassName}`
  const titleClasses = `${titleClassName}`

  switch (type) {
    case 'facebook': {
      icon = <FaFacebook className={iconClasses} />
      textTypeClass = 'text-facebook'
      break
    }

    case 'instagram': {
      icon = <FaInstagram className={iconClasses} />
      textTypeClass = 'text-instagram'
      break
    }

    case 'whatsapp': {
      icon = <FaWhatsapp className={iconClasses} />
      textTypeClass = 'text-whatsapp'
      break
    }

    default: {
      throw new Error('Icon is necessary on SocialLink')
    }
  }

  return (
    <a
      className={`flex justify-center items-center font-semibold cursor-pointer ${textTypeClass} ${className}`}
      href={href}
    >
      {icon}
      {title && <p className={titleClasses}>{title}</p>}
    </a>
  )
}

// SocialLink.propTypes = {
//   title: string,
//   titleClassName: string,
//   className: string,
//   iconClassName: string,
//   href: string.isRequired,
//   type: oneOf(['whatsapp', 'facebook', 'instagram']).isRequired,
// }
