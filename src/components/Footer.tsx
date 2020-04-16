import Link from 'next/link'

export default function Footer({ siteTitle }) {
  return (
    <footer className="mt-12 py-6 px-8 border-t-1 border-gray-light">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center max-w-screen-xl mx-auto">
        <div className="mx-auto md:mx-0">
          <img
            src="/main-logo-horizontal-black.png"
            alt="Logotipo Entregando Esperança"
            width={150}
          />
        </div>

        <div className="col-span-2 mt-6 md:mt-0 text-center">
          <Link href="#">
            <a className="text-primary">Quem somos</a>
          </Link>

          <span className="mx-4 text-gray">|</span>

          <Link href="#">
            <a className="text-primary">Como funciona</a>
          </Link>

          <span className="mx-4 text-gray">|</span>

          <Link href="#">
            <a className="text-primary">Instagram</a>
          </Link>

          <span className="mx-4 text-gray">|</span>

          <Link href="#">
            <a className="text-primary">WhatsApp</a>
          </Link>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p>
            {siteTitle} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

// Footer.propTypes = {
//   siteTitle: string,
// }

Footer.defaultProps = {
  siteTitle: ``,
}
