import styled from "styled-components";
import { css } from "styled-components";

export const LayoutContainer = styled.div`
  /* background: ${s => s.theme.colors.tokens.background}; */
  padding-bottom: 2rem;
`

export const BaseContainer = styled.div`
  width: calc(100% - 4rem);
  max-width: ${s => s.theme.breakpoints.tokens["breakpoint-l"]};
  margin: 0 auto;
`

export const BaseButton = styled.button<{
  size: "large" | "medium"
}>`
  border: 0;
  background: ${s => s.theme.colors.tokens["base-button"]};
  color: ${s => s.theme.colors.tokens["base-text"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-1xs"]};
  text-transform: uppercase;
  display: flex;
  gap: 0.333rem;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${s => s.theme.colors.base["color-gray-500"]}
  }
  
  ${s => s.size === 'medium' && css`
    font: ${s.theme.fonts.tokens["button-m"]};
    padding: ${s.theme.spacing.tokens["spacing-3xs"]};
  `}

  ${s => s.size === 'large' && css`
    font: ${s.theme.fonts.tokens["button-l"]};
    padding: ${s.theme.spacing.tokens["spacing-1xs"]};
  `}

  ${s => s.color === 'primary' && css`
    color: ${s.theme.colors.tokens["primary-text"]};
    background: ${s.theme.colors.tokens["primary-button"]};

    &:hover {
      background: ${s.theme.colors.tokens["primary-button-hover"]};
    }
  `}

  ${s => s.color === 'secondary' && css`
    color: ${s.theme.colors.tokens["secondary-button-text"]};
    background: ${s.theme.colors.tokens["secondary-button"]};

    &:hover {
      background: ${s.theme.colors.tokens["secondary-button-hover"]};
    }
  `}
`

const BaseInputStyle = css`
  border: 0;
  font: ${s => s.theme.fonts.tokens["text-s"]};
  padding: ${s => s.theme.spacing.tokens["spacing-1xs"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-1xs"]};
  background: ${s => s.theme.colors.tokens["base-input"]};
  border: 1px solid ${s => s.theme.colors.tokens["base-button"]};
`

export const BaseInput = styled.input`
  ${BaseInputStyle}
`

export const BaseSelect = styled.select`
  ${BaseInputStyle}
`

export const BaseCheckbox = styled.input`
  /* display: none; */
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + label {
    border: 1px solid ${s => s.theme.colors.base["color-purple"]};
    background: ${s => s.theme.colors.base["color-purple-light"]};
  }
`

export const BaseCheckboxLabel = styled.label`
  ${BaseInputStyle}
  text-transform: uppercase;
  cursor: pointer;
  background: ${s => s.theme.colors.tokens["base-button"]};
  font: ${s => s.theme.fonts.tokens["button-m"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`