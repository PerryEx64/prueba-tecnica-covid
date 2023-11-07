import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type GestureResponderEvent
} from 'react-native'
import { Colors } from '../../utils/colors'

interface Props {
  title: string
  onSubmit: (event: GestureResponderEvent) => void
  disabled?: boolean
}
const ButtonSubmit = ({ title, onSubmit, disabled }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            disabled === true ? Colors.secundary : Colors['secundary-100']
        }
      ]}
      onPress={onSubmit}
      disabled={disabled}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSubmit

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 5,
    width: '60%',
    alignSelf: 'center'
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center'
  }
})
