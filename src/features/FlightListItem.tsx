import { Divider, Grid, GridRow, Icon, Item, Segment } from "semantic-ui-react";
import DateInput from "../app/form/DateInput";
import { Flight } from "../app/models/Flight";

interface Props {
    flight : Flight;
}

export default function FlightListItem({flight} : Props){

return (
    <Segment>
        <Grid>
            <Grid.Row>
            <Grid.Column width='8'>
                <Segment.Group>                   
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Content>                      
                                        <Item.Header>                              
                                            <span>    
                                                <Icon name="plane"></Icon>                         
                                                {flight.originAirport.iataCode}  
                                                <Icon name='arrow right'></Icon>
                                                {flight.destinationAirport.iataCode}
                                            </span>
                                        </Item.Header>
                                        <Item.Description>
                                            <Icon name='calendar alternate outline'> </Icon>
                                            {flight.departureDate}
                                        </Item.Description>
                                        {flight.numberOfTransversDeparture ===  0 &&
                                            <Item.Description> <Icon name="plane"></Icon> Direct flight</Item.Description>
                                        }
                                        {flight.numberOfTransversDeparture !==  0 &&
                                        <Item.Description>
                                            <Icon name="plane"></Icon>   
                                            {flight.numberOfTransversDeparture} transfers <Icon name="plane"></Icon>                           
                                        </Item.Description>
                                        }

                                </Item.Content>
                                

                            </Item>

                        </Item.Group>
                    </Segment>     
                </Segment.Group>
            </Grid.Column>
            <Grid.Column width='8'>
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Content>                      
                                        <Item.Header>                              
                                            <span>                                                                        
                                                {flight.originAirport.iataCode}  
                                                <Icon name='arrow left'></Icon>
                                                {flight.destinationAirport.iataCode}
                                                <Icon name="plane"></Icon>   
                                            </span>
                                        </Item.Header>
                                        <Item.Description>
                                            <Icon name='calendar alternate outline'> </Icon>
                                            
                                            {flight.departureDate}
                                        </Item.Description>
                                        {flight.numberOfTransversReturn ===  0 &&
                                            <Item.Description> <Icon name="plane"></Icon> Direct flight</Item.Description>
                                        }
                                        {flight.numberOfTransversReturn !==  0 &&
                                        <Item.Description>
                                            <Icon name="plane"></Icon>    
                                            {flight.numberOfTransversReturn} transfers <Icon name="plane"></Icon>                           
                                        </Item.Description>
                                        }

                                </Item.Content>
                                

                            </Item>

                        </Item.Group>
                    </Segment> 
                </Segment.Group>
            </Grid.Column>
            </Grid.Row>
            <Divider horizontal>Total price: {flight.price} {flight.currency.abrv}</Divider>
        </Grid>
    </Segment>
)
}