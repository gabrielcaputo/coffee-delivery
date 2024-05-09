import { ReactNode, createContext, useEffect, useReducer } from "react";
import { productsReducer } from "../reducers/products/reducer";
import { productsList } from "../data/products";
import { CartType, ProductsContextType } from "../@types/products";
import { addProductToCartAction, decrementCartItemAction, incrementCartItemAction, removeCartItemAction } from "../reducers/products/actions";

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: productsList,
    cart: []
  }, (initialState) => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:products-state-1.0.0');
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return initialState
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

  useEffect(() => {
    const stateJSON = JSON.stringify(productsState)
    localStorage.setItem('@coffee-delivery:products-state-1.0.0', stateJSON)
  }, [productsState])

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