import { catchAsync } from '@shared/utils/catcher'
import { atom, useAtom } from 'jotai'

import { keycloak } from '@/utils/keycloak'

const atomAuthenticated = atom<null | undefined | boolean>(undefined)

// eslint-disable-next-line @typescript-eslint/require-await
const atomUserInfo = atom(async (get) => {
  const isAuthenticated = get(atomAuthenticated)

  if (!isAuthenticated) return null

  return keycloak.loadUserProfile()
})

export function useAuth() {
  const [authenticated, setAuthenticated] = useAtom(atomAuthenticated)
  const [userInfo] = useAtom(atomUserInfo)

  const initializeAuthorizer = async () => {
    const [error, isLogin] = await catchAsync(
      keycloak.init({ onLoad: 'check-sso' }) as Promise<boolean>,
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
    // userInfo,
    authenticated,
    requireLogin,
    login,
    logout,
    initializeAuthorizer,
    userInfo,
  }
}