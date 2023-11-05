export interface Employees {
  name: string
  jobTitle: string
  vaccineAdministered: string
  firstDoseDate: Date
  secondDoseDate: Date | null // La segunda dosis puede ser opcional
}

export interface EmployeesState {
  id: string
  state: string
  description: string
}
