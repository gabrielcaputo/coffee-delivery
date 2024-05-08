import { ProductType } from "../../../../@types/products";

export function Product(product: ProductType) {
  return (
    <div key={product.id}>
      <div>
        {product.tag.map(tag => {
          return (
            <span>{tag}</span>
          )
        })}
      </div>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
    </div>
  )
}