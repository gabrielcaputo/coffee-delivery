import styled from "styled-components";
import { BaseContainer } from "../../layouts/DefaultLayout/styles";

export const CartWrapper = styled.div`
  height: 100%;
`

export const CartContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 1fr 25rem;
  position: relative;

  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    grid-template-columns: 1fr;
  }
`

export const CartEmpty = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 6.875rem - 2rem);
  margin: 0 auto;
  background: ${s => s.theme.colors.tokens["base-card"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-card"]};
  text-align: center;
  gap: 1rem;
  color: ${s => s.theme.colors.base["color-gray-600"]};

  span {
    font: ${s => s.theme.fonts.tokens["text-s"]}
  }
`