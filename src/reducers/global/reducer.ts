import { produce } from "immer"
import { ActionTypes } from "./actions"

export interface LocationFromAPI {
  city: {
    name: string
  },
}

interface GlobalState {
  location: LocationFromAPI
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function globalReducer(state: GlobalState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_LOCATION: {
      return produce(state, draft => {
        draft.location = action.payload.location
      })
    }
    default: return state
  }
}