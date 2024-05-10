import { useContext } from "react";
import { Checkout } from "./components/Checkout";
import { Fields } from "./components/Fields";
import { CartWrapper, CartForm, CartEmpty } from "./styles";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { BaseButton } from "../../layouts/DefaultLayout/styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const CartFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(1),
  city: zod.string().min(1),
  complement: zod.string(),
  neighborhood: zod.string().min(1),
  number: zod.string().min(1),
  paymentType: zod.string().min(1),
  state: zod.string().min(2),
})


export function Cart() {  

  const theme = useTheme()
  const { cart, removeAllCartItems } = useContext(CheckoutContext)
  const navigate = useNavigate();


  const cartForm = useForm({
    resolver: zodResolver(CartFormValidationSchema),
    defaultValues: {

    }
  })
  const { handleSubmit, reset } = cartForm 

  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitForm(data: any) {
    const submitData = {
      ...data,
      cart
    }
    reset()
    removeAllCartItems()
    navigate('/success', {
      state: submitData
    })
  }

  return (
    <CartWrapper>
      {cart.length > 0 ?
        <CartForm onSubmit={handleSubmit(submitForm)}>
          <FormProvider {...cartForm}>
            <Fields />
            <Checkout />
          </FormProvider>
        </CartForm> :
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