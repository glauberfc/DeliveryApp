import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

import React from 'react'
import { registerRootComponent } from 'expo'
import API from '@aws-amplify/api'

import awsConfig from './src/aws-exports'
import AppNavigation from './src/navigation'

API.configure(awsConfig)

export default function App() {
  return <AppNavigation />
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
