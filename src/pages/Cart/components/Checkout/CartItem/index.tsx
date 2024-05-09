import { useContext } from "react"
import { ProductsContext } from "../../../../../contexts/ProductsContext"
import { IncrementalButton } from "../../../../../components/IncrementalButton"
import { ConvertToMoney } from "../../../../../@helpers/convertToMoney";
import { CartType } from "../../../../../@types/products";
import { Trash } from "@phosphor-icons/react";

export function CartItem(item: CartType) {
  const { products, decrementCartItem, incrementCartItem, removeCartItem } = useContext(ProductsContext)
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
    <div>
      <img src={`/images/products/${productById(item.id).id}.png`} alt={productById(item.id).name} />
      <>{productById(item.id).name}</>
      <>{ConvertToMoney(productById(item.id).price * item.total)}</>
      <IncrementalButton
        total={item.total}
        incrementTotal={incrementTotal}
        decrementTotal={decrementTotal}
        min={1}
      />
      <button onClick={removeItem}>
        <Trash />
        Remover
      </button>
    </div>
  )
}