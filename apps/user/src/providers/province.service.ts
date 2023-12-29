import { HttpService } from '@nestjs/axios'
import { BadRequestException, Injectable } from '@nestjs/common'
import { catchAsync } from '@shared/utils'
import type { AxiosInstance } from 'axios'
import pick from 'lodash/pick'
import type {
  AddressDetailParams,
  AddressRepositoryParams
} from 'types/userAddress'
import {
  AddressType
} from 'types/userAddress'

@Injectable()
export class ProvinceService {
  // TODO: remove hard-coded api path
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

    if (error) throw new BadRequestException('invalid address')

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

  private async getAddressUnitByCode(code: number, addressType: AddressType): Promise<{name: string; code: number}> {
    const axios: AxiosInstance = this.httpService.axiosRef
    const { data } = await axios.get(`${this.apiPath}/${addressType}/${code}`)

    return pick(data, ['name', 'code'])
  }
}
