import Router from 'next/router'
import ErrorPage from 'next/error'
import { IoMdArrowRoundBack } from 'react-icons/io'
import API, { graphqlOperation } from '@aws-amplify/api'

import Layout from '../../src/components/Layout'
import SEO from '../../src/components/SEO'
import CompanyLogoContainer from '../../src/components/company/CompanyLogoContainer'
import PrimaryButton from '../../src/components/PrimaryButton'
import SocialLink from '../../src/components/SocialLink'
import {
  CompaniesBySlugQueryVariables as CBSQueryVariables,
  CompaniesBySlugQuery as CBSQuery,
} from '../../src/API'
import { customCompaniesBySlug } from '../../src/graphql/custom-queries'
import ProductItem from '../../src/components/ProductItem'
import { CustomCompany } from '../../next-env'
import { NextPageContext } from 'next'

interface Props {
  company: CustomCompany
  error: {
    statusCode: number
  }
}

export default function CompanyPage({ company, error }: Props) {
  if (error) {
    return <ErrorPage statusCode={500} />
  }

  if (!company) {
    return <ErrorPage statusCode={404} title="Empresa não encontrada" />
  }

  return (
    <Layout>
      <SEO title={company.name} />

      <div
        className="w-auto text-xl text-gray cursor-pointer"
        onClick={Router.back}
      >
        <IoMdArrowRoundBack className="inline-block text-3xl" /> Voltar
      </div>

      <div className="grid grid-cols-12 gap-8 mt-4">
        <div className="col-span-12 md:col-span-3">
          <CompanyLogoContainer
            className="md:w-40 md:h-40 mx-auto md:mx-0 rounded-md"
            companyLogo="/burger-king.png"
          />
          <h2 className="mt-4 text-3xl font-bold text-center md:text-left leading-tight text-gray-dark">
            {company.name}
          </h2>
          <h3 className="text-gray text-center md:text-left">
            {company.tagline}
          </h3>
          <div className="mt-4">
            <p className="text-gray text-center md:text-left">
              Rua João Marciel, 1234, Centro - Russas - CE
            </p>

            <div className="flex justify-between md:justify-start mt-4">
              <SocialLink type="facebook" href="https://google.com" />
              <SocialLink type="instagram" href="https://google.com" />
              <SocialLink type="whatsapp" href="https://google.com" />
            </div>
          </div>

          <PrimaryButton title="Pedir agora" href="https://google.com" />
        </div>

        <div className="col-span-12 md:col-span-9 mt-12 md:mt-0">
          <div className="overflow-hidden rounded-md">
            <img
              src="/company-cover.jpg"
              alt={`Foto de capa - ${company.name}`}
            />
          </div>

          <p>
            adsfsadf asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf asdfsfasdf
            asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf
            asdfsfasdf asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf
            asdadsasdsdfsdfsdfdsf asdfsfasdf asdfsfasdfadsfsadf
            asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf asdfsfasdf
            asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf
            asdfsfasdf asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf
            asdadsasdsdfsdfsdfdsf asdfsfasdf asdfsfasdfadsfsadf
            asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf asdfsfasdf
            asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf
            asdfsfasdf asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf
            asdadsasdsdfsdfsdfdsf asdfsfasdf asdfsfasdfadsfsadf
            asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf asdfsfasdf
            asdfsfasdfadsfsadf asdadsasdsdfsdfsdfdsfasf asdadsasdsdfsdfsdfdsf
            asdfsfasdf asdfsfasdf
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        {company.products.items &&
          company.products.items.map((product) => (
            <div className="col-span-6" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
      </div>
    </Layout>
  )
}

CompanyPage.getInitialProps = async function (context: NextPageContext) {
  const { slug } = context.query
  try {
    const { data } = (await API.graphql(
      graphqlOperation(customCompaniesBySlug, {
        slug,
      } as CBSQueryVariables),
    )) as { data: CBSQuery }

    return {
      company: data.companiesBySlug.items[0],
      error: null,
    }
  } catch (error) {
    console.error(error)
    return {
      company: null,
      error,
    }
  }
}
