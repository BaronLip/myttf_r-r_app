// External imports:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local imports:
import { login } from '../actions/LoginFormActions';
import { store } from '../store'
// Import store so that global state can be checked using the .getState() method. See line 53.

let formInfo = {};

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			email: '',
			password: '',
			errors: ''
		};
	}

	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
		})
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {username, email, password} = this.state;

		formInfo = {
			username: username,
			email: email,
			password: password
		};

		this.props.login(formInfo, this.props.history);
	};

	handleErrors = () => {
		return (
		<div>
			<ul>
				{this.props.errors.map(error => {
					return <li key={error}>{error}</li>
				})}
			</ul>
		</div>
		)
	}

	render() {
		console.log("rendering LoginForm & global state", store.getState())
		console.log(this.props)
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Username:</label> <br />
					<input name="username" type="text" onChange={this.handleChange} />
					<br />
					<label>Email:</label>
					<br />
					<input name="email" label="email" type="text" onChange={this.handleChange} />
					<br />
					<label>Password:</label>
					<br />
					<input name="password" label="password" type="text" onChange={this.handleChange} />
					<br />
					<input type="submit" value="log in" />
				</form>
				<div>
					{ this.props.errors ? this.handleErrors() : null }
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		isLoggedIn: state.login.isLoggedIn,
		player: state.player,
		errors: state.login.errors,
	}
}

// // Longhand of mapDispatchToProps:
const mapDispatchToProps = (dispatch)  => {
	return {
		login: (playerInfo, history) => (dispatch(login(playerInfo, history))),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
