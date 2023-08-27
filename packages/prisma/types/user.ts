import { Users, UserAddresses } from '@prisma/user'

export type UserResponseWithAddress = Users & {
  address: UserAddresses | null;
};

export type UserProfile = UserResponseWithAddress & {
  roles: string[] | null;
  permissions: string[] | null;
};
