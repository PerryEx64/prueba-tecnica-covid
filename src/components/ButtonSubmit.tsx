import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type GestureResponderEvent
} from 'react-native'

interface Props {
  title: string
  onSubmit: (event: GestureResponderEvent) => void
}
const ButtonSubmit = ({ title, onSubmit }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {
      onSubmit()
    }}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSubmit

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF516E',
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
