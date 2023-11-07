import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './navigation/AppNavigation'
import { UpdatedContext, type ValuesContext } from './context/UpdatedContext'
import React from 'react'
import Toast from 'react-native-toast-message'

export default function App () {
  const [updated, setUpdated] = React.useState<boolean>(false)

  const values: ValuesContext = {
    updated,
    setUpdated
  }

  return (
    <UpdatedContext.Provider value={values}>
      <NavigationContainer>
        <AppNavigation />
        <Toast />
      </NavigationContainer>
    </UpdatedContext.Provider>
  )
}
