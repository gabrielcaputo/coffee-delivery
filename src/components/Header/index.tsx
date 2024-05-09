import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react"
import { CheckoutContext } from "../../contexts/CheckoutContext"
import { HeaderContainer, HeaderWrapper, HeaderLogo, HeaderCart, HeaderCartLocation, HeaderCartButton, HeaderCartButtonPill } from "./styles"

export function Header() {
  const { location } = useContext(GlobalContext)
  const { cart } = useContext(CheckoutContext)
  const locationText = location.city.name  && `${location.city.name}`

  const totalProducts = cart.reduce((x, i) => x + i.total, 0)

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo>
          <NavLink to="/">
            <img src="/images/coffee-delivery-logo.svg" alt="Coffee Delivery" />
          </NavLink>
        </HeaderLogo>
        <HeaderCart>
          {locationText && <HeaderCartLocation>
            <MapPin size={22} weight="fill" />
            <span>{locationText}</span>
          </HeaderCartLocation>}
          <NavLink to="/cart">
            <HeaderCartButton>
              {cart.length > 0 &&
                <HeaderCartButtonPill>{totalProducts}</HeaderCartButtonPill>
              }
              <ShoppingCartSimple size={22} weight="fill" />
            </HeaderCartButton>
          </NavLink>
        </HeaderCart>
      </HeaderWrapper>
    </HeaderContainer>
  )
}