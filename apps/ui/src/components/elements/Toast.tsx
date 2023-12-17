import type { UseToastOptions } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

// To make toast callable inside of a function
function Toast(options: UseToastOptions) {
  const toast = useToast()

  return toast(options)
}

export const toast = Toast