import { BadRequestException, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { catchAsync } from '@shared/utils'
import pick from 'lodash/pick'
import { AxiosInstance } from 'axios'
import { AddressRepositoryParams } from '../../types/userAddress'

type AddressDetailParams = {
  province: number
  district: number
  ward: number
  detail?: string | null
}

enum AddressType {
  PROVINCE = 'p',
  DISTRICT = 'd',
  WARD = 'w'
}

@Injectable()
export class ProvinceService {
  private readonly apiPath = 'https://provinces.open-api.vn/api'
  constructor(private readonly httpService: HttpService) {}
  public async findAddress(params: AddressDetailParams): Promise<AddressRepositoryParams> {
    const [error, response] = await catchAsync((async () => {
      return Promise.all([
        this.getAddressUnitByCode(params.province, AddressType.PROVINCE),
        this.getAddressUnitByCode(params.district, AddressType.DISTRICT),
        this.getAddressUnitByCode(params.ward, AddressType.WARD),
      ])
    })())

    if(error) throw new BadRequestException('invalid address')

    return {
      province: response[0]?.code,
      provinceName: response[0]?.name,
      district: response[1]?.code,
      districtName: response[1]?.name,
      ward: response[2]?.code,
      wardName: response[2]?.name,
      detail: params.detail
    }
  }

  private async getAddressUnitByCode(code: number, addressType: AddressType): Promise<{name: string, code: number}> {
    const axios: AxiosInstance = this.httpService.axiosRef
    const { data } = await axios.get(`${this.apiPath}/${addressType}/${code}`)
    return pick(data, ['name', 'code'])
  }
}
