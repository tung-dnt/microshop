import type { Environment } from './types/config'

const env = (process.env.NODE_ENV ?? 'development') as Environment

export const subgraphs = {
  product: {
    development: 'http://product:3000/graphql',
    production: '',
  }[env],
} satisfies Record<string, string>
