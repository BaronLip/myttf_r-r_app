import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpPlayer } from "../actions/SignUpFormActions";
import { Link, withRouter } from 'react-router-dom'

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			email: '',
			password: '',
			password_confirmation: '',
			errors: ''
		};
	}
	
	handleChange = (event) => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
        });
        console.log(this.state)
	};
	
	handleSubmit = (event) => {
		event.preventDefault();
		const {username, email, password, password_confirmation} = this.state;

		let playerInfo = {
			username: username,
			email: email,
			password: password,
			password_confirmation: password_confirmation
		};
		console.log("This is form playerInfo", playerInfo);
		this.props.signUpPlayer(playerInfo, this.props.history);
	};
	
	handleErrors = () => {
		return (
		<div>
			<ul>{this.state.errors.map( (error) => {
				return <li key={error}>{error}</li>
			})}
			</ul>
			<Link to='/login'>Log In</Link>
		</div>
		)
	}
	
	render() {
		const {username, email, password, password_confirmation} = this.state;
		// console.log(this.props);
		// console.log(this.state);
		return (
			<div>
				<h1>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
                    <label>Username:</label> <br/>
					<input
						placeholder="username"
						type="text"
						name="username"
						value={username}
						onChange={this.handleChange}
					/>
					<br/>
					<br/>
                    <label>Email:</label><br/>
					<input
						placeholder="email"
						type="text"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>
					<br/>
					<br/>
                    <label>Password:</label><br/>
					<input 
						placeholder="password"
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
					/>
					<br/>
					<br/>
                    <label>Password Confirmation:</label><br/>
					<input
						placeholder="password confirmation"
						type="password"
						name="password_confirmation"
						value={password_confirmation}
						onChange={this.handleChange}
					/>
					<br/>
					<br/>
                    <input type="submit" value="Sign-Up" />
					{/* <button placeholder="submit" type="submit">
						Sign Up
					</button> */}
				</form>

				<div>
				{ this.state.errors ? this.handleErrors() : null }
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		session: state.session,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		signUpPlayer: (playerInfo, history) => dispatch(signUpPlayer(playerInfo, history)),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm))



// // Prior code --------------------------------------------------------------
// const SignUpForm = ({username, email, password, passwordConfirmation}) => {
    
//     return (
//         <form onSubmit={signUp}>
//             <label>Username:</label> <br/>
//             <input name="username" type='text' value={username} onChange={handleChange}/><br/>

//             <label>Email:</label><br/>
//             <input name="email" label="email" type='text' value={email} onChange={handleChange}/><br/>
            
//             <label>Password:</label><br/>
//             <input name="password" label="password" type='text' value={password} onChange={handleChange}/><br/>
            
//             <label>Password Confirmation:</label><br/>
//             <input name="passwordConfirmation" label="password" type='text' value={passwordConfirmation} onChange={handleChange}/><br/>
            
//             <input type="submit" value="Sign Up" />

//             <div>
//                 or <button to='/login'>login</button>
//             </div>
//         </form>
//     )
// }
 
// const mapStateToProps = ({ username, email, password }) => ({ username, email, password });

// export default connect(mapStateToProps, { updateSignUpForm })(SignUpForm);
