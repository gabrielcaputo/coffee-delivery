import { ReactNode, createContext, useEffect, useReducer } from "react";
import { LocationFromAPI, globalReducer } from "../reducers/global/reducer";
import { setLocationAction } from "../reducers/global/actions";

interface GlobalContextType {
  location: LocationFromAPI
  getLocation: (location: LocationFromAPI) => void
}

interface GlobalContextProviderProps {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextType)

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [globalState, dispatch] = useReducer(globalReducer, {
    location: {
      city: {
        name: ''
      },
    }
  })

  const { location } = globalState

  useEffect(() => {
    getLocation()
  }, [])

  function getLocation() {
    fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=25a38e95a96843a88c39391048a03f9b", {
      method: 'GET',
    }).then(response => response.json())
      .then(result => {
        dispatch(setLocationAction(result))
      })
      .catch(e => e);
  }

  return (
    <GlobalContext.Provider value={{
      location,
      getLocation
    }}>
      {children}
    </GlobalContext.Provider>
  )
}