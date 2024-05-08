import { ReactNode, createContext, useReducer } from "react";
import { productsReducer } from "../reducers/products/reducer";
import { productsList } from "../reducers/products/data/products";
import { ProductsContextType } from "../@types/products";

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [productsState] = useReducer(productsReducer, {
    products: productsList,
    cart: [],
  })

  const { products, cart } = productsState

  return (
    <ProductsContext.Provider value={{
      products,
      cart
    }}>
      {children}
    </ProductsContext.Provider>
  )
  
}