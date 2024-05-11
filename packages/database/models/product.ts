import type {
  product,
  productCategory,
  productColor,
  productDetail,
  productDetailOnCategory,
  productDetailOnColor,
  productDetailOnMaterial,
  productDetailOnSize,
  productMaterial,
  productSize
} from 'schema'

export type Product = typeof product.$inferSelect
export type ProductModify = typeof product.$inferInsert

export type ProductDetail = typeof productDetail.$inferSelect
export type ProductDetailModify = typeof productDetail.$inferInsert

export type ProductCategory = typeof productCategory.$inferSelect
export type ProductCategoryModify = typeof productCategory.$inferInsert

export type ProductColor = typeof productColor.$inferSelect
export type ProductColorModify = typeof productColor.$inferInsert

export type ProductMaterial = typeof productMaterial.$inferSelect
export type ProductMaterialModify = typeof productMaterial.$inferInsert

export type ProductSize = typeof productSize.$inferSelect
export type ProductSizeModify = typeof productSize.$inferInsert

export type ProductDetailOnCategory = typeof productDetailOnCategory.$inferSelect
export type ProductDetailOnCategoryModify = typeof productDetailOnCategory.$inferInsert

export type ProductDetailOnColor = typeof productDetailOnColor.$inferSelect
export type ProductDetailOnColorModify = typeof productDetailOnColor.$inferInsert

export type ProductDetailOnSize = typeof productDetailOnSize.$inferSelect
export type ProductDetailOnSizeModify = typeof productDetailOnSize.$inferInsert

export type ProductDetailOnMaterial = typeof productDetailOnMaterial.$inferSelect
export type ProductDetailOnMaterialModify = typeof productDetailOnMaterial.$inferInsert
