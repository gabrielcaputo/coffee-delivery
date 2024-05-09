import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "../../../../@types/products";
import { IncrementalButton } from "../../../../components/IncrementalButton";
import { AddToCartButton, ProductCheckout, ProductDescription, ProductPrice, ProductTags, ProductTitle, ProductWrapper } from "./styles";
import { ConvertToMoney } from "../../../../@helpers/convertToMoney";
import { useContext, useState } from "react";
import { ProductsContext } from "../../../../contexts/ProductsContext";

export function Product(product: ProductType) {
  const { addProductToCart } = useContext(ProductsContext)
  const [total, setTotal] = useState(1)

  function incrementTotal() {
    setTotal((state) => state + 1)
  }

  function decrementTotal() {
    if (total > 1) {
      setTotal((state) => state - 1)
    }
  }

  function addProduct() {
    addProductToCart({
      id: product.id,
      total
    })
  }

  return (
    <ProductWrapper>
      <img src={`/images/products/${product.id}.png`} alt={product.name} />
      <ProductTags>
        {product.tag.map(tag => {
          return (
            <span key={tag}>{tag}</span>
          )
        })}
      </ProductTags>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductCheckout>
        <ProductPrice>
          <span>{ConvertToMoney(product.price)}</span>
        </ProductPrice>
        <IncrementalButton
          total={total}
          incrementTotal={incrementTotal}
          decrementTotal={decrementTotal}
          max={10}
        />
        <AddToCartButton onClick={addProduct}>
          <ShoppingCartSimple weight="fill" />
        </AddToCartButton>
      </ProductCheckout>
    </ProductWrapper>
  )
}