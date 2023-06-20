import { sql } from "@vercel/postgres"
import {pgTable, varchar, integer, serial} from "drizzle-orm/pg-core"
import {drizzle} from "drizzle-orm/vercel-postgres"

export const cartTable= pgTable("ecommerce", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255
    }).notNull(),
    product_id: varchar("product_id", {
        length: 255
    }).notNull(),
    quantity: integer("quantity").notNull()
})

export const db = drizzle(sql)