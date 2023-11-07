import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import {
  FlatList,
  SafeAreaView,
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
    return (
      <View>
        <Text style={styles.txtEmpty}>No existen empleados</Text>
        <Text style={styles.txtSubEmpty}>
          Agrega un empleado, precionando el boton del lado superior derecho
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          horizontal={false}
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
    </SafeAreaView>
  )
}

export default EmployeeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  contentContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  containerList: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 6,
    gap: 5,
    marginBottom: 20
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
  },
  txtEmpty: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    color: Colors['secundary-200']
  },
  txtSubEmpty: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
    color: Colors.danger,
    maxWidth: '70%',
    alignSelf: 'center'
  }
})
