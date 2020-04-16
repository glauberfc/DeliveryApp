import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaCartPlus } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { useBagState } from '../contexts/bag-context'

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props) {
  const { products } = useBagState()
  return (
    <header className="py-4 px-8 fixed z-20 top-0 inset-x-0 border-b-1 border-gray-light bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <Link href="/">
            <a>
              <img
                src="/main-logo-horizontal.png"
                alt={`Logotipo ${siteTitle}`}
                width={150}
              />
            </a>
          </Link>
        </div>

        <div className="flex items-center text-gray text-3xl">
          <FaInstagram className="mr-6 md:mr-4" />
          <FaWhatsapp className="mr-6 md:mr-4" />
          <Link href="/checkout">
            <a className="font-bold text-red-600">
              <FiShoppingBag className="inline-block" /> {products.length}
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
