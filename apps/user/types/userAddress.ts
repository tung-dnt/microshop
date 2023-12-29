import type { UserAddress } from '@shared/database'

export type AddressDetailParams = {
  province: number;
  district: number;
  ward: number;
  detail?: string | null;
}

export enum AddressType {
  PROVINCE = 'p',
  DISTRICT = 'd',
  WARD = 'w'
}

export type AddressRepositoryParams = Omit<UserAddress, 'id' | 'detail'> & {
  detail?: string | null;
}