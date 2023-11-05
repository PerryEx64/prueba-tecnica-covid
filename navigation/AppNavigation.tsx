import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import EmployeeCreate from '../src/EmployeeCreate'
import EmployeeView from '../src/EmployeeView'
import Home from '../src/Home'
import { type RootStackParamList } from '../types/navigation'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='employeeCreate' component={EmployeeCreate} />
      <Stack.Screen name='employeeView' component={EmployeeView} />
    </Stack.Navigator>
  )
}

export default AppNavigation
