import { observer } from "mobx-react-lite";
import { Divider, Grid, Icon, Item, List, Loader, Segment } from "semantic-ui-react";
import { store, UseStore } from "../app/stores/store";
import FlightListItem from "./FlightListItem";


export default observer(function FlightList(){

    const {flightStore} = UseStore();
    return (
    <Grid>      
        <List>
            <Loader active = {flightStore.loadingFlights}>Loading flights ... <Divider horizontal></Divider><Icon name="plane"></Icon> </Loader>
            {!flightStore.loadingFlights && !flightStore.flightSearchError && flightStore.flights.length > 0 &&
            <List.Item>
                <Segment>
                    <Item.Group divided>
                        {store.flightStore.flights!.map(flight => (                           
                                <FlightListItem flight={flight}></FlightListItem>
                        ))}
                    </Item.Group>
                </Segment>
            </List.Item>}
            {flightStore.flightSearchError && <Segment><Divider>Something went wrong</Divider></Segment>}
            {flightStore.flights.length === 0 && !flightStore.initial && <Segment><Divider>We can't find any flights</Divider></Segment>}
            {flightStore.initial && flightStore.flights.length === 0 && <Segment><Divider horizontal>Find flight with Amadeus Scanner</Divider></Segment>}
        </List>
    </Grid>

    )
})