const ProductPrefix = '/products'

enum ProductRoutes {
  ProductList = `${ProductPrefix}`,
  ProductDetail = `${ProductPrefix}/:id`,
  ProductSearch = `${ProductPrefix}/search`
}

export const AppRoutes = { ...ProductRoutes }