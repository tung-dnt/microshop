import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
export const users = pgTable('users', {
  firstname: varchar('firstname', { length: 256 }),
  lastname: varchar('lastname', { length: 256 }),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
  username: varchar('username', { length: 256 }),
});

export type User = typeof users.$inferSelect; 
export type NewUser = typeof users.$inferInsert;