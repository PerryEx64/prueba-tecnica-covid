export type NavigationScreen = 'home' | 'employeeCreate' | 'employeeView'

export type RootStackParamList = {
  [key in NavigationScreen]: undefined
}
