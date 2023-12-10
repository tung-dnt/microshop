import type { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

export function ProductLayout({ children }: PropsWithChildren) {
  return (
    <>
      { children ?? <Outlet/> }
    </>
  )
}