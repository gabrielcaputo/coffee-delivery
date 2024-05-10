import styled from "styled-components";
import { css } from "styled-components";

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 6.875rem - 2rem);
  margin: 0 auto;
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-card"]};
  gap: 1rem;
  padding: ${s => s.theme.spacing.base["spacing-800"]};
`

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3rem;

  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 50%;
    @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
      width: 100%;
      max-width: 20rem;
    }
  }
`

export const SuccessDescription = styled.div`
  ${s => css`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
      width: 100%;
    }

    > h1 {
      font: ${s.theme.fonts.tokens["title-l"]};
      color: ${s.theme.colors.base["color-yellow-dark"]};
    }
    > p {
      margin-bottom: 2rem;
      font: ${s.theme.fonts.tokens["text-l"]}
    }

    > ul {
      display: flex;
      flex-direction: column;
      gap: ${s.theme.spacing.base["spacing-800"]};
      padding: ${s.theme.spacing.base["spacing-800"]};
      border-radius: ${s.theme.borderRadius.tokens["border-radius-card"]};
      background: ${s.theme.colors.tokens.background};
      position: relative;

      &:before {
        border-radius: ${s.theme.borderRadius.tokens["border-radius-card"]};
        content: '';
        background-image: ${`linear-gradient(to bottom, ${s.theme.colors.base["color-yellow"]} 0%, ${s.theme.colors.base["color-purple"]} 100%);`}
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        position: absolute;
        z-index:-1;
      }

      li {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  `}
`

export const SuccessDescriptionItemImage = styled.span<{
  color: 'yellow' | 'purple' | 'yellow-dark'
}>`
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s => s.theme.colors.base["color-white"]};
  background: ${s => s.theme.colors.base[`color-${s.color}`]};
`
export const SuccessDescriptionItemText = styled.span`
  display: flex;
  flex-direction: column;
  font: ${s => s.theme.fonts.tokens["text-m"]};
`