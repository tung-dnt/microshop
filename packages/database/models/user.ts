import { roles, userAddresses, users, permissions } from "schema"

export type User = typeof users.$inferSelect
export type UserModify = typeof users.$inferInsert
export type UserAddress = typeof userAddresses.$inferSelect
export type UserAddressModify = typeof userAddresses.$inferInsert
export type Role = typeof roles.$inferSelect
export type RoleModify = typeof roles.$inferInsert
export type Permission = typeof permissions.$inferSelect
export type PermissionModify = typeof permissions.$inferInsert