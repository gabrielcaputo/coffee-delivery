import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./components/Router"
import { BrowserRouter } from "react-router-dom"
import { GlobalContextProvider } from "./contexts/GlobalContext"
import { ProductsContextProvider } from "./contexts/ProductsContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalContextProvider>
          <ProductsContextProvider>
            <Router />
          </ProductsContextProvider>
        </GlobalContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
