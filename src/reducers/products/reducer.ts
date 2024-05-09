import { produce } from "immer";
import { ActionTypes } from "./actions";
import { ProductsState } from "../../@types/products";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function productsReducer(state: ProductsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      return produce(state, draft => {
        const productAlreadyAddedIndex = state.cart.findIndex(product => product.id === action.payload.id)
        const productAlreadyAdded = !!(productAlreadyAddedIndex >= 0)
        if (productAlreadyAdded) {
          draft.cart[productAlreadyAddedIndex].total = draft.cart[productAlreadyAddedIndex].total + action.payload.total
        } else {
          draft.cart = [
            ...state.cart,
            action.payload
          ]
        }
      })
    }
    case ActionTypes.DECREMENT_CART_ITEM: {
      return produce(state, draft => {
        const i = state.cart.findIndex(product => product.id === action.payload.id)
        console.log(draft.cart[i].total)
        draft.cart[i].total = draft.cart[i].total - 1
      })
    }
    case ActionTypes.INCREMENT_CART_ITEM: {
      return produce(state, draft => {
        const i = state.cart.findIndex(product => product.id === action.payload.id)
        console.log(draft.cart[i].total)
        draft.cart[i].total = draft.cart[i].total + 1
      })
    }
    case ActionTypes.REMOVE_CART_ITEM: {
      return produce(state, draft => {
        draft.cart = state.cart.filter(product => product.id !== action.payload.id)
      })
    }
    default: return state
  }
}