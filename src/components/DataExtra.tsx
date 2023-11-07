import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import moment from 'moment'
import React, { useEffect } from 'react'
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Toast from 'react-native-toast-message'
import useUpdate from '../../hooks/useUpdate'
import { DeleteEmployee } from '../../services/employee'
import { type Employees } from '../../types/employees'
import { type RootStackParamList } from '../../types/navigation'
import { type SecondDose, type Vaccine } from '../../types/vaccines'
import { Colors } from '../../utils/colors'
import { Vaccines, handleIcon } from '../../utils/constants'
import LabelText from './LabelText'

const DataExtra = ({ employee }: { employee: Employees }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [view, setView] = React.useState<boolean>(false)
  const [iconExpand, setIconExpand] = React.useState(false)
  const [vaccine, setVaccine] = React.useState<Vaccine>()
  const { updatedNavigation } = useUpdate()

  useEffect(() => {
    const typeVaccine: Vaccine | any = Vaccines.find(
      (vaccine) => vaccine.name === employee.vaccineAdministered
    )

    if (typeVaccine !== undefined) {
      setVaccine(typeVaccine)
    } else {
      setVaccine({
        doseQuantity: 0,
        name: '',
        nextDose: {
          quantity: 0,
          time: 'days'
        }
      })
    }
  }, [])
  const calculateDay = (seconDoseTime: SecondDose): number => {
    if (seconDoseTime.time === 'weeks') {
      return seconDoseTime.quantity * 7
    }

    return Number(seconDoseTime.quantity)
  }

  const handleDateDays = (): any => {
    const dateInit = moment(employee.firstDoseDate, 'DD-MM-YYYY')

    const daysSecondDose = calculateDay(vaccine.nextDose)

    const nuevaFecha = dateInit.add(daysSecondDose, 'days')

    return nuevaFecha.format('DD-MM-YYYY')
  }

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row', gap: 40 }}>
          <View style={{ alignItems: 'center', marginVertical: 5 }}>
            <Image
              style={styles.img}
              source={
                vaccine?.doseQuantity === 1
                  ? handleIcon(0)
                  : employee.firstDoseDate !== '' &&
                    employee.secondDoseDate !== ''
                  ? handleIcon(0)
                  : employee.vaccineAdministered === ''
                  ? handleIcon(2)
                  : employee.firstDoseDate !== ''
                  ? handleIcon(1)
                  : handleIcon(2)
              }
            />

            <Text>
              {employee.firstDoseDate !== '' && employee.secondDoseDate !== ''
                ? 'protegido'
                : employee.vaccineAdministered === ''
                ? 'en riesgo'
                : employee.firstDoseDate !== ''
                ? 'en proceso'
                : ''}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: Colors['primary-50'], flexDirection: 'row' }
            ]}
            onPress={() => {
              setView(!view)
              setIconExpand(!iconExpand)
            }}
          >
            {!iconExpand ? (
              <MaterialIcons name='expand-less' size={24} color='black' />
            ) : (
              <MaterialIcons name='expand-more' size={24} color='black' />
            )}
            <Text>{'...'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{}}>
        {view && (
          <View style={{ marginLeft: 15 }}>
            <LabelText
              label='Fecha primera dosis:'
              text={employee.firstDoseDate}
            />
            {vaccine.doseQuantity > 1 ? (
              <>
                {employee.secondDoseDate === '' ? (
                  <LabelText
                    label='Fecha estimada segunda dosis:'
                    text={handleDateDays()}
                  />
                ) : (
                  <LabelText
                    label='Fecha segunda dosis:'
                    text={employee.secondDoseDate ?? ''}
                  />
                )}
              </>
            ) : (
              <></>
            )}

            <LabelText label='Dosis' text={vaccine?.doseQuantity} />

            <View style={styles.containerActionButtons}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: Colors.warning }]}
                onPress={() => {
                  navigation.navigate('employeeEdit', { data: employee })
                }}
              >
                <AntDesign
                  name='edit'
                  size={24}
                  color='black'
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: Colors.danger }]}
                onPress={() => {
                  Alert.alert(
                    'Deseas eliminar empleado?',
                    'despues ya no podras recuperarlo',
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel'
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          DeleteEmployee(employee.id)
                          updatedNavigation('employeeView')
                          Toast.show({
                            type: 'success',
                            text1: 'Empleado Eliminado',
                            position: 'bottom'
                          })
                        }
                      }
                    ]
                  )
                }}
              >
                <AntDesign
                  name='delete'
                  size={24}
                  color='black'
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  )
}

export default DataExtra

const styles = StyleSheet.create({
  button: {
    padding: 4,
    borderRadius: 5,
    alignSelf: 'center',
    width: 60
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center'
  },
  containerActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 5
  },
  img: {
    width: 25,
    height: 25
  },
  icon: {
    textAlign: 'center'
  }
})
