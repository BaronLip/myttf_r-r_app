import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/LoginFormActions';
// import { Link } from 'react-router-dom';

let player = {};
const handleChange = (event) => {
	let { name, value } = event.target;
	player[name] = value;
};

const handleSubmit = (e) => {
	e.preventDefault();
	console.log(player);
	
	login(player);
	
	// // *** NO LONGER NEEDED SINCE handleChange() creates the player.
	// let username = e.target[0].value;
	// let email = e.target[1].value;
	// let password = e.target[2].value;

	// let player = {
	// 	username: username,
	// 	email: email,
	// 	password: password
	// };
	// // *** END
}

// Props are passed into a functional component as argument objects.
// They can be passed in as "props". And values are extracted through props, ie: props.username.
// Or be destructured and just use the key to represent the value.
const LoginForm = ({ username, email, password }) => {
	console.log({ username, email, password });
	return (
		<form onSubmit={handleSubmit}>
			<label>Username:</label> <br />
			<input name="username" type="text" value={username} onChange={handleChange} />
			<br />
			<label>Email:</label>
			<br />
			<input name="email" label="email" type="text" value={email} onChange={handleChange} />
			<br />
			<label>Password:</label>
			<br />
			<input name="password" label="password" type="text" value={password} onChange={handleChange} />
			<br />
			<input type="submit" value="log in" />
		</form>
	);
};

const mapStateToProps = ({ username, email, password }) => ({ username, email, password });
// //Longhand of mapStateToProps
// const mapStateToProps = (state) => ({
//     username: state.login_form.username,
//     email: state.login_form.email,
//     password: state.login_form.password
// })

// Connect is "connecting" mapStateToProps and mapDispatchToProps to the Redux store.
// `updateLoginForm` is using a destructured syntax.
export default connect(mapStateToProps, { login })(LoginForm);
// // Longhand of mapDispatchToProps:
// const mapDispatchToProps = (dispatch)  => {
// 	updateLoginForm();
// }
