import { lazy } from 'react'

export const ProductList = lazy( () => import( './products' ) )
