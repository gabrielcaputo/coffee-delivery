import styled from "styled-components";

export const LayoutContainer = styled.div`
  background: ${s => s.theme.colors.tokens.background};
`

export const BaseContainer = styled.div`
  width: calc(100% - 4rem);
  max-width: ${s => s.theme.breakpoints.tokens["breakpoint-l"]};
  margin: 0 auto;
`