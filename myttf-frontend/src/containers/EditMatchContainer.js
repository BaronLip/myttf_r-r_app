import React, { Component } from 'react';
import EditMatchForm from '../components/EditMatchForm'
// import { connect } from "react-redux";
import { Grid, } from 'semantic-ui-react';

export default class editMatchContainer extends Component {
    
    render() {
        console.log("You've reached EditMatchContainer.", this.props)
        return(
            <Grid
                textAlign='center'
                style={{ height: '90vh' }}
                verticalAlign='top'
            >
                <Grid.Column style={{ maxWidth: 600 }}>
                    <EditMatchForm />
                </Grid.Column>
            </Grid>

        )
    }
}



