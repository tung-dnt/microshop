import { PrismaClient } from '@prisma/user'

export const userSeed = () => {
  new PrismaClient()
}