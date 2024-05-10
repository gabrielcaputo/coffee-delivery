import styled from "styled-components";

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font: ${s => s.theme.fonts.tokens["title-xs"]};
  }
`

export const FieldsCard = styled.div`
  padding: ${s => s.theme.spacing.tokens["spacing-2xl"]};
  background: ${s => s.theme.colors.tokens["base-card"]};
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-s"]};
`

export const FieldsCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const FieldsCardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    font: ${s => s.theme.fonts.tokens["text-m"]}
  }

  p {
    font: ${s => s.theme.fonts.tokens["text-s"]}
  }
`

export const FieldsFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  input, select {
    &#cep { width: 10rem; }
    &#street { width: 100%; }
    &#number { width: 10rem; }
    &#complement { width: calc(100% - 10rem - 0.75rem); }
    &#neighborhood { width: 10rem; }
    &#city {
      width: calc(100% - 20.75rem - 0.75rem);
      min-width: 15rem;
      @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-l"]}) {
        width: calc(100% - 10rem - 0.75rem);
      }
    }
    &#state { width: 10rem }
    &[name=paymentType] + label {
      width: calc(33.33333% - 0.5rem);
      min-width: 10rem;
      @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-l"]}) {
        width: 100%;
      }
    }

    @media screen and (max-width: ${s => s.theme.breakpoints.tokens["breakpoint-m"]}) {
      width: 100% !important;
    }
  }

`