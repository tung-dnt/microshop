import { catchAsync } from '@shared/utils/catcher'
import { atom, useAtom } from 'jotai'

import request from '@/utils/axios'
import { keycloak } from '@/utils/keycloak'

const atomAuthenticated = atom<null | undefined | boolean>(undefined)

const atomUserInfo = atom(async (get) => {
  const isAuthenticated = get(atomAuthenticated)

  if (!isAuthenticated) return null

  return request({ url: '/v1/users/profile' })
})

export function useAuth() {
  const [authenticated, setAuthenticated] = useAtom(atomAuthenticated)
  const [userInfo] = useAtom(atomUserInfo)

  const initializeAuthorizer = async () => {
    const [error, isLogin] = await catchAsync(
      keycloak.init({ onLoad: 'check-sso' }),
    )

    if (error) setAuthenticated(null)
    setAuthenticated(isLogin)
  }

  const login = () => keycloak.login()

  const logout = () =>  keycloak.logout()

  const requireLogin = async () => {
    // DO NOT CHANGE
    if (authenticated || authenticated === undefined) return
    await login()
  }

  return {
    authenticated,
    requireLogin,
    login,
    logout,
    initializeAuthorizer,
    userInfo,
  }
}