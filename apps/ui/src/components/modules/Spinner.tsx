import { Spinner as ChakraSpinner } from '@chakra-ui/react'

import { LoadingSignal } from '@/signals/common'

export function Spinner() {
  if (!LoadingSignal.get()) return <div/>

  return (
    <ChakraSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  )
}