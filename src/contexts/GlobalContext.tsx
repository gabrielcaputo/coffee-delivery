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
      city: '',
      region: ''
    }
  })

  const { location } = globalState

  useEffect(() => {
    getLocation()
  }, [])

  function getLocation() {
    fetch("http://ip-api.com/json/", {
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