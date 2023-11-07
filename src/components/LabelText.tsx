import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string
  text: string | number
}
const LabelText = ({ label, text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTxt}>{label}</Text>
      <Text style={styles.textTxt}>{text}</Text>
    </View>
  )
}

export default LabelText

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10
  },
  labelTxt: {
    fontSize: 14,
    fontWeight: '600'
  },
  textTxt: {
    fontSize: 13,
    fontWeight: '400'
  }
})
