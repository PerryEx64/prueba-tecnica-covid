export type NavigationScreen =
  | 'home'
  | 'employeeCreate'
  | 'employeeView'
  | 'employeeEdit'
  | 'stateCriteria'

export type RootStackParamList = {
  [key in NavigationScreen]: undefined | { data: any }
}
