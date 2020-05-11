import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/LoginFormActions';
// import { Link } from 'react-router-dom';

class LoginForm extends Component {
	
	render() {
		let player = {};
		
		const handleChange = (event) => {
			let { name, value } = event.target;
			player[name] = value;
			console.log(player)
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			console.log(player);
			
			let username = e.target[0].value;
			let email = e.target[1].value;
			let password = e.target[2].value;
	
			player = {
				username: username,
				email: email,
				password: password
			};

			login(player);
		}

		return (
			<form onSubmit={handleSubmit}>
				<label>Username:</label> <br />
				<input name="username" type="text" onChange={handleChange} />
				<br />
				<label>Email:</label>
				<br />
				<input name="email" label="email" type="text" onChange={handleChange} />
				<br />
				<label>Password:</label>
				<br />
				<input name="password" label="password" type="text" onChange={handleChange} />
				<br />
				<input type="submit" value="log in" />
			</form>
		);
	}
};

const mapStateToProps = ({ username, email, password }) => ({ username, email, password });
// //Longhand of mapStateToProps
// const mapStateToProps = (state) => ({
//     username: state.login_form.username,
//     email: state.login_form.email,
//     password: state.login_form.password
// })

// Connect is "connecting" mapStateToProps and mapDispatchToProps to the Redux store.
// // Connect statement with destructured syntax for mapDispatchToProps:
export default connect(null, { login })(LoginForm);

// // Longhand of mapDispatchToProps:
// const mapDispatchToProps = (dispatch)  => {
// 	return {
// 		login: (player) => dispatch(login(player))
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);