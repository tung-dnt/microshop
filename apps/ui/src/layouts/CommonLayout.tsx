import type { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

import { Spinner, Toast } from '@/components/modules'
import { NotificationSignal } from '@/signals/common'

export function CommonLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Helmet>
        <title>Microshop | Click and Buy</title>
        <meta property="og:title" content="Microshop | Shopping with affordable price"/>
        <meta property="og:description" content="This is the best and lightweight ecommerce FE ever"/>
        <meta property="og:image" content="favicon-sun.ico"/>
      </Helmet>
      <Spinner/>
      <Toast timeout={5000}/>
      <Button
        onClick={() => NotificationSignal.push({
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