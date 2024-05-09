import { ReactNode, createContext, useReducer } from "react";
import { productsReducer } from "../reducers/products/reducer";
import { productsList } from "../data/products";
import { CartType, ProductsContextType } from "../@types/products";
import { addProductToCartAction, decrementCartItemAction, incrementCartItemAction, removeCartItemAction } from "../reducers/products/actions";

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: productsList,
    cart: []
  })

  function addProductToCart(product: CartType) {
    dispatch(addProductToCartAction(product))
  }

  function decrementCartItem(product: CartType) {
    dispatch(decrementCartItemAction(product))
  }

  function incrementCartItem(product: CartType) {
    dispatch(incrementCartItemAction(product))
  }

  function removeCartItem(product: CartType) {
    dispatch(removeCartItemAction(product))
  }

  const { products, cart } = productsState

  return (
    <ProductsContext.Provider value={{
      products,
      cart,
      addProductToCart,
      decrementCartItem,
      incrementCartItem,
      removeCartItem,
    }}>
      {children}
    </ProductsContext.Provider>
  )
  
}