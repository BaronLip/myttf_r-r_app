import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm} from '../actions/LoginFormActions';
// import { Link } from 'react-router-dom';

const handleChange = (event) => {
	const { name, value } = event.target;
	const updatedFormInfo = {
		name,
		value
	};
	updateLoginForm(updatedFormInfo);
};

const handleSubmit = (e) => {
	e.preventDefault();

	let username = e.target[0].value;
	let email = e.target[1].value;
	let password = e.target[2].value;

	let player = {
		username: username,
		email: email,
		password: password
	};

    fetch('http://localhost:3000/api/v1/login', { 
		method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player),
        credentials: 'include'
	})
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		console.log(json);
		console.log(this.props)
		if (json.logged_in) {
			this.props.handleLogin(json.player);
			this.redirect();
		} else {
			this.setState({
				errors: json.data.errors
			});
		}
	})
	.catch((error) => console.log('api errors:', error))

	const redirect = () => {
		this.props.history.push('/')
	}
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

export default connect(mapStateToProps, { updateLoginForm })(LoginForm);
