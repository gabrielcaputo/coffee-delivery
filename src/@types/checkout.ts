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

export interface CheckoutState {
  products: ProductType[]
  cart: CartType[]
}

export interface CheckoutContextType extends CheckoutState {
  addProductToCart: (data: CartType) => void
  decrementCartItem: (data: CartType) => void
  incrementCartItem: (data: CartType) => void
  removeCartItem: (data: CartType) => void
}