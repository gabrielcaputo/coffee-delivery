import styled from "styled-components";
import { BaseButton } from "../../../../layouts/DefaultLayout/styles";

export const CheckoutWrapper = styled.div`
  h2 {
    font: ${s => s.theme.fonts.tokens["title-xs"]};
    margin-bottom: 1rem;
  }
`

export const CheckoutContainer = styled.div`
  padding: ${s => s.theme.spacing.tokens["spacing-2xl"]};
  background: ${s => s.theme.colors.tokens["base-card"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-card"]};
`

export const CheckoutPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  font: ${s => s.theme.fonts.tokens["text-s"]};
`

export const CheckoutTotal = styled(CheckoutPrice)`
  font: ${s => s.theme.fonts.tokens["text-l"]};
  font-weight: bold;
`

export const CheckoutButton = styled(BaseButton)`
  width: 100%;
  margin-top: 2rem;
`