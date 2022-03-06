import axios, {AxiosResponse} from 'axios';
import { Airport } from '../models/Airport';
import { Currency } from '../models/Currency';
import { Flight } from '../models/Flight';
import { Itinerary } from '../models/Itinerary';

axios.defaults.baseURL = 'https://localhost:44320/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const request = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody), 
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody), 
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody), 
    delete: <T>  (url: string) => axios.delete<T>(url).then(responseBody), 
}

const Flights = {
    details: (itinerary: Itinerary) => request.post<Flight[]>('/flight', itinerary)
}

const Currencies = {
    list: () => request.get<Currency[]>('/currency')
}

const Airports = {
    list: (iataCode: string) => request.get<Airport[]>(`/airport?iataCode=${iataCode}` )
}

const agent = {
    Flights,
    Currencies,
    Airports
}

export default agent;