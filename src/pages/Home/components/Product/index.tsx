import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "../../../../@types/products";
import { IncrementalButton } from "../../../../components/IncrementalButton";
import { AddToCartButton, ProductCheckout, ProductDescription, ProductPrice, ProductTags, ProductTitle, ProductWrapper } from "./styles";

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
          R$ <span>{String(product.price).padEnd(4, '000').replace('.', ',')}</span>
        </ProductPrice>
        <IncrementalButton />
        <AddToCartButton>
          <ShoppingCartSimple weight="fill" />
        </AddToCartButton>
      </ProductCheckout>
    </ProductWrapper>
  )
}