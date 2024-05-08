import { useContext } from "react"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { ProductType } from "../../../../@types/products"
import { Product } from "../Product"
import { ProductsContainer, ProductsList } from "./styles"

export function Products() {
  const { products } = useContext(ProductsContext)
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