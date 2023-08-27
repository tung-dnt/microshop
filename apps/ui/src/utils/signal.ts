import { Signal } from '@preact/signals-react'

export const valueOf = (signals: Record<string, Signal>) => {
  const signalValues = structuredClone(signals)
  Object.keys(signalValues).forEach(signalKey => {
    signalValues[signalKey] = signalValues[signalKey].value
  })

  return signalValues
}