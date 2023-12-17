import type { KeycloakConfig } from 'keycloak-js'
import Keycloak from 'keycloak-js'

import { KEYCLOAK_CONFIG } from '@/constants/config'

export const keycloak = new Keycloak(KEYCLOAK_CONFIG as KeycloakConfig)