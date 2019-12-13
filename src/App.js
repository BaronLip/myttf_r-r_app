// Libraries:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS: 
import './App.css';
// Components:
import Dashboard from './containers/Dashboard';
import { Container, Grid } from 'semantic-ui-react';
// Functions:
import header from './components/Header'
import { MatchesHeader } from "./components/MatchesHeader";


function App() {
   console.log("You've reached App.js")
   return (
      <Router>
         <Switch>
            <Container>
               <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='top'>
                  <Grid.Column style={{ maxWidth: 1000 }}>
                     {header()}
                     
                     <Route path="/dashboard" exact component={Dashboard} />
                     
                     <MatchesHeader />
                  </Grid.Column>
                  </Grid>
            </Container>
         </Switch>
      </Router>
   );
}
         
export default App;