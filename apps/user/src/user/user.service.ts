import { Injectable } from '@nestjs/common'
import type { User } from '@shared/database'
import type { UserProfile } from '@shared/types'
import type { RegisterDto } from 'src/user/dto/register.dto'

import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findMany() {
    return this.userRepository.findMany()
  }

  async findByKeycloakId(keycloakId: string): Promise<UserProfile> {
    return this.userRepository.findByKeycloakId(keycloakId)
  }
  // axios.post(`${KCHOST}/auth/realms/${REALM}/protocol/openid-connect/token`, {
  //   client_id: CLIENT_ID,
  //   client_secret: CLIENT_SECRET,
  //   grant_type: 'client_credentials'
  // })
  //   .then(response => {
  //     const ACCESS_TOKEN = response.data.access_token;
  //     // Use the ACCESS_TOKEN as needed
  //     console.log(ACCESS_TOKEN);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  async insert(data): Promise<User> {
    const payload = {}

    Object.keys(data).forEach((key) => {
      if (!data[key]) return
      payload[key] = data[key][0]
    })

    return this.userRepository.insert(payload as RegisterDto)
  }
}