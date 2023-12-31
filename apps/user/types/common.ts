import type { PagingProps } from '@shared/types'

export type File = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

export type BasicQuery = {
  q?: string;
  from?: Date;
  to?: Date;
  paging?: PagingProps;
}

export enum OrderQuery {
  ASC = 'asc',
  DESC = 'desc'
}
