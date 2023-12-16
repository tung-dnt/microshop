import type { AxiosRequestConfig } from 'axios'
import qs from 'qs'

const MOCK_URL = `${window.location.protocol}//${window.location.host}/mocks`
const IS_MOCK = import.meta.env.VITE_MOCK
const API_KEY = import.meta.env.VITE_API_KEY
const CONTENT_TYPE = 'Content-Type'

export const REQUEST_CONFIG = {
  isMock: IS_MOCK === 'true',
  baseURL: IS_MOCK ? MOCK_URL : import.meta.env.VITE_API_URL,
  ...(API_KEY.length && {
    apiKey: API_KEY,
  }),
}

export const AXIOS_CONFIG: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
    [CONTENT_TYPE]: 'application/json',
  },
  baseURL: REQUEST_CONFIG.baseURL,
  paramsSerializer: (param: object | null) => qs.stringify(param, { arrayFormat: 'comma' }),
}

export const TOAST_TIMEOUT = 5000