import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { GetEmployees } from '../services/employee'
import { type Employees } from '../types/employees'

const EmployeeView = () => {
  const [employees, setEmployees] = React.useState<Employees[] | any>([])

  useEffect(() => {
    GetEmployees(setEmployees)
  }, [])

  if (employees === null || employees.length === 0) {
    return <Text>No existen empleados</Text>
  }

  return (
    <View>
      <Text>EmployeeView</Text>
    </View>
  )
}

export default EmployeeView
