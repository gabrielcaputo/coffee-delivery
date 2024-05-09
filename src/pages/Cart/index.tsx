import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { ConvertToMoney } from "../../@helpers/convertToMoney";

import { CartItem } from "./components/Checkout/CartItem";

export function Cart() {
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
    <div>
      <div>{ConvertToMoney(itemsPrice)}</div>
      <div>{ConvertToMoney(deliveryPrice)}</div>
      <div>{ConvertToMoney(totalPrice)}</div>
      {cart.map(item => {
        return (
          <CartItem key={item.id} {...item} />
        )
      })}
    </div>
  )
}