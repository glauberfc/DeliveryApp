import API from '@aws-amplify/api'
import { AppProps } from 'next/app'

import '../src/styles/index.css'
import awsConfig from '../src/aws-exports'
import { BagProvider } from '../src/contexts/bag-context'

API.configure(awsConfig)

function App({ Component, pageProps }: AppProps) {
  return (
    <BagProvider>
      <Component {...pageProps} />
    </BagProvider>
  )
}

export default App
