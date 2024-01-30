import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import { toast } from '@/components/elements'
import {
  AXIOS_CONFIG,
  REQUEST_CONFIG,
  TOAST_TIMEOUT,
} from '@/constants/config'
import { NETWORK_ERROR } from '@/constants/errors'

import { keycloak } from './keycloak'

export type Request<T> = {
  data?: T | null;
  url: string;
  options?: AxiosRequestConfig;
};

const instance = axios.create(AXIOS_CONFIG)

const interceptSuccess = (res: AxiosResponse) => res

const interceptError = async <T>(error: T): Promise<AxiosResponse> => {
  if (axios.isAxiosError(error)) {
    const isServerError = error.response && error.response?.status >= 500
    const isNetworkError = error.code === NETWORK_ERROR

    if (isServerError || isNetworkError) {
      toast({
        status: 'error',
        title: 'Oops! Something went wrong...',
        duration: TOAST_TIMEOUT,
        isClosable: true,
      })
    }
  }

  return Promise.reject(error)
}

instance.interceptors.response.use(
  interceptSuccess,
  interceptError,
)

export default async function request<T>({
  url,
  options,
}: Request<T>) {
  const response = await instance.request<T, AxiosResponse<T>>({
    url: REQUEST_CONFIG.isMock ? `${url}.json` : url,
    ...AXIOS_CONFIG,
    headers: {
      ...AXIOS_CONFIG.headers,
      Authorization: `Bearer ${keycloak?.token}`,
    },
    ...options,
  })

  return response.data
}
