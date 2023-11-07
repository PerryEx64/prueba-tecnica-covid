import AntDesign from '@expo/vector-icons/AntDesign'
import React, { useState } from 'react'
import { type UseFormSetValue } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown as DropdownLib } from 'react-native-element-dropdown'
import { type Employees } from '../../types/employees'

export interface DATA {
  label: string
  value: string
}

const Dropdown = ({
  data,
  setValue,
  defaultValue
}: {
  data: DATA[]
  setValue: UseFormSetValue<Employees>
  defaultValue?: string | null
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [valueDrop, setValueDrop] = useState<string | null>(null)

  const renderLabel = () => {
    if (valueDrop != null || isFocus) {
      return <Text style={[styles.label]}>Vacuna Administrada</Text>
    }
    return null
  }
  return (
    <View style={styles.container}>
      {renderLabel()}
      <DropdownLib
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder='Buscar...'
        value={defaultValue !== undefined ? defaultValue : valueDrop}
        onFocus={() => {
          setIsFocus(true)
        }}
        onBlur={() => {
          setIsFocus(false)
        }}
        onChange={(item) => {
          setValueDrop(item.value)
          setValue('vaccineAdministered', item.value)
          setIsFocus(false)
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name='Safety'
            size={20}
          />
        )}
      />
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  container: {
    width: '94%',
    alignSelf: 'center',
    marginTop: 8
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8
  },
  icon: {
    marginRight: 5
  },
  label: {
    position: 'absolute',
    top: -17,
    borderRadius: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    color: '#858585'
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
})
