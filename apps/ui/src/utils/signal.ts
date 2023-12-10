import { computed as computedSignal } from '@preact/signals-react'

export const computed = <T>(compute: () => T) => computedSignal(compute).value