import { User } from '@shared/database'

export type UserTokenInfo = {
  userId: bigint | number
  email: string
}

export enum UserPermission {
  VIEW_PRODUCTS = 'view_products',
  BUY_PRODUCTS = 'buy_products',
  COMMENT_IN_BOUGHT_PRODUCTS = 'comment_in_bought_products',
  COMMENT_IN_POST = 'comment_in_post',
}

export type UserProfile = Pick<User, 'id' | 'email'> & {
  fullName: string
  roles: string[]
  permissions: string[]
}