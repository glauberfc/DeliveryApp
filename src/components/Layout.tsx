import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={'Estregando Esperança'} />

      <main className="max-w-screen-lg min-h-screen relative mt-24 mx-6 lg:mx-auto">
        {children}
      </main>

      <Footer siteTitle={'Estregando Esperança'} />
    </>
  )
}

export default Layout
