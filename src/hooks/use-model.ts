/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupContext } from 'vue'

export const useModel = (emit: SetupContext['emit'], propName = 'modelValue') => {
  const updateProp = (e: any) => {
    emit(`update:${propName}`, e.target.type === 'checkbox' ? e.target.checked : e.target.value)
  }

  return updateProp
}
