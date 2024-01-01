import { relations, sql } from 'drizzle-orm'
import {
  bigint,
  bigserial,
  char,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp
} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  keycloakId: char('keycloak_id', { length: 36 }).notNull().unique(),
  firstName: text('firstname').notNull(),
  lastName: text('lastname').notNull(),
  email: text('email').notNull().unique(),
  userName: text('username').notNull().unique(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { mode: 'date' }).default(sql`CURRENT_TIMESTAMP`),
})

export const userRelations = relations(users, ({ many }) => ({
  addresses: many(userAddresses, { relationName: 'addresses' }),
  roles: many(usersOnRoles),
}))

export const userAddresses = pgTable('user_addresses', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  userId: bigint('user_id', { mode: 'number' }).notNull().references(() => users.id, {
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

export const userAddressesRelations = relations(userAddresses, ({ one }) => ({
  user: one(users, {
    fields: [ userAddresses.userId ],
    references: [ users.id ],
    relationName: 'users',
  }),
}))

export const roles = pgTable('roles', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull().unique(),
  description: text('description'),
  status: integer('status').notNull().default(1),
  createdBy: bigint('created_by', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { mode: 'date' }).default(sql`CURRENT_TIMESTAMP`),
})

export const rolesRelations = relations(roles, ({ many }) => ({
  users: many(usersOnRoles, { relationName: 'users' }),
  permissions: many(rolesOnPermissions),
}))


export const permissions = pgTable('permissions', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull().unique(),
  description: text('description'),
  status: integer('status').notNull().default(1),
  createdBy: bigint('created_by', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { mode: 'date' }).default(sql`CURRENT_TIMESTAMP`),
})

export const permissionsRelations = relations(permissions, ({ many }) => ({
  roles: many(rolesOnPermissions),
}))

export const usersOnRoles = pgTable('users_on_roles', {
  userId: bigint('user_id', { mode: 'number' }).notNull().references(() => users.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),
  roleId: bigint('role_id', { mode: 'number' }).notNull().references(() => roles.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade'
  })
}, (t) => ({
  pk: primaryKey({ columns: [ t.userId, t.roleId ] }),
}))

export const rolesOnPermissions = pgTable('roles_on_permissions', {
  roleId: bigint('role_id', { mode: 'number' }).notNull().references(() => roles.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  permissionId: bigint('permission_id', { mode: 'number' }).notNull().references(() => permissions.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}, (t) => ({
  pk: primaryKey({ columns: [ t.permissionId, t.roleId ] }),
}))