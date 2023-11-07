import * as Crypto from 'expo-crypto'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'
import { CreateEmployee } from '../services/employee'
import { type Employees } from '../types/employees'
import { Colors } from '../utils/colors'
import { ERRORFORM } from '../utils/constants'
import ButtonSubmit from './components/ButtonSubmit'
import Datepicker from './components/Datepicker'
import Input from './components/Input'
import useUpdate from '../hooks/useUpdate'
import Toast from 'react-native-toast-message'

const EmployeeCreate = () => {
  const UUID = Crypto.randomUUID()
  const { updatedNavigation } = useUpdate()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Employees>({
    defaultValues: {
      id: UUID,
      name: '',
      firstDoseDate: '',
      jobTitle: '',
      secondDoseDate: '',
      vaccineAdministered: ''
    }
  })

  const onSubmit = (data: Employees) => {
    CreateEmployee(data)
    updatedNavigation('employeeView')
    Toast.show({
      type: 'success',
      text1: 'Empleado creado',
      position: 'bottom'
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'FORMULARIO CREAR EMPLEADO'}</Text>

      <View style={styles.content}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='ingresa nombre completo'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              label='Nombre del empleado'
            />
          )}
          name='name'
        />
        {errors.name != null && <Text>{ERRORFORM}</Text>}

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='ingresa puesto laboral'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              label='Puesto Laboral'
            />
          )}
          name='jobTitle'
        />
        {errors.jobTitle != null && <Text>{ERRORFORM}</Text>}

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='ingresa vacuna administrada'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              label='Vacuna Administrada'
            />
          )}
          name='vaccineAdministered'
        />
        {errors.jobTitle != null && <Text>{ERRORFORM}</Text>}

        <Datepicker
          modePicker='date'
          label='Fecha primera dosis'
          setValue={setValue}
          nameValue='firstDoseDate'
        />
        <ButtonSubmit onSubmit={handleSubmit(onSubmit)} title='Guardar' />
      </View>
    </View>
  )
}

export default EmployeeCreate

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
    color: Colors['primary-200'],
    marginTop: 20,
    marginBottom: 20
  },
  content: {
    gap: 25,
    width: '95%',
    alignSelf: 'center'
  }
})
