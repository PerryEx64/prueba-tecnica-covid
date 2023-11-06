import { useState } from 'react'

const useForceUpdate = () => {
  const [value, setValue] = useState<number>(0)
  return [() => setValue(value + 1), value]
}

export default useForceUpdate
