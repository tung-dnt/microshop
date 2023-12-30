import type { AxiosRequestConfig } from 'axios'
import type { KeycloakConfig } from 'keycloak-js'
import qs from 'qs'

const MOCK_URL = `${window.location.protocol}//${window.location.host}/mocks`
const IS_MOCK = import.meta.env.VITE_MOCK === 'true'
const API_KEY = import.meta.env.VITE_API_KEY
const CONTENT_TYPE = 'Content-Type'

export const REQUEST_CONFIG = {
  isMock: IS_MOCK,
  timeout: 10000,
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
  timeout: REQUEST_CONFIG.timeout,
  withCredentials: true,
  baseURL: REQUEST_CONFIG.baseURL,
  paramsSerializer: (param: object | null) => qs.stringify(param, { arrayFormat: 'comma' }),
}

export const TOAST_TIMEOUT = 5000

export const KEYCLOAK_CONFIG: KeycloakConfig = {
  url: import.meta.env.VITE_AUTH_URL,
  realm: import.meta.env.VITE_AUTH_REALM,
  clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
}