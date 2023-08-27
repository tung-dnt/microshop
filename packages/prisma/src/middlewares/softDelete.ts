import set from 'lodash/set'

const softDeleteModels = ['Users']

export const softDelete = async (params, next: (params) => Promise<unknown>): Promise<unknown> => {
  // Check incoming query type
  if (!params.model || !softDeleteModels.includes(params.model)) {
    return next(params)
  }

  switch (params.action) {
    case 'delete':
      params.action = 'update'
      params.args['data'] = { deletedAt: new Date() }
      break
    case 'deleteMany':
      // Delete many queries
      params.action = 'updateMany'
      if (params.args && params.args.data != undefined) {
        params.args.data['deletedAt'] = new Date()
      } else {
        params.args['data'] = { deletedAt: new Date() }
      }
      break
    case 'findFirst':
      if (params.args && params.args.where != undefined) {
        if (!params.args.where.hasOwnProperty('deletedAt')) {
          params.args.where['deletedAt'] = null
        }
      } else {
        set(params, 'args.where.deletedAt', null)
      }
      break
    case 'findMany':
      params.action = 'findMany'
      if (params.args && params.args.where != undefined) {
        if (!params.args.where.hasOwnProperty('deletedAt')) {
          params.args.where['deletedAt'] = null
        }
      } else {
        set(params, 'args.where.deletedAt', null)
      }
      break
    case 'updateMany':
      if (params.args && params.args.where != undefined) {
        if (!params.args.where.hasOwnProperty('deletedAt')) {
          params.args.where['deletedAt'] = null
        }
      } else {
        set(params, 'args.where.deletedAt', null)
      }
      break
    case 'aggregate':
      break
    case 'count':
      if (params.args && params.args.where != undefined) {
        if (!params.args.where.hasOwnProperty('deletedAt')) {
          params.args.where['deletedAt'] = null
        }
      } else {
        set(params, 'args.where.deletedAt', null)
      }
      break
  }
  return next(params)
}