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