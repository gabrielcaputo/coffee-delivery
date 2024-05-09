import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${s => s.theme.colors.base["color-gray-400"]};
`

export const CartItemImage = styled.img`
  width: 4rem;
`
export const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`
export const CartItemNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
`

export const CartItemName = styled.div`
  font: ${s => s.theme.fonts.tokens["text-m"]};
  color: ${s => s.theme.colors.tokens["base-subtitle"]};
`
export const CartItemPrice = styled.div`
  font: ${s => s.theme.fonts.tokens["text-m"]};
  font-weight: 800;
  color: ${s => s.theme.colors.tokens["base-text"]};
`

export const CartItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`