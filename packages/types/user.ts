import { User } from '@shared/database'

export type UserTokenInfo = {
  userId: bigint | number
  email: string
}

export enum UserPermission {
  EDIT_PRODUCTS = 'edit_product'
}

export enum UserRole {
  CUSTOMER = 'customer'
}

export type UserProfile = Pick<User, 'id' | 'email'> & {
  fullName: string
  roles: string[]
  permissions: string[]
}