import styled from "styled-components";
import { transparentize } from 'polished'

import { BaseContainer } from "../../../../layouts/DefaultLayout/styles";

export const BannerWrapper = styled.div`
  padding: ${s => s.theme.spacing.tokens["spacing-stack-3xl"]};
  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    padding: ${s => s.theme.spacing.tokens["spacing-stack-1xl"]};
  }
`

export const BannerContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s => s.theme.spacing.tokens["spacing-3xl"]};

  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    flex-direction: column;
    gap: ${s => s.theme.spacing.tokens["spacing-3xl"]};
  }
`

export const BannerText = styled.div`
  h1 {
    font: ${s => s.theme.fonts.tokens["title-xl"]};
    filter: drop-shadow(1rem 1rem 5rem ${s => transparentize(0.2, s.theme.colors.base["color-yellow"])});  

    @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
      font: ${s => s.theme.fonts.tokens["title-l"]};
    }    
  }

  p {
    font: ${s => s.theme.fonts.tokens["text-l"]};
    margin-top: ${s => s.theme.spacing.tokens["spacing-m"]};
    margin-bottom: ${s => s.theme.spacing.tokens["spacing-3xl"]};
    filter: drop-shadow(1rem 1rem 2rem ${s => transparentize(0.2, s.theme.colors.base["color-yellow"])});  

    @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-l"]}) {
      font: ${s => s.theme.fonts.tokens["text-m"]};
    }
  }

  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    max-width: 20rem;
    width: 100%;
    text-align: center;
  }
  
`

export const BannerImage = styled.img`
  max-width: 50%;
  filter: drop-shadow(-2rem 3rem 5rem ${s => transparentize(0.5, s.theme.colors.base["color-yellow"])});
  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-l"]}) {
    max-width: 25%;
  }
  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    max-width: 20rem;
    width: 75%;
  }
`

export const BannerDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s => s.theme.spacing.tokens["spacing-2xl"]};
  filter: drop-shadow(-1rem -1rem 2rem ${s => transparentize(0.3, s.theme.colors.base["color-yellow"])});  
  @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
    gap: ${s => s.theme.spacing.tokens["spacing-1xl"]};
  } 

  ul {
    display: flex;
    flex-direction: column;
    gap: ${s => s.theme.spacing.tokens["spacing-1xl"]};

    @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
      font: ${s => s.theme.fonts.tokens["text-s"]};
      width: 100%;
      align-items: center;
      justify-content: center;
    } 

    > li {
      display: flex;
      align-items: center;
      gap: ${s => s.theme.spacing.tokens["spacing-3xs"]};
    }
  }
`

export const BannerDescriptionCircle = styled.span`
  width: ${s => s.theme.sizes.base["size-800"]};
  height: ${s => s.theme.sizes.base["size-800"]};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${s => s.theme.colors.base["color-gray-400"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-circle"]};
  color: ${s => s.theme.colors.base["color-gray-100"]};

  &[color="yellow"] {
    background: ${s => s.theme.colors.base["color-yellow"]};
  }
  &[color="yellow-dark"] {
    background: ${s => s.theme.colors.base["color-yellow-dark"]};
  }
  &[color="gray"] {
    background: ${s => s.theme.colors.base["color-gray-700"]};
  }
  &[color="purple"] {
    background: ${s => s.theme.colors.base["color-purple"]};
  }
`