import { ReactNode, createContext, useEffect, useReducer } from "react";
import { LocationFromAPI, globalReducer } from "../reducers/global/reducer";
import { setLocationAction } from "../reducers/global/actions";
import toast, { ToastOptions, Toaster } from "react-hot-toast";

interface GlobalContextType {
  location: LocationFromAPI
  getLocation: (location: LocationFromAPI) => void
  notify: (message: string, options: ToastOptions) => void
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

  function notify(message: string, options?: ToastOptions) {
    toast(message, options)
  } 

  return (
    <GlobalContext.Provider value={{
      location,
      getLocation,
      notify,
    }}>
      {children}
      <Toaster />
    </GlobalContext.Provider>
  )
}