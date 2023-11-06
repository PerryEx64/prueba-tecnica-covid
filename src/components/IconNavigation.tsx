import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import {
  type NavigationScreen,
  type RootStackParamList
} from '../../types/navigation'

interface Props {
  children: JSX.Element
  to: NavigationScreen
  title: string
}

const IconNavigation = ({ children, to, title }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { width } = Dimensions.get('window')

  const handleNavigation = () => {
    navigation.navigate(to)
  }
  return (
    <TouchableOpacity onPress={handleNavigation}>
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        {width > 768 && (
          <Text style={{ fontWeight: '600' }}>{title}</Text>
        )}
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default IconNavigation
