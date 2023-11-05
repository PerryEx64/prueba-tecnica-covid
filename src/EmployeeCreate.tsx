import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { type RootStackParamList } from '../types/navigation'

const EmployeeCreate = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const handleNavigation = () => {
    navigation.navigate('home')
  }
  return (
    <View>
      <Text>EmployeeCreate</Text>
      <Button title='prueba' onPress={handleNavigation} />
    </View>
  )
}

export default EmployeeCreate
