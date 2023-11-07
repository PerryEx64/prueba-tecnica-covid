type Time = 'weeks' | 'days'

export interface SecondDose {
  quantity: number
  time: Time
}

export interface Vaccine {
  name: string
  doseQuantity: number
  nextDose: SecondDose | null
}
