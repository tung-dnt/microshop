import { UserAddresses } from '@prisma/user'

export type AddressRepositoryParams = Omit<UserAddresses, 'id' | 'detail'> & {
  detail?: string | null
}