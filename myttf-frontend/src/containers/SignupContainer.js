import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Segment } from 'semantic-ui-react';
import SignupForm from "../components/SignupForm";
import { addPlayer } from "../actions/PlayerActions";

class SignupContainer extends Component {
    render() {
        console.log("You've reached SignupContainer.", this.props)
        return (
            <Grid
                textAlign='center'
                style={{ height: '90vh' }}
                verticalAlign='top'
            >
                <Grid.Column style={{ maxWidth: 400 }} textAlign='left'>
                    <Segment style={{ height: "30vh" }} >
                        <SignupForm
                            addPlayer={this.props.addPlayer}
                        />
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (player) => dispatch(addPlayer(player))
    }
}

export default connect(null, mapDispatchToProps)(SignupContainer);