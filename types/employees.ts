export interface Employees {
  id: string
  name: string
  jobTitle: string
  vaccineAdministered: string
  firstDoseDate: string | any
  secondDoseDate: string | null // La segunda dosis puede ser opcional
}

export interface EmployeesState {
  id: string
  state: string
  description: string
}
