import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import { AXIOS_CONFIG, REQUEST_CONFIG } from '@/constants/config'
import { NETWORK_ERROR } from '@/constants/errors'
import { NotificationSignal } from '@/signals/common'

export type Request<T> = {
  data?: T | null;
  url: string;
  options?: AxiosRequestConfig;
}

const instance = axios.create(AXIOS_CONFIG)

const interceptSuccess = (res: AxiosResponse) => res

const interceptError = async <T>(error: T): Promise<AxiosResponse> => {
  if (axios.isAxiosError(error)) {
    const isServerError = error.response && error.response?.status >= 500
    const isNetworkError = error.code === NETWORK_ERROR

    if (isServerError || isNetworkError) {
      NotificationSignal.set([{
        status: 'error',
        title: 'Oops! Something went wrong...',
      }])
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
    ...options,
  })

  return response.data
}