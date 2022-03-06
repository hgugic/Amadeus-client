export interface Itinerary {
    originAirportId: string;
    destinationAirportId: string;
    departureDate: Date;
    returnDate: Date;
    currencyId: string;
    numberOfPassengers: number;
}