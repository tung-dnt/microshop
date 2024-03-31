import type { PropsWithChildren } from 'react'
import { Suspense } from 'react'

import { Loader } from '#/components/elements'
import { LoadingModal } from '#/components/modules'

import LayoutFrame from './LayoutFrame'

export function CommonLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<Loader />}>
      <LoadingModal />
      <LayoutFrame>{children}</LayoutFrame>
    </Suspense>
  )
}
