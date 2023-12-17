import { atom, useAtom } from 'jotai'

import type { Request } from '@/utils/axios'
import request from '@/utils/axios'

const atomIsLoading = atom(false)

export function useFetch<T>() {
  const [isLoading, setLoading] = useAtom(atomIsLoading)

  const requestHttp = async (requestConfig: Request<T>) => {
    setLoading(true)

    const response = await request(requestConfig)

    setLoading(false)

    return response
  }

  return {
    requestHttp,
    isLoading,
  }
}