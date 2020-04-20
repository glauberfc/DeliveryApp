import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

import React from 'react'
import { registerRootComponent } from 'expo'
import API from '@aws-amplify/api'

import awsConfig from './src/aws-exports'
import AppNavigation from './src/navigation'
import { FiltersProvider } from './src/contexts/filters-context'
import { BagProvider } from './src/contexts/bag-context'

API.configure(awsConfig)

export default function App() {
  return (
    <BagProvider>
      <FiltersProvider>
        <AppNavigation />
      </FiltersProvider>
    </BagProvider>
  )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
