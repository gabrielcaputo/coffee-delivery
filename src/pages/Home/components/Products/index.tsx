import { useContext } from "react"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { ProductType } from "../../../../@types/products"
import { Product } from "../Product"

export function Products() {
  const { products } = useContext(ProductsContext)
  return (
    <>
    <h1>Nossos cafés</h1>
    <div>
      {products.map((product: ProductType) => {
        return (
          <Product {...product} />
        )
      })}
    </div>
    </>
  )
}