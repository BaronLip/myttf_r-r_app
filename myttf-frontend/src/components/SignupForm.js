import React, { Component } from 'react';
import {
    Header,
    Form,
} from 'semantic-ui-react'

class SignupForm extends Component {
    // state = {
    // }

    // componentDidMount() {
    //     fetch(`http://localhost:3000/api/v1/matches/${this.props.match.params.id}`)
    //         .then(response => response.json())
    //         .then(matchData => this.setState(
    //             { ...matchData }
    //         ))
    //         .catch(error => console.log(error))
    // }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleChecked = ({ value }) => this.setState({ match_type: value })

    handleSubmit = (event) => {
        console.log("Submitting Signup.", this.state)
        event.preventDefault();
        this.props.addPlayer(this.state);
        // Resets the form below.
        this.setState({
            username: "",
            email: "",
            password: ""
        });
    }

    render() {
        console.log("SignupForm.js", this.state, this.props)

        return (
            <Form onSubmit={this.handleSubmit}>
                <Header as='h3' block textAlign='center' color='blue'>
                    Sign Up
                </Header>
                
                <Form.Field widths='equal'>
                    <Form.Input label='Create a Username' type='username' name="username" onChange={this.handleOnChange} />
                </Form.Field>

                <Form.Field widths='equal'>
                    <Form.Input label='Enter E-mail' type='email' name="email" onChange={this.handleOnChange} />
                </Form.Field>
                
                <Form.Field widths='equal'>
                    <Form.Input label='Enter Password' type='password' name="password" onChange={this.handleOnChange} />
                </Form.Field>
                
                <Form.Button content='Signup' />
            </Form>
        )
    }
}

export default (SignupForm)