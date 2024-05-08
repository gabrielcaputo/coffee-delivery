import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

export function Header() {
  const { location } = useContext(GlobalContext)
  const locationText = location.city.length > 0 && `${location.city}, ${location.region}`

  return (
    <>{locationText}</>
  )
}