import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import router from '@/routers'
import theme from '@/styles/theme'

import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
