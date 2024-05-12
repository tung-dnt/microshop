import { relations, sql } from 'drizzle-orm'
import {
  bigserial,
  decimal,
  index,
  integer,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp
} from 'drizzle-orm/pg-core'

export const product = pgTable('products', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').notNull(),
  code: text('code').notNull().unique(),
  discountRate: decimal('discount_rate'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { withTimezone: true }),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
}, (table) => ({
  nameIdx: index('product_name_idx').on(table.name),
}))
relations(product, ({ one }) => ({
  detail: one(product)
}))

export const productDetail = pgTable('product_details', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  productId: bigserial('product_id', { mode: 'number' }).notNull().references(() => product.id, {
    onDelete: 'cascade',
    onUpdate: 'restrict'
  }),
  description: text('description').notNull(),
  quantity: integer('quantity').notNull().default(1),
  baseQuantity: integer('base_quantity').notNull().default(1),
  thumbnails: text('thumbnails').array(),
  price: numeric('price').notNull(),
  basePrice: numeric('price').notNull(),
  lastBoughtAt: timestamp('last_bought_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { withTimezone: true }),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
})
relations(productDetail, ({ many }) => ({
  detailOnColor: many(productDetailOnColor),
  detailOnMaterial: many(productDetailOnMaterial),
  detailOnSize: many(productDetailOnSize),
  detailOnCategory: many(productDetailOnCategory),
}))

export const productCategory = pgTable('product_categories', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').unique().notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().default(sql`CURRENT_TIMESTAMP`),
})
relations(productCategory, ({ many }) => ({
  detailOnCategory: many(productDetailOnCategory)
}))

export const productColor = pgTable('product_colors', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  hex: text('hex').unique().notNull(),
  name: text('name').unique().notNull(),
})
relations(productColor, ({ many }) => ({
  detailOnColor: many(productDetailOnColor)
}))

export const productMaterial = pgTable('product_materials', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name').unique().notNull(),
  description: text('description'),
})
relations(productMaterial, ({ many }) => ({
  detailOnMaterial: many(productDetailOnMaterial)
}))

export const productSize = pgTable('product_sizes', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  size: integer('size').notNull(),
  description: text('description'),
})
relations(productSize, ({ many }) => ({
  detailOnSize: many(productDetailOnSize)
}))

export const productDetailOnCategory = pgTable('product_detail_on_categories', {
  categoryId: bigserial('category_id', { mode: 'number' }).notNull().references(() => productCategory.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  productDetailId: bigserial('product_detail_id', { mode: 'number' }).notNull().references(() => productDetail.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}, (t) => ({
  pk: primaryKey({ columns: [t.categoryId, t.productDetailId] }),
}))
relations(productDetailOnCategory, ({ one }) => ({
  productDetail: one(productDetail),
  category: one(productCategory),
}))

export const productDetailOnColor = pgTable('product_detail_on_color', {
  productColorId: bigserial('product_color_id', { mode: 'number' }).notNull().references(() => productColor.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  productDetailId: bigserial('product_detail_id', { mode: 'number' }).notNull().references(() => productDetail.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}, (t) => ({
  pk: primaryKey({ columns: [t.productDetailId, t.productColorId] }),
}))
relations(productDetailOnColor, ({ one }) => ({
  productDetail: one(productDetail),
  color: one(productColor),
}))

export const productDetailOnSize = pgTable('product_detail_on_sizes', {
  sizeId: bigserial('size_id', { mode: 'number' }).notNull().references(() => productSize.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  productDetailId: bigserial('product_detail_id', { mode: 'number' }).notNull().references(() => productDetail.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}, (t) => ({
  pk: primaryKey({ columns: [t.productDetailId, t.sizeId] }),
}))
relations(productDetailOnSize, ({ one }) => ({
  productDetail: one(productDetail),
  size: one(productSize),
}))

export const productDetailOnMaterial = pgTable('product_detail_on_materials', {
  materialId: bigserial('material_id', { mode: 'number' }).notNull().references(() => productMaterial.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  productDetailId: bigserial('product_detail_id', { mode: 'number' }).notNull().references(() => productDetail.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}, (t) => ({
  pk: primaryKey({ columns: [t.productDetailId, t.materialId] }),
}))
relations(productDetailOnMaterial, ({ one }) => ({
  productDetail: one(productDetail),
  material: one(productMaterial),
}))
