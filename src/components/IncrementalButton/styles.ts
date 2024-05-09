import styled from "styled-components";

export const IncrementalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${s => s.theme.borderRadius.tokens["border-radius-1xs"]};
  border: 0;
  background: ${s => s.theme.colors.base["color-gray-400"]};
  color: ${s => s.theme.colors.base["color-purple-dark"]};
  padding: 0 ${s => s.theme.spacing.tokens["spacing-3xs"]};
  font-size: 1rem;

  > div, > button {
    width: 1.5rem;
    height: 2.25rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  button {
    color: ${s => s.theme.colors.base["color-purple"]};
    border: 0;
    background: none;
    box-shadow: none;
    cursor: pointer;

    &[disabled] {
      color: ${s => s.theme.colors.base["color-gray-600"]};
    }
  }
`