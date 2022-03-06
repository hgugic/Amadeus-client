import {action, makeAutoObservable, observable, runInAction} from "mobx";
import agent from "../api/agent";
import { Airport } from "../models/Airport";
import { Currency } from "../models/Currency";
import { Flight } from "../models/Flight";
import { Itinerary } from "../models/Itinerary";


export default class FlightStore {
    flights: Flight[] = []
    airports: Airport[] = []
    currencies: Currency[] = []
    loadingFlights = false;
    flightSearchError = false;
    initial = true;

    constructor() {
        makeAutoObservable(this)
    }
      
    findFlights = async (itinerary: Itinerary) => {
        
        this.initial = false;
        this.loadingFlights = true;
        this.flightSearchError = false;

        try {
            const flightList = (await agent.Flights.details(itinerary));
            runInAction(()=>{             
                 flightList.forEach(f => {
                    f.departureDate = f.departureDate.split('T')[0];
                    f.returnDate = f.returnDate.split('T')[0];
                    this.flights.push(f);
                });
            });
        } catch (error) {
            this.flightSearchError = true;
        }
        
        this.loadingFlights = false;
    
    }

    GetCurrency = async () => {
        try {
            const currencyList = (await agent.Currencies.list());
            runInAction(()=>{    
            this.currencies = currencyList;
        });
        } catch (error) {}
    }
}