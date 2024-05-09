import styled from "styled-components";

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
  
  ${s => s.size === 'medium' && `
    font: ${s.theme.fonts.tokens["button-m"]};
    padding: ${s.theme.spacing.tokens["spacing-3xs"]};
  `}

  ${s => s.size === 'large' && `
    font: ${s.theme.fonts.tokens["button-l"]};
    padding: ${s.theme.spacing.tokens["spacing-1xs"]};
  `}

  ${s => s.color === 'primary' && `
    color: ${s.theme.colors.tokens["primary-text"]};
    background: ${s.theme.colors.tokens["primary-button"]};

    &:hover {
      background: ${s.theme.colors.tokens["primary-button-hover"]};
    }
  `}

  ${s => s.color === 'secondary' && `
    color: ${s.theme.colors.tokens["secondary-button-text"]};
    background: ${s.theme.colors.tokens["secondary-button"]};

    &:hover {
      background: ${s.theme.colors.tokens["secondary-button-hover"]};
    }
  `}
`