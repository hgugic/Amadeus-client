import { Airport } from "./Airport";
import { Currency } from "./Currency";

export interface Flight {
    id: string;
    originAirport: Airport;
    destinationAirport: Airport;
    departureDate: string;
    returnDate: string;
    numberOfPassengers: number;
    numberOfTransversDeparture: number;
    numberOfTransversReturn: number;
    currency: Currency;
    price: number;
}