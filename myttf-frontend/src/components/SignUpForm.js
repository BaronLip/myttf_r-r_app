import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm, signUp } from "../actions/SignUpFormActions";
import { Link } from 'react-router-dom'

const handleChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
        name,
        value
    }
    updateSignUpForm(updatedFormInfo) 
}

const SignUpForm = ({username, email, password, passwordConfirmation}) => {
    
    return (
        <form onSubmit={signUp}>
            <label>Username:</label> <br/>
            <input name="username" type='text' value={username} onChange={handleChange}/><br/>

            <label>Email:</label><br/>
            <input name="email" label="email" type='text' value={email} onChange={handleChange}/><br/>
            
            <label>Password:</label><br/>
            <input name="password" label="password" type='text' value={password} onChange={handleChange}/><br/>
            
            <label>Password Confirmation:</label><br/>
            <input name="passwordConfirmation" label="password" type='text' value={passwordConfirmation} onChange={handleChange}/><br/>
            
            <input type="submit" value="Sign Up" />

            <div>
                or <button to='/login'>login</button>
            </div>
        </form>
    )
}
 
const mapStateToProps = ({ username, email, password }) => ({ username, email, password });

export default connect(mapStateToProps, { updateSignUpForm })(SignUpForm);
