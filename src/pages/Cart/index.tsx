import { useContext } from "react";
import { Checkout } from "./components/Checkout";
import { Form } from "./components/Form";
import { CartWrapper, CartContainer, CartEmpty } from "./styles";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { BaseButton } from "../../layouts/DefaultLayout/styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export function Cart() {  
  const { cart } = useContext(CheckoutContext)
  const theme = useTheme()
  const navigate = useNavigate();

  return (
    <CartWrapper>
      {cart.length > 0 ?
        <CartContainer>
          <Form />
          <Checkout />
        </CartContainer> :
        <CartEmpty>
          <ShoppingCartSimple size={'5rem'} color={theme.colors.tokens["secondary-button"]} />
          <span>Nenhum item foi <br />adicionado no carrinho.</span>
          <BaseButton
            size="large"
            color="secondary"
            onClick={() => navigate('/')}
          >Adicionar produtos</BaseButton>
        </CartEmpty>
      }
    </CartWrapper>
  )
}