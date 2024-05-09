import styled from "styled-components";
import { transparentize } from 'polished'

import { BaseContainer } from "../../layouts/DefaultLayout/styles";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10000;
  background: ${s => transparentize(0.1, s.theme.colors.tokens.background)};
  
  &.scrolled {
    background: ${s => transparentize(0.1, s.theme.colors.tokens.background)};
  }
`
export const HeaderWrapper = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s => s.theme.spacing.tokens["spacing-stack-2xl"]};
`

export const HeaderLogo = styled.div`
  display: flex;
`

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s => s.theme.spacing.base["spacing-100"]};
`

export const HeaderButton = styled.div`
  background: ${s => s.theme.colors.tokens["base-button"]};
  padding: ${s => s.theme.spacing.base["spacing-100"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-1xs"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s => s.theme.spacing.base["spacing-50"]};
  font: ${s => s.theme.fonts.tokens["text-s"]};
  position: relative;
`

export const HeaderCartButton = styled(HeaderButton)`
  background: ${s => s.theme.colors.tokens["cart-button-background"]};
  color: ${s => s.theme.colors.tokens["cart-button-text"]};
`
export const HeaderCartButtonPill = styled.div`
  font: ${s => s.theme.fonts.tokens.tag};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -${s => s.theme.sizes.base["size-100"]};
  right: -${s => s.theme.sizes.base["size-100"]};
  min-width: 1.25rem;
  padding: 0.25rem;
  background: ${s => s.theme.colors.tokens["cart-button-text"]};
  color: ${s => s.theme.colors.tokens["cart-button-background"]};
  font-weight: bold;
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-pill"]};
`

export const HeaderCartLocation = styled(HeaderButton)`
  background: ${s => s.theme.colors.tokens["header-location-background"]};
  color: ${s => s.theme.colors.tokens["header-location-text"]};
`