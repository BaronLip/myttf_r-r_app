// Libraries:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS: 
import './App.css';
// Components:
import Dashboard from './containers/dashboard';
import { Grid } from 'semantic-ui-react';
// Functions:
import header from './components/header'


function App() {
   return (
      <Router>
         <Switch>
            <div className="ui container">
               <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='top'>
                  <Grid.Column style={{ maxWidth: 1000 }}>
                     {header()}
                     
                     <Route path="/dashboard" exact component={Dashboard} />

                  </Grid.Column>
               </Grid>
            </div>
         </Switch>
      </Router>
   );
}
         
export default App;