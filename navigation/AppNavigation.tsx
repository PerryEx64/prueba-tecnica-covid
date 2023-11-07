import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import EmployeeCreate from '../src/EmployeeCreate'
import EmployeeView from '../src/EmployeeView'
import Home from '../src/Home'
import IconNavigation from '../src/components/IconNavigation'
import { type RootStackParamList } from '../types/navigation'
import EmployeeEdit from '../src/EmployeeEdit'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen
        name='home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='employeeCreate'
        component={EmployeeCreate}
        options={{
          title: 'Crear Empleado',
          headerRight: () => (
            <IconNavigation to={'home'} title='Inicio'>
              <MaterialCommunityIcons name='home' size={28} color='#0277B5' />
            </IconNavigation>
          )
        }}
      />
      <Stack.Screen
        name='employeeView'
        component={EmployeeView}
        options={{
          title: 'Empleados',
          headerRight: () => (
            <IconNavigation to={'employeeCreate'} title='Agregar empleado'>
              <Ionicons name='person-add' size={28} color='#0277B5' />
            </IconNavigation>
          )
        }}
      />

      <Stack.Screen
        name='employeeEdit'
        component={EmployeeEdit}
        options={{
          title: 'Edicion de Empleados',
          headerRight: () => (
            <IconNavigation to={'employeeView'} title='Agregar empleado'>
              <Ionicons name='person-add' size={28} color='#0277B5' />
            </IconNavigation>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
