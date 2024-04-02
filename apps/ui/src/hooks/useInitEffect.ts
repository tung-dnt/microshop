import { useEffect, useRef } from 'react'

export const useInitEffect = (callback: () => void) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) return
    callback()
    isMounted.current = true
  }, [])
}
