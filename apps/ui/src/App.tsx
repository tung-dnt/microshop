import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import router from '@/routers'
import theme from '@/styles/theme'

import '@/styles/global.css'

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
