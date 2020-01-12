import React, { Component } from 'react';
import AboutPage from '../components/AboutPage';
import { Grid, Segment } from 'semantic-ui-react';

export default class AboutContainer extends Component {
    render() {
        return(
            <Grid
                textAlign='center'
                style={{ height: '90vh' }}
                verticalAlign='top'
            >
                <Grid.Column style={{ maxWidth: 600 }} textAlign='left'>
                    <Segment style={{ height: "60vh" }} >
                        <AboutPage/>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}