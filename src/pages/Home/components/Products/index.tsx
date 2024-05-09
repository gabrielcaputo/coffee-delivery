import { useContext } from "react"
import { CheckoutContext } from "../../../../contexts/CheckoutContext"
import { ProductType } from "../../../../@types/checkout"
import { Product } from "../Product"
import { ProductsContainer, ProductsList } from "./styles"

export function Products() {
  const { products } = useContext(CheckoutContext)
  return (
    <ProductsContainer>
      <h2>Nossos cafés</h2>
      <ProductsList>
        {products.map((product: ProductType) => {
          return (
            <Product key={product.id} {...product} />
          )
        })}
      </ProductsList>
    </ProductsContainer>
  )
}