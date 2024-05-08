import styled from "styled-components";
import { BaseContainer } from "../../../../layouts/DefaultLayout/styles";

export const ProductsContainer = styled(BaseContainer)`
  h2 {
    font: ${s => s.theme.fonts.tokens["title-l"]};
    margin: ${s => s.theme.spacing.tokens["spacing-stack-3xl"]}
  }
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  align-items: center;
  justify-content: center;
  gap: ${s => s.theme.spacing.tokens["spacing-2xl"]}
`