import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

// import uuid from 'uuid';
// import { connect } from 'react-redux';

class LoginForm extends Component {
    render() {
        console.log("containers/LoginForm")
        return (
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input 
                                fluid icon='user' 
                                iconPosition='left' 
                                placeholder='Username' 
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='e-mail'
                                type='e-mail'
                            />
                            <Button color='blue' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Ready to improve? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginForm

