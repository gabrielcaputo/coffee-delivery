import { ReactNode, createContext, useEffect, useReducer } from "react";
import { checkoutReducer } from "../reducers/checkout/reducer";
import { productsList } from "../data/products";
import { CartType, CheckoutContextType } from "../@types/checkout";
import { addProductToCartAction, decrementCartItemAction, incrementCartItemAction, removeCartItemAction } from "../reducers/checkout/actions";

export const CheckoutContext = createContext({} as CheckoutContextType)

export function CheckoutContextProvider({ children }: { children: ReactNode }) {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    products: productsList,
    cart: []
  }, (initialState) => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:checkout-state-1.0.0');
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

  const { products, cart } = checkoutState

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)
    localStorage.setItem('@coffee-delivery:checkout-state-1.0.0', stateJSON)
  }, [checkoutState])

  return (
    <CheckoutContext.Provider value={{
      products,
      cart,
      addProductToCart,
      decrementCartItem,
      incrementCartItem,
      removeCartItem,
    }}>
      {children}
    </CheckoutContext.Provider>
  )
  
}