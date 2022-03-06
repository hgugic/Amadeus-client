import React, { useContext, useEffect, useState } from "react";
import { Segment, Button, DropdownOnSearchChangeData, Search} from 'semantic-ui-react';
import DateInput from "./DateInput";
import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import SelectInput from "./SelectInput";
import { numberOfPassagers } from "./numberOfPassagers";
import { Itinerary } from "../models/Itinerary";
import { observer } from "mobx-react-lite";
import { UseStore } from '../stores/store';
import agent from "../api/agent";

export interface abc {
    text:string;
    value: string;
    key:string;
}


export default observer(function FlightSearchForm() {
    
    const {flightStore} = UseStore();

    const [itinerary, setItinerary] = useState({
       originAirportId: '',
       destinationAirportId: '',
       departureDate: addDays(2),
       returnDate: addDays(9),
       currencyId: '',
       numberOfPassengers: 2,
    })

    function addDays(days:number) {
        var result = new Date();
        result.setDate(result.getDate() + days);
        return result;
      }

    const validationSchema = Yup.object({
        originAirportId: Yup.string().required('Origin Airport is required'),
        destinationAirportId: Yup.string().required('Destination Airport is required'),
        currencyId: Yup.string().required('Curreny is required')
    })

    function handleFormSubmit(itinerary: Itinerary){
        flightStore.findFlights(itinerary);
    }

    const currencyOption = flightStore.currencies.map(x => ({value: x.id, key: x.id, text: x.abrv}));
    const [airportOption , setAirportOption] = useState([{key : "", value : "", text:""}]);
    const [airportOption2 , setAirportOption2] = useState([{key : "", value : "", text:""}]);
    
    const GetAirportOption = async (search : string) => { 
        if(search !== "")
        {
            const airports = await agent.Airports.list(search);
            const options = airports.map(x => ({value: x.id, key: x.id, text: `${x.iataCode}  (${x.name})`}));
            setAirportOption(options);
        }
    };

    const GetAirportOption2 = async (search : string) => { 
        if(search !== "")
        {
            const airports = await agent.Airports.list(search);
            const options = airports.map(x => ({value: x.id, key: x.id, text: `${x.iataCode}  (${x.name})`}));
            setAirportOption2(options);
        }
    };

    return (
        <Segment>
            <Formik 
            enableReinitialize
                validationSchema={validationSchema}
                initialValues={itinerary} 
                onSubmit={values=> handleFormSubmit(values)}>
                {({ handleSubmit}) => (                  
                    <Form className='ui form'>
                        <SelectInput 
                            options={airportOption} 
                            placeholder='From:' 
                            name='originAirportId' 
                            onSearchChange={(e: any,v: DropdownOnSearchChangeData) => { GetAirportOption(v.searchQuery);}}/>
                        <SelectInput 
                            options={airportOption2} placeholder='To:' 
                            name='destinationAirportId' 
                            onSearchChange={(e: any,v: DropdownOnSearchChangeData) => { GetAirportOption2(v.searchQuery);}}/>
                        <DateInput
                            placeholderText='Depart'
                            name='departureDate'
                        />
                        <DateInput
                            placeholderText='Return'
                            name='returnDate'
                        />
                        <SelectInput options={numberOfPassagers} placeholder='Number Of Travellers:' name='numberOfPassengers' />
                        <SelectInput options={currencyOption} placeholder='Currency:' name='currencyId' />
                        <Button type='submit' content='Search' />                      
                    </Form>
            )} 
            </Formik>
     
        </Segment>
    )

}
)