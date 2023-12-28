import { UserAddresses } from '@prisma/user'

export type AddressDetailParams = {
  province: number
  district: number
  ward: number
  detail?: string | null
}

export enum AddressType {
  PROVINCE = 'p',
  DISTRICT = 'd',
  WARD = 'w'
}

export type AddressRepositoryParams = Omit<UserAddresses, 'id' | 'detail'> & {
  detail?: string | null
}