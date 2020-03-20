import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginForm, login } from "../actions/LoginFormActions";
import { Link } from 'react-router-dom'

const handleChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
        name,
        value
    }
    updateLoginForm(updatedFormInfo) 
}

// Props are passed into a functional component as argument objects.
// They can be passed in as "props". And values are extracted through props, ie: props.username.
// Or be destructured and just use the key to represent the value.
const Login = ({username, email, password}) => {
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

    return (
        <form onSubmit={login}>
            <label>Username:</label> <br/>
            <input name="username" type='text' value={username} onChange={handleChange}/><br/>

            <label>Email:</label><br/>
            <input name="email" label="email" type='text' value={email} onChange={handleChange}/><br/>
            
            <label>Password:</label><br/>
            <input name="password" label="password" type='text' value={password} onChange={handleChange}/><br/>
            <input type="submit" value="log in" />
        </form>
    )
}
 
const mapStateToProps = ({ username, email, password }) => ({ username, email, password });
// //Longhand of mapStateToProps
// const mapStateToProps = (state) => ({
//     username: state.login_form.username,
//     password: state.login_form.password
// })

export default connect(mapStateToProps, { updateLoginForm })(Login);
