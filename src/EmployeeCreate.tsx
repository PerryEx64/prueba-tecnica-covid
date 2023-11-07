import * as Crypto from 'expo-crypto'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'
import useUpdate from '../hooks/useUpdate'
import { CreateEmployee } from '../services/employee'
import { type Employees } from '../types/employees'
import { Colors } from '../utils/colors'
import { DATAVACCINE, ERRORFORM } from '../utils/constants'
import { RuleJob, RuleName } from '../utils/rules'
import ButtonSubmit from './components/ButtonSubmit'
import Datepicker from './components/Datepicker'
import Dropdown from './components/Dropdown'
import Input from './components/Input'

const EmployeeCreate = () => {
  const UUID = Crypto.randomUUID()
  const { updatedNavigation } = useUpdate()

  const {
    control,
    handleSubmit,
    watch,
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
          rules={RuleName}
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
        {errors.name != null && <Text style={styles.error}>{ERRORFORM}</Text>}

        <Controller
          control={control}
          rules={RuleJob}
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
        {errors.jobTitle != null && (
          <Text style={styles.error}>{ERRORFORM}</Text>
        )}

        <Datepicker
          modePicker='date'
          label='Fecha primera dosis'
          setValue={setValue}
          nameValue='firstDoseDate'
        />

        {watch('firstDoseDate') === '' ? (
          <>
            <Text style={styles.error}>{ERRORFORM}</Text>
          </>
        ) : (
          <></>
        )}

        <Dropdown data={DATAVACCINE} setValue={setValue} />
        {watch('vaccineAdministered') === '' ? (
          <>
            <Text style={styles.error}>{ERRORFORM}</Text>
          </>
        ) : (
          <></>
        )}

        <ButtonSubmit
          onSubmit={handleSubmit(onSubmit)}
          title='Guardar'
          disabled={watch('vaccineAdministered') === ''}
        />
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
  },
  error: {
    fontSize: 12,
    color: Colors.danger,
    marginTop: -20,
    marginLeft: 15,
    fontWeight: '700'
  }
})
