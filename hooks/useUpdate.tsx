import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import { useContext } from 'react'
import { UpdatedContext } from '../context/UpdatedContext'
import type { NavigationScreen, RootStackParamList } from '../types/navigation'

const useUpdate = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { updated, setUpdated } = useContext(UpdatedContext)

  const updatedNavigation = (to: NavigationScreen) => {
    setUpdated(!updated)
    navigation.navigate(to)
  }
  return { updatedNavigation }
}

export default useUpdate
