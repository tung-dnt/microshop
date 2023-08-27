import {PagingProps} from '../types'

export const paginator = ({ page = 1, size = 20 }: {
  page?: number | string
  size?: string | number
}): PagingProps => {
  return {
    take: +size,
    skip: (+page - 1) * +size
  }
}
