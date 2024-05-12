import { relations, sql } from 'drizzle-orm'
import {
  bigserial,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp
} from 'drizzle-orm/pg-core'

export const user = pgTable('users', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  firstName: text('firstname').notNull(),
  lastName: text('lastname').notNull(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
})
relations(user, ({ many }) => ({
  addresses: many(userAddress),
  usersOnRoles: many(usersOnRole),
}))

export const userAddress = pgTable('user_addresses', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  userId: bigserial('user_id', { mode: 'number' }).notNull().references(() => user.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),
  province: integer('province').notNull(),
  provinceName: text('province_name').notNull(),
  district: integer('district').notNull(),
  districtName: text('district_name').notNull(),
  ward: integer('ward').notNull(),
  wardName: text('ward_name').notNull(),
  detail: text('detail'),
})
relations(userAddress, ({ one }) => ({
  user: one(user),
}))

export const role = pgTable('roles', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull().unique(),
  description: text('description'),
  status: integer('status').notNull().default(1),
  createdBy: bigserial('created_by', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
})
relations(role, ({ many }) => ({
  usersOnRoles: many(usersOnRole),
  roleOnPermissions: many(roleOnPermission),
}))

export const permission = pgTable('permissions', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull().unique(),
  description: text('description'),
  status: integer('status').notNull().default(1),
  createdBy: bigserial('created_by', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
})
relations(permission, ({ many }) => ({
  roles: many(roleOnPermission),
}))

export const usersOnRole = pgTable('users_on_roles', {
  userId: bigserial('user_id', { mode: 'number' }).notNull().references(() => user.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),
  roleId: bigserial('role_id', { mode: 'number' }).notNull().references(() => role.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  })
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.roleId] }),
}))
relations(usersOnRole, ({ one }) => ({
  user: one(user),
  role: one(role),
}))

export const roleOnPermission = pgTable('roles_on_permissions', {
  roleId: bigserial('role_id', { mode: 'number' }).notNull().references(() => role.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  permissionId: bigserial('permission_id', { mode: 'number' }).notNull().references(() => permission.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}, (t) => ({
  pk: primaryKey({ columns: [t.permissionId, t.roleId] }),
}))
relations(roleOnPermission, ({ one }) => ({
  role: one(role),
  permission: one(permission),
}))
