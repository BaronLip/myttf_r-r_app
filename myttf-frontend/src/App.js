import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import './App.css';

import header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './containers/PlayerContainer';
import EditMatchContainer from './containers/EditMatchContainer';
import AboutContainer from './containers/AboutContainer';

function App() {
	// console.log('App.js');
	return (
		<Router>
			<Switch>
				<Container>
					<Grid textAlign="center" style={{ height: '90vh' }} verticalAlign="top">
						<Grid.Column style={{ maxWidth: 1000 }}>
							{header()}

							<Route path="/login" exact component={LoginForm} />
							<Route path="/dashboard" exact component={Dashboard} />
							<Route path="/api/v1/players/:id/matches/:id" exact component={EditMatchContainer} />
							<Route path="/about" exact component={AboutContainer} />
						</Grid.Column>
					</Grid>
				</Container>
			</Switch>
		</Router>
	);
}

export default App;
