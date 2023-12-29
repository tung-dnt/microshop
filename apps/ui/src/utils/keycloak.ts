import Keycloak from 'keycloak-js'

import { KEYCLOAK_CONFIG } from '@/constants/config'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const keycloak = new Keycloak(KEYCLOAK_CONFIG)