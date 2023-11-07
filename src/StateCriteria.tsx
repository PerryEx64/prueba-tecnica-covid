import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { States } from '../utils/constants'
import LabelText from './components/LabelText'

const StateCriteria = () => {
  type conditionType = 0 | 1 | 2
  const handleIcon = (condition: conditionType) => {
    const required: Record<conditionType, any> = {
      0: require('../assets/icons/protegido.png'),
      1: require('../assets/icons/proceso.png'),
      2: require('../assets/icons/riesgo.png')
    }

    return required[condition]
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <FlatList
        data={States}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={{ width: '70%' }}>
            <View style={styles.container}>
              <Image style={styles.img} source={handleIcon(item.img)} />
              <Text style={styles.textTxt}>{item.state}</Text>
            </View>
            <LabelText label={'Descripcion:'} text={item.description} />
          </View>
        )}
      />
    </View>
  )
}

export default StateCriteria

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  labelTxt: {
    fontSize: 14,
    fontWeight: '600'
  },
  textTxt: {
    fontSize: 16,
    fontWeight: '600'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 40
  },
  img: {
    width: 45,
    height: 45
  }
})
