import { setBooleanProp, setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [Number, Array] as PropType<number | number[]>,
    required: true,
    default: (): number => 0
  },
  /** 步长（注意和步数区别开来） */
  step: {
    type: Number,
    default: (): number => 1
  },
  /** 最小值 */
  min: {
    type: Number,
    default: (): number => 0
  },
  /** 最大值 */
  max: {
    type: Number,
    default: (): number => 100
  },
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否可范围性取值 */
  range: setBooleanProp(),
  /** 自定义滑块背景色 */
  bgColor: setStringProp()
} as const

export type SliderProps = ExtractPropTypes<typeof Props>
