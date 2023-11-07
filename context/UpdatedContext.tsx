import { type Dispatch, type SetStateAction, createContext } from 'react'

export interface ValuesContext {
  updated: boolean
  setUpdated: Dispatch<SetStateAction<boolean>>
}

const defaultValues: ValuesContext = {
  updated: false,
  setUpdated: () => {}
}

export const UpdatedContext = createContext(defaultValues)
