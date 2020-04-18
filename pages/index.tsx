import API, { graphqlOperation } from '@aws-amplify/api'

import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'
import CompaniesList from '../src/components/company/CompaniesList'
import CustomSelect from '../src/components/CustomSelect'

import { FiltersProvider } from '../src/contexts/filters-context'
import { UPDATE_SELECTED_CITY } from '../src/constants/actions'
import { ListCitysQuery } from '../src/API'
import { City } from '../src/models'
import PromotionsList from '../src/components/promotion/PromotionsList'

interface Props {
  cities: City[]
  isLoadingCities: boolean
  error: boolean
}

export default function IndexPage({ cities, isLoadingCities }: Props) {
  return (
    <FiltersProvider>
      <Layout>
        <SEO title="Home" />

        <section className="grid grid-cols-5 justify-center">
          <h1 className="col-span-5 md:col-span-3 md:col-start-2 text-2xl text-justify md:text-center font-bold">
            Ajudando pessoas neste momento difícil
          </h1>

          <p className="col-span-5 md:col-span-3 md:col-start-2 mt-2 text-lg text-justify md:text-center">
            Além de ajudar as empresas a evitarem maiores prejuízos durante este
            perído, parte do nosso lucro será doado para instituições que cuidam
            de pessoas em grupos de risco para o Covid-19
          </p>

          <a
            className="col-span-5 w-full md:w-auto mt-6 mx-auto mt-2 py-2 md:px-16 rounded-md font-medium border-2 text-center text-base text-primary"
            href="httpps://google.com"
          >
            Saiba mais
          </a>
        </section>

        <section>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-12">
            {isLoadingCities && 'Loading...'}
            {!isLoadingCities && (
              <CustomSelect
                label="Cidades"
                items={cities}
                idKey="id"
                textKey="name"
                actionType={UPDATE_SELECTED_CITY}
                actionKey="cityId"
              />
            )}
            {/* <CustomSelect label="Nichos" items={filters} /> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* <CompaniesList /> */}
            <PromotionsList />
          </div>
        </section>
      </Layout>
    </FiltersProvider>
  )
}

IndexPage.getInitialProps = async function () {
  try {
    const result = (await API.graphql(
      graphqlOperation(
        `query ListCities {
            listCitys {
              items {
                id
                name
              }
            }
          }`,
      ),
    )) as { data: ListCitysQuery }

    return {
      cities: (result.data.listCitys && result.data.listCitys.items) || [],
      isLoading: false,
      error: false,
    }
  } catch (error) {
    console.error(error)
    return {
      cities: [],
      isLoading: false,
      error: true,
    }
  }
}
