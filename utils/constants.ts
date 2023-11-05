import * as Crypto from 'expo-crypto'
import { type EmployeesState } from '../types/employees'
import { type Vaccine } from '../types/vaccines'

const UUID = Crypto.randomUUID()

export const States: EmployeesState[] = [
  {
    id: UUID,
    state: 'Protegido',
    description: 'Plan de vacunacion completo'
  },
  {
    id: UUID,
    state: 'En progreso',
    description: 'Pendiente alguna dosis'
  },
  {
    id: UUID,
    state: 'En riesgo',
    description: 'No vacunado'
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
    nextDose: null
  }
]
