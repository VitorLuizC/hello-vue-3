import { useSize } from '@/hooks/use-size'
import { useIcons } from '@/hooks/use-icons'
import { useColor } from '@/hooks/use-color'
import { useModel } from '@/hooks/use-model'
import { computed, SetupContext } from 'vue'

type BasicProps = {
  modelValue?: string
  label?: string
  iconLeft?: string
  iconRight?: string
  size?: 'small' | 'medium' | 'large'
  color?: string
  loading?: boolean
  rounded?: boolean
  static?: boolean
}

export const useInputBasics = (props: BasicProps, emit: SetupContext['emit']) => {
  const { isColorClass } = useColor(props)
  const { sizeClass } = useSize(props)
  const updateModelValue = useModel(emit)
  const { hasIconsClasses, iconSpanClasses } = useIcons(props)

  const controlClasses = computed(() => ({
    'is-loading': props.loading,
    ...hasIconsClasses.value,
    ...sizeClass.value
  }))

  const inputClasses = computed(() => ({
    'is-rounded': props.rounded,
    'is-static': props.static,
    ...isColorClass.value,
    ...sizeClass.value
  }))

  return {
    isColorClass,
    sizeClass,
    updateModelValue,
    hasIconsClasses,
    iconSpanClasses,
    controlClasses,
    inputClasses
  }
}
