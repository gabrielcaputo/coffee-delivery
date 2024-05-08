export type ProductTag = 'Tradicional' | 'Gelado' | 'Com Leite' | 'Alcoólico' | 'Especial'

export type ProductType = {
  id: string,
  name: string,
  tag: ProductTag[],
  description: string,
  price: number
}

export type CartType = {
  id: string,
  total: number
}

export interface ProductsContextType {
  products: Product[],
  cart: Cart[]
}