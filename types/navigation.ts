export type NavigationScreen =
  | 'home'
  | 'employeeCreate'
  | 'employeeView'
  | 'employeeEdit'

export type RootStackParamList = {
  [key in NavigationScreen]: undefined | { data: any }
}
