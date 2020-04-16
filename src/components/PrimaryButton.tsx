import React from 'react'

export default function PrimaryButton({
  href,
  title,
  className = '',
  icon = <span></span>,
}) {
  return (
    <a
      className={`flex justify-center items-center mt-4 py-3 text-primary font-semibold text-sm uppercase rounded-md cursor-pointer border-2 border-primary ${className}`}
      href={href}
      onClick={(event) => event.stopPropagation()}
    >
      {icon}
      {title}
    </a>
  )
}

// PrimaryButton.propTypes = {
//   className: string,
//   title: string.isRequired,
//   icon: element,
//   href: string.isRequired,
// }
