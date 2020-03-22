import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import './App.css';

import header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './containers/PlayerContainer';
import EditMatchContainer from './containers/EditMatchContainer';
import AboutContainer from './containers/AboutContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			player: {}
		};
	}

	componentDidMount() {
		this.loginStatus()
	}

	handleLogin = (data) => {
		this.setState({
			isLoggedIn: true,
			player: data.player
		})
	}

	handleLogout = () => {
		this.setState({
			isLoggedIn: false,
			player: {}
		})
	}

	loginStatus = () => {
		fetch('http://localhost:3000/api/v1/logged_in', {
			credentials: "include"
		})
		.then( response => {
			if (response.data.logged_in) {
				this.handleLogin(response)
			} else {
				this.handleLogout()
			}
		})
		.catch(error => console.log("api errors", error))
	}

	render () {
		return (
			<Router>
				<Switch>
					<Container>
						<Grid textAlign="center" style={{ height: '90vh' }} verticalAlign="top">
							<Grid.Column style={{ maxWidth: 1000 }}>
								{header()}

								<Route path="/api/v1/login" exact component={LoginForm} />
								
								<Route path="/api/v1/dashboard" exact component={Dashboard} />
								
								<Route path="/api/v1/players/:id/matches/:id" exact component={EditMatchContainer} />
								
								<Route path="/api/v1/about" exact component={AboutContainer} />
							</Grid.Column>
						</Grid>
					</Container>
				</Switch>
			</Router>
		);
	};
}

export default App;
