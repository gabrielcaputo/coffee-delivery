import { useEffect, useState } from "react"

interface LocationType {
  city: string,
  region: string,
}

export function Header() {
  const [location, setLocation] = useState<LocationType>({
    city: '',
    region: ''
  })
  const locationText = location.city.length > 0 && `${location.city}, ${location.region}`

  useEffect(() => {
    fetch("http://ip-api.com/json/", {
      method: 'GET',
    }).then(response => response.json())
      .then(result => {
        setLocation(result)
      })
      .catch(e => e);
  }, [])

  return (
    <>{locationText}</>
  )
}