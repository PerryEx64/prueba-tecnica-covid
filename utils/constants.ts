import * as Crypto from 'expo-crypto'
import { type DATA } from '../src/components/Dropdown'
import { type EmployeesState } from '../types/employees'
import { type Vaccine } from '../types/vaccines'

export const ERRORFORM = 'Campo requerido!'

export const States: EmployeesState[] = [
  {
    id: Crypto.randomUUID(),
    state: 'Protegido',
    description: 'Plan de vacunacion completo',
    img: 0
  },
  {
    id: Crypto.randomUUID(),
    state: 'En progreso',
    description: 'Pendiente alguna dosis',
    img: 1
  },
  {
    id: Crypto.randomUUID(),
    state: 'En riesgo',
    description: 'No vacunado',
    img: 2
  }
]

export const Vaccines: Vaccine[] = [
  {
    name: 'Sinopharm',
    doseQuantity: 2,
    nextDose: {
      quantity: 4,
      time: 'weeks'
    }
  },
  {
    name: 'AstraZeneca',
    doseQuantity: 2,
    nextDose: {
      quantity: 8,
      time: 'weeks'
    }
  },
  {
    name: 'Sputnik',
    doseQuantity: 2,
    nextDose: {
      quantity: 60,
      time: 'days'
    }
  },
  {
    name: 'Pfizer',
    doseQuantity: 2,
    nextDose: {
      quantity: 21,
      time: 'days'
    }
  },
  {
    name: 'Moderna',
    doseQuantity: 2,
    nextDose: {
      quantity: 28,
      time: 'days'
    }
  },
  {
    name: 'Janssen',
    doseQuantity: 1,
    nextDose: {
      quantity: 0,
      time: 'days'
    }
  }
]

export const DATAVACCINE: DATA[] = [
  {
    label: 'Sinopharm',
    value: 'Sinopharm'
  },
  {
    label: 'AstraZeneca',
    value: 'AstraZeneca'
  },
  {
    label: 'Sputnik',
    value: 'Sputnik'
  },
  {
    label: 'Pfizer',
    value: 'Pfizer'
  },
  {
    label: 'Moderna',
    value: 'Moderna'
  },
  {
    label: 'Janssen',
    value: 'Janssen'
  }
]
