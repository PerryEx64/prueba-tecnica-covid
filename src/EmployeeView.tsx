import React, { useContext, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { GetEmployees } from '../services/employee'
import { type Employees } from '../types/employees'
import DataExtra from './components/DataExtra'
import LabelText from './components/LabelText'
import { UpdatedContext } from '../context/UpdatedContext'

const EmployeeView = () => {
  const [employees, setEmployees] = React.useState<Employees[]>([])
  const { updated } = useContext(UpdatedContext)

  useEffect(() => {
    GetEmployees(setEmployees)
  }, [updated])

  if (employees === null || employees.length === 0) {
    return <Text>No existen empleados</Text>
  }

  return (
    <View style={styles.container}>
      <Text>{'Criterios evaluacion'}</Text>
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
    shadowColor: '#000',
    borderRadius: 8,
    padding: 5,
    gap: 10
  },
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})
