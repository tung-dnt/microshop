import type { PropsWithChildren } from 'react'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { Loader } from '@/components/elements'
import { LoadingModal } from '@/components/modules'

import LayoutFrame from './LayoutFrame'

export function CommonLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Helmet>
        <title>Microshop | Click and Buy</title>
        <meta property="og:title" content="Microshop | Shopping with affordable price"/>
        <meta property="og:description" content="This is the best and lightweight ecommerce FE ever"/>
        <meta property="og:image" content="favicon-sun.ico"/>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <LoadingModal />
        <LayoutFrame>
          {children ?? <Outlet />}
        </LayoutFrame>
      </Suspense>
    </>
  )
}