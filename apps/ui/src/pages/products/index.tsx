import { withAuth } from '@/hocs/withAuth'

export function ProductList() {
  return (
    <>This is Product List</>
  )
}

export default withAuth(ProductList)
