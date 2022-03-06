import { createContext, useContext } from "react";
import FlightStore from "./flightStore";

interface Store {
    flightStore: FlightStore,
}

export const store: Store = {
    flightStore: new FlightStore()
}

export const StoreContext = createContext(store);

export function UseStore() {
    return useContext(StoreContext);
}