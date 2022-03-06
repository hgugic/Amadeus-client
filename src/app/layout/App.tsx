import React, { useEffect } from 'react';
import './styles.css';
import NavBar from './NavBar';
import { Container, Grid } from 'semantic-ui-react';
import { UseStore } from '../stores/store';
import 'mobx-react';
import FlightList from '../../features/FlightList';
import FlightSearchForm from '../form/FlightSearchForm';


function App() {
  const {flightStore} = UseStore();

  useEffect(() =>{
    flightStore.GetCurrency();
  }, [flightStore])

  return (
    <div>
      <NavBar></NavBar>
      <Container style = {{marginTop: '5em'}}>
        <Grid>
            <Grid.Column width='6'>
              <FlightSearchForm></FlightSearchForm>
            </Grid.Column>          
            <Grid.Column width='10' textAlign='center'>         
              <FlightList ></FlightList>       
            </Grid.Column> 
        </Grid>
      </Container>
    </div>
  );
}

export default App;