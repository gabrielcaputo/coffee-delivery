import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "../../../../@types/products";
import { IncrementalButton } from "../../../../components/IncrementalButton";
import { AddToCartButton, ProductCheckout, ProductDescription, ProductPrice, ProductTags, ProductTitle, ProductWrapper } from "./styles";
import { ConvertToMoney } from "../../../../@helpers/convertToMoney";

export function Product(product: ProductType) {
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
        <IncrementalButton />
        <AddToCartButton>
          <ShoppingCartSimple weight="fill" />
        </AddToCartButton>
      </ProductCheckout>
    </ProductWrapper>
  )
}