import { CartType } from "../../@types/checkout"

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  INCREMENT_CART_ITEM = 'INCREMENT_CART_ITEM',
  DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  REMOVE_ALL_CART_ITEMS = 'REMOVE_ALL_CART_ITEMS',
}

export function addProductToCartAction(data: CartType) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: data
  }
}

export function incrementCartItemAction(data: CartType) {
  return {
    type: ActionTypes.INCREMENT_CART_ITEM,
    payload: data
  }
}

export function decrementCartItemAction(data: CartType) {
  return {
    type: ActionTypes.DECREMENT_CART_ITEM,
    payload: data
  }
}

export function removeCartItemAction(data: CartType) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: data
  }
}

export function removeAllCartItemsAction() {
  return {
    type: ActionTypes.REMOVE_ALL_CART_ITEMS,
  }
}
