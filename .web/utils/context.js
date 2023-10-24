import { createContext } from "react"
import { Event, hydrateClientStorage } from "/utils/state.js"

export const initialState = {"is_hydrated": false, "text": "Hello World!"}
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}
export const initialEvents = [
    Event('input_state.hydrate', hydrateClientStorage(clientStorage)),
]