import { catchAsync } from '@shared/utils/catcher'
import { atom, useAtom } from 'jotai'

import { atomModalOpen } from '@/components/modules'
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
  const [_, setLoading] = useAtom(atomModalOpen)
  const [userInfo] = useAtom(atomUserInfo)

  const requireLogin = async () => {
    setLoading(true)

    const [error, isLogin] = await catchAsync(
      keycloak.init({ onLoad: 'login-required' }) as Promise<boolean>,
    )

    if (error) setAuthenticated(null)

    setAuthenticated(isLogin)
    setLoading(false)
  }

  const initializeAuthorizer = async () => {
    const [error, isLogin] = await catchAsync(
      keycloak.init({ onLoad: 'check-sso' }) as Promise<boolean>,
    )

    if (error) setAuthenticated(null)
    setAuthenticated(isLogin)
  }

  const login = () => keycloak.login()

  const logout = () =>  keycloak.logout()

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