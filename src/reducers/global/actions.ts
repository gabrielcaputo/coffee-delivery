import { LocationFromAPI } from "./reducer";

export enum ActionTypes {
  SET_LOCATION = 'SET_LOCATION'
}

export function setLocationAction(location: LocationFromAPI) {
  return {
    type: ActionTypes.SET_LOCATION,
    payload: {
      location
    }
  }
}