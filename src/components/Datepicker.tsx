import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import React, { useState } from 'react'
import { type UseFormSetValue } from 'react-hook-form'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { type Employees } from '../../types/employees'
import useDate from '../../hooks/useDate'

type Mode = 'date' | 'time'
type DoseDate = 'firstDoseDate' | 'secondDoseDate'
interface Props {
  modePicker: Mode
  label: string
  nameValue: DoseDate
  setValue: UseFormSetValue<Employees>
  value?: string | null
  edit?: boolean
}

const Datepicker = ({
  modePicker,
  label,
  setValue,
  nameValue,
  value,
  edit
}: Props) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState<Mode>()
  const [show, setShow] = useState(false)
  const { dateFull } = useDate(date)

  const onChange = (event: any, selectedDate: Date | any) => {
    const currentDate = selectedDate
    const dateFull = moment(currentDate).format('DD-MM-YYYY')
    setShow(false)
    setDate(currentDate)
    setValue(nameValue, dateFull)
  }

  const showMode = (currentMode: Mode) => {
    setShow(true)
    setMode(currentMode)
  }

  const handleDatepicker = () => {
    showMode(modePicker)
  }

  return (
    <>
      <View>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity style={styles.picker} onPress={handleDatepicker}>
          <Text style={{ textAlign: 'center', color: '#858585' }}>
            {edit === true ? value : dateFull}
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  )
}

export default Datepicker

const styles = StyleSheet.create({
  picker: {
    height: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    borderWidth: 0.5,
    borderRadius: 8,
    shadowRadius: 2,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  label: {
    fontSize: 12,
    marginLeft: 15,
    marginBottom: 2,
    color: '#858585'
  }
})
