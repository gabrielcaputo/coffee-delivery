import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./components/Router"
import { BrowserRouter } from "react-router-dom"
import { GlobalContextProvider } from "./contexts/GlobalContext"
import { CheckoutContextProvider } from "./contexts/CheckoutContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </GlobalContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
