// External imports:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local imports:
import { login } from '../actions/LoginFormActions';

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

	handleErrors = (errors) => {
		debugger;
		// event.preventDefault();
		errors.map( error  => {
			return <p>{error}</p>
		})
	}

	render() {
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
				{ this.state.errors ? this.handleErrors(this.state.errors) : null };
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		session: state.session,
		user: state.user
	}
}

// // Longhand of mapDispatchToProps:
const mapDispatchToProps = (dispatch)  => {
	return {
		login: (playerInfo, history) => (dispatch(login(playerInfo, history))),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));

// Prior code, that probably needs to be deleted. -----
// const mapStateToProps = ({ username, email, password }) => ({ username, email, password });
// //Longhand of mapStateToProps
// const mapStateToProps = (state) => ({
//     username: state.login_form.username,
//     email: state.login_form.email,
//     password: state.login_form.password
// })

// Connect is "connecting" mapStateToProps and mapDispatchToProps to the Redux store.
// // Connect statement with destructured syntax for mapDispatchToProps:
// export default connect(null, { login })(LoginForm);