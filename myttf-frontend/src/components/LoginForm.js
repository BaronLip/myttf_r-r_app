import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm, login } from '../actions/LoginFormActions';
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

	console.log(player);

	fetch('http://localhost:3000/api/v1/login', { player }, { credentials: 'include' })
		.then((response) => {
			if (response.formData.logged_in) {
				this.props.handleLogin(response.data);
				this.redirect();
			} else {
				this.setState({
					errors: response.data.errors
				});
			}
		})
		.catch((error) => console.log('api errors:', error));

	const redirect = () => {
		this.props.history.push('/');
	};
};

// Props are passed into a functional component as argument objects.
// They can be passed in as "props". And values are extracted through props, ie: props.username.
// Or be destructured and just use the key to represent the value.
const Login = ({ username, email, password }) => {
	// class Login extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {
	//         username: "",
	//         email: "",
	//         password: "",
	//         errors: ""
	//     }
	// };
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

export default connect(mapStateToProps, { updateLoginForm })(Login);
