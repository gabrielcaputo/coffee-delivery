import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SuccessWrapper, SuccessContainer, SuccessDescription, SuccessDescriptionItemImage, SuccessDescriptionItemText } from "./styles";

export function Success() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  function paymentTypes(paymentType: string) {
    switch(paymentType) {
      case 'debt': return "Débito"
      case 'credit': return "Crédito"
      case 'cash': return "Dinheiro"
      default: return ''
    }
  }

  return state && (
    <SuccessWrapper>
      <SuccessContainer>
        <SuccessDescription>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <ul>
            <li>
              <SuccessDescriptionItemImage color="purple"><MapPin /></SuccessDescriptionItemImage>
              <SuccessDescriptionItemText>
                <span>Entrega em <strong>{state.street}, {state.number}</strong></span>
                <span>{state.neighborhood} - {state.city}/{state.state}</span>
              </SuccessDescriptionItemText>
            </li>
            <li>
              <SuccessDescriptionItemImage color="yellow"><Timer /></SuccessDescriptionItemImage>
              <SuccessDescriptionItemText>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </SuccessDescriptionItemText>
            </li>
            <li>
              <SuccessDescriptionItemImage color="yellow-dark"><CurrencyDollar /></SuccessDescriptionItemImage>
              <SuccessDescriptionItemText>
                <span>Pagamento na entrega</span>
                <strong>{paymentTypes(state.paymentType)}</strong>
              </SuccessDescriptionItemText>
            </li>
          </ul>
        </SuccessDescription>
        <img src="/images/coffee-delivery-motorcycle.svg" />
      </SuccessContainer>
    </SuccessWrapper>
  )
}