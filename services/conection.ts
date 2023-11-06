import * as SQlite from 'expo-sqlite'
import { Platform } from 'react-native'

const NAMEDATABASE = 'vacunacion'
export const NAMETABLEEMPLOYEE = 'employee'

export function openDatabase () {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => {}
        }
      }
    }
  }

  const db = SQlite.openDatabase('bd.vacunacion')
  return db
}
