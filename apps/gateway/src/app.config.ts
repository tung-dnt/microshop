import { Environment } from '@shared/types'

const env = (process.env.NODE_ENV ?? 'development') as Environment

export const subgraphs = {
  product: {
    development: 'http://product:3000/graphql',
    production: '',
    test: ''
  }[env],
} satisfies Record<string, string>
