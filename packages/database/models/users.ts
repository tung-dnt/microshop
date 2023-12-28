import { Roles, UserAddresses, Users, Permissions } from "schema"

export type User = typeof Users.$inferSelect
export type UserModify = typeof Users.$inferInsert
export type UserAddress = typeof UserAddresses.$inferSelect
export type UserAddressModify = typeof UserAddresses.$inferInsert
export type Role = typeof Roles.$inferSelect
export type RoleModify = typeof Roles.$inferInsert
export type Permission = typeof Permissions.$inferSelect
export type PermissionModify = typeof Permissions.$inferInsert