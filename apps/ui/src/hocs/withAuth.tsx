/* eslint-disable @typescript-eslint/no-explicit-any */
import { Error } from '@/components/elements'
import { useAuth, useInitEffect } from '@/hooks'

/**
 * Generates a higher-order component (HOC) that adds authentication logic to a given component.
 * @param {any} Component - The component to be wrapped with authentication logic.
 * @param {boolean} isUnauthorizedComponentHidden - Optional. If true, hides the error page when the user is not authenticated.
 * @returns {Function} The HOC that wraps the given component.
 */
export function withAuth(
  Component: any,
  isUnauthorizedComponentHidden?: boolean,
) {
  return function HOC(props: any) {
    const { authenticated, requireLogin } = useAuth()

    useInitEffect(requireLogin)

    /* ========== REDERING LOGIC ========== */

    if (authenticated) return <Component {...props} />
    if (authenticated === undefined) return null
    // Has error but won't show error on UI
    if (isUnauthorizedComponentHidden) return null

    return (
      <Error
        code="401"
        title="Unauthorized"
        description="You are not authorized to access this page."
      />
    )
  }
}