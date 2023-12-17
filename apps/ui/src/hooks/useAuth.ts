import { catchAsync } from '@shared/utils/catcher'
import { atom, useAtom } from 'jotai'

import { atomModalOpen } from '@/components/modules'
import { keycloak } from '@/utils/keycloak'

const atomAuthenticated = atom<null | undefined | boolean>(undefined)

// eslint-disable-next-line @typescript-eslint/require-await
// const atomUserInfo = atom(async (get) => {
//   const isAuthenticated = get(atomAuthenticated)

//   if (!isAuthenticated) return null

//   return request({ url: '/auth/me' })
// })

export function useAuth() {
  const [authenticated, setAuthenticated] = useAtom(atomAuthenticated)
  const [_, setLoading] = useAtom(atomModalOpen)
  // const [userInfo] = useAtom(atomUserInfo)

  const requireLogin = async () => {
    setLoading(true)

    const [error, response] = await catchAsync(
      keycloak.init({ onLoad: 'login-required' }) as Promise<boolean>,
    )

    if (error) setAuthenticated(null)

    setAuthenticated(response)
    setLoading(false)
  }

  const login = async () => {
    await keycloak.init({ onLoad: 'check-sso' })

    await keycloak.login()
  }

  const logout = async () => {
    await keycloak.init({ onLoad: 'check-sso' })

    await keycloak.logout()
  }

  return {
    // userInfo,
    authenticated,
    requireLogin,
    login,
    logout,
  }
}