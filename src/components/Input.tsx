import React from 'react'
import {
  type NativeSyntheticEvent,
  TextInput,
  type TextInputFocusEventData,
  View,
  Text,
  StyleSheet
} from 'react-native'

interface Props {
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onChange: ((text: string) => void) | undefined
  value: string | undefined
  label: string
  placeholder: string
}

const Input = ({ onBlur, onChange, value, label, placeholder }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={styles.textInput}
        textAlign='center'
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginLeft: 15,
    marginBottom: 2,
    color: '#858585'
  },
  textInput: {
    height: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    borderWidth: 0.5,
    borderRadius: 8,
    shadowRadius: 2,
    marginHorizontal: 10
  }
})
