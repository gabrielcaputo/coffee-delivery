import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${s => s.theme.colors.base['color-yellow']};
  }

  body {
    background: ${s => s.theme.colors.tokens.background};
    color: ${s => s.theme.colors.tokens['base-text']};
  }
  
  body, input, textarea, button {
    font: ${s => s.theme.fonts.tokens['text-m']};
  }
`