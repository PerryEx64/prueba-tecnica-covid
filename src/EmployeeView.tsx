import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { UpdatedContext } from '../context/UpdatedContext'
import { GetEmployees } from '../services/employee'
import { type Employees } from '../types/employees'
import { type RootStackParamList } from '../types/navigation'
import { Colors } from '../utils/colors'
import DataExtra from './components/DataExtra'
import LabelText from './components/LabelText'

const EmployeeView = () => {
  const [employees, setEmployees] = React.useState<Employees[]>([])
  const { updated } = useContext(UpdatedContext)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    GetEmployees(setEmployees)
  }, [updated])

  if (employees === null || employees.length === 0) {
    return <Text>No existen empleados</Text>
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('stateCriteria')
        }}
      >
        <Text style={styles.buttonTitle}>{'Criterios de estados'}</Text>
      </TouchableOpacity>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={styles.containerList}>
            <View style={styles.contentList}>
              <LabelText label='Empleado' text={item.name} />
              <LabelText label='Vacuna' text={item.vaccineAdministered} />
            </View>
            <DataExtra employee={item} />
          </View>
        )}
      />
    </View>
  )
}

export default EmployeeView

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    width: '90%',
    alignSelf: 'center',
    gap: 20,
    marginTop: 20
  },
  containerList: {
    borderWidth: 0.7,
    borderRadius: 8,
    padding: 5,
    gap: 10
  },
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: Colors['secundary-100'],
    padding: 4,
    borderRadius: 5,
    width: '40%',
    marginTop: 10,
    marginLeft: 10
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center'
  }
})
