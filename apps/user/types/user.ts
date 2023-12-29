import type { AddressRepositoryParams } from './userAddress'

export type UserRepositoryParams = {
  id: bigint;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  tel: string;
  birthday: Date;
  address: AddressRepositoryParams;
}