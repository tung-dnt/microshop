import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { PageContext } from 'vike/types'

import reportWebVitals from './reportWebVitals'

import '#/styles/index.css'

import { PageContextProvider } from '#/hooks'
import chakraTheme from '#/styles/theme'

// const emotionCache = createCache({
//   key: 'emotion-cache',
//   prepend: true,
// })

export function App({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    // <CacheProvider value={emotionCache}>
    <ChakraProvider theme={chakraTheme}>
      <React.StrictMode>
        <PageContextProvider pageContext={pageContext}>
          <Layout>
            {children}
          </Layout>
        </PageContextProvider>
      </React.StrictMode>
    </ChakraProvider>
    // </CacheProvider>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

reportWebVitals()