const ProductPrefix = '/product'

enum ProductRoutes {
  ProductList = `${ProductPrefix}`,
  ProductDetail = `${ProductPrefix}/:id`,
  ProductSearch = `${ProductPrefix}/search`
}

export const AppRoutes = { ...ProductRoutes }