import { useContext } from "react"
import { CheckoutContext } from "../../../../../contexts/CheckoutContext"
import { IncrementalButton } from "../../../../../components/IncrementalButton"
import { ConvertToMoney } from "../../../../../@helpers/convertToMoney";
import { CartType } from "../../../../../@types/checkout";
import { Trash } from "@phosphor-icons/react";
import { CartItemDescription, CartItemImage, CartItemActions, CartItemNameAndPrice, CartItemWrapper, CartItemName, CartItemPrice } from "./styles";
import { BaseButton } from "../../../../../layouts/DefaultLayout/styles";
import { useTheme } from "styled-components";

export function CartItem(item: CartType) {
  const { products, decrementCartItem, incrementCartItem, removeCartItem } = useContext(CheckoutContext)
  const theme = useTheme()

  function productById(id: string) {
    return products[products.findIndex(product => product.id === id)]
  }
  
  function incrementTotal() {
    incrementCartItem(item)
  }
  
  function decrementTotal() {
    decrementCartItem(item)
  }
  function removeItem() {
    removeCartItem(item)
  }
  return (
    <CartItemWrapper>
      <CartItemImage src={`/images/products/${productById(item.id).id}.png`} alt={productById(item.id).name} />
      <CartItemDescription>
        <CartItemNameAndPrice>
          <CartItemName>{productById(item.id).name}</CartItemName>
          <CartItemPrice>{ConvertToMoney(productById(item.id).price * item.total)}</CartItemPrice>
        </CartItemNameAndPrice>
        <CartItemActions>
          <IncrementalButton
            id={`cart-item-${item.id}`}
            name='cart-item'
            total={item.total}
            incrementTotal={incrementTotal}
            decrementTotal={decrementTotal}
            min={1}
          />
          <BaseButton onClick={removeItem} size="medium">
            <Trash color={theme.colors.base["color-purple"]} />
            Remover
          </BaseButton>
        </CartItemActions>
      </CartItemDescription>
    </CartItemWrapper>
  )
}