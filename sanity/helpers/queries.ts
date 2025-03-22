
import { defineQuery } from "next-sanity";

export const SALES_QUERY=defineQuery(`*[_type=="sale"] | order(name asc)`)

export const PRODUCT_QUERY=defineQuery(`*[_type == "product"] | order(name asc)`)

export const CATEGORIES_QUERY=defineQuery(`*[_type == "category"] | order(name asc)`)

export const PRODUCT_SLUG_QUERY=defineQuery(`
*[_type == "product" && slug.current==$slug ] | order(name asc)[0]`)

export const PRODUCT_SEARCH_QUERY=defineQuery(
    `*[_type == 'product' && name match $searchParam] | order(name asc)`
)

export const PRODUCT_BY_CATEGORIES_PRODUCT=defineQuery(
    `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`
)