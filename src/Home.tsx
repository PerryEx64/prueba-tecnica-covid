import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { CreateTableEmployee } from '../services/employee'
import { type RootStackParamList } from '../types/navigation'

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const handleNavigation = () => {
    navigation.navigate('employeeView')
  }

  React.useEffect(() => {
    CreateTableEmployee()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{'Control de vacunacion COVID-19'}</Text>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonTitle}>{'Empezar'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 35
  },
  logo: {
    height: 220,
    width: 220
  },
  button: {
    backgroundColor: '#FF516E',
    padding: 6,
    borderRadius: 5,
    width: '50%'
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center'
  },
  title: {
    fontSize: 18,
    color: '#0277B5',
    fontWeight: '600',
    textAlign: 'center'
  }
})
