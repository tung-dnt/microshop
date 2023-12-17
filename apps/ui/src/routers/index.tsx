import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from '@/components/elements'
import { AppRoutes } from '@/constants/routes'
import { CommonLayout, ProductLayout } from '@/layouts'
import { ProductList } from '@/pages'

export default createBrowserRouter([
  {
    ErrorBoundary: () => <NotFound />,
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <div/>,
      },
      {
        path: AppRoutes.ProductList,
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <ProductList/>,
          },
          {
            path: AppRoutes.ProductDetail,
            element: <div/>,
          },
          {
            path: AppRoutes.ProductSearch,
            element: <div/>,
          },
        ],
      },
    ],
  },
])