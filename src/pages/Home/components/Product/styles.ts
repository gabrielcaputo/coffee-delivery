import styled from "styled-components";
export const ProductWrapper = styled.div`
  background: ${s => s.theme.colors.tokens["base-card"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${s => s.theme.spacing.tokens["spacing-m"]};
  padding-top: 0;
  gap: ${s => s.theme.spacing.tokens["spacing-2xs"]};
  text-align: center;

  img {
    position: relative;
    height: 100px;
    margin-top: -${s => s.theme.spacing.tokens["spacing-1xl"]}
  }
`

export const ProductTags = styled.div`
display: flex;
gap: ${s => s.theme.spacing.base["spacing-50"]};
flex-wrap: wrap;
  span {
    background: ${s => s.theme.colors.base["color-yellow-light"]};
    color: ${s => s.theme.colors.base["color-yellow-dark"]};
    border-radius: ${s => s.theme.borderRadius.tokens["border-radius-pill"]};
    padding: ${s => s.theme.spacing.base["spacing-50"]} ${s => s.theme.spacing.base["spacing-100"]};
    font: ${s => s.theme.fonts.tokens.tag};
    text-transform: uppercase;
  }
`

export const ProductTitle = styled.div`
  color: ${s => s.theme.colors.tokens["base-subtitle"]};
  font: ${s => s.theme.fonts.tokens["title-s"]};
`

export const ProductDescription = styled.div`
  font: ${s => s.theme.fonts.tokens["text-s"]};
  color: ${s => s.theme.colors.tokens["base-label"]};
`

export const ProductCheckout = styled.div`
  display: flex;
  gap: ${s => s.theme.spacing.base["spacing-100"]};
  align-items: center;
  justify-content: center;
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s => s.theme.spacing.base["spacing-50"]};
  font: ${s => s.theme.fonts.tokens["text-s"]};

  span {
    font: ${s => s.theme.fonts.tokens["title-m"]};
  }
`