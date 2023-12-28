import { Injectable } from '@nestjs/common'
import { RegisterDto } from 'src/controllers/dto/register.dto'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {
  }

  async findMany() {
    return await this.userRepository.findMany()
  }

  async findFirst(query: RegisterDto) {
    return await this.userRepository.findFirst(query)
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

  async insert(data: RegisterDto) {
    return await this.userRepository.insert(data)
  }
}