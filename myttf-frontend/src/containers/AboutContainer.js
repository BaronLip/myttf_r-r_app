// import React, { Component } from 'react';
import React from 'react';
import AboutPage from '../components/AboutPage';
import { Grid, Segment } from 'semantic-ui-react';

// This is not currently a stateful container but there's future possibility/intent with subscription e-mail.


// Converted to functional container from class container.
// export default class AboutContainer extends Component {
const AboutContainer = () => {

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

export default AboutContainer

