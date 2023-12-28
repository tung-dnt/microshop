import { relations, sql } from 'drizzle-orm';
import { bigint, bigserial, char, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const Users = pgTable('users', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  keycloakId: char('keycloak_id', { length: 36 }).notNull().unique(),
  firstname: text('firstname').notNull(),
  lastname: text('lastname').notNull(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at", { mode: 'date' }).default(sql`CURRENT_TIMESTAMP`),
})

export const UserAddresses = pgTable('user_addresses', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  userId: bigint('user_id', { mode: 'number' }).notNull().references(() => Users.id, {
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

export const Roles = pgTable('roles', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull().unique(),
  description: text('description'),
  status: integer('status').notNull().default(1),
  createdBy: bigint('created_by', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at", { mode: 'date' }).default(sql`CURRENT_TIMESTAMP`),
})

export const Permissions = pgTable('permissions', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull().unique(),
  description: text('description'),
  status: integer('status').notNull().default(1),
  createdBy: bigint('created_by', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at", { mode: 'date' }).default(sql`CURRENT_TIMESTAMP`),
})

export const UsersOnRoles = pgTable('users_on_roles', {
  userId: bigint('user_id', { mode: 'number' }).notNull().references(() => Users.id, {
    onDelete: 'cascade', 
    onUpdate: 'cascade'
  }),
  roleId: bigint('role_id', { mode: 'number' }).notNull().references(() => Roles.id, {
    onDelete: 'cascade', 
    onUpdate: 'cascade'
  })
})

export const RolesOnPermissions = pgTable('roles_on_permissions', {
  roleId: bigint('role_id', { mode: 'number' }).notNull().references(() => Roles.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  permissionId: bigint('permission_id', { mode: 'number' }).notNull().references(() => Permissions.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
})

export const UserRelations = relations(Users, ({ many }) => ({
  addresses: many(UserAddresses),
  roles: many(UsersOnRoles),
}))

export const UserAddressesRelations = relations(UserAddresses, ({ one }) => ({
  user: one(Users, {
    fields: [UserAddresses.userId],
    references: [Users.id],
  }),
}))

export const RolesRelations = relations(Roles, ({ many }) => ({
  users: many(UsersOnRoles),
  permissions: many(RolesOnPermissions),
}))

export const PermissionsRelations = relations(Permissions, ({ many }) => ({
  roles: many(RolesOnPermissions),
}))