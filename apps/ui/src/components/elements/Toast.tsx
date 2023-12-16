import type { UseToastOptions } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

export default function Toast(options: UseToastOptions) {
  const toast = useToast()

  return toast(options)
}