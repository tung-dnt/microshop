import type {
  permission,
  role,
  roleOnPermission,
  user,
  userAddress,
  usersOnRole
} from 'schema'

export type User = typeof user.$inferSelect
export type UserModify = typeof user.$inferInsert

export type UserAddress = typeof userAddress.$inferSelect
export type UserAddressModify = typeof userAddress.$inferInsert

export type Role = typeof role.$inferSelect
export type RoleModify = typeof role.$inferInsert

export type Permission = typeof permission.$inferSelect
export type PermissionModify = typeof permission.$inferInsert

export type UserOnRole = typeof usersOnRole.$inferSelect
export type UserOnRoleModify = typeof usersOnRole.$inferInsert

export type RoleOnPermission = typeof roleOnPermission.$inferSelect
export type RoleOnPermissionModify = typeof roleOnPermission.$inferInsert
