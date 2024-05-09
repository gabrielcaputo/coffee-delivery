import { useContext } from "react"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { ConvertToMoney } from "../../../../@helpers/convertToMoney";

import { CartItem } from "./CartItem";
import { CheckoutButton, CheckoutContainer, CheckoutPrice, CheckoutTotal, CheckoutWrapper } from "./styles";

export function Checkout() {
  const { cart, products } = useContext(ProductsContext)

  function productById(id: string) {
    return products[products.findIndex(product => product.id === id)]
  }

  const itemsTotal = cart.reduce((x, i) => x + i.total, 0)
  const itemsPrice = cart.reduce(
    (x, product) =>
      x + (product.total * productById(product.id).price)
    , 0
  )
  const deliveryPrice = Math.ceil(itemsTotal / 10) * 3.5
  const totalPrice = itemsPrice + deliveryPrice
  
  return (
    <CheckoutWrapper>
      <h2>Cafés selecionados</h2>
      <CheckoutContainer>
        {cart.map(item => {
          return (
            <CartItem key={item.id} {...item} />
          )
        })}
        <CheckoutPrice>
          <span>Total de itens</span>
          <span>{ConvertToMoney(itemsPrice)}</span>
        </CheckoutPrice>
        <CheckoutPrice>
          <span>Entrega</span>
          <span>{ConvertToMoney(deliveryPrice)}</span>
        </CheckoutPrice>
        <CheckoutTotal>
          <span>Total</span>
          <span>{ConvertToMoney(totalPrice)}</span>
        </CheckoutTotal>
        <CheckoutButton size="large" color="primary">Confirmar pedido</CheckoutButton>

      </CheckoutContainer>
    </CheckoutWrapper>
  )
}