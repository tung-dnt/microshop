import type { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

import { NotificationDialog, Spinner } from '@/components/modules'
import { NotificationSignal } from '@/signals/common'

export function CommonLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Spinner />
      <NotificationDialog timeout={5000} />
      <Button
        onClick={() => NotificationSignal.set({
          status: 'success',
          title: 'DIT CON MEEEEEE',
          description: 'asdfasdfadsfads fadsfads fadsf ads fads fads fasf s',
        })}
      >
        Open
      </Button>
      {children ?? <Outlet />}
    </>
  )
}