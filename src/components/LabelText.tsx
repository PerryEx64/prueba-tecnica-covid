import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string | JSX.Element
  text: string | number | undefined
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
    fontWeight: '600',
    maxWidth: 220
  },
  textTxt: {
    fontSize: 13,
    fontWeight: '400'
  }
})
