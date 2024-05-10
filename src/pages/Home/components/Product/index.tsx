import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "../../../../@types/checkout";
import { IncrementalButton } from "../../../../components/IncrementalButton";
import { ProductCheckout, ProductDescription, ProductPrice, ProductTags, ProductTitle, ProductWrapper } from "./styles";
import { ConvertToMoney } from "../../../../@helpers/convertToMoney";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { BaseButton } from "../../../../layouts/DefaultLayout/styles";
import { GlobalContext } from "../../../../contexts/GlobalContext";

export function Product(product: ProductType) {
  const { addProductToCart } = useContext(CheckoutContext)
  const { notify } = useContext(GlobalContext)
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
    notify(`${total}x ${product.name} adicionado${total > 1 ? `s` : ''} ao carrinho`, {
      position: "bottom-center"
    })
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
          name="product"
          incrementTotal={incrementTotal}
          decrementTotal={decrementTotal}
          max={10}
        />
        <BaseButton type="button" size="large" color="secondary" onClick={addProduct}>
          <ShoppingCartSimple weight="fill" size={'0.75rem'} />
        </BaseButton>
      </ProductCheckout>
    </ProductWrapper>
  )
}