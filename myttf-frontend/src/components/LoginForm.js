import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm, login } from "../actions/LoginFormActions";

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
const Login = ({username, password, updateLoginForm }) => {
    return (
        <form onSubmit={login}>
            <label>Username:</label> <br/>
            <input name="username" type='text' value={username} onChange={handleChange}/><br/>

            <label>Password:</label><br/>
            <input name="password" label="password" type='text' value={password} onChange={handleChange}/><br/>
            <input type="submit" value="log in" />
        </form>
    )
}
 
const mapStateToProps = ({ username, password }) => ({ username, password });
// Longhand of mapStateToProps
// const mapStateToProps = (state) => ({
//     username: state.login_form.username,
//     password: state.login_form.password
// })

export default connect(mapStateToProps, { updateLoginForm })(Login);
